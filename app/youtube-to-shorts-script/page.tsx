import type { Metadata } from "next"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { FeaturePageShell } from "@/components/landing/page-shells/FeaturePageShell"
import { buildPageMetadata, buildFaqJsonLd, buildBreadcrumbJsonLd } from "@/lib/seo"
import type { FaqItem } from "@/lib/landing-data"

const FAQ: FaqItem[] = [
  {
    q: "How does RepurposeTube generate YouTube Shorts scripts from a long video?",
    a: "Paste your YouTube URL. Remi reads the full transcript, identifies the sharpest moments, insights, and high-energy clips, then writes three 60-second scripts — each with a strong hook, fast-paced delivery, and a punchy close. Done in under 60 seconds.",
  },
  {
    q: "How many Shorts scripts do I get per video?",
    a: "You get three 60-second scripts per video. Each targets a different angle or moment from your long-form content so you have genuine variety.",
  },
  {
    q: "Are the Shorts scripts written for vertical video delivery?",
    a: "Yes. The scripts are written with short, punchy sentences, fast hooks in the first 2–3 seconds, and a direct close — the pacing that works for Shorts, Reels, and TikTok.",
  },
  {
    q: "Can I edit the Shorts scripts before using them?",
    a: "Yes. Every output card is directly editable on the results page. Adjust the hook, change the delivery, or reorder points before you copy or download.",
  },
  {
    q: "Does RepurposeTube only extract moments from the transcript, or does it write new scripts?",
    a: "Remi combines both — it identifies the best source moments from your transcript and rewrites them as standalone scripts optimised for short-form delivery. The content is grounded in your video but adapted for the format.",
  },
  {
    q: "Is there a free plan?",
    a: "Yes. Get started for free — no credit card required.",
  },
]

export const metadata: Metadata = buildPageMetadata({
  title: "YouTube to Shorts Script Generator — RepurposeTube",
  description:
    "Turn any YouTube video into 3 ready-to-film Shorts scripts in 60 seconds. RepurposeTube extracts your best moments and rewrites them for short-form delivery. Free to start.",
  canonical: "https://repurposetube.com/youtube-to-shorts-script",
  keywords: [
    "youtube to shorts script",
    "youtube video to shorts script ai",
    "youtube shorts script generator from transcript",
    "shorts from long video ai",
    "youtube shorts ideas generator",
  ],
})

export default function YouTubeToShortsScriptPage() {
  const breadcrumb = buildBreadcrumbJsonLd([
    { name: "RepurposeTube", url: "https://repurposetube.com" },
    { name: "YouTube to Shorts Script", url: "https://repurposetube.com/youtube-to-shorts-script" },
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
              badge: "YouTube → Shorts Scripts",
              headline: (
                <>
                  Turn One Long Video Into{" "}
                  <br />
                  <span className="text-amber-400">3 Shorts Scripts</span> Instantly
                </>
              ),
              subheadline:
                "Paste a YouTube URL and get three punchy 60-second scripts built from your video's best moments — hooks, delivery, and close included. Ready to film in under 60 seconds.",
            }}
            highlightSlug="shorts-scripts"
            faqItems={FAQ}
            finalCtaHeadline={
              <>
                Your long videos are hiding{" "}
                <br />
                <span className="text-amber-400">viral Shorts inside them</span>
              </>
            }
            finalCtaSubheadline="Let Remi find them and write the scripts for you."
          />
        </main>
        <Footer />
      </div>
    </>
  )
}
