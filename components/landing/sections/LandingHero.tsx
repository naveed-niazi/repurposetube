import { Badge } from "@/components/ui/badge"
import { Check } from "lucide-react"
import { HeroForm } from "@/components/landing/HeroForm"
import type { ReactNode } from "react"

interface StatItem {
  value: string
  label: string
}

interface LandingHeroProps {
  badge?: string
  headline: ReactNode
  subheadline: string
  stats?: StatItem[]
}

const DEFAULT_STATS: StatItem[] = [
  { value: "6", label: "content formats" },
  { value: "~60s", label: "generation time" },
  { value: "0", label: "file uploads ever" },
]

export function LandingHero({
  badge = "AI Content Repurposing",
  headline,
  subheadline,
  stats = DEFAULT_STATS,
}: LandingHeroProps) {
  return (
    <section className="relative overflow-hidden bg-stone-950 pb-24 pt-24 sm:pt-32">
      {/* Glow */}
      <div className="pointer-events-none absolute inset-0 flex items-start justify-center overflow-hidden">
        <div className="mt-16 size-[700px] rounded-full bg-amber-500/[0.07] blur-[120px]" />
      </div>
      {/* Dot grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage: "radial-gradient(circle, #6b6b5a 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
        <Badge className="mb-6 border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-amber-400">
          {badge}
        </Badge>

        <h1 className="font-heading mb-6 text-[2rem] font-extrabold leading-[1.1] tracking-tight text-stone-50 text-balance [&>br]:hidden sm:text-5xl sm:[&>br]:block lg:text-[3.75rem]">
          {headline}
        </h1>

        <p className="mx-auto mb-10 max-w-xl text-base leading-relaxed text-stone-400 text-pretty sm:text-lg">
          {subheadline}
        </p>

        <HeroForm />

        {/* Stats strip */}
        <div className="mx-auto mt-8 inline-flex flex-wrap items-center justify-center gap-4 rounded-xl border border-stone-800 bg-stone-900/60 px-5 py-3 text-sm text-stone-400 sm:gap-6">
          {stats.map((s) => (
            <span key={s.label} className="flex items-center gap-2">
              <span className="font-heading text-base font-bold text-amber-400 sm:text-lg">{s.value}</span>
              {s.label}
            </span>
          ))}
          <span className="hidden h-4 w-px bg-stone-700 sm:block" />
          <span className="flex items-center gap-2">
            <Check className="size-4 text-amber-400" />
            Free to start
          </span>
        </div>
      </div>
    </section>
  )
}
