import { redirect } from "next/navigation"
import { NewGenerationDemo } from "@/components/dashboard/NewGenerationDemo"
import { getGenerationRunForUser } from "@/lib/db/generation-runs"
import { createSupabaseServerClient } from "@/lib/supabase/server"

type DashboardNewPageProps = {
  searchParams?: Promise<{
    generationId?: string
  }>
}

export default async function DashboardNewPage({ searchParams }: DashboardNewPageProps) {
  const supabase = await createSupabaseServerClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect("/login?next=/dashboard/new")
  }

  const params = searchParams ? await searchParams : undefined
  const generationId = params?.generationId?.trim()

  let initialResult = null
  let initialError: string | null = null

  if (generationId) {
    const saved = await getGenerationRunForUser(user.id, generationId)
    if (!saved || saved.outputs.length === 0) {
      initialError = "Could not load this saved result. It may no longer exist."
    } else {
      initialResult = {
        url: saved.videoUrl || saved.inputUrl,
        videoId: saved.videoId,
        title: saved.videoTitle,
        channel: saved.videoChannel,
        transcriptText: saved.transcriptText,
        transcriptWordCount: saved.transcriptWordCount,
        transcriptSegmentsCount: saved.transcriptSegmentsCount,
        outputs: saved.outputs
          .map((output) => ({
            title: String(output.title ?? "").trim(),
            sample: String(output.content ?? "").trim(),
          }))
          .filter((output) => output.title.length > 0 && output.sample.length > 0),
      }

      if (initialResult.outputs.length === 0) {
        initialResult = null
        initialError = "Could not load this saved result. It has no output content."
      }
    }
  }

  return (
    <NewGenerationDemo initialResult={initialResult} initialError={initialError} />
  )
}
