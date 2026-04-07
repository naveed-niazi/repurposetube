/**
 * Page-specific content for each landing page.
 * Imported by page shells to swap out the generic HowItWorks, DifferentiatorGrid,
 * and BeforeAfter sections so every page has unique body content for SEO.
 */
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
  Hash,
  Tag,
  Clock,
  AlignLeft,
  BarChart2,
  Globe,
  Video,
} from "lucide-react"
import type { Step, Differentiator, BeforeAfterRow } from "./landing-data"

// ─── Feature page content ────────────────────────────────────────────────────

interface FeatureContent {
  howItWorksHeadline: string
  howItWorksSubheadline: string
  steps: Step[]
  differentiatorHeadline: string
  differentiatorSubheadline?: string
  differentiators: Differentiator[]
}

export const FEATURE_CONTENT: Record<string, FeatureContent> = {

  "blog-post": {
    howItWorksHeadline: "From YouTube URL to published blog post in 60 seconds",
    howItWorksSubheadline: "No transcription work. No blank page. No formatting time.",
    steps: [
      {
        n: "01",
        title: "Paste your YouTube URL",
        body: "Any public video with captions or auto-generated subtitles works. No downloads, no transcript prep — just the URL.",
      },
      {
        n: "02",
        title: "Remi reads and structures your content",
        body: "Remi reads the full transcript, identifies your main thesis, key arguments, supporting examples, and conclusion — then structures them into a proper article framework.",
      },
      {
        n: "03",
        title: "Your SEO blog post is ready",
        body: "An 800–1,200 word article with an optimised H1 title, H2/H3 sections, intro paragraph, body covering every key point, and a conclusion — ready for WordPress, Ghost, or any CMS.",
      },
    ],
    differentiatorHeadline: "Why RepurposeTube blog posts rank",
    differentiatorSubheadline: "Not a transcript dump — a properly structured SEO article built from what you actually said.",
    differentiators: [
      {
        icon: FileText,
        title: "Proper heading structure (H1 → H2 → H3)",
        body: "Not a wall of paragraphs. Your article has a real heading hierarchy that Google reads, indexes, and rewards in search.",
      },
      {
        icon: BarChart2,
        title: "800–1,200 words — the SEO sweet spot",
        body: "Long enough to rank for competitive queries, focused enough to keep readers engaged. Not padded with filler to hit a target.",
      },
      {
        icon: MessageSquare,
        title: "Intro, body, and conclusion — every time",
        body: "Every article opens with context, covers your key points in sequence, and closes with a clear takeaway. No missing sections.",
      },
      {
        icon: TrendingUp,
        title: "Derived from your actual transcript",
        body: "No hallucinated claims. The article is built from what you actually said — every argument reflects what's in the video.",
      },
      {
        icon: Edit3,
        title: "Editable before you publish",
        body: "Every output card is directly editable. Add internal links, adjust brand voice, or insert a CTA before copying to your CMS.",
      },
      {
        icon: Link2,
        title: "YouTube-native: URL in, blog post out",
        body: "No file upload, no transcript copy-paste. Paste the YouTube URL and get the article — that's the entire workflow.",
      },
    ],
  },

  "twitter-thread": {
    howItWorksHeadline: "YouTube URL to a ready-to-post Twitter thread in 60 seconds",
    howItWorksSubheadline: "Pre-numbered, hook-first, CTA-closed — formatted exactly how Twitter audiences expect.",
    steps: [
      {
        n: "01",
        title: "Paste your YouTube URL",
        body: "Any public video with captions. No file prep, no copy-paste — just the link.",
      },
      {
        n: "02",
        title: "Remi finds your most tweetable moments",
        body: "Remi scans the full transcript for your sharpest insights, quotable lines, and strongest arguments — the content that makes people stop scrolling on X.",
      },
      {
        n: "03",
        title: "Your thread drops ready to post",
        body: "A hook tweet built for engagement, 8–10 numbered insight tweets, and a CTA closer — pre-formatted and ready to schedule with any Twitter scheduling tool.",
      },
    ],
    differentiatorHeadline: "What makes a RepurposeTube Twitter thread perform",
    differentiatorSubheadline: "Not a bulleted summary — a thread engineered for the X/Twitter feed.",
    differentiators: [
      {
        icon: MessageSquare,
        title: "Hook tweet built to stop the scroll",
        body: "The first tweet is engineered to earn the 'Show thread' click. It teases the insight without giving it away.",
      },
      {
        icon: Layers,
        title: "8–10 tweets — the proven thread length",
        body: "Long enough to deliver real value, short enough to read in one sitting. Not padded, not truncated.",
      },
      {
        icon: Hash,
        title: "Pre-numbered formatting (1/10, 2/10...)",
        body: "Every tweet is pre-numbered so you can post directly without restructuring. Just copy and schedule.",
      },
      {
        icon: Zap,
        title: "CTA closer that converts readers",
        body: "Every thread ends with a clear call-to-action — follow, subscribe, visit, or click. No missed conversion opportunity.",
      },
      {
        icon: FileText,
        title: "Based on your actual transcript",
        body: "Every insight in the thread is something you actually said on camera. No invented quotes, no off-brand messaging.",
      },
      {
        icon: TrendingUp,
        title: "From video to scheduled thread in 60 seconds",
        body: "Paste the URL right after you publish your video and have your thread ready to schedule before you close the tab.",
      },
    ],
  },

  "linkedin-post": {
    howItWorksHeadline: "YouTube URL to a professional LinkedIn post in 60 seconds",
    howItWorksSubheadline: "Written for LinkedIn's voice, not repurposed from a blog post or tweet thread.",
    steps: [
      {
        n: "01",
        title: "Paste your YouTube URL",
        body: "Any public video with captions. No file prep — just the link.",
      },
      {
        n: "02",
        title: "Remi adapts your content for LinkedIn's voice",
        body: "Remi doesn't just summarise — it rewrites your ideas in the professional, insight-led tone that earns engagement on LinkedIn specifically. Not a blog post, not a tweet — a LinkedIn post.",
      },
      {
        n: "03",
        title: "Your LinkedIn post is ready",
        body: "A professional opening hook, structured body paragraphs building to a clear insight, and a closing takeaway — formatted for LinkedIn's algorithm and written for its audience.",
      },
    ],
    differentiatorHeadline: "What makes a RepurposeTube LinkedIn post perform",
    differentiatorSubheadline: "LinkedIn punishes generic repurposing. RepurposeTube writes specifically for it.",
    differentiators: [
      {
        icon: Briefcase,
        title: "LinkedIn-native voice, not a transcript summary",
        body: "Written for how LinkedIn users consume content — professional, insight-led, structured around a clear point of view.",
      },
      {
        icon: TrendingUp,
        title: "Opening hook built for the feed",
        body: "The first 1–2 lines are crafted to earn the 'see more' click in LinkedIn's compressed feed view. That's where engagement is won.",
      },
      {
        icon: AlignLeft,
        title: "Long-form format LinkedIn's algorithm rewards",
        body: "Structured paragraphs, clear progression of ideas, and a conclusion that positions you as a thought leader — not just a content sharer.",
      },
      {
        icon: Edit3,
        title: "Editable to match your brand voice",
        body: "Adjust the tone, add your personal angle, or insert a specific CTA before publishing. Every card is directly editable.",
      },
      {
        icon: MessageSquare,
        title: "Consistent with your video's message",
        body: "The LinkedIn post and your video say the same thing — your audience on both platforms gets the same expert positioning.",
      },
      {
        icon: Link2,
        title: "YouTube URL in — LinkedIn post out",
        body: "No briefing a copywriter, no prompt engineering. Paste the URL and have your LinkedIn post in 60 seconds.",
      },
    ],
  },

  "youtube-seo": {
    howItWorksHeadline: "YouTube URL to a full SEO package in 60 seconds",
    howItWorksSubheadline: "Titles, description, and 15 tags — all derived from what your video actually covers.",
    steps: [
      {
        n: "01",
        title: "Paste your YouTube URL",
        body: "Works on any public video with captions — including drafts you've uploaded but not yet published.",
      },
      {
        n: "02",
        title: "Remi analyses your video for search intent",
        body: "Remi reads the full transcript to understand your video's core topic, how viewers search for it, and what language your audience uses — transcript-based, not guesswork.",
      },
      {
        n: "03",
        title: "Your full SEO package is delivered",
        body: "Two A/B title options optimised for CTR, a full 5,000-character keyword-rich description, and 15 targeted tags — all from what your video actually covers.",
      },
    ],
    differentiatorHeadline: "Why RepurposeTube's YouTube SEO package works",
    differentiatorSubheadline: "The only repurposing tool that bundles YouTube SEO into the same workflow as your written content.",
    differentiators: [
      {
        icon: TrendingUp,
        title: "Two A/B title options — test what performs",
        body: "Don't publish blind. Get two distinct approaches — curiosity-driven and value-driven — and let the data tell you which drives more clicks.",
      },
      {
        icon: FileText,
        title: "5,000 characters of keyword-rich description",
        body: "YouTube gives you 5,000 characters of indexable text. Remi fills it with natural-language copy covering your video's full topic — not keyword soup.",
      },
      {
        icon: Tag,
        title: "15 targeted tags from your actual transcript",
        body: "Not generic tags scraped from similar videos. Tags derived from what you specifically cover — the exact words your audience searches.",
      },
      {
        icon: Zap,
        title: "CTR-optimised title formulas",
        body: "Every title option uses proven structures — specific numbers, clear outcomes, or curiosity gaps — that YouTube audiences actually click on.",
      },
      {
        icon: MessageSquare,
        title: "Transcript-based, not fabricated",
        body: "Every keyword and tag reflects what your video genuinely covers. No mismatch between your title promise and your content.",
      },
      {
        icon: RefreshCw,
        title: "Included in every repurposing run",
        body: "You don't run YouTube SEO separately. Every time you repurpose a video, the full SEO package is included alongside your blog post and social copy.",
      },
    ],
  },

  "newsletter": {
    howItWorksHeadline: "YouTube URL to a ready-to-send newsletter in 60 seconds",
    howItWorksSubheadline: "Subject line, opening hook, body, and CTA — written for the inbox, not adapted from a blog post.",
    steps: [
      {
        n: "01",
        title: "Paste your YouTube URL",
        body: "Any public video with captions. No file prep — just the link.",
      },
      {
        n: "02",
        title: "Remi extracts the ideas worth sharing by email",
        body: "Remi reads the transcript and identifies the key insights, memorable examples, and actionable takeaways your subscribers actually want in their inbox — not a summary of everything.",
      },
      {
        n: "03",
        title: "Your newsletter is ready to send",
        body: "A click-worthy subject line, an opening hook that earns the read, a value-dense body with clear takeaways, and a closing CTA — ready for ConvertKit, Beehiiv, Mailchimp, or any platform.",
      },
    ],
    differentiatorHeadline: "What makes a RepurposeTube newsletter work",
    differentiatorSubheadline: "Not a blog post pasted into an email. Written specifically for how people read in their inbox.",
    differentiators: [
      {
        icon: Mail,
        title: "Subject line engineered to earn the open",
        body: "Not a title copy-paste from your video. A subject line built for the inbox — specific, curious, and click-worthy.",
      },
      {
        icon: MessageSquare,
        title: "Email-native tone, not a blog post in email form",
        body: "Conversational, personal, written for the inbox. Your subscribers get a different experience from the blog post, even though it's the same video.",
      },
      {
        icon: FileText,
        title: "Plain-text format that delivers in every inbox",
        body: "Works across all email clients without HTML rendering issues. Clean, readable, reliably delivered — no formatting surprises.",
      },
      {
        icon: TrendingUp,
        title: "Opening hook designed to keep subscribers reading",
        body: "The first sentence answers 'why should I read this today' — so subscribers don't stop at the preview text.",
      },
      {
        icon: Layers,
        title: "Consistent with your video's message",
        body: "Your email and video cover the same ideas. Subscribers who watch get depth; those who only read still get full value.",
      },
      {
        icon: RefreshCw,
        title: "A newsletter issue for every video you publish",
        body: "Never run out of email content again. Every video you record is already a newsletter issue — Remi just writes it.",
      },
    ],
  },

  "shorts-scripts": {
    howItWorksHeadline: "YouTube URL to 3 Shorts scripts in 60 seconds",
    howItWorksSubheadline: "Hook-first, timed under 60 seconds, ready to film — extracted from your long-form without re-watching.",
    steps: [
      {
        n: "01",
        title: "Paste your YouTube URL",
        body: "Works on any long-form video with captions. The more content your video has, the more Shorts-worthy moments Remi finds.",
      },
      {
        n: "02",
        title: "Remi extracts your 3 best Shorts moments",
        body: "Remi scans the entire transcript for punchy insights, surprising angles, and quotable moments that can stand alone as 60-second vertical content — no re-watching required.",
      },
      {
        n: "03",
        title: "Three ready-to-film scripts are delivered",
        body: "Each script includes a strong 2-second hook, fast-paced delivery notes, the core insight, and a punchy close — all timed under 60 seconds and formatted for YouTube Shorts.",
      },
    ],
    differentiatorHeadline: "What makes RepurposeTube Shorts scripts perform",
    differentiatorSubheadline: "Not a trimmed transcript — each script is engineered for Shorts' algorithm and viewer behaviour.",
    differentiators: [
      {
        icon: Clapperboard,
        title: "3 scripts per video — 3× your Shorts output",
        body: "One long video becomes three distinct Shorts concepts. Each stands alone — no context needed from the long-form.",
      },
      {
        icon: Zap,
        title: "2-second hook engineered to retain viewers",
        body: "Shorts retention is won or lost in the first 2 seconds. Every script opens with a hook designed to stop the swipe.",
      },
      {
        icon: Clock,
        title: "Under 60 seconds — the Shorts sweet spot",
        body: "Every script is timed for the algorithm. Within the range YouTube rewards, not over or under.",
      },
      {
        icon: Video,
        title: "No re-watching your own video",
        body: "Remi finds your best moments so you don't have to scrub through footage. See the scripts, film the clips.",
      },
      {
        icon: MessageSquare,
        title: "Each script is self-contained",
        body: "Your Short doesn't need the long-form for context. Every script delivers a complete, standalone idea.",
      },
      {
        icon: TrendingUp,
        title: "A week of Shorts from one recording session",
        body: "3 Shorts scripts per long video means consistent Short-form publishing without extra recording time.",
      },
    ],
  },
}

