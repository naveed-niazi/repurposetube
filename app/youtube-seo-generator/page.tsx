import type { Metadata } from "next"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { FeaturePageShell } from "@/components/landing/page-shells/FeaturePageShell"
import { buildPageMetadata, buildFaqJsonLd, buildBreadcrumbJsonLd } from "@/lib/seo"
import type { FaqItem } from "@/lib/landing-data"

const FAQ: FaqItem[] = [
  {
    q: "What does the YouTube SEO package include?",
    a: "Two A/B title options optimised for click-through rate, a full 5,000-character keyword-rich video description, and 15 targeted tags — all generated from your actual video content, not guesswork.",
  },
  {
    q: "How does RepurposeTube generate YouTube titles and descriptions?",
    a: "Paste your YouTube URL. Remi fetches the transcript, analyses your video's topic, main keywords, and value proposition, then writes two title options (one curiosity-driven, one direct), a long-form description with natural keyword density, and 15 relevant tags.",
  },
  {
    q: "Why does the YouTube SEO package include two title options?",
    a: "Different title formats perform differently depending on your audience and topic. We give you a curiosity-style title (designed for high click-through) and a direct/keyword-rich title (designed for search ranking) so you can pick or test both.",
  },
  {
    q: "How long is the generated YouTube description?",
    a: "Up to 5,000 characters — the full YouTube description limit. The description includes a natural intro paragraph, structured sections covering your video's key topics, relevant keywords placed naturally, and a CTA.",
  },
  {
    q: "What makes this better than writing my own YouTube description?",
    a: "Most creators write descriptions that miss keyword opportunities or repeat the same boilerplate. RepurposeTube derives the description directly from your transcript, ensuring it reflects your actual content with natural keyword coverage — not a template.",
  },
  {
    q: "Can I edit the title and description before uploading to YouTube?",
    a: "Yes. Every output card is directly editable on the results page. Tweak the title, adjust the description, add personal branding, then copy directly to YouTube.",
  },
  {
    q: "Is there a free plan?",
    a: "Yes. Get started for free — no credit card required.",
  },
]

export const metadata: Metadata = buildPageMetadata({
  title: "YouTube SEO Title, Description & Tags Generator — RepurposeTube",
  description:
    "Generate optimised YouTube titles (A/B), a full 5,000-character description, and 15 tags from any YouTube URL in 60 seconds. The only repurposing tool with YouTube SEO built in. Free to start.",
  canonical: "https://repurposetube.com/youtube-seo-generator",
  keywords: [
    "youtube seo generator",
    "youtube title description tags generator ai",
    "youtube seo package generator",
    "youtube description generator",
    "youtube title generator ai",
    "youtube seo title and description generator",
  ],
})

export default function YouTubeSeoGeneratorPage() {
  const breadcrumb = buildBreadcrumbJsonLd([
    { name: "RepurposeTube", url: "https://repurposetube.com" },
    { name: "YouTube SEO Generator", url: "https://repurposetube.com/youtube-seo-generator" },
  ])
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildFaqJsonLd(FAQ)) }} />
      <div className="flex min-h-screen flex-col">
        <Navbar variant="page" />
        <main className="flex-1">
          <FeaturePageShell
            hero={{
              badge: "YouTube SEO Package",
              headline: (
                <>
                  Generate Your YouTube Title,
                  <br />
                  <span className="text-amber-400">Description & Tags</span> in 60 Seconds
                </>
              ),
              subheadline:
                "Paste a YouTube URL and get two A/B title options, a full 5,000-character keyword-rich description, and 15 optimised tags — all derived from your actual video content.",
            }}
            highlightSlug="youtube-seo"
            faqItems={FAQ}
            finalCtaHeadline={
              <>
                Stop guessing your way through
                <br />
                <span className="text-amber-400">YouTube SEO</span>
              </>
            }
            finalCtaSubheadline="Let Remi write titles, descriptions, and tags that are grounded in what your video actually says."
          />
        </main>
        <Footer />
      </div>
    </>
  )
}
