import { HOW_IT_WORKS_STEPS } from "@/lib/landing-data"
import type { Step } from "@/lib/landing-data"

interface HowItWorksProps {
  headline?: string
  subheadline?: string
  steps?: Step[]
}

export function HowItWorks({
  headline = "From URL to published content in 60 seconds",
  subheadline = "Three steps. No file uploads. No prep work.",
  steps = HOW_IT_WORKS_STEPS,
}: HowItWorksProps) {
  return (
    <section id="how-it-works" className="bg-stone-50 py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="mb-14 text-center">
          <h2 className="font-heading mb-4 text-2xl font-extrabold tracking-tight text-stone-900 text-pretty sm:text-4xl">
            {headline}
          </h2>
          <p className="text-stone-500">{subheadline}</p>
        </div>

        <div className="grid gap-10 sm:grid-cols-3">
          {steps.map((step) => (
            <div key={step.n} className="flex flex-col">
              <span className="font-heading mb-5 text-6xl font-extrabold leading-none tracking-tight text-amber-400/20">
                {step.n}
              </span>
              <h3 className="font-heading mb-2 text-lg font-bold text-stone-900">{step.title}</h3>
              <p className="text-sm leading-relaxed text-stone-500">{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
