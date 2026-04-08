import { NextResponse } from "next/server"
import { generateAllOutputs } from "@/lib/ai/generate"
import { saveGenerationRun } from "@/lib/db/generation-runs"
import { createSupabaseServerClient } from "@/lib/supabase/server"
import { fetchTranscriptForUrl, TranscriptFetchError } from "@/lib/transcript/fetch-transcript"

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

  if (!normalizedUrl) {
    return NextResponse.json(
      {
        error: {
          code: "INVALID_INPUT",
          message: "A YouTube URL is required.",
        },
      },
      { status: 400 }
    )
  }

  try {
    const transcriptData = await fetchTranscriptForUrl(normalizedUrl)

    const generated = await generateAllOutputs({
      videoTitle: transcriptData.video.title,
      videoUrl: transcriptData.video.url,
      transcriptText: transcriptData.transcript.text,
    })

    const generationId = await saveGenerationRun({
      userId: user.id,
      inputUrl: normalizedUrl,
      transcriptData,
      outputs: generated.outputs,
      provider: generated.provider,
      model: generated.model,
    })

    return NextResponse.json(
      {
        data: {
          video: transcriptData.video,
          transcript: transcriptData.transcript,
          outputs: generated.outputs,
        },
        meta: {
          ...transcriptData.meta,
          provider: generated.provider,
          model: generated.model,
          generationId,
        },
      },
      { status: 200 }
    )
  } catch (error) {
    if (error instanceof TranscriptFetchError) {
      return NextResponse.json(
        {
          error: {
            code: error.code,
            message: error.message,
          },
        },
        { status: error.status }
      )
    }

    console.error("[generate] provider error", error)
    return NextResponse.json(
      {
        error: {
          code: "GENERATION_OR_STORAGE_FAILED",
          message: "Could not generate or save outputs right now. Please try again.",
        },
      },
      { status: 500 }
    )
  }
}
