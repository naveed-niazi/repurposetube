import type { ProviderModelConfig, ProviderName } from "@/lib/ai/types"

const DEFAULT_MODELS: Record<ProviderName, string> = {
  openai: "gpt-4o-mini",
  anthropic: "claude-3-5-sonnet-latest",
  gemini: "gemini-2.0-flash",
}

export function getAiProviderConfig(): ProviderModelConfig {
  const provider = (process.env.AI_PROVIDER ?? "openai").toLowerCase() as ProviderName

  if (!["openai", "anthropic", "gemini"].includes(provider)) {
    return { provider: "openai", model: process.env.AI_MODEL_OPENAI ?? DEFAULT_MODELS.openai }
  }

  const model =
    provider === "openai"
      ? process.env.AI_MODEL_OPENAI ?? DEFAULT_MODELS.openai
      : provider === "anthropic"
        ? process.env.AI_MODEL_ANTHROPIC ?? DEFAULT_MODELS.anthropic
        : process.env.AI_MODEL_GEMINI ?? DEFAULT_MODELS.gemini

  return { provider, model }
}
