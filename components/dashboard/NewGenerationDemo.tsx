"use client"

import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import {
  AtSign,
  BriefcaseBusiness,
  CircleAlert,
  Clapperboard,
  Copy,
  FilePenLine,
  FileText,
  LoaderCircle,
  Link2,
  Mail,
  RefreshCcw,
  ScrollText,
  Video,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import type { OutputCardItem } from "@/components/dashboard/OutputCardsGrid"

type DemoState = "idle" | "loading" | "success" | "error"

type GeneratedDemoData = {
  url: string
  videoId: string
  title: string
  channel: string
  transcriptText: string
  transcriptWordCount: number
  transcriptSegmentsCount: number
  outputs: OutputCardItem[]
}

type NewGenerationDemoProps = {
  initialResult?: GeneratedDemoData | null
  initialError?: string | null
}

const STEP_LABELS = ["Fetching transcript", "Analyzing source", "Generating outputs", "Done"]

export function NewGenerationDemo({ initialResult = null, initialError = null }: NewGenerationDemoProps) {
  const [inputUrl, setInputUrl] = useState(initialResult?.url ?? "")
  const [state, setState] = useState<DemoState>(initialResult ? "success" : initialError ? "error" : "idle")
  const [error, setError] = useState<string | null>(initialError)
  const [activeStep, setActiveStep] = useState(0)
  const [result, setResult] = useState<GeneratedDemoData | null>(initialResult)
  const [activeOutputTitle, setActiveOutputTitle] = useState<string>(initialResult?.outputs[0]?.title ?? "")
  const stepIntervalRef = useRef<number | null>(null)
  const finishTimeoutRef = useRef<number | null>(null)

  const clearTimers = useCallback(() => {
    if (stepIntervalRef.current) {
      window.clearInterval(stepIntervalRef.current)
      stepIntervalRef.current = null
    }
    if (finishTimeoutRef.current) {
      window.clearTimeout(finishTimeoutRef.current)
      finishTimeoutRef.current = null
    }
  }, [])

  const stepItems = useMemo(() => {
    return STEP_LABELS.map((label, idx) => {
      const status = idx < activeStep ? "done" : idx === activeStep ? "active" : "todo"
      return { label, status }
    })
  }, [activeStep])

  useEffect(() => {
    return () => clearTimers()
  }, [clearTimers])

  const handleSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      const url = inputUrl.trim()
      if (!url) return

      clearTimers()
      setState("loading")
      setError(null)
      setResult(null)
      setActiveStep(0)

      stepIntervalRef.current = window.setInterval(() => {
        setActiveStep((prev) => {
          if (prev >= STEP_LABELS.length - 2) return prev
          return prev + 1
        })
      }, 1200)

      finishTimeoutRef.current = window.setTimeout(async () => {
        try {
          const response = await fetch("/api/generate", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ url }),
          })

          const payload = (await response.json()) as {
            data?: {
              video?: {
                id?: string
                url?: string
                title?: string
                channel?: string
                thumbnailUrl?: string
              }
              transcript?: {
                text?: string
                wordCount?: number
              }
              outputs?: Array<{
                title?: string
                content?: string
              }>
            }
            meta?: {
              segmentsCount?: number
            }
            error?: {
              message?: string
            }
          }

          if (!response.ok || !payload.data?.video || !payload.data?.transcript?.text || !payload.data.outputs?.length) {
            throw new Error(payload.error?.message ?? "Could not generate outputs for this video.")
          }

          const video = payload.data.video
          const transcript = payload.data.transcript
          const transcriptText = transcript.text ?? ""
          const outputs: OutputCardItem[] = payload.data.outputs
            .map((output) => ({
              title: String(output.title ?? "").trim(),
              sample: String(output.content ?? "").trim(),
            }))
            .filter((output) => output.title.length > 0 && output.sample.length > 0)

          if (outputs.length === 0) {
            throw new Error("Generation returned empty outputs.")
          }

          const generated: GeneratedDemoData = {
            url: video.url ?? url,
            videoId: video.id ?? "unknown",
            title: video.title ?? "YouTube Video",
            channel: video.channel ?? "YouTube",
            transcriptText,
            transcriptWordCount: transcript.wordCount ?? transcriptText.split(/\s+/).filter(Boolean).length,
            transcriptSegmentsCount: payload.meta?.segmentsCount ?? 0,
            outputs,
          }

          clearTimers()
          setActiveStep(STEP_LABELS.length - 1)
          setResult(generated)
          setActiveOutputTitle(generated.outputs[0]?.title ?? "")
          setState("success")
        } catch (requestError) {
          clearTimers()
          setState("error")
          setError(
            requestError instanceof Error
              ? requestError.message
              : "Could not fetch transcript for this video. Please try again."
          )
        }
      }, 900)
    },
    [clearTimers, inputUrl]
  )

  return (
    <div className="flex h-full min-h-0 flex-col gap-4">
      <Card className="border-stone-800 bg-stone-900/80 text-stone-100">
        <CardContent className="space-y-2 pt-4">
          <form onSubmit={handleSubmit} className="flex flex-col gap-2 sm:flex-row">
            <div className="relative flex-1">
              <Link2 className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-stone-500" />
              <Input
                type="url"
                value={inputUrl}
                onChange={(event) => setInputUrl(event.target.value)}
                placeholder="https://www.youtube.com/watch?v=..."
                className="h-10 border-stone-700 bg-stone-950/70 pl-9 text-stone-100 placeholder:text-stone-500"
              />
            </div>
            <Button
              type="submit"
              className="h-10 bg-brand-500 font-semibold text-stone-950 hover:bg-brand-400"
              disabled={state === "loading"}
            >
              {state === "loading" ? "Generating..." : "Generate"}
            </Button>
          </form>
          <p className="text-xs text-stone-500">This will generate all 6 content formats for you.</p>
        </CardContent>
      </Card>

      {state === "loading" && (
        <Card className="border-stone-800 bg-stone-900/80 text-stone-100">
          <CardContent className="space-y-4 py-7">
            <div className="flex flex-col items-center justify-center gap-2 text-center">
              <LoaderCircle className="size-5 animate-spin text-brand-400" />
              <p className="text-sm font-medium text-stone-100">
                {stepItems[activeStep]?.label ?? "Generating outputs"}
              </p>
              <p className="text-xs text-stone-500">Please wait while we prepare all 6 content formats.</p>
            </div>

            <div className="mx-auto w-full max-w-xl">
              <div className="h-2 overflow-hidden rounded-full bg-stone-800">
                <div
                  className="h-full rounded-full bg-brand-500 transition-all duration-500 ease-out"
                  style={{
                    width: `${Math.max(12, Math.round(((activeStep + 1) / STEP_LABELS.length) * 100))}%`,
                  }}
                />
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {state === "error" && error && (
        <Card className="border-red-500/30 bg-red-500/10 text-red-100">
          <CardHeader className="space-y-1">
            <CardTitle className="flex items-center gap-2 text-base">
              <CircleAlert className="size-4" />
              Could not start generation
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm">{error}</CardContent>
        </Card>
      )}

      {state === "success" && result && (
        <>
          <Card className="flex min-h-0 flex-1 flex-col border-stone-800 bg-stone-900/80 text-stone-100">
            <CardContent className="flex min-h-0 flex-1 flex-col space-y-4">
              <div className="grid w-full grid-cols-6 gap-1 rounded-xl border border-stone-800 bg-stone-950/70 p-1">
                {result.outputs.map((output) => {
                  const active = output.title === activeOutputTitle
                  const Icon = getOutputIcon(output.title)

                  return (
                    <button
                      key={output.title}
                      type="button"
                      onClick={() => setActiveOutputTitle(output.title)}
                      className={`inline-flex h-9 items-center justify-center rounded-lg border px-2 text-xs font-medium whitespace-nowrap transition-colors sm:text-sm ${
                        active
                          ? "border-brand-500/50 bg-brand-500/15 text-brand-300"
                          : "border-transparent text-stone-400 hover:bg-stone-800 hover:text-stone-200"
                      }`}
                      aria-label={output.title}
                      title={output.title}
                    >
                      <Icon className="size-4 shrink-0 sm:mr-1.5" />
                      <span className="hidden sm:inline truncate">{getOutputTabLabel(output.title)}</span>
                    </button>
                  )
                })}
              </div>

              {(() => {
                const selected =
                  result.outputs.find((output) => output.title === activeOutputTitle) ?? result.outputs[0]
                if (!selected) return null

                return (
                  <div className="flex min-h-0 flex-1 flex-col space-y-3">
                    <div className="flex min-h-0 flex-1 flex-col rounded-lg border border-stone-800 bg-stone-950/70 p-3">
                      <div className="mb-2 flex items-center justify-between gap-2">
                        <p className="text-sm font-medium text-stone-100">{selected.title}</p>
                        <div className="flex items-center gap-1">
                          <Button
                            size="icon-sm"
                            variant="outline"
                            className="border-stone-700 bg-stone-900 text-stone-100 hover:bg-stone-800 hover:text-stone-100"
                            aria-label="Copy output"
                            title="Copy output"
                          >
                            <Copy className="size-3.5" />
                          </Button>
                          <Button
                            size="icon-sm"
                            variant="outline"
                            className="border-stone-700 bg-stone-900 text-stone-100 hover:bg-stone-800 hover:text-stone-100"
                            aria-label="Regenerate output"
                            title="Regenerate output"
                          >
                            <RefreshCcw className="size-3.5" />
                          </Button>
                          <Button
                            size="icon-sm"
                            variant="outline"
                            className="border-stone-700 bg-stone-900 text-stone-100 hover:bg-stone-800 hover:text-stone-100"
                            aria-label="Edit output"
                            title="Edit output"
                          >
                            <FilePenLine className="size-3.5" />
                          </Button>
                        </div>
                      </div>
                      <div className="min-h-0 flex-1 overflow-y-auto pr-1 text-sm leading-relaxed text-stone-300 [scrollbar-color:rgb(68_64_60)_rgb(17_17_17)] [scrollbar-width:thin] [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-stone-700/80 [&::-webkit-scrollbar-track]:bg-stone-950/70 [&::-webkit-scrollbar]:w-1.5">
                        {renderFormattedOutput(selected.sample)}
                      </div>
                    </div>
                  </div>
                )
              })()}
            </CardContent>
          </Card>
        </>
      )}
    </div>
  )
}

function getOutputIcon(title: string) {
  switch (title) {
    case "Blog Post":
      return ScrollText
    case "Twitter/X Thread":
      return AtSign
    case "LinkedIn Post":
      return BriefcaseBusiness
    case "YouTube SEO Package":
      return Video
    case "Newsletter Email":
      return Mail
    case "Shorts Scripts":
      return Clapperboard
    default:
      return FileText
  }
}

function getOutputTabLabel(title: string) {
  switch (title) {
    case "YouTube SEO Package":
      return "YouTube SEO"
    case "Newsletter Email":
      return "Newsletter"
    case "Shorts Scripts":
      return "Shorts"
    default:
      return title
  }
}

function renderFormattedOutput(content: string) {
  const lines = content.replace(/\r\n/g, "\n").split("\n")
  const blocks: Array<
    | { type: "spacer"; key: string }
    | { type: "heading"; key: string; text: string }
    | { type: "paragraph"; key: string; text: string }
    | { type: "ul"; key: string; items: string[] }
    | { type: "ol"; key: string; items: string[] }
  > = []

  let index = 0
  while (index < lines.length) {
    const rawLine = lines[index] ?? ""
    const line = rawLine.trim()

    if (!line) {
      blocks.push({ type: "spacer", key: `spacer-${index}` })
      index += 1
      continue
    }

    if (/^#{1,6}\s+/.test(line)) {
      blocks.push({
        type: "heading",
        key: `heading-${index}`,
        text: stripInlineMarkdown(line.replace(/^#{1,6}\s+/, "")),
      })
      index += 1
      continue
    }

    if (/^[-*]\s+/.test(line)) {
      const items: string[] = []
      while (index < lines.length) {
        const listLine = (lines[index] ?? "").trim()
        if (!/^[-*]\s+/.test(listLine)) break
        items.push(stripInlineMarkdown(listLine.replace(/^[-*]\s+/, "")))
        index += 1
      }
      blocks.push({ type: "ul", key: `ul-${index}`, items })
      continue
    }

    if (/^\d+\.\s+/.test(line)) {
      const items: string[] = []
      while (index < lines.length) {
        const listLine = (lines[index] ?? "").trim()
        if (!/^\d+\.\s+/.test(listLine)) break
        items.push(stripInlineMarkdown(listLine.replace(/^\d+\.\s+/, "")))
        index += 1
      }
      blocks.push({ type: "ol", key: `ol-${index}`, items })
      continue
    }

    const paragraphLines: string[] = [stripInlineMarkdown(line)]
    index += 1
    while (index < lines.length) {
      const paragraphCandidate = (lines[index] ?? "").trim()
      if (
        !paragraphCandidate ||
        /^#{1,6}\s+/.test(paragraphCandidate) ||
        /^[-*]\s+/.test(paragraphCandidate) ||
        /^\d+\.\s+/.test(paragraphCandidate)
      ) {
        break
      }

      paragraphLines.push(stripInlineMarkdown(paragraphCandidate))
      index += 1
    }

    blocks.push({
      type: "paragraph",
      key: `paragraph-${index}`,
      text: paragraphLines.join(" "),
    })
  }

  return (
    <div className="space-y-2">
      {blocks.map((block) => {
        if (block.type === "spacer") return <div key={block.key} className="h-1.5" aria-hidden="true" />
        if (block.type === "heading") return <p key={block.key} className="font-medium text-stone-100">{block.text}</p>
        if (block.type === "paragraph") {
          return (
            <p key={block.key} className="whitespace-pre-wrap wrap-break-word text-stone-300">
              {block.text}
            </p>
          )
        }
        if (block.type === "ul") {
          return (
            <ul key={block.key} className="list-disc space-y-1 pl-5 text-stone-300">
              {block.items.map((item, itemIndex) => (
                <li key={`${block.key}-item-${itemIndex}`} className="wrap-break-word">
                  {item}
                </li>
              ))}
            </ul>
          )
        }

        return (
          <ol key={block.key} className="list-decimal space-y-1 pl-5 text-stone-300">
            {block.items.map((item, itemIndex) => (
              <li key={`${block.key}-item-${itemIndex}`} className="wrap-break-word">
                {item}
              </li>
            ))}
          </ol>
        )
      })}
    </div>
  )
}

function stripInlineMarkdown(input: string) {
  return input
    .replace(/\*\*(.+?)\*\*/g, "$1")
    .replace(/__(.+?)__/g, "$1")
    .replace(/`(.+?)`/g, "$1")
    .replace(/\[(.+?)\]\((.+?)\)/g, "$1")
}
