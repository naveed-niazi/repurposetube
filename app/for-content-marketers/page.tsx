import type { Metadata } from "next"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { AudiencePageShell } from "@/components/landing/page-shells/AudiencePageShell"
import { buildPageMetadata, buildFaqJsonLd, buildBreadcrumbJsonLd } from "@/lib/seo"
import type { FaqItem } from "@/lib/landing-data"
import type { BenefitItem } from "@/components/landing/sections/BenefitList"
import {
  Zap,
  Users,
  PenLine,
  TrendingUp,
  Edit3,
  BarChart2,
} from "lucide-react"

const BENEFITS: BenefitItem[] = [
  {
    icon: Zap,
    headline: "Full campaign brief in 60 seconds",
    body: "Give Remi a client's YouTube URL and get a blog post, social copy, email, and Shorts scripts — the entire written campaign output — in under 60 seconds. No briefing writers, no waiting.",
  },
  {
    icon: Users,
    headline: "Scale without scaling headcount",
    body: "Handle 10x the content volume without 10x the writing time. Process multiple client videos per day without bottlenecks, dependencies, or approval delays.",
  },
  {
    icon: PenLine,
    headline: "Never start from a blank page",
    body: "Every piece of content derives from the video's actual transcript — no fabricated copy, no off-brand messaging. Clients get content that reflects what they actually said.",
  },
  {
    icon: TrendingUp,
    headline: "YouTube SEO included in every run",
    body: "Clients with YouTube channels get A/B titles, a full 5,000-character description, and 15 tags alongside their written content. One tool covers the whole workflow.",
  },
  {
    icon: Edit3,
    headline: "Editable outputs for every brand",
    body: "Every card is editable before you copy or deliver. Adapt tone, insert brand voice, add internal links — then hand off content that's ready to publish.",
  },
  {
    icon: BarChart2,
    headline: "Consistent cross-channel messaging",
    body: "All 6 outputs derive from the same source transcript. Blog, email, and social all stay on-message — no drift, no contradictions between channels.",
  },
]

const FAQ: FaqItem[] = [
  {
    q: "How can content marketers use RepurposeTube for client work?",
    a: "Paste a client's YouTube URL into RepurposeTube. Remi generates a blog post, Twitter thread, LinkedIn post, YouTube SEO package, newsletter email, and Shorts scripts in parallel within 60 seconds. Edit the outputs to match the client's brand voice, then deliver or publish directly.",
  },
  {
    q: "Can RepurposeTube handle multiple videos for multiple clients?",
    a: "Yes. RepurposeTube processes one video per run, and you can run as many videos as your plan allows. There is no limit on the number of clients or channels you work with.",
  },
  {
    q: "Does RepurposeTube work for B2B content marketing?",
    a: "Yes. The LinkedIn post and blog post outputs are particularly strong for B2B use cases — professional tone, structured arguments, and SEO-conscious writing. The YouTube SEO package is also valuable for B2B brands that publish educational YouTube content.",
  },
  {
    q: "How accurate is the generated content to the original video?",
    a: "RepurposeTube derives all content from the video's actual transcript, so the ideas and facts are grounded in what was said. The AI structures and rewrites the transcript into the correct format for each platform — it does not invent claims or pad content.",
  },
  {
    q: "Is there a free plan for content marketers?",
    a: "Yes. There is a free plan — no credit card required. Try it on a client video before committing to a paid plan.",
  },
]

export const metadata: Metadata = buildPageMetadata({
  title: "YouTube Content Repurposing Tool for Marketers — RepurposeTube",
  description:
    "Turn client YouTube videos into blog posts, social copy, newsletters, and YouTube SEO packages in 60 seconds. Scale content production without scaling headcount. Free to start.",
  canonical: "https://repurposetube.com/for-content-marketers",
  keywords: [
    "youtube marketing content generator",
    "content repurposing tool for marketers",
    "youtube to content marketing",
    "repurpose youtube for clients",
    "content marketing youtube tool",
  ],
})

export default function ForContentMarketersPage() {
  const breadcrumb = buildBreadcrumbJsonLd([
    { name: "RepurposeTube", url: "https://repurposetube.com" },
    { name: "For Content Marketers", url: "https://repurposetube.com/for-content-marketers" },
  ])
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildFaqJsonLd(FAQ)) }} />
      <div className="flex min-h-screen flex-col">
        <Navbar variant="page" />
        <main className="flex-1">
          <AudiencePageShell
            contentKey="content-marketers"
            hero={{
              badge: "For Content Marketers",
              headline: (
                <>
                  Turn One YouTube Video Into{" "}
                  <br />
                  <span className="text-brand-400">a Full Content Campaign</span>
                </>
              ),
              subheadline:
                "Paste a YouTube URL and get a complete written campaign — blog post, social copy, email, YouTube SEO package, and Shorts scripts — in under 60 seconds. Brief your team or publish directly.",
            }}
            benefitsHeadline="Built for marketers who need more content, faster"
            benefitsSubheadline="Every client video is a campaign brief waiting to happen. RepurposeTube writes it."
            benefits={BENEFITS}
            faqItems={FAQ}
            finalCtaHeadline={
              <>
                Turn every video into{" "}
                <br />
                <span className="text-brand-400">a full campaign in 60 seconds</span>
              </>
            }
            finalCtaSubheadline="Free plan. No credit card. Works on your first video today."
          />
        </main>
        <Footer />
      </div>
    </>
  )
}
