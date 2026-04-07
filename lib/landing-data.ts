import {
  FileText,
  MessageSquare,
  Briefcase,
  TrendingUp,
  Mail,
  Clapperboard,
  Link2,
  Layers,
  Zap,
  Edit3,
  RefreshCw,
} from "lucide-react"
import type { ElementType } from "react"

// ─── Types ──────────────────────────────────────────────────────────────────

export interface OutputFormat {
  icon: ElementType
  label: string
  /** Keyword-rich label used as anchor text in links, e.g. "YouTube to Blog Post" */
  fullLabel: string
  iconColor: string
  iconBg: string
  description: string
  href: string
  slug: string
}

export interface BeforeAfterRow {
  task: string
  time: string
}

export interface Step {
  n: string
  title: string
  body: string
}

export interface Differentiator {
  icon: ElementType
  title: string
  body: string
}

export interface FaqItem {
  q: string
  a: string
}

// ─── Output formats ─────────────────────────────────────────────────────────

export const OUTPUT_FORMATS: OutputFormat[] = [
  {
    icon: FileText,
    label: "Blog Post",
    fullLabel: "YouTube to Blog Post",
    iconColor: "text-blue-600",
    iconBg: "bg-blue-50",
    slug: "blog-post",
    href: "/youtube-to-blog-post",
    description:
      "Complete SEO-ready article with title, H2/H3 headings, intro, body sections, and conclusion. 800–1200 words. Ready to drop into WordPress or your CMS.",
  },
  {
    icon: MessageSquare,
    label: "Twitter / X Thread",
    fullLabel: "YouTube to Twitter Thread",
    iconColor: "text-sky-600",
    iconBg: "bg-sky-50",
    slug: "twitter-thread",
    href: "/youtube-to-twitter-thread",
    description:
      "A scroll-stopping hook tweet, 8–10 numbered insight tweets, and a CTA closer. Formatted and ready to post in one go.",
  },
  {
    icon: Briefcase,
    label: "LinkedIn Post",
    fullLabel: "YouTube to LinkedIn Post",
    iconColor: "text-indigo-600",
    iconBg: "bg-indigo-50",
    slug: "linkedin-post",
    href: "/youtube-to-linkedin-post",
    description:
      "Long-form professional post with an opening hook, value-packed body, and clear takeaway — written in the voice that actually performs on LinkedIn.",
  },
  {
    icon: TrendingUp,
    label: "YouTube SEO Package",
    fullLabel: "YouTube SEO Generator",
    iconColor: "text-brand-600",
    iconBg: "bg-brand-50",
    slug: "youtube-seo",
    href: "/youtube-seo-generator",
    description:
      "Two A/B title options optimised for click-through rate, a full 5,000-character keyword-rich description, and 15 targeted tags — from your actual video content.",
  },
  {
    icon: Mail,
    label: "Newsletter Email",
    fullLabel: "YouTube to Newsletter",
    iconColor: "text-emerald-600",
    iconBg: "bg-emerald-50",
    slug: "newsletter",
    href: "/youtube-to-newsletter",
    description:
      "A plain-text email with a click-worthy subject line, engaging opening, value-dense body, and clear CTA. Drop it straight into your email platform.",
  },
  {
    icon: Clapperboard,
    label: "Shorts Scripts",
    fullLabel: "YouTube to Shorts Scripts",
    iconColor: "text-violet-600",
    iconBg: "bg-violet-50",
    slug: "shorts-scripts",
    href: "/youtube-to-shorts-script",
    description:
      "Three 60-second scripts built around your sharpest moments. Each has a strong hook, fast-paced delivery, and a punchy close.",
  },
]

// ─── Before / After rows ────────────────────────────────────────────────────

export const BEFORE_AFTER_ROWS: BeforeAfterRow[] = [
  { task: "Write blog post", time: "~90 min" },
  { task: "Draft Twitter/X thread", time: "~30 min" },
  { task: "Write LinkedIn post", time: "~30 min" },
  { task: "Research & write YouTube description", time: "~45 min" },
  { task: "Draft newsletter email", time: "~45 min" },
  { task: "Write 3 Shorts scripts", time: "~45 min" },
]

