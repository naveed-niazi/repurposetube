import { OUTPUT_DEFINITIONS } from "@/lib/ai/prompts/formats"
import type { GenerationInput, OutputType } from "@/lib/ai/types"

function toBullets(lines: string[]) {
  return lines.map((line) => `- ${line}`).join("\n")
}

const VOICE_PRESERVATION_RULES = [
  "Mirror the creator's exact tone from the transcript (casual/formal intensity, confidence level, emotional cadence).",
  "Preserve the creator's natural sentence formation and pacing; keep short/long sentence mix similar to the source.",
  "Reuse original vocabulary and signature phrases from the transcript as much as possible.",
  "Do not sanitize into generic corporate wording unless the output format explicitly requires it.",
  "If a line can stay close to the original phrasing while fitting the format, keep it close.",
]

export function buildUserPrompt(input: GenerationInput, outputType: OutputType) {
  const definition = OUTPUT_DEFINITIONS[outputType]

  return `
Generate: ${definition.title}

Objective:
${definition.objective}

Format requirements:
${toBullets(definition.formatRequirements)}

Style rules:
${toBullets(definition.styleRules)}

Voice preservation requirements:
${toBullets(VOICE_PRESERVATION_RULES)}

Output contract:
${definition.outputContract}

Source video:
- Title: ${input.videoTitle}
- URL: ${input.videoUrl}

Transcript:
${input.transcriptText}

Important:
- Keep the output grounded in transcript context.
- Maintain the original creator voice with minimal rewording.
- Keep wording and sentence style as close to the source transcript as possible while satisfying the format contract.
- Do not include commentary about your process.
`.trim()
}
