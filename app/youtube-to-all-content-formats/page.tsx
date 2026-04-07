import type { Metadata } from "next"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { SingleFormatHero } from "@/components/landing/sections/SingleFormatHero"
import { OutputFormatsGrid } from "@/components/landing/sections/OutputFormatsGrid"
import { BeforeAfter } from "@/components/landing/sections/BeforeAfter"
import { HowItWorks } from "@/components/landing/sections/HowItWorks"
import { DifferentiatorGrid } from "@/components/landing/sections/DifferentiatorGrid"
import { FaqSection } from "@/components/landing/sections/FaqSection"
import { FinalCta } from "@/components/landing/sections/FinalCta"
import { buildPageMetadata, buildFaqJsonLd, buildBreadcrumbJsonLd } from "@/lib/seo"
import type { FaqItem } from "@/lib/landing-data"

const FAQ: FaqItem[] = [
  {
    q: "Can I turn a YouTube video into multiple content formats at once?",
    a: "Yes. RepurposeTube generates all 6 content formats — blog post, Twitter thread, LinkedIn post, YouTube SEO package, newsletter email, and Shorts scripts — simultaneously from a single YouTube URL. All formats are ready in about 60 seconds.",
  },
  {
    q: "What content formats can I create from one YouTube video?",
    a: "Six formats: a full SEO blog post (800–1,200 words), a Twitter/X thread (8–12 tweets), a LinkedIn post (long-form professional), a YouTube SEO package (A/B titles, 5,000-character description, 15 tags), a newsletter email (with subject line), and 3 Shorts scripts (60 seconds each).",
  },
  {
    q: "Why should I turn one YouTube video into multiple formats instead of creating each separately?",
    a: "Creating content from scratch for each platform takes 3–5 hours per video. RepurposeTube generates everything from a single source — your video's transcript — so the content is consistent, on-message, and takes 60 seconds instead of an afternoon.",
  },
  {
    q: "What is the best tool to convert a YouTube video into all content formats?",
    a: "RepurposeTube. It is the only tool that generates all 6 written content formats — including a YouTube SEO package and Shorts scripts — from a single YouTube URL in one parallel run. No other repurposing tool covers all 6.",
  },
  {
    q: "Do I need to process each format separately?",
    a: "No. RepurposeTube generates all 6 formats in a single run using parallel AI generation. You paste one URL, wait about 60 seconds, and all 6 cards appear at once.",
  },
  {
    q: "Is there a free plan?",
    a: "Yes. Get started for free — no credit card required.",
  },
]

export const metadata: Metadata = buildPageMetadata({
  title: "Turn One YouTube Video Into All Content Formats — RepurposeTube",
  description:
    "Paste one YouTube URL and get a blog post, Twitter thread, LinkedIn post, YouTube SEO package, newsletter, and Shorts scripts — all generated simultaneously. Free to start.",
  canonical: "https://repurposetube.com/youtube-to-all-content-formats",
  keywords: [
    "turn youtube video into multiple content formats",
    "youtube video to all content formats",
    "youtube to every platform",
    "youtube content atomization tool",
    "convert youtube video to multiple formats",
  ],
})

export default function YouTubeToAllContentFormatsPage() {
  const breadcrumb = buildBreadcrumbJsonLd([
    { name: "RepurposeTube", url: "https://repurposetube.com" },
    { name: "YouTube to All Content Formats", url: "https://repurposetube.com/youtube-to-all-content-formats" },
  ])
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildFaqJsonLd(FAQ)) }} />
      <div className="flex min-h-screen flex-col">
        <Navbar variant="page" />
        <main className="flex-1">
          <SingleFormatHero
            badge="All Formats · One URL · 60 Seconds"
            headline={
              <>
                One YouTube Video.{" "}
                <br />
                <span className="text-amber-400">Every Content Format.</span>{" "}
                <br />
                Simultaneously.
              </>
            }
            subheadline="Stop treating each platform as a separate content project. Paste your YouTube URL and get all 6 written formats generated in parallel — blog post, Twitter thread, LinkedIn post, YouTube SEO package, newsletter email, and Shorts scripts."
          />
          <OutputFormatsGrid
            headline="All 6 formats. One run. No extra steps."
            subheadline="Every format derives from the same transcript — consistent messaging across every channel."
            withLinks
          />
          <BeforeAfter
            headline="The difference between doing it yourself and using RepurposeTube"
            subheadline="Six platforms of content shouldn't take half your working day."
          />
          <HowItWorks
            headline="How RepurposeTube generates all formats at once"
            subheadline="One URL in. Six outputs out. Here is exactly how it works."
          />
          <DifferentiatorGrid
            headline="Why RepurposeTube covers all formats when others don't"
          />
          <FaqSection items={FAQ} />
          <FinalCta
            headline={
              <>
                One video.{" "}
                <span className="text-amber-400">Six platforms.</span>{" "}
                <br />
                Sixty seconds.
              </>
            }
            subheadline="That is the whole promise. Free plan. No credit card needed."
          />
        </main>
        <Footer />
      </div>
    </>
  )
}
