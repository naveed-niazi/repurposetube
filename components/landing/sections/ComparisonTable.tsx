import { Check, X } from "lucide-react"

export interface ComparisonFeature {
  feature: string
  us: boolean | string
  them: boolean | string
}

interface ComparisonTableProps {
  competitorName: string
  headline?: string
  features: ComparisonFeature[]
}

function Cell({ value }: { value: boolean | string }) {
  if (value === true) return <Check className="mx-auto size-5 text-amber-500" />
  if (value === false) return <X className="mx-auto size-5 text-stone-500" />
  return <span className="text-sm text-stone-300">{value}</span>
}

export function ComparisonTable({
  competitorName,
  headline,
  features,
}: ComparisonTableProps) {
  return (
    <section className="bg-stone-950 py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        {headline && (
          <div className="mb-12 text-center">
            <h2 className="font-heading mb-3 text-2xl font-extrabold tracking-tight text-stone-50 text-pretty sm:text-4xl">
              {headline}
            </h2>
          </div>
        )}

        <div className="overflow-hidden rounded-2xl border border-stone-800">
          {/* Header */}
          <div className="grid grid-cols-3 border-b border-stone-800 bg-stone-900 px-6 py-4">
            <div className="text-sm font-semibold text-stone-400">Feature</div>
            <div className="text-center">
              <span className="font-heading text-sm font-bold text-amber-400">RepurposeTube</span>
            </div>
            <div className="text-center">
              <span className="font-heading text-sm font-bold text-stone-500">{competitorName}</span>
            </div>
          </div>

          {/* Rows */}
          {features.map((f, i) => (
            <div
              key={i}
              className="grid grid-cols-3 items-center border-b border-stone-800/60 px-6 py-4 last:border-0 odd:bg-stone-900/40"
            >
              <div className="text-sm text-stone-300">{f.feature}</div>
              <div className="text-center">
                <Cell value={f.us} />
              </div>
              <div className="text-center">
                <Cell value={f.them} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
