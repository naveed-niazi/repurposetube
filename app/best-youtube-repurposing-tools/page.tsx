import type { Metadata } from "next"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { SingleFormatHero } from "@/components/landing/sections/SingleFormatHero"
import { ComparisonTable } from "@/components/landing/sections/ComparisonTable"
import { OutputFormatsGrid } from "@/components/landing/sections/OutputFormatsGrid"
import { FaqSection } from "@/components/landing/sections/FaqSection"
import { FinalCta } from "@/components/landing/sections/FinalCta"
import { buildPageMetadata, buildFaqJsonLd, buildBreadcrumbJsonLd } from "@/lib/seo"
import type { FaqItem } from "@/lib/landing-data"
import type { ComparisonFeature } from "@/components/landing/sections/ComparisonTable"

// ─── Tools roundup section ──────────────────────────────────────────────────

const TOOLS = [
  {
    name: "RepurposeTube",
    tag: "Best overall for YouTubers",
    highlight: true,
    description:
      "The only YouTube-native repurposing tool. Paste a URL and get all 6 written formats — blog post, Twitter thread, LinkedIn post, YouTube SEO package, newsletter, and Shorts scripts — in parallel within 60 seconds. Includes a free plan.",
  },
  {
    name: "Castmagic",
    tag: "Best for podcasters",
    highlight: false,
    description:
      "Audio-first repurposing tool. Generates blog posts, newsletters, and social content from podcast uploads. Requires file upload — not YouTube-native. Starts at $23/month. No free plan.",
  },
  {
    name: "AutoRepurpose.io",
    tag: "Simple social repurposing",
    highlight: false,
    description:
      "Covers Twitter threads, LinkedIn posts, and newsletters from YouTube. Missing blog posts, YouTube SEO, and Shorts scripts. Lightweight but limited output set.",
  },
  {
    name: "Exemplary AI",
    tag: "Broad AI platform",
    highlight: false,
    description:
      "Generates blog posts, newsletters, show notes, and short video clips. Heavy product surface area. Clip-focused rather than text-focused. Starts at $12/month.",
  },
  {
    name: "Repurpose.io",
    tag: "Video distribution (not writing)",
    highlight: false,
    description:
      "Automates video distribution across platforms (YouTube → TikTok, Instagram). Does not generate text content. A workflow tool, not an AI writing tool. Starts at $35/month.",
  },
]

const COMPARISON_FEATURES: ComparisonFeature[] = [
  { feature: "YouTube URL input (no upload needed)", us: true, them: "Varies" },
  { feature: "Blog post generation", us: true, them: false },
  { feature: "Twitter/X thread", us: true, them: "Some" },
  { feature: "LinkedIn post", us: true, them: "Some" },
  { feature: "Newsletter email", us: true, them: "Some" },
  { feature: "Shorts scripts", us: true, them: false },
  { feature: "YouTube SEO package (titles, description, tags)", us: true, them: false },
  { feature: "All formats in one parallel run", us: true, them: false },
  { feature: "Per-card editing & regeneration", us: true, them: false },
  { feature: "Free plan", us: true, them: false },
]

const FAQ: FaqItem[] = [
  {
    q: "What is the best AI tool to repurpose YouTube videos?",
    a: "For YouTubers who want written content from their videos, RepurposeTube is the best option in 2025. It is the only tool that generates all 6 written formats — blog post, Twitter thread, LinkedIn post, YouTube SEO package, newsletter, and Shorts scripts — from a single YouTube URL in one parallel run.",
  },
  {
    q: "What is the difference between YouTube repurposing tools?",
    a: "Most tools focus on one or two formats (e.g. AutoRepurpose does Twitter + LinkedIn), are podcast-first and require file uploads (Castmagic, Exemplary AI), or are video distribution tools that don't write text at all (Repurpose.io). RepurposeTube is the only YouTube-native, text-first tool that covers all 6 written formats.",
  },
  {
    q: "Is there a free YouTube content repurposing tool?",
    a: "Yes. RepurposeTube has a free plan — no credit card required. You can process your first video and see all 6 outputs before paying anything.",
  },
  {
    q: "Do any of these tools generate YouTube titles, descriptions, and tags?",
    a: "Only RepurposeTube. No other repurposing tool includes a YouTube SEO package (A/B title options, 5,000-character description, 15 tags) as part of its standard repurposing workflow.",
  },
  {
    q: "Which YouTube repurposing tool is best for solopreneurs?",
    a: "RepurposeTube — because it replaces multiple tools (blog writer, social media copy tool, email drafting) with one workflow. Free to start, no team needed, and 60 seconds per video.",
  },
]

