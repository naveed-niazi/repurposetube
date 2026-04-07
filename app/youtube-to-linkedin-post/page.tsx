import type { Metadata } from "next"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { FeaturePageShell } from "@/components/landing/page-shells/FeaturePageShell"
import { buildPageMetadata, buildFaqJsonLd, buildBreadcrumbJsonLd } from "@/lib/seo"
import type { FaqItem } from "@/lib/landing-data"

const FAQ: FaqItem[] = [
  {
    q: "How does RepurposeTube turn a YouTube video into a LinkedIn post?",
    a: "Paste your YouTube URL. Remi fetches the full transcript, extracts the most professional and valuable insights, then writes a long-form LinkedIn post — opening hook, structured body paragraphs, and a closing takeaway or CTA.",
  },
  {
    q: "How long is the LinkedIn post?",
    a: "Long-form — typically 800–1,200 characters, which is the sweet spot for LinkedIn reach. The post is written in the style that performs on LinkedIn: direct opening, value-first body, and a clear takeaway.",
  },
  {
    q: "Does the LinkedIn post sound like my voice?",
    a: "The post is derived from your own video content, so the ideas are yours. The tone is professional and platform-native. You can edit the output inline to match your exact voice before posting.",
  },
  {
    q: "Can I use RepurposeTube to grow my LinkedIn from my YouTube channel?",
    a: "Yes. Many creators use RepurposeTube to cross-post every video to LinkedIn, reaching a professional audience that often never visits YouTube. Paste the URL after publishing, get the post in 60 seconds, make any edits, and post.",
  },
  {
    q: "What makes a good LinkedIn post from a YouTube video?",
    a: "The best LinkedIn posts from video content lead with a provocative or insightful hook, deliver the main lesson in structured paragraphs, and end with a clear takeaway. RepurposeTube structures the post this way automatically.",
  },
  {
    q: "Is there a free plan?",
    a: "Yes. Get started for free — no credit card required.",
  },
]

export const metadata: Metadata = buildPageMetadata({
  title: "YouTube to LinkedIn Post Generator — RepurposeTube",
  description:
    "Turn any YouTube video into a professional LinkedIn post in 60 seconds. RepurposeTube writes your hook, body, and CTA — ready to post. Free to start.",
  canonical: "https://repurposetube.com/youtube-to-linkedin-post",
  keywords: [
    "youtube to linkedin post generator",
    "youtube video linkedin content",
    "youtube transcript to linkedin post ai",
    "repurpose youtube for linkedin",
    "youtube to linkedin post ai",
  ],
})

export default function YouTubeToLinkedInPostPage() {
  const breadcrumb = buildBreadcrumbJsonLd([
    { name: "RepurposeTube", url: "https://repurposetube.com" },
    { name: "YouTube to LinkedIn Post", url: "https://repurposetube.com/youtube-to-linkedin-post" },
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
              badge: "YouTube → LinkedIn Post",
              headline: (
                <>
                  Turn Any YouTube Video Into{" "}
                  <br />
                  a <span className="text-brand-400">High-Performing LinkedIn Post</span>
                </>
              ),
              subheadline:
                "Paste a YouTube URL and get a complete LinkedIn post — opening hook, structured body, and takeaway — in under 60 seconds. Reach a professional audience that never visits YouTube.",
            }}
            highlightSlug="linkedin-post"
            faqItems={FAQ}
            finalCtaHeadline={
              <>
                Your YouTube knowledge belongs{" "}
                <br />
                <span className="text-brand-400">on LinkedIn too</span>
              </>
            }
            finalCtaSubheadline="Let Remi write the post. You just hit publish."
          />
        </main>
        <Footer />
      </div>
    </>
  )
}
