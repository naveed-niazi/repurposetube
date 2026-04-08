import { YoutubeTranscript } from "youtube-transcript"

type TranscriptSegment = {
  text: string
  offset?: number
  duration?: number
}

export type TranscriptFetchResult = {
  video: {
    id: string
    url: string
    title: string
    channel: string
    thumbnailUrl: string
  }
  transcript: {
    text: string
    segments: TranscriptSegment[]
    wordCount: number
  }
  meta: {
    segmentsCount: number
  }
}

export class TranscriptFetchError extends Error {
  status: number
  code: string

  constructor(code: string, message: string, status: number) {
    super(message)
    this.name = "TranscriptFetchError"
    this.code = code
    this.status = status
  }
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

export async function fetchTranscriptForUrl(url: string): Promise<TranscriptFetchResult> {
  const normalizedUrl = url.trim()

  if (!normalizedUrl || !isYouTubeUrl(normalizedUrl)) {
    throw new TranscriptFetchError("INVALID_URL", "Please enter a valid YouTube URL.", 400)
  }

  const videoId = extractVideoId(normalizedUrl)
  if (!videoId) {
    throw new TranscriptFetchError("INVALID_URL", "Could not detect a valid YouTube video id.", 422)
  }

  let segments: TranscriptSegment[]
  try {
    segments = await YoutubeTranscript.fetchTranscript(videoId)
  } catch (error) {
    console.error("[transcript] fetch error", error)
    throw new TranscriptFetchError(
      "TRANSCRIPT_UNAVAILABLE",
      "Transcript is unavailable for this video (captions may be disabled or private).",
      422
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
    throw new TranscriptFetchError("TRANSCRIPT_EMPTY", "Transcript was found but contains no readable text.", 422)
  }

  const transcriptText = normalizedSegments.map((segment) => segment.text).join(" ")
  const metadata = await fetchVideoMetadata(normalizedUrl, videoId)

  return {
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
    meta: {
      segmentsCount: normalizedSegments.length,
    },
  }
}
