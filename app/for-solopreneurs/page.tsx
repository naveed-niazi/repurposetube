import type { Metadata } from "next"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { AudiencePageShell } from "@/components/landing/page-shells/AudiencePageShell"
import { buildPageMetadata, buildFaqJsonLd, buildBreadcrumbJsonLd } from "@/lib/seo"
import type { FaqItem } from "@/lib/landing-data"
import type { BenefitItem } from "@/components/landing/sections/BenefitList"
import {
  Layers,
  Clock,
  Globe,
  TrendingUp,
  PenLine,
  Zap,
} from "lucide-react"

const BENEFITS: BenefitItem[] = [
  {
    icon: Layers,
    headline: "6 tools replaced by one",
    body: "Stop paying for a blog writer, a social media tool, and an email drafting service. One YouTube URL gives you a blog post, Twitter thread, LinkedIn post, SEO package, newsletter, and Shorts scripts.",
  },
  {
    icon: Clock,
    headline: "A week of content in 60 seconds",
    body: "One video becomes enough content to publish every day for a week across every channel. Free up the hours you were spending writing from scratch.",
  },
  {
    icon: Globe,
    headline: "Build every platform at once",
    body: "YouTube, LinkedIn, Twitter, and email — without a team or a social media manager. RepurposeTube runs the entire distribution workflow from a single URL.",
  },
  {
    icon: TrendingUp,
    headline: "SEO traffic from every video",
    body: "Turn your YouTube knowledge into blog posts that rank on Google and drive inbound leads to your business. Every video you make becomes a permanent SEO asset.",
  },
  {
    icon: PenLine,
    headline: "No copywriting skills needed",
    body: "Remi handles the writing. You handle the recording. That is the entire workflow. No prompts to write, no outputs to review from scratch, no agency to brief.",
  },
  {
    icon: Zap,
    headline: "Consistency without the burnout",
    body: "Publishing consistently across 6 platforms is exhausting without a system. RepurposeTube makes it mechanical — every video in, every format out, every time.",
  },
]

const FAQ: FaqItem[] = [
  {
    q: "How can a solopreneur repurpose content without a team?",
    a: "Paste your YouTube URL into RepurposeTube. Remi generates all 6 content formats in parallel within 60 seconds. No team needed — just a URL and 60 seconds of your time.",
  },
  {
    q: "Which content formats does RepurposeTube generate for solopreneurs?",
    a: "Blog post (SEO-ready, 800–1,200 words), Twitter/X thread (8–12 tweets), LinkedIn post (long-form professional), YouTube SEO package (titles, description, tags), newsletter email, and 3 Shorts scripts.",
  },
  {
    q: "Can RepurposeTube help a solopreneur grow on LinkedIn from YouTube?",
    a: "Yes. Every RepurposeTube run includes a LinkedIn post written in the professional voice that performs on LinkedIn. Paste the URL after publishing to YouTube, get the post in 60 seconds, and hit post on LinkedIn.",
  },
  {
    q: "Is RepurposeTube worth it for a solopreneur with a small YouTube channel?",
    a: "Yes — especially for small channels. Repurposing is how solopreneurs grow across multiple channels simultaneously. Even if your YouTube audience is small, your LinkedIn and newsletter audiences can be large. RepurposeTube bridges that gap for every video you make.",
  },
  {
    q: "Is there a free plan?",
    a: "Yes. Get started for free — no credit card required.",
  },
]

export const metadata: Metadata = buildPageMetadata({
  title: "Content Repurposing Tool for Solopreneurs — RepurposeTube",
  description:
    "Turn every YouTube video into a blog post, Twitter thread, LinkedIn post, newsletter, and Shorts scripts — in 60 seconds. A content team you can't afford to hire, built into one tool. Free to start.",
  canonical: "https://repurposetube.com/for-solopreneurs",
  keywords: [
    "repurpose content without a team",
    "content repurposing for solopreneurs",
    "youtube repurposing tool solopreneur",
    "best content tool for solopreneurs",
    "one person content strategy",
  ],
})

export default function ForSolopreneursPage() {
  const breadcrumb = buildBreadcrumbJsonLd([
    { name: "RepurposeTube", url: "https://repurposetube.com" },
    { name: "For Solopreneurs", url: "https://repurposetube.com/for-solopreneurs" },
  ])
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildFaqJsonLd(FAQ)) }} />
      <div className="flex min-h-screen flex-col">
        <Navbar variant="page" />
        <main className="flex-1">
          <AudiencePageShell
            contentKey="solopreneurs"
            hero={{
              badge: "For Solopreneurs",
              headline: (
                <>
                  A Content Team You Can&apos;t Afford.{" "}
                  <br />
                  <span className="text-brand-400">In 60 Seconds.</span>
                </>
              ),
              subheadline:
                "RepurposeTube gives solopreneurs the content output of a full team — from a single YouTube URL. Blog post, Twitter thread, LinkedIn post, newsletter, YouTube SEO, and Shorts scripts, all at once.",
            }}
            benefitsHeadline="Built for creators who do everything themselves"
            benefitsSubheadline="You make the videos. RepurposeTube handles the rest."
            benefits={BENEFITS}
            faqItems={FAQ}
            finalCtaHeadline={
              <>
                Stop writing content.{" "}
                <br />
                <span className="text-brand-400">Start repurposing it.</span>
              </>
            }
            finalCtaSubheadline="Free plan. No credit card. Your first video repurposed in 60 seconds."
          />
        </main>
        <Footer />
      </div>
    </>
  )
}