export const metadata: Metadata = buildPageMetadata({
  title: "Best YouTube Content Repurposing Tools in 2025 — RepurposeTube",
  description:
    "Comparing the best AI tools to repurpose YouTube videos into blog posts, Twitter threads, LinkedIn posts, newsletters, and Shorts scripts. RepurposeTube vs Castmagic, AutoRepurpose, Exemplary AI, and Repurpose.io.",
  canonical: "https://repurposetube.com/best-youtube-repurposing-tools",
  keywords: [
    "best ai tool to repurpose youtube videos",
    "best youtube repurposing tools",
    "youtube content repurposing software",
    "ai youtube repurposing comparison",
    "top youtube repurposing tools 2025",
  ],
})

export default function BestYouTubeRepurposingToolsPage() {
  const breadcrumb = buildBreadcrumbJsonLd([
    { name: "RepurposeTube", url: "https://repurposetube.com" },
    { name: "Best YouTube Repurposing Tools", url: "https://repurposetube.com/best-youtube-repurposing-tools" },
  ])
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildFaqJsonLd(FAQ)) }} />
      <div className="flex min-h-screen flex-col">
        <Navbar variant="page" />
        <main className="flex-1">

          <SingleFormatHero
            badge="Tool Comparison · 2025"
            headline={
              <>
                The Best YouTube Content{" "}
                <br />
                <span className="text-amber-400">Repurposing Tools</span> Compared
              </>
            }
            subheadline="We compared every major YouTube repurposing tool — Castmagic, AutoRepurpose, Exemplary AI, Repurpose.io, and RepurposeTube — on formats covered, workflow, and pricing."
            ctaLabel="Try the Best-Rated Free"
          />

          {/* Tools roundup */}
          <section className="bg-white py-24">
            <div className="mx-auto max-w-4xl px-4 sm:px-6">
              <div className="mb-12 text-center">
                <h2 className="font-heading mb-4 text-3xl font-extrabold tracking-tight text-stone-900 sm:text-4xl">
                  Top 5 YouTube repurposing tools
                </h2>
                <p className="text-stone-500">Ranked by how well they serve YouTubers specifically.</p>
              </div>

              <div className="space-y-4">
                {TOOLS.map((tool, i) => (
                  <div
                    key={tool.name}
                    className={`flex gap-5 rounded-2xl border p-5 sm:p-6 ${
                      tool.highlight
                        ? "border-amber-400 bg-amber-50/40 ring-1 ring-amber-400/20"
                        : "border-stone-200 bg-white"
                    }`}
                  >
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-full border border-stone-200 bg-stone-100 font-heading text-sm font-bold text-stone-600">
                      {i + 1}
                    </div>
                    <div className="flex-1">
                      <div className="mb-1 flex flex-wrap items-center gap-2">
                        <span className="font-heading text-base font-bold text-stone-900">{tool.name}</span>
                        <span
                          className={`rounded-full px-2 py-0.5 text-xs font-semibold ${
                            tool.highlight
                              ? "bg-amber-100 text-amber-700"
                              : "bg-stone-100 text-stone-500"
                          }`}
                        >
                          {tool.tag}
                        </span>
                      </div>
                      <p className="text-sm leading-relaxed text-stone-500">{tool.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <ComparisonTable
            competitorName="Other tools"
            headline="Why RepurposeTube wins for YouTubers"
            features={COMPARISON_FEATURES}
          />

          <OutputFormatsGrid
            headline="What RepurposeTube generates for you"
            subheadline="Six written formats from a single YouTube URL. No other tool covers all of these."
            withLinks
          />

          <FaqSection items={FAQ} />

          <FinalCta
            headline={
              <>
                The best YouTube repurposing tool{" "}
                <br />
                <span className="text-amber-400">is the one you actually use</span>
              </>
            }
            subheadline="Free plan. No credit card. Your first video repurposed in 60 seconds."
          />
        </main>
        <Footer />
      </div>
    </>
  )
}
