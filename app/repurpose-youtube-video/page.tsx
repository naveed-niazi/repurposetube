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
    q: "What is the easiest way to repurpose YouTube videos?",
    a: "The easiest way is to paste your YouTube URL into RepurposeTube. Remi fetches the transcript and generates all 6 content formats — blog post, Twitter thread, LinkedIn post, YouTube SEO package, newsletter, and Shorts scripts — in parallel within 60 seconds. No manual work required.",
  },
  {
    q: "What content formats can I create from a YouTube video?",
    a: "RepurposeTube generates 6 formats from a single YouTube URL: a full SEO blog post, a Twitter/X thread, a LinkedIn post, a YouTube SEO package (titles, description, tags), a newsletter email, and three Shorts scripts.",
  },
  {
    q: "How long does it take to repurpose a YouTube video into multiple formats?",
    a: "All 6 formats are generated in parallel, so you get everything in roughly 60 seconds — regardless of how many formats you need.",
  },
  {
    q: "Do I need to upload the video to repurpose it?",
    a: "No. RepurposeTube is YouTube-native — just paste the video URL. No downloads, no uploads, no file handling. If the video is public and has captions, it works.",
  },
  {
    q: "How is RepurposeTube different from other content repurposing tools?",
    a: "Most repurposing tools are either podcast-first (like Castmagic) or video-clip focused (like Opus Clip). RepurposeTube is YouTube URL-native and text-output-first — all 6 written formats in one run, including the YouTube SEO package which no other repurposing tool includes.",
  },
  {
    q: "Is there a free plan?",
    a: "Yes. Get started for free — no credit card required.",
  },
]

export const metadata: Metadata = buildPageMetadata({
  title: "Repurpose YouTube Videos Into 6 Content Formats — RepurposeTube",
  description:
    "The fastest way to repurpose YouTube videos. Paste a URL and get a blog post, Twitter thread, LinkedIn post, YouTube SEO package, newsletter, and Shorts scripts — all in 60 seconds. Free to start.",
  canonical: "https://repurposetube.com/repurpose-youtube-video",
  keywords: [
    "repurpose youtube video",
    "youtube content repurposing tool",
    "ai youtube repurposer",
    "youtube video to multiple content formats",
    "repurpose youtube content",
    "best way to repurpose youtube videos",
  ],
})

export default function RepurposeYouTubeVideoPage() {
  const breadcrumb = buildBreadcrumbJsonLd([
    { name: "RepurposeTube", url: "https://repurposetube.com" },
    { name: "Repurpose YouTube Video", url: "https://repurposetube.com/repurpose-youtube-video" },
  ])
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildFaqJsonLd(FAQ)) }} />
      <div className="flex min-h-screen flex-col">
        <Navbar variant="page" />
        <main className="flex-1">
          <SingleFormatHero
            badge="YouTube Content Repurposing"
            headline={
              <>
                Repurpose Any YouTube Video Into{" "}
                <br />
                <span className="text-brand-400">6 Content Formats</span> in 60 Seconds
              </>
            }
            subheadline="One URL. Six platforms worth of content. Blog post, Twitter thread, LinkedIn post, YouTube SEO package, newsletter, and Shorts scripts — all generated in parallel."
          />
          <OutputFormatsGrid withLinks />
          <BeforeAfter />
          <HowItWorks />
          <DifferentiatorGrid />
          <FaqSection items={FAQ} />
          <FinalCta
            headline={
              <>
                Start repurposing your{" "}
                <br />
                <span className="text-brand-400">first video today</span>
              </>
            }
          />
        </main>
        <Footer />
      </div>
    </>
  )
}
