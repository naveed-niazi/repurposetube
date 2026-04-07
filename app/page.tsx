import type { Metadata } from "next"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { LandingHero } from "@/components/landing/sections/LandingHero"
import { OutputFormatsGrid } from "@/components/landing/sections/OutputFormatsGrid"
import { BeforeAfter } from "@/components/landing/sections/BeforeAfter"
import { HowItWorks } from "@/components/landing/sections/HowItWorks"
import { DifferentiatorGrid } from "@/components/landing/sections/DifferentiatorGrid"
import { AudienceLinks } from "@/components/landing/sections/AudienceLinks"
import { CompareTeaser } from "@/components/landing/sections/CompareTeaser"
import { FaqSection } from "@/components/landing/sections/FaqSection"
import { FinalCta } from "@/components/landing/sections/FinalCta"
import { HOMEPAGE_FAQ } from "@/lib/landing-data"
import { buildFaqJsonLd, schemaWebSite, schemaOrganization, schemaWebApp } from "@/lib/seo"

export const metadata: Metadata = {
  title: {
    default: "RepurposeTube — Turn Any YouTube Video Into 6 Content Formats Instantly",
    template: "%s | RepurposeTube",
  },
  description:
    "Paste a YouTube URL and RepurposeTube generates a blog post, Twitter/X thread, LinkedIn post, YouTube SEO package, newsletter email, and Shorts scripts — all in parallel using AI. Free to start, no credit card needed.",
  keywords: [
    "youtube repurposing tool",
    "repurpose youtube video",
    "youtube to blog post",
    "youtube to twitter thread",
    "youtube to linkedin post",
    "youtube seo generator",
    "youtube content repurposing",
    "ai content repurposing tool",
    "youtube transcript to content",
    "youtube to newsletter",
    "youtube to shorts script",
  ],
  authors: [{ name: "RepurposeTube", url: "https://repurposetube.com" }],
  creator: "RepurposeTube",
  publisher: "RepurposeTube",
  metadataBase: new URL("https://repurposetube.com"),
  alternates: { canonical: "https://repurposetube.com" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://repurposetube.com",
    siteName: "RepurposeTube",
    title: "RepurposeTube — Turn Any YouTube Video Into 6 Content Formats Instantly",
    description:
      "Paste a YouTube URL and get a blog post, Twitter/X thread, LinkedIn post, YouTube SEO package, newsletter, and Shorts scripts — all generated in parallel. Free to start.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "RepurposeTube — One YouTube URL, 6 Content Formats, 60 Seconds" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@repurposetube",
    creator: "@repurposetube",
    title: "RepurposeTube — Turn Any YouTube Video Into 6 Content Formats",
    description: "One YouTube URL → 6 content formats in 60 seconds. Blog post, Twitter thread, LinkedIn post, YouTube SEO package, newsletter, and Shorts scripts.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 },
  },
}

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaWebSite) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrganization) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaWebApp) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildFaqJsonLd(HOMEPAGE_FAQ)) }} />

      <div className="flex min-h-screen flex-col">
        <Navbar variant="home" />
        <main className="flex-1">
          <LandingHero
            headline={
              <>
                One YouTube Video.
                <br />
                <span className="text-amber-400">Six Content Formats.</span>
                <br />
                Sixty Seconds.
              </>
            }
            subheadline="Paste a YouTube URL and get a blog post, Twitter thread, LinkedIn post, YouTube SEO package, newsletter, and Shorts scripts — all generated in parallel in under 60 seconds."
          />
          <OutputFormatsGrid withLinks />
          <BeforeAfter />
          <HowItWorks />
          <AudienceLinks />
          <DifferentiatorGrid />
          <CompareTeaser />
          <FaqSection items={HOMEPAGE_FAQ} />
          <FinalCta
            headline={
              <>
                Your next video deserves
                <br />
                more than one platform
              </>
            }
          />
        </main>
        <Footer />
      </div>
    </>
  )
}
