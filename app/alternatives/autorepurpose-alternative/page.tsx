import type { Metadata } from "next"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { ComparisonPageShell } from "@/components/landing/page-shells/ComparisonPageShell"
import { buildPageMetadata, buildFaqJsonLd, buildBreadcrumbJsonLd } from "@/lib/seo"
import type { FaqItem } from "@/lib/landing-data"
import type { ComparisonFeature } from "@/components/landing/sections/ComparisonTable"

const FEATURES: ComparisonFeature[] = [
  { feature: "YouTube URL input (no upload)", us: true, them: true },
  { feature: "Blog post generation", us: true, them: false },
  { feature: "Twitter/X thread generation", us: true, them: true },
  { feature: "LinkedIn post generation", us: true, them: true },
  { feature: "Newsletter email generation", us: true, them: true },
  { feature: "Shorts / clip scripts", us: true, them: false },
  { feature: "YouTube SEO package (titles, description, tags)", us: true, them: false },
  { feature: "All 6 formats in one run", us: true, them: false },
  { feature: "Parallel AI generation", us: true, them: false },
  { feature: "Per-card inline editing", us: true, them: false },
  { feature: "Per-card regeneration", us: true, them: false },
  { feature: "Free plan available", us: true, them: false },
  { feature: "Starting price", us: "Free", them: "Paid only" },
]

const FAQ: FaqItem[] = [
  {
    q: "How is RepurposeTube different from AutoRepurpose.io?",
    a: "AutoRepurpose.io generates Twitter threads, LinkedIn posts, and newsletters from YouTube videos — covering 3 formats. RepurposeTube generates all 6: blog post, Twitter thread, LinkedIn post, YouTube SEO package, newsletter email, and Shorts scripts. RepurposeTube also runs all formats in parallel and includes per-card editing and regeneration.",
  },
  {
    q: "Does AutoRepurpose.io generate blog posts?",
    a: "No. AutoRepurpose.io focuses on social and newsletter formats. RepurposeTube generates a full SEO blog post (800–1,200 words with headings, intro, and conclusion) as one of its 6 outputs.",
  },
  {
    q: "Does AutoRepurpose.io generate YouTube SEO titles and descriptions?",
    a: "No. RepurposeTube is the only repurposing tool that generates a YouTube SEO package — A/B title options, a full 5,000-character description, and 15 tags — as part of its standard workflow.",
  },
  {
    q: "Which tool is better for YouTubers who want all content formats covered?",
    a: "RepurposeTube. AutoRepurpose.io covers 3 of the 6 formats YouTubers need. RepurposeTube covers all 6 in a single run, including the YouTube SEO package no other tool offers.",
  },
  {
    q: "Is RepurposeTube free to start?",
    a: "Yes. RepurposeTube has a free plan — no credit card required. Process your first video today.",
  },
]

export const metadata: Metadata = buildPageMetadata({
  title: "AutoRepurpose Alternative — All 6 Formats in One Run | RepurposeTube",
  description:
    "AutoRepurpose covers 3 formats. RepurposeTube covers 6 — including blog post, YouTube SEO package, and Shorts scripts AutoRepurpose doesn't offer. Free to start.",
  canonical: "https://repurposetube.com/alternatives/autorepurpose-alternative",
  keywords: [
    "autorepurpose alternative",
    "autorepurpose io alternative",
    "youtube repurposing tool all formats",
    "better than autorepurpose",
  ],
})

export default function AutoRepurposeAlternativePage() {
  const breadcrumb = buildBreadcrumbJsonLd([
    { name: "RepurposeTube", url: "https://repurposetube.com" },
    { name: "Alternatives", url: "https://repurposetube.com/alternatives" },
    { name: "AutoRepurpose Alternative", url: "https://repurposetube.com/alternatives/autorepurpose-alternative" },
  ])

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildFaqJsonLd(FAQ)) }} />
      <div className="flex min-h-screen flex-col">
        <Navbar variant="page" />
        <main className="flex-1">
          <ComparisonPageShell
            hero={{
              badge: "AutoRepurpose Alternative",
              headline: (
                <>
                  AutoRepurpose Does 3 Formats.
                  <br />
                  <span className="text-amber-400">RepurposeTube Does 6.</span>
                </>
              ),
              subheadline:
                "AutoRepurpose covers Twitter, LinkedIn, and newsletters. RepurposeTube adds a full blog post, YouTube SEO package, and Shorts scripts — all in one run, all in parallel.",
            }}
            competitorName="AutoRepurpose"
            currentSlug="autorepurpose"
            comparisonHeadline="RepurposeTube vs AutoRepurpose — feature by feature"
            features={FEATURES}
            faqItems={FAQ}
            finalCtaHeadline={
              <>
                Get all 6 formats,
                <br />
                <span className="text-amber-400">not just 3</span>
              </>
            }
          />
        </main>
        <Footer />
      </div>
    </>
  )
}
