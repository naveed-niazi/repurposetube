import { GoogleGenerativeAI } from "@google/generative-ai"

export async function generateWithGemini({
  model,
  systemPrompt,
  userPrompt,
}: {
  model: string
  systemPrompt: string
  userPrompt: string
}) {
  const apiKey = process.env.GOOGLE_GENERATIVE_AI_API_KEY
  if (!apiKey) throw new Error("Missing GOOGLE_GENERATIVE_AI_API_KEY.")

  const client = new GoogleGenerativeAI(apiKey)
  const generativeModel = client.getGenerativeModel({
    model,
    systemInstruction: systemPrompt,
  })

  const response = await generativeModel.generateContent(userPrompt)
  const text = response.response.text()
  return text.trim()
}
