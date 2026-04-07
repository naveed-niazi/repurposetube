import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import type { ReactNode } from "react"

export interface SingleFormatHeroProps {
  badge: string
  headline: ReactNode
  subheadline: string
  ctaLabel?: string
  ctaHref?: string
}

export function SingleFormatHero({
  badge,
  headline,
  subheadline,
  ctaLabel = "Try It Free",
  ctaHref = "/signup",
}: SingleFormatHeroProps) {
  return (
    <section className="relative overflow-hidden bg-stone-950 pb-20 pt-20 sm:pt-28">
      {/* Glow */}
      <div className="pointer-events-none absolute inset-0 flex items-start justify-center overflow-hidden">
        <div className="mt-10 size-[600px] rounded-full bg-amber-500/[0.07] blur-[100px]" />
      </div>
      {/* Dot grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage: "radial-gradient(circle, #6b6b5a 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
        <Badge className="mb-6 border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-amber-400">
          {badge}
        </Badge>

        <h1 className="font-heading mb-5 text-4xl font-extrabold leading-[1.08] tracking-tight text-stone-50 sm:text-5xl">
          {headline}
        </h1>

        <p className="mx-auto mb-8 max-w-xl text-lg leading-relaxed text-stone-400">
          {subheadline}
        </p>

        <Button
          asChild
          className="h-12 bg-amber-500 px-7 text-base font-bold text-stone-950 hover:bg-amber-400"
        >
          <Link href={ctaHref}>
            {ctaLabel} <ArrowRight className="ml-2 size-4" />
          </Link>
        </Button>

        <p className="mt-4 text-sm text-stone-500">No credit card required</p>
      </div>
    </section>
  )
}
