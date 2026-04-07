import type { Metadata } from "next"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { FeaturePageShell } from "@/components/landing/page-shells/FeaturePageShell"
import { buildPageMetadata, buildFaqJsonLd, buildBreadcrumbJsonLd } from "@/lib/seo"
import type { FaqItem } from "@/lib/landing-data"

const FAQ: FaqItem[] = [
  {
    q: "How does RepurposeTube convert a YouTube video into a newsletter email?",
    a: "Paste your YouTube URL. Remi fetches the full transcript, identifies the key ideas and insights, then writes a plain-text email with a subject line, engaging opening paragraph, value-dense body, and a clear CTA. The whole thing takes under 60 seconds.",
  },
  {
    q: "What email format does the newsletter output use?",
    a: "Plain text — the format that performs best in most email inboxes. It includes a subject line, intro hook, structured body paragraphs, and a closing CTA. Ready to paste into ConvertKit, Beehiiv, Mailchimp, or any email platform.",
  },
  {
    q: "Can I repurpose YouTube videos into newsletters regularly without extra work?",
    a: "Yes. Many creators use RepurposeTube to turn every video they publish into a weekly newsletter issue. Paste the URL after you upload, get your email draft in 60 seconds, make any tweaks, and send.",
  },
  {
    q: "What makes the newsletter different from the blog post output?",
    a: "The newsletter is written in a personal, conversational tone suited for email — shorter paragraphs, a direct subject line, and a CTA designed to drive a response or click. The blog post is structured for SEO with headings, longer-form copy, and keyword intent.",
  },
  {
    q: "Does the newsletter output include a subject line?",
    a: "Yes. Every newsletter output includes a click-worthy subject line generated from your video's core topic. You can edit it before sending.",
  },
  {
    q: "Is there a free plan?",
    a: "Yes. Get started for free — no credit card required.",
  },
]

export const metadata: Metadata = buildPageMetadata({
  title: "YouTube to Newsletter Email Generator — RepurposeTube",
  description:
    "Turn any YouTube video into a ready-to-send newsletter email in 60 seconds. RepurposeTube writes your subject line, intro, body, and CTA — free to start.",
  canonical: "https://repurposetube.com/youtube-to-newsletter",
  keywords: [
    "youtube to newsletter",
    "convert youtube video to email newsletter",
    "youtube to email newsletter ai",
    "repurpose youtube for newsletter",
    "youtube video to email content",
  ],
})

export default function YouTubeToNewsletterPage() {
  const breadcrumb = buildBreadcrumbJsonLd([
    { name: "RepurposeTube", url: "https://repurposetube.com" },
    { name: "YouTube to Newsletter", url: "https://repurposetube.com/youtube-to-newsletter" },
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
              badge: "YouTube → Newsletter Email",
              headline: (
                <>
                  Turn Your YouTube Video Into a{" "}
                  <br />
                  <span className="text-amber-400">Ready-to-Send Newsletter</span>
                </>
              ),
              subheadline:
                "Paste a YouTube URL and get a complete email — subject line, opening hook, body, and CTA — written in under 60 seconds. No writer's block, no blank-page paralysis.",
            }}
            highlightSlug="newsletter"
            faqItems={FAQ}
            finalCtaHeadline={
              <>
                Never stare at a blank{" "}
                <br />
                <span className="text-amber-400">newsletter draft</span> again
              </>
            }
            finalCtaSubheadline="Every video you publish is already a newsletter issue. Let Remi write it."
          />
        </main>
        <Footer />
      </div>
    </>
  )
}
