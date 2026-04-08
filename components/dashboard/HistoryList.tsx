import { Clock3, ExternalLink, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

type HistoryItem = {
  id: string
  title: string
  date: string
}

const MOCK_HISTORY: HistoryItem[] = [
  { id: "1", title: "How to Build a YouTube Growth System", date: "Apr 8, 2026" },
  { id: "2", title: "From Video to Newsletter in 10 Minutes", date: "Apr 7, 2026" },
  { id: "3", title: "Content Repurposing Framework for Solo Creators", date: "Apr 6, 2026" },
  { id: "4", title: "YouTube SEO: Title and Description Playbook", date: "Apr 5, 2026" },
  { id: "5", title: "Shorts Script Hooks That Actually Retain Viewers", date: "Apr 4, 2026" },
]

type HistoryListProps = {
  compact?: boolean
}

export function HistoryList({ compact = false }: HistoryListProps) {
  const items = compact ? MOCK_HISTORY.slice(0, 3) : MOCK_HISTORY

  return (
    <Card className="border-stone-800 bg-stone-900/80 text-stone-100">
      <CardHeader className="space-y-1">
        <CardTitle className="text-lg">Recent history</CardTitle>
        <CardDescription className="text-stone-400">
          Placeholder list of the latest processed videos (MVP target: last 10).
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex flex-col gap-3 rounded-lg border border-stone-800 bg-stone-950/65 p-3 sm:flex-row sm:items-center sm:justify-between"
          >
            <div className="flex min-w-0 items-start gap-3">
              <div className="mt-0.5 h-12 w-20 shrink-0 rounded-md border border-stone-800 bg-stone-900" />
              <div className="min-w-0">
                <p className="truncate text-sm text-stone-100">{item.title}</p>
                <p className="mt-1 flex items-center gap-1 text-xs text-stone-500">
                  <Clock3 className="size-3.5" />
                  {item.date}
                </p>
              </div>
            </div>
            <div className="flex gap-2 sm:justify-end">
              <Button
                size="sm"
                variant="outline"
                className="border-stone-700 bg-stone-900 text-xs text-stone-100 hover:bg-stone-800 hover:text-stone-100"
              >
                <ExternalLink className="size-3.5" />
                Open
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="border-stone-700 bg-stone-900 text-xs text-stone-100 hover:bg-stone-800 hover:text-stone-100"
              >
                <Trash2 className="size-3.5" />
                Delete
              </Button>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
