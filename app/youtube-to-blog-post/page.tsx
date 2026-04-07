import type { Metadata } from "next"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { FeaturePageShell } from "@/components/landing/page-shells/FeaturePageShell"
import { buildPageMetadata, buildFaqJsonLd, buildBreadcrumbJsonLd } from "@/lib/seo"
import type { FaqItem } from "@/lib/landing-data"

const FAQ: FaqItem[] = [
  {
    q: "How does RepurposeTube turn a YouTube video into a blog post?",
    a: "Paste your YouTube URL. Remi fetches the full transcript, structures it into a complete SEO article with an H1 title, H2/H3 headings, intro paragraph, body sections, and conclusion — 800 to 1,200 words. Delivered in under 60 seconds.",
  },
  {
    q: "Is the blog post SEO-optimised?",
    a: "Yes. The article is structured for search — proper heading hierarchy, keyword-natural body copy derived from your video's actual content, and a clear intro/outro. You can paste it directly into WordPress, Ghost, Webflow, or any CMS.",
  },
  {
    q: "How long is the generated blog post?",
    a: "800 to 1,200 words for most videos, which is the ideal length for SEO-focused articles. Longer, more content-dense videos may produce longer output.",
  },
  {
    q: "What does the blog post structure look like?",
    a: "The article includes: an SEO-optimised title, a one-paragraph intro that frames the topic, 3–5 H2 sections each covering a key point from your video, and a conclusion paragraph with a takeaway or CTA.",
  },
  {
    q: "Do I need to manually transcribe the video first?",
    a: "No. RepurposeTube fetches the transcript automatically from YouTube. You just paste the URL — no transcription work, no copy-paste, no prep.",
  },
  {
    q: "Can I edit the blog post before publishing?",
    a: "Yes. Every output card is directly editable on the results page. Add your brand voice, insert internal links, or refine sections before you copy to your CMS.",
  },
  {
    q: "Is there a free plan?",
    a: "Yes. Get started for free — no credit card required.",
  },
]

export const metadata: Metadata = buildPageMetadata({
  title: "YouTube to Blog Post Generator — RepurposeTube",
  description:
    "Turn any YouTube video into a full SEO blog post in 60 seconds. RepurposeTube generates an 800–1,200 word article with headings, intro, and conclusion — free to start.",
  canonical: "https://repurposetube.com/youtube-to-blog-post",
  keywords: [
    "youtube to blog post generator",
    "youtube transcript to blog post",
    "convert youtube video to blog post",
    "youtube to article generator",
    "turn youtube video into blog post",
  ],
})

export default function YouTubeToBlogPostPage() {
  const breadcrumb = buildBreadcrumbJsonLd([
    { name: "RepurposeTube", url: "https://repurposetube.com" },
    { name: "YouTube to Blog Post", url: "https://repurposetube.com/youtube-to-blog-post" },
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
              badge: "YouTube → Blog Post",
              headline: (
                <>
                  Turn Any YouTube Video Into{" "}
                  <br />
                  a <span className="text-brand-400">Full SEO Blog Post</span>
                </>
              ),
              subheadline:
                "Paste a YouTube URL and get an 800–1,200 word article with headings, intro, and conclusion — structured for search and ready to publish in under 60 seconds.",
            }}
            highlightSlug="blog-post"
            faqItems={FAQ}
            finalCtaHeadline={
              <>
                Every video you make is{" "}
                <br />
                <span className="text-brand-400">already a blog post</span>
              </>
            }
            finalCtaSubheadline="Stop leaving SEO traffic on the table. Let Remi write the article for you."
          />
        </main>
        <Footer />
      </div>
    </>
  )
}
