import type { MetadataRoute } from "next"
import { SITE_URL } from "@/lib/seo"

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const routes: MetadataRoute.Sitemap = [
    // ── Homepage ──────────────────────────────────────────────────────────
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },

    // ── Core repurposing category page ────────────────────────────────────
    {
      url: `${SITE_URL}/repurpose-youtube-video`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },

    // ── Feature pages ─────────────────────────────────────────────────────
    {
      url: `${SITE_URL}/youtube-to-blog-post`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${SITE_URL}/youtube-to-twitter-thread`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${SITE_URL}/youtube-to-linkedin-post`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${SITE_URL}/youtube-seo-generator`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${SITE_URL}/youtube-to-newsletter`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/youtube-to-shorts-script`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/youtube-to-all-content-formats`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    // ── Audience pages ────────────────────────────────────────────────────
    {
      url: `${SITE_URL}/for-youtubers`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${SITE_URL}/for-solopreneurs`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${SITE_URL}/for-content-marketers`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.75,
    },

    // ── Comparison / roundup pages ────────────────────────────────────────
    {
      url: `${SITE_URL}/best-youtube-repurposing-tools`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/alternatives/castmagic-alternative`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${SITE_URL}/alternatives/repurpose-io-alternative`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${SITE_URL}/alternatives/autorepurpose-alternative`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.75,
    },

    // ── Company pages ─────────────────────────────────────────────────────
    {
      url: `${SITE_URL}/waitlist`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/pricing`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/privacy`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/terms`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ]

  return routes
}
