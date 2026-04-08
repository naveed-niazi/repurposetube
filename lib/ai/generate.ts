import { getAiProviderConfig } from "@/lib/ai/config"
import { OUTPUT_DEFINITIONS, buildSystemPrompt, buildUserPrompt } from "@/lib/ai/prompts"
import { generateWithAnthropic } from "@/lib/ai/provider/anthropic"
import { generateWithGemini } from "@/lib/ai/provider/gemini"
import { generateWithOpenAIAgent } from "@/lib/ai/provider/openai-agent"
import { OUTPUT_TYPES, type GenerationInput, type OutputItem, type OutputType } from "@/lib/ai/types"

async function generateForType({
  input,
  outputType,
}: {
  input: GenerationInput
  outputType: OutputType
}): Promise<OutputItem> {
  const { provider, model } = getAiProviderConfig()
  const systemPrompt = buildSystemPrompt(outputType)
  const userPrompt = buildUserPrompt(input, outputType)

  let content = ""
  if (provider === "openai") {
    content = await generateWithOpenAIAgent({
      model,
      systemPrompt,
      userPrompt,
    })
  } else if (provider === "anthropic") {
    content = await generateWithAnthropic({
      model,
      systemPrompt,
      userPrompt,
    })
  } else {
    content = await generateWithGemini({
      model,
      systemPrompt,
      userPrompt,
    })
  }

  return {
    type: outputType,
    title: OUTPUT_DEFINITIONS[outputType].title,
    content,
  }
}

export async function generateAllOutputs(input: GenerationInput) {
  const generated = await Promise.all(
    OUTPUT_TYPES.map((outputType) =>
      generateForType({
        input,
        outputType,
      })
    )
  )

  const { provider, model } = getAiProviderConfig()
  return {
    outputs: generated,
    provider,
    model,
  }
}
