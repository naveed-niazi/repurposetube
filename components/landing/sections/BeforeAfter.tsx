import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check, X, ArrowRight } from "lucide-react"
import { BEFORE_AFTER_ROWS } from "@/lib/landing-data"
import type { BeforeAfterRow } from "@/lib/landing-data"

interface BeforeAfterProps {
  headline?: string
  subheadline?: string
  rows?: BeforeAfterRow[]
  totalBefore?: string
  ctaHref?: string
  ctaLabel?: string
}

export function BeforeAfter({
  headline = "Stop spending 5 hours doing what takes 60 seconds",
  subheadline = "Every video you make is already worth 6 pieces of content. You just need to stop writing them manually.",
  rows = BEFORE_AFTER_ROWS,
  totalBefore = "~5 hours",
  ctaHref = "/waitlist",
  ctaLabel = "Start Saving Time Now",
}: BeforeAfterProps) {
  return (
    <section className="bg-stone-950 py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <h2 className="font-heading mb-4 text-2xl font-extrabold tracking-tight text-stone-50 text-pretty sm:text-4xl">
            {headline}
          </h2>
          <p className="text-stone-400">{subheadline}</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {/* Without */}
          <div className="rounded-2xl border border-stone-800 bg-stone-900 p-6 sm:p-8">
            <div className="mb-6 flex items-center gap-2">
              <div className="flex size-6 items-center justify-center rounded-full bg-stone-700">
                <X className="size-3 text-stone-400" />
              </div>
              <span className="font-heading text-xs font-bold uppercase tracking-widest text-stone-500">
                The old way
              </span>
            </div>
            <div className="space-y-4">
              {rows.map((row) => (
                <div key={row.task} className="flex items-center justify-between gap-4">
                  <span className="text-sm text-stone-300">{row.task}</span>
                  <span className="shrink-0 text-sm font-medium text-stone-500">{row.time}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 flex items-center justify-between border-t border-stone-800 pt-5">
              <span className="font-heading text-sm font-bold text-stone-400">Total per video</span>
              <span className="font-heading text-xl font-extrabold text-red-400">{totalBefore}</span>
            </div>
          </div>

          {/* With RepurposeTube */}
          <div className="rounded-2xl border border-amber-500/30 bg-amber-500/[0.07] p-6 sm:p-8">
            <div className="mb-6 flex items-center gap-2">
              <div className="flex size-6 items-center justify-center rounded-full bg-amber-500/20">
                <Check className="size-3 text-amber-400" />
              </div>
              <span className="font-heading text-xs font-bold uppercase tracking-widest text-amber-500">
                With RepurposeTube
              </span>
            </div>
            <div className="space-y-4">
              {rows.map((row) => (
                <div key={row.task} className="flex items-center justify-between gap-4">
                  <span className="text-sm text-stone-300">{row.task}</span>
                  <span className="flex shrink-0 items-center gap-1.5 text-sm font-medium text-amber-400">
                    <Check className="size-3" /> Included
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-6 flex items-center justify-between border-t border-amber-500/20 pt-5">
              <span className="font-heading text-sm font-bold text-stone-400">Total per video</span>
              <span className="font-heading text-xl font-extrabold text-amber-400">~60 seconds</span>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Button asChild className="h-11 bg-amber-500 px-7 font-semibold text-stone-950 hover:bg-amber-400">
            <Link href={ctaHref}>
              {ctaLabel} <ArrowRight className="ml-2 size-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
