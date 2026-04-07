import type { Metadata } from "next"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { AudiencePageShell } from "@/components/landing/page-shells/AudiencePageShell"
import { buildPageMetadata, buildFaqJsonLd, buildBreadcrumbJsonLd } from "@/lib/seo"
import type { FaqItem } from "@/lib/landing-data"
import type { BenefitItem } from "@/components/landing/sections/BenefitList"
import {
  PenLine,
  TrendingUp,
  Mail,
  Layers,
  Globe,
  Clapperboard,
} from "lucide-react"

const BENEFITS: BenefitItem[] = [
  {
    icon: PenLine,
    headline: "Write less, publish everywhere",
    body: "Every video you make is already a blog post, a LinkedIn post, and a Twitter thread. RepurposeTube writes them all in 60 seconds so you can focus on the next video.",
  },
  {
    icon: TrendingUp,
    headline: "YouTube SEO that actually works",
    body: "Stop guessing at titles and descriptions. Get AI-written A/B titles, a full 5,000-character description, and 15 tags — all derived from what your video actually says.",
  },
  {
    icon: Mail,
    headline: "Build your email list from every upload",
    body: "Turn every video into a newsletter issue your subscribers look forward to. Paste the URL, get the email in 60 seconds — no blank page, no extra thinking.",
  },
  {
    icon: Clapperboard,
    headline: "3 Shorts scripts per long video",
    body: "Extract your best moments into ready-to-film 60-second scripts without watching your own video back. More uploads, less prep.",
  },
  {
    icon: Globe,
    headline: "Reach audiences who never visit YouTube",
    body: "LinkedIn professionals, Twitter communities, and email subscribers are completely separate audiences. RepurposeTube gets your knowledge in front of all of them — with the content you already made.",
  },
  {
    icon: Layers,
    headline: "One tool instead of six",
    body: "Replace your blog writer, social media copy tool, and email drafting workflow with a single RepurposeTube run. One URL. Six outputs. Done.",
  },
]

const FAQ: FaqItem[] = [
  {
    q: "How can YouTubers repurpose their videos without spending hours writing?",
    a: "Paste your YouTube URL into RepurposeTube. Remi reads the transcript and generates a blog post, Twitter thread, LinkedIn post, YouTube SEO package, newsletter, and Shorts scripts — all in under 60 seconds. No writing required.",
  },
  {
    q: "How do YouTubers grow on LinkedIn and Twitter without extra work?",
    a: "RepurposeTube writes platform-specific posts from each video you publish. After uploading to YouTube, paste the URL into RepurposeTube and get a LinkedIn post and Twitter thread ready to copy in 60 seconds.",
  },
  {
    q: "Can RepurposeTube help a YouTuber build an email list?",
    a: "Yes. Every RepurposeTube run includes a newsletter email — subject line, engaging body, and CTA — ready to send to your list. Many YouTubers use this to turn every video into a weekly newsletter issue.",
  },
  {
    q: "What YouTube channels does RepurposeTube work best for?",
    a: "Any YouTube channel where the creator shares knowledge, insights, tutorials, or commentary — educational content, business content, personal development, tech, finance, lifestyle, and more. If your video has substance, RepurposeTube can repurpose it.",
  },
  {
    q: "Is RepurposeTube free for YouTubers?",
    a: "Yes. There is a free plan — no credit card required. Start repurposing your first video today.",
  },
]

export const metadata: Metadata = buildPageMetadata({
  title: "Content Repurposing Tool for YouTubers — RepurposeTube",
  description:
    "Turn every YouTube video into a blog post, Twitter thread, LinkedIn post, YouTube SEO package, newsletter, and Shorts scripts — in 60 seconds. Built for YouTubers. Free to start.",
  canonical: "https://repurposetube.com/for-youtubers",
  keywords: [
    "youtube content repurposing for creators",
    "repurposing tool for youtubers",
    "youtube to blog post for youtubers",
    "how youtubers repurpose content",
    "youtube content strategy tool",
  ],
})

export default function ForYouTubersPage() {
  const breadcrumb = buildBreadcrumbJsonLd([
    { name: "RepurposeTube", url: "https://repurposetube.com" },
    { name: "For YouTubers", url: "https://repurposetube.com/for-youtubers" },
  ])
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildFaqJsonLd(FAQ)) }} />
      <div className="flex min-h-screen flex-col">
        <Navbar variant="page" />
        <main className="flex-1">
          <AudiencePageShell
            contentKey="youtubers"
            hero={{
              badge: "For YouTubers",
              headline: (
                <>
                  More Platforms. Same Video.{" "}
                  <br />
                  <span className="text-amber-400">No Extra Work.</span>
                </>
              ),
              subheadline:
                "RepurposeTube is built for YouTubers who want their best ideas reaching audiences beyond YouTube — without spending hours writing. Paste a URL, get 6 content formats in 60 seconds.",
            }}
            benefitsHeadline="Everything a YouTuber needs to grow beyond YouTube"
            benefitsSubheadline="Your video is already made. RepurposeTube handles everything that comes after."
            benefits={BENEFITS}
            faqItems={FAQ}
            finalCtaHeadline={
              <>
                Your next video is already{" "}
                <br />
                <span className="text-amber-400">6 pieces of content</span>
              </>
            }
            finalCtaSubheadline="Let Remi write them. Free to start."
          />
        </main>
        <Footer />
      </div>
    </>
  )
}
