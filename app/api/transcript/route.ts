import { NextResponse } from "next/server"
import { YoutubeTranscript } from "youtube-transcript"
import { createSupabaseServerClient } from "@/lib/supabase/server"

type TranscriptSegment = {
  text: string
  offset?: number
  duration?: number
}

function isYouTubeUrl(value: string) {
  try {
    const url = new URL(value)
    const host = url.hostname.replace("www.", "")
    return host === "youtube.com" || host === "youtu.be" || host.endsWith(".youtube.com")
  } catch {
    return false
  }
}

function extractVideoId(value: string) {
  try {
    const url = new URL(value)
    const host = url.hostname.replace("www.", "")

    if (host === "youtu.be") {
      return url.pathname.slice(1).split("/")[0] || null
    }

    if (host === "youtube.com" || host.endsWith(".youtube.com")) {
      const watchId = url.searchParams.get("v")
      if (watchId) return watchId

      const segments = url.pathname.split("/").filter(Boolean)
      const shortsIndex = segments.indexOf("shorts")
      if (shortsIndex >= 0 && segments[shortsIndex + 1]) return segments[shortsIndex + 1]

      const embedIndex = segments.indexOf("embed")
      if (embedIndex >= 0 && segments[embedIndex + 1]) return segments[embedIndex + 1]
    }

    return null
  } catch {
    return null
  }
}

async function fetchVideoMetadata(videoUrl: string, fallbackVideoId: string) {
  try {
    const oembedUrl = new URL("https://www.youtube.com/oembed")
    oembedUrl.searchParams.set("url", videoUrl)
    oembedUrl.searchParams.set("format", "json")

    const response = await fetch(oembedUrl.toString(), {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
      cache: "no-store",
    })

    if (!response.ok) {
      return {
        title: "YouTube Video",
        channel: "YouTube",
        thumbnailUrl: `https://i.ytimg.com/vi/${fallbackVideoId}/hqdefault.jpg`,
      }
    }

    const payload = (await response.json()) as {
      title?: string
      author_name?: string
      thumbnail_url?: string
    }

    return {
      title: payload.title ?? "YouTube Video",
      channel: payload.author_name ?? "YouTube",
      thumbnailUrl: payload.thumbnail_url ?? `https://i.ytimg.com/vi/${fallbackVideoId}/hqdefault.jpg`,
    }
  } catch {
    return {
      title: "YouTube Video",
      channel: "YouTube",
      thumbnailUrl: `https://i.ytimg.com/vi/${fallbackVideoId}/hqdefault.jpg`,
    }
  }
}

export async function POST(request: Request) {
  const supabase = await createSupabaseServerClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    return NextResponse.json(
      { error: { code: "UNAUTHENTICATED", message: "Please log in to continue." } },
      { status: 401 }
    )
  }

  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json(
      { error: { code: "BAD_REQUEST", message: "Invalid request body." } },
      { status: 400 }
    )
  }

  const { url } = body as Record<string, unknown>
  const normalizedUrl = typeof url === "string" ? url.trim() : ""

  if (!normalizedUrl || !isYouTubeUrl(normalizedUrl)) {
    return NextResponse.json(
      { error: { code: "INVALID_URL", message: "Please enter a valid YouTube URL." } },
      { status: 400 }
    )
  }

  const videoId = extractVideoId(normalizedUrl)
  if (!videoId) {
    return NextResponse.json(
      { error: { code: "INVALID_URL", message: "Could not detect a valid YouTube video id." } },
      { status: 422 }
    )
  }

  let segments: TranscriptSegment[]
  try {
    segments = await YoutubeTranscript.fetchTranscript(videoId)
  } catch (error) {
    console.error("[transcript] fetch error", error)
    return NextResponse.json(
      {
        error: {
          code: "TRANSCRIPT_UNAVAILABLE",
          message: "Transcript is unavailable for this video (captions may be disabled or private).",
        },
      },
      { status: 422 }
    )
  }

  const normalizedSegments = segments
    .map((segment) => ({
      text: String(segment.text ?? "").trim(),
      offset: typeof segment.offset === "number" ? segment.offset : undefined,
      duration: typeof segment.duration === "number" ? segment.duration : undefined,
    }))
    .filter((segment) => segment.text.length > 0)

  if (normalizedSegments.length === 0) {
    return NextResponse.json(
      { error: { code: "TRANSCRIPT_EMPTY", message: "Transcript was found but contains no readable text." } },
      { status: 422 }
    )
  }

  const transcriptText = normalizedSegments.map((segment) => segment.text).join(" ")
  const metadata = await fetchVideoMetadata(normalizedUrl, videoId)

  return NextResponse.json(
    {
      data: {
        video: {
          id: videoId,
          url: normalizedUrl,
          title: metadata.title,
          channel: metadata.channel,
          thumbnailUrl: metadata.thumbnailUrl,
        },
        transcript: {
          text: transcriptText,
          segments: normalizedSegments,
          wordCount: transcriptText.split(/\s+/).filter(Boolean).length,
        },
      },
      meta: {
        segmentsCount: normalizedSegments.length,
      },
    },
    { status: 200 }
  )
}