// ─── Audience page content ───────────────────────────────────────────────────

interface AudienceContent {
  howItWorksHeadline: string
  howItWorksSubheadline: string
  steps: Step[]
  beforeAfterHeadline: string
  beforeAfterSubheadline: string
  beforeAfterRows: BeforeAfterRow[]
  beforeAfterTotal: string
}

export const AUDIENCE_CONTENT: Record<string, AudienceContent> = {

  "youtubers": {
    howItWorksHeadline: "Repurpose every video in 60 seconds — before you even start editing the next",
    howItWorksSubheadline: "Fits naturally into your upload workflow. No extra tools, no extra thinking.",
    steps: [
      {
        n: "01",
        title: "Upload your video to YouTube as usual",
        body: "Publish your video normally. Once it's live with captions enabled, copy the URL — that's all the prep RepurposeTube needs.",
      },
      {
        n: "02",
        title: "Paste the URL and let Remi work",
        body: "Remi fetches the transcript and generates all 6 formats in parallel. You can close the tab, go for a walk, or start your next video while it runs.",
      },
      {
        n: "03",
        title: "Six pieces of content, ready to publish",
        body: "Blog post, Twitter thread, LinkedIn post, YouTube SEO package, newsletter email, and 3 Shorts scripts — all ready to copy and publish across every channel.",
      },
    ],
    beforeAfterHeadline: "How much time repurposing costs YouTubers who do it manually",
    beforeAfterSubheadline: "Most YouTubers skip repurposing entirely because it takes too long. That's the gap RepurposeTube closes.",
    beforeAfterRows: [
      { task: "Write SEO blog post from video", time: "~90 min" },
      { task: "Research & write YouTube description", time: "~45 min" },
      { task: "Create Twitter/X thread", time: "~30 min" },
      { task: "Write LinkedIn post", time: "~30 min" },
      { task: "Draft newsletter email", time: "~45 min" },
      { task: "Write 3 YouTube Shorts scripts", time: "~45 min" },
    ],
    beforeAfterTotal: "~5 hours",
  },

  "solopreneurs": {
    howItWorksHeadline: "One recording session. Six channels of content. Zero writing time.",
    howItWorksSubheadline: "The whole solo creator content workflow, automated from a single URL.",
    steps: [
      {
        n: "01",
        title: "Paste any YouTube URL — yours or a niche video",
        body: "RepurposeTube works on any public video with captions. Use it on your own content or curate from authoritative videos in your niche.",
      },
      {
        n: "02",
        title: "Remi replaces your entire content team",
        body: "No prompts, no templates, no editing briefs. Your blog writer, social media tool, and email drafting workflow are all replaced in a single 60-second run.",
      },
      {
        n: "03",
        title: "Edit, copy, and publish — done",
        body: "Six editable outputs arrive ready. Tweak the tone or add a link, then copy directly to your CMS, Buffer, Beehiiv — wherever your content lives.",
      },
    ],
    beforeAfterHeadline: "What content production costs a solopreneur who does it manually",
    beforeAfterSubheadline: "Solopreneurs skip content channels not because they don't want them — because the hours don't exist.",
    beforeAfterRows: [
      { task: "Write blog post for SEO traffic", time: "~3 hours" },
      { task: "Create social copy for all platforms", time: "~90 min" },
      { task: "Draft weekly email newsletter", time: "~60 min" },
      { task: "Write YouTube description + tags", time: "~45 min" },
      { task: "Write Shorts scripts from long video", time: "~45 min" },
      { task: "Cross-adapt content per platform", time: "~30 min" },
    ],
    beforeAfterTotal: "~8 hours",
  },

  "content-marketers": {
    howItWorksHeadline: "Client video in. Full written campaign out. In 60 seconds.",
    howItWorksSubheadline: "Handles the writing workflow so your team can handle strategy, clients, and quality.",
    steps: [
      {
        n: "01",
        title: "Paste the client's YouTube URL",
        body: "Works on any public video with captions — client channels, brand accounts, or industry thought leader videos you're curating content from.",
      },
      {
        n: "02",
        title: "Remi generates the complete written deliverable set",
        body: "Blog post, Twitter thread, LinkedIn post, YouTube SEO package, newsletter email, and Shorts scripts — the full written output for a content campaign — all in one parallel run.",
      },
      {
        n: "03",
        title: "Review, apply brand voice, and deliver",
        body: "Every output is editable before you copy or export. Insert the client's brand voice, add internal links, adjust the tone — then deliver or publish directly.",
      },
    ],
    beforeAfterHeadline: "What client content production costs an agency or marketer manually",
    beforeAfterSubheadline: "RepurposeTube doesn't replace your strategic work — it removes the writing bottleneck so you can take on more.",
    beforeAfterRows: [
      { task: "Brief a writer for client blog post", time: "~2 hrs + wait" },
      { task: "Draft client social media copy", time: "~90 min" },
      { task: "Write client newsletter email", time: "~90 min" },
      { task: "Create YouTube SEO package for client", time: "~60 min" },
      { task: "Write client Shorts scripts", time: "~60 min" },
      { task: "Review and revise all deliverables", time: "~2 hours" },
    ],
    beforeAfterTotal: "~8+ hours",
  },
}

