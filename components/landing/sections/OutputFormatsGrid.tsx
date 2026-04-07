import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { OUTPUT_FORMATS } from "@/lib/landing-data"
import type { OutputFormat } from "@/lib/landing-data"
import { cn } from "@/lib/utils"

interface OutputFormatsGridProps {
  headline?: string
  subheadline?: string
  formats?: OutputFormat[]
  /** Slug of the card to highlight with an amber border — used on feature pages */
  highlightSlug?: string
  /** Show links on cards to their feature pages */
  withLinks?: boolean
}

export function OutputFormatsGrid({
  headline = "Everything you need to publish everywhere",
  subheadline = "One video in. Six polished pieces out. Stop creating from scratch.",
  formats = OUTPUT_FORMATS,
  highlightSlug,
  withLinks = false,
}: OutputFormatsGridProps) {
  return (
    <section id="outputs" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-14 text-center">
          <h2 className="font-heading mb-4 text-3xl font-extrabold tracking-tight text-stone-900 sm:text-4xl lg:text-5xl">
            {headline}
          </h2>
          <p className="mx-auto max-w-xl text-base text-stone-500 sm:text-lg">{subheadline}</p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {formats.map((f) => {
            const Icon = f.icon
            const isHighlighted = highlightSlug === f.slug
            const card = (
              <Card
                className={cn(
                  "group border shadow-none transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-stone-100",
                  isHighlighted
                    ? "border-amber-400 ring-1 ring-amber-400/30"
                    : "border-stone-200"
                )}
              >
                <CardHeader className="pb-3">
                  <div className={`mb-4 inline-flex size-12 items-center justify-center rounded-xl ${f.iconBg}`}>
                    <Icon className={`size-6 ${f.iconColor}`} />
                  </div>
                  <CardTitle className="font-heading text-base font-bold text-stone-900">
                    {f.label}
                    {isHighlighted && (
                      <span className="ml-2 rounded-full bg-amber-100 px-2 py-0.5 text-xs font-semibold text-amber-700">
                        This page
                      </span>
                    )}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed text-stone-500">
                    {f.description}
                  </CardDescription>
                </CardContent>
              </Card>
            )

            if (withLinks && !isHighlighted) {
              return (
                <Link key={f.slug} href={f.href} className="block">
                  {card}
                </Link>
              )
            }
            return <div key={f.slug}>{card}</div>
          })}
        </div>
      </div>
    </section>
  )
}
