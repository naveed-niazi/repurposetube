import { Agent, run } from "@openai/agents"

export async function generateWithOpenAIAgent({
  model,
  systemPrompt,
  userPrompt,
}: {
  model: string
  systemPrompt: string
  userPrompt: string
}) {
  const agent = new Agent({
    name: "RepurposeTubeContentAgent",
    instructions: systemPrompt,
    model,
  })

  const result = await run(agent, userPrompt)
  const output = result.finalOutput

  if (typeof output === "string") return output.trim()
  if (output === null || output === undefined) return ""
  return String(output).trim()
}
