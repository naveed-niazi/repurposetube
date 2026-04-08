export const OUTPUT_TYPES = [
  "blogPost",
  "twitterThread",
  "linkedInPost",
  "youtubeSeoPackage",
  "newsletterEmail",
  "shortsScripts",
] as const

export type OutputType = (typeof OUTPUT_TYPES)[number]

export type OutputItem = {
  type: OutputType
  title: string
  content: string
}

export type GenerationInput = {
  videoTitle: string
  videoUrl: string
  transcriptText: string
}

export type ProviderName = "openai" | "anthropic" | "gemini"

export type ProviderModelConfig = {
  provider: ProviderName
  model: string
}
