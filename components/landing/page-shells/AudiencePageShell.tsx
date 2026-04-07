import { SingleFormatHero, type SingleFormatHeroProps } from "@/components/landing/sections/SingleFormatHero"
import { BenefitList, type BenefitItem } from "@/components/landing/sections/BenefitList"
import { OutputFormatsGrid } from "@/components/landing/sections/OutputFormatsGrid"
import { HowItWorks } from "@/components/landing/sections/HowItWorks"
import { BeforeAfter } from "@/components/landing/sections/BeforeAfter"
import { FaqSection } from "@/components/landing/sections/FaqSection"
import { FinalCta } from "@/components/landing/sections/FinalCta"
import { AUDIENCE_CONTENT } from "@/lib/page-content"
import type { FaqItem } from "@/lib/landing-data"
import type { ReactNode } from "react"

interface AudiencePageShellProps {
  hero: SingleFormatHeroProps
  contentKey: "youtubers" | "solopreneurs" | "content-marketers"
  benefitsHeadline: string
  benefitsSubheadline?: string
  benefits: BenefitItem[]
  faqItems: FaqItem[]
  finalCtaHeadline: ReactNode
  finalCtaSubheadline?: string
}

export function AudiencePageShell({
  hero,
  contentKey,
  benefitsHeadline,
  benefitsSubheadline,
  benefits,
  faqItems,
  finalCtaHeadline,
  finalCtaSubheadline,
}: AudiencePageShellProps) {
  const content = AUDIENCE_CONTENT[contentKey]

  return (
    <>
      <SingleFormatHero {...hero} />
      <BenefitList
        headline={benefitsHeadline}
        subheadline={benefitsSubheadline}
        benefits={benefits}
      />
      <OutputFormatsGrid withLinks />
      <HowItWorks
        headline={content?.howItWorksHeadline}
        subheadline={content?.howItWorksSubheadline}
        steps={content?.steps}
      />
      <BeforeAfter
        headline={content?.beforeAfterHeadline}
        subheadline={content?.beforeAfterSubheadline}
        rows={content?.beforeAfterRows}
        totalBefore={content?.beforeAfterTotal}
      />
      <FaqSection items={faqItems} />
      <FinalCta headline={finalCtaHeadline} subheadline={finalCtaSubheadline} />
    </>
  )
}
