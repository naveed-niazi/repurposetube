import { SingleFormatHero, type SingleFormatHeroProps } from "@/components/landing/sections/SingleFormatHero"
import { ComparisonTable, type ComparisonFeature } from "@/components/landing/sections/ComparisonTable"
import { DifferentiatorGrid } from "@/components/landing/sections/DifferentiatorGrid"
import { OutputFormatsGrid } from "@/components/landing/sections/OutputFormatsGrid"
import { AlsoCompare } from "@/components/landing/sections/AlsoCompare"
import { FaqSection } from "@/components/landing/sections/FaqSection"
import { FinalCta } from "@/components/landing/sections/FinalCta"
import type { FaqItem } from "@/lib/landing-data"
import type { ReactNode } from "react"

interface ComparisonPageShellProps {
  hero: SingleFormatHeroProps
  competitorName: string
  /** Slug identifying the current competitor — used to exclude from AlsoCompare */
  currentSlug: "castmagic" | "repurpose-io" | "autorepurpose"
  comparisonHeadline?: string
  features: ComparisonFeature[]
  faqItems: FaqItem[]
  finalCtaHeadline: ReactNode
}

export function ComparisonPageShell({
  hero,
  competitorName,
  currentSlug,
  comparisonHeadline,
  features,
  faqItems,
  finalCtaHeadline,
}: ComparisonPageShellProps) {
  return (
    <>
      <SingleFormatHero {...hero} />
      <ComparisonTable
        competitorName={competitorName}
        headline={comparisonHeadline}
        features={features}
      />
      <DifferentiatorGrid />
      <OutputFormatsGrid withLinks />
      <AlsoCompare currentSlug={currentSlug} />
      <FaqSection items={faqItems} />
      <FinalCta headline={finalCtaHeadline} />
    </>
  )
}
