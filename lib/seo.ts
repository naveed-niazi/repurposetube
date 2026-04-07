import type { Metadata } from "next"
import type { FaqItem } from "./landing-data"

export const SITE_URL = "https://repurposetube.com"
const SITE_NAME = "RepurposeTube"
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`
const TWITTER_HANDLE = "@repurposetube"

// ─── Metadata builder ────────────────────────────────────────────────────────

export function buildPageMetadata(opts: {
  title: string
  description: string
  canonical: string
  keywords?: string[]
  ogImage?: string
  ogImageAlt?: string
}): Metadata {
  const image = opts.ogImage ?? DEFAULT_OG_IMAGE
  const imageAlt = opts.ogImageAlt ?? opts.title
  return {
    title: opts.title,
    description: opts.description,
    keywords: opts.keywords,
    authors: [{ name: SITE_NAME, url: SITE_URL }],
    creator: SITE_NAME,
    publisher: SITE_NAME,
    alternates: {
      canonical: opts.canonical,
      languages: { "en-US": opts.canonical },
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: opts.canonical,
      siteName: SITE_NAME,
      title: opts.title,
      description: opts.description,
      images: [{ url: image, width: 1200, height: 630, alt: imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      site: TWITTER_HANDLE,
      creator: TWITTER_HANDLE,
      title: opts.title,
      description: opts.description,
      images: [image],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  }
}

// ─── JSON-LD factories ───────────────────────────────────────────────────────

export function buildFaqJsonLd(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  }
}

export function buildBreadcrumbJsonLd(crumbs: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: c.url,
    })),
  }
}

// ─── Site-level schemas (homepage only) ─────────────────────────────────────

export const schemaWebSite = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
  description:
    "AI-powered tool that turns any YouTube video into 6 content formats — blog post, Twitter thread, LinkedIn post, YouTube SEO package, newsletter email, and Shorts scripts — in 60 seconds.",
  potentialAction: {
    "@type": "SearchAction",
    target: `${SITE_URL}/dashboard?url={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
}

export const schemaOrganization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  sameAs: [`https://twitter.com/repurposetube`],
}

export const schemaWebApp = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: SITE_NAME,
  url: SITE_URL,
  applicationCategory: "ProductivityApplication",
  operatingSystem: "Web",
  description:
    "Paste a YouTube URL and get a blog post, Twitter/X thread, LinkedIn post, YouTube SEO package, newsletter email, and Shorts scripts — all generated in parallel by AI.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    description: "Free plan available. No credit card required.",
  },
  featureList: [
    "YouTube to Blog Post Generator",
    "YouTube to Twitter Thread Generator",
    "YouTube to LinkedIn Post Generator",
    "YouTube SEO Title and Description Generator",
    "YouTube to Newsletter Email Generator",
    "YouTube to Shorts Script Generator",
    "Parallel AI content generation",
    "Inline editing and per-card regeneration",
  ],
}
