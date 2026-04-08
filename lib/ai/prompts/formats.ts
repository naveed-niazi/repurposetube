import type { OutputType } from "@/lib/ai/types"

export type OutputPromptSpec = {
  title: string
  objective: string
  formatRequirements: string[]
  styleRules: string[]
  outputContract: string
}

export const OUTPUT_DEFINITIONS: Record<OutputType, OutputPromptSpec> = {
  blogPost: {
    title: "Blog Post",
    objective:
      "Turn the source transcript into a high-value, SEO-structured article optimized for search intent, readability, and dwell time.",
    formatRequirements: [
      "Length: 800-1200 words.",
      "Structure: compelling intro, clear H2/H3 sections, practical key points, concise conclusion.",
      "Use scannable formatting and descriptive section headings aligned to search intent.",
      "Include one meta-style opening paragraph that naturally introduces the primary topic keyword.",
    ],
    styleRules: [
      "Write in a confident, practical creator voice.",
      "Avoid filler and repeated points.",
      "Do not fabricate facts outside transcript evidence.",
      "Follow on-page SEO best practices: clear hierarchy, semantic wording, and natural keyword usage (no stuffing).",
      "Prioritize skimmability with short paragraphs, occasional bullets, and crisp transitions.",
    ],
    outputContract: "Return only the blog post body in markdown-ready plain text.",
  },
  twitterThread: {
    title: "Twitter/X Thread",
    objective: "Create a high-retention thread that captures core insights with strong hook and progression.",
    formatRequirements: [
      "Length: 8-12 tweets.",
      "Tweet 1 must be a sharp hook with a clear curiosity gap.",
      "Use numbered progression and end with a CTA tweet.",
      "Keep each tweet self-contained and easy to scan on mobile.",
    ],
    styleRules: [
      "Keep each tweet concise and punchy.",
      "Prioritize clarity and progression over fluff.",
      "No hashtags unless strongly justified by context.",
      "Apply thread best practices: hook -> tension -> value -> payoff -> CTA.",
      "Use pattern interrupts (short lines, occasional contrast statements) to improve retention.",
    ],
    outputContract: "Return a thread with each tweet on a new numbered line.",
  },
  linkedInPost: {
    title: "LinkedIn Post",
    objective: "Transform transcript into a professional post optimized for LinkedIn reach, saves, and comments.",
    formatRequirements: [
      "Start with a compelling opening hook in the first 1-2 lines.",
      "Use short paragraphs and clear narrative flow.",
      "Include practical lessons and one closing CTA.",
      "Keep total length in a range that is substantive but readable in-feed (roughly 180-350 words).",
    ],
    styleRules: [
      "Professional but human voice.",
      "Avoid hype language and clickbait.",
      "Use platform-appropriate readability.",
      "Apply LinkedIn best practices: strong opening, story-to-lesson structure, and actionable takeaway.",
      "Favor plain language, concrete examples, and credibility signals from transcript context.",
    ],
    outputContract: "Return only the LinkedIn post text.",
  },
  youtubeSeoPackage: {
    title: "YouTube SEO Package",
    objective: "Produce high-performing YouTube SEO assets to maximize discoverability, CTR, and watch intent.",
    formatRequirements: [
      "Return exactly 2 title options.",
      "Return one description under 5000 characters.",
      "Return exactly 15 tags.",
      "Each title should be concise, catchy, and readable at a glance (target roughly 45-65 characters when possible).",
      "Description should begin with a strong first 2 lines that front-load keywords and value proposition.",
    ],
    styleRules: [
      "Titles should balance curiosity with clarity and avoid vague generic wording.",
      "Description should front-load value and keywords naturally.",
      "Tags must be relevant and non-spammy.",
      "Follow YouTube best practices: searchable phrasing, specific benefit framing, and clean human readability.",
      "Avoid clickbait promises unsupported by transcript context.",
    ],
    outputContract:
      "Return with sections in this exact order: 'Title A', 'Title B', 'Description', 'Tags'.",
  },
  newsletterEmail: {
    title: "Newsletter Email",
    objective: "Repurpose the transcript into a newsletter that improves opens, read-through, and click intent.",
    formatRequirements: [
      "Return one subject line and one optional preview line.",
      "Body should be plain text and skimmable.",
      "Include one clear reader CTA.",
      "Use concise sections with logical flow: hook, key insight(s), practical action, CTA.",
    ],
    styleRules: [
      "Conversational but focused tone.",
      "Use short sections and smooth flow.",
      "Avoid overlong intro paragraphs.",
      "Follow email best practices: specific subject, clear value, one primary action, and minimal fluff.",
      "Keep language direct and benefit-led while preserving creator voice.",
    ],
    outputContract: "Return with sections in this order: 'Subject', 'Preview', 'Email Body'.",
  },
  shortsScripts: {
    title: "Shorts Scripts",
    objective: "Extract short-form narrative moments optimized for retention, completion rate, and replay.",
    formatRequirements: [
      "Return 3 separate scripts.",
      "Each script should fit roughly a 60-second spoken delivery.",
      "Each script must include Hook, Core beats, and CTA line.",
      "Each hook should land in the first 1-2 lines with clear tension or payoff.",
    ],
    styleRules: [
      "High energy and direct phrasing.",
      "Fast pacing with minimal setup.",
      "Prioritize moments with strong audience payoff.",
      "Follow Shorts best practices: immediate hook, dense value, emotional spike, and tight CTA.",
      "Keep sentences punchy and spoken-word natural for camera delivery.",
    ],
    outputContract: "Return exactly three scripts labeled 'Short 1', 'Short 2', 'Short 3'.",
  },
}
