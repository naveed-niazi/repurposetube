import Link from "next/link"
import { Clock3, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import type { GenerationHistoryItem } from "@/lib/db/generation-runs"

type HistoryListProps = {
  items: GenerationHistoryItem[]
  page: number
  totalPages: number
  totalItems: number
  perPage: number
  compact?: boolean
}

function formatHistoryDate(value: Date) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(value)
}

export function HistoryList({ items, compact = false, page, totalPages, totalItems, perPage }: HistoryListProps) {
  const visibleItems = compact ? items.slice(0, 3) : items
  const from = totalItems === 0 ? 0 : (page - 1) * perPage + 1
  const to = Math.min(page * perPage, totalItems)

  return (
    <Card className="border-stone-800 bg-stone-900/80 text-stone-100">
      <CardHeader className="space-y-1">
        <CardTitle className="text-lg">Recent history</CardTitle>
        <CardDescription className="text-stone-400">
          Your latest generated videos and outputs. Showing {from}-{to} of {totalItems}.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        {visibleItems.length === 0 ? (
          <div className="rounded-lg border border-dashed border-stone-800 bg-stone-950/60 p-4 text-sm text-stone-400">
            No history yet. Generate content from a YouTube URL and it will appear here.
          </div>
        ) : (
          visibleItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col gap-3 rounded-lg border border-stone-800 bg-stone-950/65 p-3 sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="flex min-w-0 items-start gap-3">
                <div className="mt-0.5 h-12 w-20 shrink-0 overflow-hidden rounded-md border border-stone-800 bg-stone-900">
                  {item.videoThumbnailUrl ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={item.videoThumbnailUrl}
                      alt={item.videoTitle}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  ) : null}
                </div>
                <div className="min-w-0">
                  <p className="truncate text-sm text-stone-100">{item.videoTitle}</p>
                  <p className="mt-1 truncate text-xs text-stone-500">{item.videoChannel}</p>
                  <p className="mt-1 flex items-center gap-1 text-xs text-stone-500">
                    <Clock3 className="size-3.5" />
                    {formatHistoryDate(item.createdAt)}
                  </p>
                </div>
              </div>
              <div className="flex gap-2 sm:justify-end">
                <Button
                  asChild
                  size="sm"
                  variant="outline"
                  className="border-stone-700 bg-stone-900 text-xs text-stone-100 hover:bg-stone-800 hover:text-stone-100"
                >
                  <Link href={`/dashboard/new?generationId=${item.id}`}>
                    <ExternalLink className="size-3.5" />
                    Open results
                  </Link>
                </Button>
              </div>
            </div>
          ))
        )}
      </CardContent>
    </Card>
  )
}
