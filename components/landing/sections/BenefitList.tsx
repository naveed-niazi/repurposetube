import type { ElementType } from "react"

export interface BenefitItem {
  icon: ElementType
  headline: string
  body: string
}

interface BenefitListProps {
  headline: string
  subheadline?: string
  benefits: BenefitItem[]
}

export function BenefitList({ headline, subheadline, benefits }: BenefitListProps) {
  return (
    <section className="bg-stone-50 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-14 text-center">
          <h2 className="font-heading mb-4 text-2xl font-extrabold tracking-tight text-stone-900 text-pretty sm:text-4xl">
            {headline}
          </h2>
          {subheadline && (
            <p className="mx-auto max-w-xl text-stone-500">{subheadline}</p>
          )}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.headline}
                className="rounded-2xl border border-stone-200 bg-white p-6 transition-shadow hover:shadow-md hover:shadow-stone-100"
              >
                <div className="mb-4 inline-flex size-11 items-center justify-center rounded-xl border border-brand-100 bg-brand-50">
                  <Icon className="size-5 text-brand-600" />
                </div>
                <h3 className="font-heading mb-2 text-base font-bold text-stone-900">
                  {item.headline}
                </h3>
                <p className="text-sm leading-relaxed text-stone-500">{item.body}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
