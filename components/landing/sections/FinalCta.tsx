import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import type { ReactNode } from "react"

interface FinalCtaProps {
  headline: ReactNode
  subheadline?: string
  ctaLabel?: string
  ctaHref?: string
}

export function FinalCta({
  headline,
  subheadline = "Join thousands of creators who spend less time writing and more time creating.",
  ctaLabel = "Get Started Free — No credit card needed",
  ctaHref = "/signup",
}: FinalCtaProps) {
  return (
    <section className="relative overflow-hidden bg-stone-950 py-28">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
        <div className="size-[600px] rounded-full bg-amber-500/6 blur-[100px]" />
      </div>
      <div className="relative mx-auto max-w-2xl px-4 text-center sm:px-6">
        <h2 className="font-heading mb-4 text-[clamp(1.25rem,6.25vw,3rem)] font-extrabold leading-[1.15] tracking-tight text-stone-50 text-pretty [&>br]:hidden sm:[&>br]:block">
          {headline}
        </h2>
        <p className="mb-10 text-lg text-stone-400">{subheadline}</p>
        <Button
          asChild
          className="h-12 bg-amber-500 px-8 text-base font-bold text-stone-950 hover:bg-amber-400"
        >
          <Link href={ctaHref}>
            {ctaLabel}
            <ArrowRight className="ml-2 size-4" />
          </Link>
        </Button>
      </div>
    </section>
  )
}
