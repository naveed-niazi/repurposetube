import { SingleFormatHero, type SingleFormatHeroProps } from "@/components/landing/sections/SingleFormatHero"
import { OutputFormatsGrid } from "@/components/landing/sections/OutputFormatsGrid"
import { HowItWorks } from "@/components/landing/sections/HowItWorks"
import { DifferentiatorGrid } from "@/components/landing/sections/DifferentiatorGrid"
import { RelatedFormats } from "@/components/landing/sections/RelatedFormats"
import { FaqSection } from "@/components/landing/sections/FaqSection"
import { FinalCta } from "@/components/landing/sections/FinalCta"
import type { FaqItem } from "@/lib/landing-data"
import type { ReactNode } from "react"

interface FeaturePageShellProps {
  hero: SingleFormatHeroProps
  faqItems: FaqItem[]
  highlightSlug: string
  finalCtaHeadline: ReactNode
  finalCtaSubheadline?: string
}

export function FeaturePageShell({
  hero,
  faqItems,
  highlightSlug,
  finalCtaHeadline,
  finalCtaSubheadline,
}: FeaturePageShellProps) {
  return (
    <>
      <SingleFormatHero {...hero} />
      <OutputFormatsGrid highlightSlug={highlightSlug} withLinks />
      <HowItWorks />
      <DifferentiatorGrid />
      <RelatedFormats currentSlug={highlightSlug} />
      <FaqSection items={faqItems} />
      <FinalCta headline={finalCtaHeadline} subheadline={finalCtaSubheadline} />
    </>
  )
}
