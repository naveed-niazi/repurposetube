import { SingleFormatHero, type SingleFormatHeroProps } from "@/components/landing/sections/SingleFormatHero"
import { BenefitList, type BenefitItem } from "@/components/landing/sections/BenefitList"
import { OutputFormatsGrid } from "@/components/landing/sections/OutputFormatsGrid"
import { HowItWorks } from "@/components/landing/sections/HowItWorks"
import { BeforeAfter } from "@/components/landing/sections/BeforeAfter"
import { FaqSection } from "@/components/landing/sections/FaqSection"
import { FinalCta } from "@/components/landing/sections/FinalCta"
import type { FaqItem } from "@/lib/landing-data"
import type { ReactNode } from "react"

interface AudiencePageShellProps {
  hero: SingleFormatHeroProps
  benefitsHeadline: string
  benefitsSubheadline?: string
  benefits: BenefitItem[]
  faqItems: FaqItem[]
  finalCtaHeadline: ReactNode
  finalCtaSubheadline?: string
}

export function AudiencePageShell({
  hero,
  benefitsHeadline,
  benefitsSubheadline,
  benefits,
  faqItems,
  finalCtaHeadline,
  finalCtaSubheadline,
}: AudiencePageShellProps) {
  return (
    <>
      <SingleFormatHero {...hero} />
      <BenefitList
        headline={benefitsHeadline}
        subheadline={benefitsSubheadline}
        benefits={benefits}
      />
      <OutputFormatsGrid withLinks />
      <HowItWorks />
      <BeforeAfter />
      <FaqSection items={faqItems} />
      <FinalCta headline={finalCtaHeadline} subheadline={finalCtaSubheadline} />
    </>
  )
}
