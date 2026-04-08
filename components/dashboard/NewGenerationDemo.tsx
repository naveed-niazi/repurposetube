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
  thumbnailUrl: string
  transcriptText: string
  transcriptWordCount: number
  transcriptSegmentsCount: number
  outputs: OutputCardItem[]
}

const STEP_LABELS = ["Fetching transcript", "Analyzing source", "Generating outputs", "Done"]

const TITLES = [
  "How to Turn One Video into a Week of Content",
  "The Creator Workflow That Cuts Content Time by 60%",
  "YouTube Repurposing Playbook for Consistent Growth",
  "From Transcript to Distribution: A Practical Content System",
]

const CHANNELS = ["Creator Sprint", "RepurposeTube Lab", "Growth Mechanics", "Modern Creator Ops"]

function buildOutputData(title: string, transcriptText: string): OutputCardItem[] {
  const trimmedTranscript = transcriptText.trim()
  const excerpt = trimmedTranscript.slice(0, 380)
  const cleanExcerpt = excerpt.length > 0 ? excerpt : "Transcript excerpt unavailable."

  return {
    outputs: [
      { title: "Blog Post", sample: `${title}\n\n${cleanExcerpt}\n\n[Blog structure will be generated from transcript.]` },
      { title: "Twitter/X Thread", sample: `Hook:\n${cleanExcerpt.slice(0, 220)}\n\n[Thread draft will be generated from transcript.]` },
      { title: "LinkedIn Post", sample: `${cleanExcerpt}\n\n[LinkedIn post draft will be generated from transcript.]` },
      { title: "YouTube SEO Package", sample: `Primary context:\n${cleanExcerpt.slice(0, 220)}\n\n[SEO title/description/tags will be generated from transcript.]` },
      { title: "Newsletter Email", sample: `${cleanExcerpt}\n\n[Newsletter version will be generated from transcript.]` },
      { title: "Shorts Scripts", sample: `${cleanExcerpt}\n\n[Three Shorts scripts will be generated from transcript.]` },
    ],
  }.outputs
}

export function NewGenerationDemo() {
  const [inputUrl, setInputUrl] = useState("")
  const [state, setState] = useState<DemoState>("idle")
  const [error, setError] = useState<string | null>(null)
  const [activeStep, setActiveStep] = useState(0)
  const [result, setResult] = useState<GeneratedDemoData | null>(null)
  const [activeOutputTitle, setActiveOutputTitle] = useState<string>("")
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
          const response = await fetch("/api/transcript", {
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
            }
            meta?: {
              segmentsCount?: number
            }
            error?: {
              message?: string
            }
          }

          if (!response.ok || !payload.data?.video || !payload.data?.transcript?.text) {
            throw new Error(payload.error?.message ?? "Could not fetch transcript for this video.")
          }

          const video = payload.data.video
          const transcript = payload.data.transcript
          const transcriptText = transcript.text ?? ""

          const generated: GeneratedDemoData = {
            url: video.url ?? url,
            videoId: video.id ?? "unknown",
            title: video.title ?? TITLES[0],
            channel: video.channel ?? CHANNELS[0],
            thumbnailUrl: video.thumbnailUrl ?? "",
            transcriptText,
            transcriptWordCount: transcript.wordCount ?? transcriptText.split(/\s+/).filter(Boolean).length,
            transcriptSegmentsCount: payload.meta?.segmentsCount ?? 0,
            outputs: buildOutputData(video.title ?? TITLES[0], transcriptText),
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
    <div className="space-y-4">
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
          <Card className="border-stone-800 bg-stone-900/80 text-stone-100">
            <CardHeader className="space-y-1">
              <CardTitle className="text-base">{result.title}</CardTitle>
              <CardDescription className="text-stone-400">
                {result.channel} • {result.transcriptWordCount.toLocaleString()} words • {result.transcriptSegmentsCount} segments
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-lg border border-stone-800 bg-stone-950/70 p-3 text-sm leading-relaxed text-stone-300">
                {result.transcriptText.slice(0, 900)}
                {result.transcriptText.length > 900 ? "..." : ""}
              </div>
            </CardContent>
          </Card>

          <Card className="border-stone-800 bg-stone-900/80 text-stone-100">
            <CardContent className="space-y-4">
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
                  <div className="space-y-3">
                    <div className="rounded-lg border border-stone-800 bg-stone-950/70 p-3">
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
                      <div className="max-h-72 overflow-y-auto text-sm leading-relaxed text-stone-300">
                        {selected.sample}
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
