import type { Metadata } from "next"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { ComparisonPageShell } from "@/components/landing/page-shells/ComparisonPageShell"
import { buildPageMetadata, buildFaqJsonLd, buildBreadcrumbJsonLd } from "@/lib/seo"
import type { FaqItem } from "@/lib/landing-data"
import type { ComparisonFeature } from "@/components/landing/sections/ComparisonTable"

const FEATURES: ComparisonFeature[] = [
  { feature: "Generates written text content from video", us: true, them: false },
  { feature: "YouTube URL input (no upload)", us: true, them: true },
  { feature: "Blog post generation", us: true, them: false },
  { feature: "Twitter/X thread generation", us: true, them: false },
  { feature: "LinkedIn post generation", us: true, them: "Distribution only" },
  { feature: "Newsletter email generation", us: true, them: false },
  { feature: "Shorts / clip scripts", us: true, them: false },
  { feature: "YouTube SEO package (titles, description, tags)", us: true, them: false },
  { feature: "AI content writing", us: true, them: false },
  { feature: "Cross-platform video distribution", us: false, them: true },
  { feature: "Free plan available", us: true, them: false },
  { feature: "Starting price", us: "Free", them: "$35/month" },
]

const FAQ: FaqItem[] = [
  {
    q: "What is the difference between RepurposeTube and Repurpose.io?",
    a: "Repurpose.io automates the distribution of your video to other platforms (e.g. YouTube → TikTok, Instagram). It does not write text content. RepurposeTube does the opposite: it takes a YouTube URL and writes 6 types of text content — blog post, Twitter thread, LinkedIn post, newsletter, Shorts scripts, and a YouTube SEO package. They solve different problems.",
  },
  {
    q: "Does Repurpose.io generate blog posts or written content?",
    a: "No. Repurpose.io is a video distribution tool — it moves your video to other platforms. It does not generate written text content. RepurposeTube is an AI writing tool that creates blog posts, threads, newsletters, and more from your YouTube transcript.",
  },
  {
    q: "Can RepurposeTube replace Repurpose.io?",
    a: "If what you need is written content from your videos (blog posts, social media copy, newsletters), then yes — RepurposeTube is a direct replacement. If you specifically need automated video redistribution to platforms like TikTok or Instagram Reels, that is not what RepurposeTube does.",
  },
  {
    q: "Is RepurposeTube cheaper than Repurpose.io?",
    a: "Yes. Repurpose.io starts at $35/month. RepurposeTube has a free plan — no credit card required.",
  },
]

export const metadata: Metadata = buildPageMetadata({
  title: "Repurpose.io Alternative — AI Text Content From YouTube | RepurposeTube",
  description:
    "Repurpose.io distributes video. RepurposeTube writes content. Get a blog post, Twitter thread, LinkedIn post, YouTube SEO package, newsletter, and Shorts scripts from any YouTube URL. Free to start.",
  canonical: "https://repurposetube.com/alternatives/repurpose-io-alternative",
  keywords: [
    "repurpose io alternative",
    "repurpose.io alternative",
    "youtube content writing tool",
    "youtube repurposing text content",
  ],
})

export default function RepurposeIoAlternativePage() {
  const breadcrumb = buildBreadcrumbJsonLd([
    { name: "RepurposeTube", url: "https://repurposetube.com" },
    { name: "Alternatives", url: "https://repurposetube.com/alternatives" },
    { name: "Repurpose.io Alternative", url: "https://repurposetube.com/alternatives/repurpose-io-alternative" },
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
              badge: "Repurpose.io Alternative",
              headline: (
                <>
                  Repurpose.io Moves Your Video.{" "}
                  <br />
                  <span className="text-brand-400">RepurposeTube Writes Your Content.</span>
                </>
              ),
              subheadline:
                "Repurpose.io is a distribution tool — it doesn't generate text. RepurposeTube takes your YouTube URL and writes everything: blog post, Twitter thread, LinkedIn post, newsletter, Shorts scripts, and YouTube SEO package.",
            }}
            competitorName="Repurpose.io"
            currentSlug="repurpose-io"
            comparisonHeadline="RepurposeTube vs Repurpose.io — what each actually does"
            features={FEATURES}
            faqItems={FAQ}
            finalCtaHeadline={
              <>
                Get the written content{" "}
                <br />
                <span className="text-brand-400">your videos deserve</span>
              </>
            }
          />
        </main>
        <Footer />
      </div>
    </>
  )
}