// ─── How it works steps ─────────────────────────────────────────────────────

export const HOW_IT_WORKS_STEPS: Step[] = [
  {
    n: "01",
    title: "Paste your YouTube URL",
    body: "Any public YouTube video with captions works. No downloads, no file uploads, no prep — just the URL.",
  },
  {
    n: "02",
    title: "Remi reads your video",
    body: "Our AI fetches the full transcript and analyses your video's structure, main arguments, key moments, and best quotes.",
  },
  {
    n: "03",
    title: "Collect your content",
    body: "All 6 formats generate in parallel, usually within 60 seconds. Edit inline, regenerate what you don't like, then copy or download.",
  },
]

// ─── Differentiators ────────────────────────────────────────────────────────

export const DIFFERENTIATORS: Differentiator[] = [
  {
    icon: Link2,
    title: "URL-native, not upload-native",
    body: "Just paste a YouTube link. No file downloads, no transcript prep. RepurposeTube fetches everything automatically.",
  },
  {
    icon: Layers,
    title: "All 6 formats in one run",
    body: "Stop paying for 6 different tools. One video in, six polished outputs out — every time.",
  },
  {
    icon: TrendingUp,
    title: "YouTube SEO baked in",
    body: "The only repurposing tool that generates A/B titles, a full 5,000-character description, and 15 tags as part of the same workflow.",
  },
  {
    icon: Zap,
    title: "Parallel AI generation",
    body: "Everything runs at the same time. 60 seconds for most videos — not 10 minutes of watching a spinner.",
  },
  {
    icon: Edit3,
    title: "Inline editing on every card",
    body: "Every output is directly editable before you copy or download. Your edits are preserved until you explicitly reset.",
  },
  {
    icon: RefreshCw,
    title: "Per-card regeneration",
    body: "Not happy with one output? Hit regenerate on that card alone — no need to reprocess the whole video.",
  },
]

// ─── Homepage FAQ ────────────────────────────────────────────────────────────

export const HOMEPAGE_FAQ: FaqItem[] = [
  {
    q: "What YouTube videos work with RepurposeTube?",
    a: "Any public YouTube video with captions or subtitles enabled — including auto-generated captions. Private, age-restricted, and caption-disabled videos are not supported.",
  },
  {
    q: "How do I repurpose a YouTube video into a blog post?",
    a: "Paste the YouTube URL into RepurposeTube. Remi fetches the transcript, structures it into a full SEO article with headings, intro, and conclusion, and delivers it within 60 seconds. No manual writing required.",
  },
  {
    q: "How long does it take to generate all 6 formats?",
    a: "All 6 content types generate in parallel, so you typically get everything within 60 seconds. Longer videos may take a little more time for transcript processing.",
  },
  {
    q: "What makes RepurposeTube different from Castmagic?",
    a: "Castmagic is podcast-first and requires you to upload audio files. RepurposeTube is YouTube-native — just paste a URL. We also include the YouTube SEO package (A/B titles, full description, 15 tags) which no other repurposing tool offers as part of its core workflow.",
  },
  {
    q: "Can RepurposeTube generate YouTube titles and descriptions?",
    a: "Yes — that is one of the 6 outputs. RepurposeTube generates two A/B title options optimised for click-through rate, a full 5,000-character keyword-rich video description, and 15 targeted tags. All derived from your actual video content.",
  },
  {
    q: "What is content atomization for YouTubers?",
    a: "Content atomization means turning one piece of content into multiple smaller, platform-specific pieces. For a YouTuber, that means one video becomes a blog post, a Twitter thread, a LinkedIn post, a newsletter, and Shorts scripts — instead of creating each from scratch. RepurposeTube automates this entire process.",
  },
  {
    q: "Can I edit the generated content?",
    a: "Yes. Every output card is directly editable on the results page. Make any tweaks before you copy or download. Edits are preserved until you explicitly reset or regenerate.",
  },
  {
    q: "Is there a free plan?",
    a: "Yes. Get started for free — no credit card required. The free plan includes a limited number of video repurposing jobs per month.",
  },
]
