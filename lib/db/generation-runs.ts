import type { OutputItem } from "@/lib/ai/types"
import { prisma } from "@/lib/db/prisma"
import type { TranscriptFetchResult } from "@/lib/transcript/fetch-transcript"

type SaveGenerationRunInput = {
  userId: string
  inputUrl: string
  transcriptData: TranscriptFetchResult
  outputs: OutputItem[]
  provider: string
  model: string
}

export async function saveGenerationRun(input: SaveGenerationRunInput) {
  const { transcriptData, userId, inputUrl, outputs, provider, model } = input

  const run = await prisma.generationRun.create({
    data: {
      userId,
      status: "completed",
      inputUrl,
      videoId: transcriptData.video.id,
      videoUrl: transcriptData.video.url,
      videoTitle: transcriptData.video.title,
      videoChannel: transcriptData.video.channel,
      videoThumbnailUrl: transcriptData.video.thumbnailUrl,
      transcriptText: transcriptData.transcript.text,
      transcriptWordCount: transcriptData.transcript.wordCount,
      transcriptSegmentsCount: transcriptData.meta.segmentsCount,
      provider,
      model,
      outputs: {
        create: outputs.map((output) => ({
          type: output.type,
          title: output.title,
          content: output.content,
        })),
      },
    },
    select: {
      id: true,
    },
  })

  return run.id
}

export type GenerationHistoryItem = {
  id: string
  videoTitle: string
  videoChannel: string
  videoUrl: string
  videoThumbnailUrl: string | null
  provider: string
  model: string
  createdAt: Date
}

export type SavedGenerationResult = {
  id: string
  inputUrl: string
  videoId: string
  videoUrl: string
  videoTitle: string
  videoChannel: string
  transcriptText: string
  transcriptWordCount: number
  transcriptSegmentsCount: number
  outputs: Array<{
    type: string
    title: string
    content: string
  }>
}

export type GenerationHistoryPage = {
  items: GenerationHistoryItem[]
  page: number
  perPage: number
  totalItems: number
  totalPages: number
}

export async function listGenerationHistoryPage(
  userId: string,
  params?: {
    page?: number
    perPage?: number
  }
): Promise<GenerationHistoryPage> {
  const requestedPage = Math.max(1, params?.page ?? 1)
  const perPage = Math.max(1, Math.min(params?.perPage ?? 10, 50))

  const where = {
    userId,
    status: "completed" as const,
  }

  const totalItems = await prisma.generationRun.count({ where })

  const totalPages = Math.max(1, Math.ceil(totalItems / perPage))
  const page = Math.min(requestedPage, totalPages)
  const skip = (page - 1) * perPage

  const items = await prisma.generationRun.findMany({
    where,
    orderBy: [{ createdAt: "desc" }, { id: "desc" }],
    skip,
    take: perPage,
    select: {
      id: true,
      videoTitle: true,
      videoChannel: true,
      videoUrl: true,
      videoThumbnailUrl: true,
      provider: true,
      model: true,
      createdAt: true,
    },
  })

  return {
    items,
    page,
    perPage,
    totalItems,
    totalPages,
  }
}

export async function getGenerationRunForUser(
  userId: string,
  generationId: string
): Promise<SavedGenerationResult | null> {
  return prisma.generationRun.findFirst({
    where: {
      id: generationId,
      userId,
      status: "completed",
    },
    select: {
      id: true,
      inputUrl: true,
      videoId: true,
      videoUrl: true,
      videoTitle: true,
      videoChannel: true,
      transcriptText: true,
      transcriptWordCount: true,
      transcriptSegmentsCount: true,
      outputs: {
        orderBy: [{ createdAt: "asc" }, { id: "asc" }],
        select: {
          type: true,
          title: true,
          content: true,
        },
      },
    },
  })
}
