import Link from "next/link"
import { CircleAlert, Link2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export function UrlInputSection() {
  return (
    <Card className="border-stone-800 bg-stone-900/80 text-stone-100">
      <CardHeader className="space-y-1">
        <CardTitle className="text-lg">Start with a YouTube URL</CardTitle>
        <CardDescription className="text-stone-400">
          Paste any standard YouTube video link to generate all MVP output formats.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex flex-col gap-2 sm:flex-row">
          <div className="relative flex-1">
            <Link2 className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-stone-500" />
            <Input
              type="url"
              placeholder="https://www.youtube.com/watch?v=..."
              className="h-10 border-stone-700 bg-stone-950/70 pl-9 text-stone-100 placeholder:text-stone-500"
            />
          </div>
          <Button className="h-10 bg-brand-500 font-semibold text-stone-950 hover:bg-brand-400">Generate</Button>
        </div>

        <div className="flex items-start gap-2 rounded-lg border border-stone-800 bg-stone-950/55 px-3 py-2 text-xs text-stone-400">
          <CircleAlert className="mt-0.5 size-3.5 shrink-0 text-brand-400" />
          URL validation and transcript checks are intentionally placeholder-only in this phase.
        </div>

        <p className="text-xs text-stone-500">
          Need examples?{" "}
          <Link href="/dashboard/new" className="text-brand-400 hover:text-brand-300">
            Open the New flow mock
          </Link>
        </p>
      </CardContent>
    </Card>
  )
}
