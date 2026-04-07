import type { Metadata } from "next"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { FeaturePageShell } from "@/components/landing/page-shells/FeaturePageShell"
import { buildPageMetadata, buildFaqJsonLd, buildBreadcrumbJsonLd } from "@/lib/seo"
import type { FaqItem } from "@/lib/landing-data"

const FAQ: FaqItem[] = [
  {
    q: "How does RepurposeTube turn a YouTube video into a Twitter/X thread?",
    a: "Paste your YouTube URL. Remi fetches the transcript, identifies the strongest insights and arguments, then writes an 8–12 tweet thread — starting with a scroll-stopping hook tweet, followed by numbered insight tweets, and closing with a CTA.",
  },
  {
    q: "How many tweets are in the generated thread?",
    a: "Typically 8–12 tweets depending on the video's length and content density. The thread always starts with a strong hook and ends with a CTA tweet.",
  },
  {
    q: "Is the Twitter/X thread formatted and ready to post?",
    a: "Yes. Each tweet is a self-contained post under the character limit, numbered for easy reading, and formatted with line breaks where appropriate. Copy the full thread or individual tweets.",
  },
  {
    q: "Can I generate a Twitter thread from any YouTube video?",
    a: "Any public YouTube video with captions or subtitles works, including auto-generated captions. The better the video's content, the stronger the thread.",
  },
  {
    q: "What makes a good YouTube-to-Twitter thread?",
    a: "The best threads distil one strong idea from a video into digestible points. RepurposeTube's AI identifies the core argument of your video and structures it as a thread — hook, supporting points, punchline, CTA — rather than just summarising chronologically.",
  },
  {
    q: "Is there a free plan?",
    a: "Yes. Get started for free — no credit card required.",
  },
]

export const metadata: Metadata = buildPageMetadata({
  title: "YouTube to Twitter/X Thread Generator — RepurposeTube",
  description:
    "Turn any YouTube video into an 8–12 tweet thread with a hook, numbered insights, and CTA — in 60 seconds. Free to start, no credit card required.",
  canonical: "https://repurposetube.com/youtube-to-twitter-thread",
  keywords: [
    "youtube to twitter thread generator",
    "youtube to x thread ai",
    "repurpose youtube as tweet thread",
    "youtube video to twitter thread",
    "youtube to twitter thread free",
  ],
})

export default function YouTubeToTwitterThreadPage() {
  const breadcrumb = buildBreadcrumbJsonLd([
    { name: "RepurposeTube", url: "https://repurposetube.com" },
    { name: "YouTube to Twitter Thread", url: "https://repurposetube.com/youtube-to-twitter-thread" },
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
              badge: "YouTube → Twitter / X Thread",
              headline: (
                <>
                  Turn Any YouTube Video Into{" "}
                  <br />
                  a <span className="text-amber-400">Viral Twitter Thread</span>
                </>
              ),
              subheadline:
                "Paste a YouTube URL and get an 8–12 tweet thread — hook, numbered insights, and CTA — written and ready to post in under 60 seconds.",
            }}
            highlightSlug="twitter-thread"
            faqItems={FAQ}
            finalCtaHeadline={
              <>
                Your best video ideas deserve{" "}
                <br />
                <span className="text-amber-400">an audience on X too</span>
              </>
            }
            finalCtaSubheadline="Let Remi turn every video into a thread your followers will share."
          />
        </main>
        <Footer />
      </div>
    </>
  )
}
