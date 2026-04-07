import type { Metadata } from "next"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { ComparisonPageShell } from "@/components/landing/page-shells/ComparisonPageShell"
import { buildPageMetadata, buildFaqJsonLd, buildBreadcrumbJsonLd } from "@/lib/seo"
import type { FaqItem } from "@/lib/landing-data"
import type { ComparisonFeature } from "@/components/landing/sections/ComparisonTable"

const FEATURES: ComparisonFeature[] = [
  { feature: "YouTube URL input (no upload required)", us: true, them: false },
  { feature: "Audio/podcast file upload", us: false, them: true },
  { feature: "Blog post generation", us: true, them: true },
  { feature: "Twitter/X thread generation", us: true, them: true },
  { feature: "LinkedIn post generation", us: true, them: true },
  { feature: "Newsletter email generation", us: true, them: true },
  { feature: "Shorts / clip scripts", us: true, them: false },
  { feature: "YouTube SEO package (titles, description, tags)", us: true, them: false },
  { feature: "Parallel generation (all formats at once)", us: true, them: false },
  { feature: "Per-card inline editing", us: true, them: true },
  { feature: "Per-card regeneration", us: true, them: false },
  { feature: "Free plan available", us: true, them: false },
]

const FAQ: FaqItem[] = [
  {
    q: "Is RepurposeTube a good Castmagic alternative for YouTubers?",
    a: "Yes — and it was built specifically for YouTubers. Castmagic is designed around audio file uploads, which means YouTubers need to download their video audio before using it. RepurposeTube accepts a YouTube URL directly — no downloading, no uploading, no prep.",
  },
  {
    q: "What does RepurposeTube offer that Castmagic doesn't?",
    a: "RepurposeTube generates YouTube Shorts scripts and a full YouTube SEO package (A/B titles, 5,000-character description, 15 tags) — two features Castmagic does not offer. RepurposeTube also runs all 6 formats in parallel rather than sequentially.",
  },
  {
    q: "Does Castmagic support YouTube URLs?",
    a: "Castmagic is primarily designed for audio uploads from podcasts and recordings. While it has integrations, its core workflow requires a file upload. RepurposeTube's entire workflow starts from a YouTube URL — no other step needed.",
  },
  {
    q: "How much does RepurposeTube cost compared to Castmagic?",
    a: "Castmagic starts at $23/month with no free plan. RepurposeTube has a free plan — no credit card required — with paid plans for higher usage.",
  },
  {
    q: "Can RepurposeTube replace Castmagic entirely?",
    a: "If your content is primarily on YouTube, yes. RepurposeTube covers all the written output formats Castmagic offers, adds YouTube-specific features (SEO package, Shorts scripts), and works natively from a URL instead of a file.",
  },
]

export const metadata: Metadata = buildPageMetadata({
  title: "Castmagic Alternative for YouTubers — RepurposeTube",
  description:
    "Looking for a Castmagic alternative? RepurposeTube is YouTube-native — paste a URL, get 6 content formats in 60 seconds. Includes YouTube SEO package and Shorts scripts Castmagic doesn't offer. Free to start.",
  canonical: "https://repurposetube.com/alternatives/castmagic-alternative",
  keywords: [
    "castmagic alternative",
    "castmagic alternative for youtubers",
    "castmagic vs repurposetube",
    "best castmagic alternative",
    "youtube repurposing tool instead of castmagic",
  ],
})

export default function CastmagicAlternativePage() {
  const breadcrumb = buildBreadcrumbJsonLd([
    { name: "RepurposeTube", url: "https://repurposetube.com" },
    { name: "Alternatives", url: "https://repurposetube.com/alternatives" },
    { name: "Castmagic Alternative", url: "https://repurposetube.com/alternatives/castmagic-alternative" },
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
              badge: "Castmagic Alternative",
              headline: (
                <>
                  The Castmagic Alternative{" "}
                  <br />
                  <span className="text-amber-400">Built for YouTubers</span>
                </>
              ),
              subheadline:
                "Castmagic is great for podcasters. But if your content lives on YouTube, you shouldn't need to download audio files before repurposing. RepurposeTube works from a URL — nothing else.",
            }}
            competitorName="Castmagic"
            currentSlug="castmagic"
            comparisonHeadline="RepurposeTube vs Castmagic — feature by feature"
            features={FEATURES}
            faqItems={FAQ}
            finalCtaHeadline={
              <>
                YouTube-first repurposing,{" "}
                <br />
                <span className="text-amber-400">not podcast tools retrofitted</span>
              </>
            }
          />
        </main>
        <Footer />
      </div>
    </>
  )
}
