import Anthropic from "@anthropic-ai/sdk"

export async function generateWithAnthropic({
  model,
  systemPrompt,
  userPrompt,
}: {
  model: string
  systemPrompt: string
  userPrompt: string
}) {
  const apiKey = process.env.ANTHROPIC_API_KEY
  if (!apiKey) throw new Error("Missing ANTHROPIC_API_KEY.")

  const client = new Anthropic({ apiKey })
  const response = await client.messages.create({
    model,
    max_tokens: 1800,
    system: systemPrompt,
    messages: [{ role: "user", content: userPrompt }],
  })

  const text = response.content
    .filter((block) => block.type === "text")
    .map((block) => ("text" in block ? block.text : ""))
    .join("\n")

  return text.trim()
}
