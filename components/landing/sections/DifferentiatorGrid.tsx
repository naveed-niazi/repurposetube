import { DIFFERENTIATORS } from "@/lib/landing-data"
import type { Differentiator } from "@/lib/landing-data"

interface DifferentiatorGridProps {
  headline?: string
  subheadline?: string
  items?: Differentiator[]
}

export function DifferentiatorGrid({
  headline = "Built specifically for YouTubers",
  subheadline = "Not a podcast tool with YouTube as an afterthought. RepurposeTube is designed from the ground up for video creators.",
  items = DIFFERENTIATORS,
}: DifferentiatorGridProps) {
  return (
    <section id="features" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-14 text-center">
          <h2 className="font-heading mb-4 text-2xl font-extrabold tracking-tight text-stone-900 text-pretty sm:text-4xl">
            {headline}
          </h2>
          {subheadline && (
            <p className="mx-auto max-w-xl text-stone-500">{subheadline}</p>
          )}
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => {
            const Icon = item.icon
            return (
              <div key={item.title} className="flex gap-4">
                <div className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-lg border border-amber-100 bg-amber-50">
                  <Icon className="size-4 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-heading mb-1.5 text-sm font-bold text-stone-900">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-stone-500">{item.body}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