// ─── Comparison page content ─────────────────────────────────────────────────

interface ComparisonContent {
  differentiatorHeadline: string
  differentiatorSubheadline: string
  differentiators: Differentiator[]
}

export const COMPARISON_CONTENT: Record<string, ComparisonContent> = {

  "castmagic": {
    differentiatorHeadline: "What RepurposeTube does that Castmagic doesn't",
    differentiatorSubheadline: "Castmagic is built for podcasters. RepurposeTube is built for YouTubers. The difference goes beyond URL vs. file upload.",
    differentiators: [
      {
        icon: Link2,
        title: "YouTube URL-native — no audio download required",
        body: "Castmagic requires you to download your video's audio file before repurposing it. RepurposeTube starts from the YouTube URL — nothing else.",
      },
      {
        icon: TrendingUp,
        title: "YouTube SEO package — Castmagic doesn't offer it",
        body: "RepurposeTube generates A/B video titles, a full 5,000-character description, and 15 tags. There is no equivalent output in Castmagic.",
      },
      {
        icon: Clapperboard,
        title: "YouTube Shorts scripts — missing from Castmagic",
        body: "Three ready-to-film 60-second scripts per video. Castmagic's workflow doesn't include Shorts scripts as a content output.",
      },
      {
        icon: Zap,
        title: "All 6 formats in one parallel run",
        body: "RepurposeTube runs all 6 formats simultaneously — everything lands in ~60 seconds. Castmagic generates outputs one at a time.",
      },
      {
        icon: Layers,
        title: "Free plan — Castmagic starts at $23/month",
        body: "Castmagic has no free tier. RepurposeTube lets you repurpose your first video for free with no credit card required.",
      },
      {
        icon: RefreshCw,
        title: "Per-card regeneration — Castmagic lacks this",
        body: "Not happy with one output? Regenerate that card alone without reprocessing the whole job. Castmagic doesn't offer per-output regeneration.",
      },
    ],
  },

  "repurpose-io": {
    differentiatorHeadline: "RepurposeTube writes content. Repurpose.io doesn't.",
    differentiatorSubheadline: "Repurpose.io is a distribution platform — it moves video files around. RepurposeTube generates the written content your video needs.",
    differentiators: [
      {
        icon: FileText,
        title: "AI writes your content — Repurpose.io can't",
        body: "Repurpose.io is a distribution tool. It moves your video to other platforms but generates no written content. RepurposeTube produces 6 written output formats.",
      },
      {
        icon: TrendingUp,
        title: "YouTube SEO package included",
        body: "RepurposeTube generates optimised titles, a full 5,000-character description, and 15 tags from your transcript. Repurpose.io has no content generation capability.",
      },
      {
        icon: MessageSquare,
        title: "Blog post, thread, LinkedIn, email, Shorts",
        body: "Six written output formats — all the content a video needs across channels. Repurpose.io only redistributes the video file, not the ideas.",
      },
      {
        icon: Globe,
        title: "No platform account connections required",
        body: "Repurpose.io requires connecting and configuring every platform. RepurposeTube gives you the written content — post where and when you choose.",
      },
      {
        icon: Zap,
        title: "No per-platform pricing ($35+/mo)",
        body: "Repurpose.io charges based on the number of platforms you connect. RepurposeTube has a single free plan — the content is yours to post anywhere.",
      },
      {
        icon: Edit3,
        title: "Edit and personalise before publishing",
        body: "Every RepurposeTube output is editable and regeneratable. Repurpose.io distributes the video as-is — there's no written content layer to adjust.",
      },
    ],
  },

  "autorepurpose": {
    differentiatorHeadline: "All 6 formats vs AutoRepurpose's 3",
    differentiatorSubheadline: "AutoRepurpose covers three output formats. RepurposeTube covers all six — including the three AutoRepurpose is missing.",
    differentiators: [
      {
        icon: TrendingUp,
        title: "YouTube SEO package — AutoRepurpose doesn't offer it",
        body: "RepurposeTube generates A/B titles, a full 5,000-character description, and 15 tags. AutoRepurpose has no YouTube SEO output.",
      },
      {
        icon: Clapperboard,
        title: "Shorts scripts — missing from AutoRepurpose",
        body: "Three ready-to-film 60-second scripts per video. AutoRepurpose doesn't include Shorts scripts in its output set.",
      },
      {
        icon: FileText,
        title: "Full SEO blog post — AutoRepurpose doesn't include it",
        body: "A complete 800–1,200 word article with H2/H3 headings, intro, body, and conclusion. AutoRepurpose doesn't generate blog posts.",
      },
      {
        icon: Layers,
        title: "All 6 formats vs AutoRepurpose's 3",
        body: "AutoRepurpose covers Twitter thread, LinkedIn post, and newsletter. RepurposeTube adds blog post, YouTube SEO package, and Shorts scripts to that set.",
      },
      {
        icon: Zap,
        title: "All formats in one parallel run",
        body: "All 6 formats generate simultaneously. You get everything in ~60 seconds — not sequential generation across 3 formats.",
      },
      {
        icon: RefreshCw,
        title: "Per-card regeneration and inline editing",
        body: "Regenerate any single output without reprocessing the full video. Edit any card directly. AutoRepurpose doesn't offer per-card controls.",
      },
    ],
  },
}
