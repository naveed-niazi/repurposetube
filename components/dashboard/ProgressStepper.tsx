import { CheckCircle2, Circle, LoaderCircle } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

const STEPS = [
  { key: "fetching", label: "Fetching", status: "done" as const },
  { key: "analyzing", label: "Analyzing", status: "active" as const },
  { key: "generating", label: "Generating", status: "todo" as const },
  { key: "done", label: "Done", status: "todo" as const },
]

export function ProgressStepper() {
  return (
    <Card className="border-stone-800 bg-stone-900/80 text-stone-100">
      <CardHeader className="space-y-1">
        <CardTitle className="text-lg">Progress preview</CardTitle>
        <CardDescription className="text-stone-400">
          MVP step flow: Fetching -&gt; Analyzing -&gt; Generating -&gt; Done
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ol className="grid gap-2 sm:grid-cols-4">
          {STEPS.map((step) => (
            <li
              key={step.key}
              className={cn(
                "flex items-center gap-2 rounded-lg border px-3 py-2 text-sm",
                step.status === "done" && "border-emerald-500/30 bg-emerald-500/10 text-emerald-300",
                step.status === "active" && "border-brand-500/40 bg-brand-500/10 text-brand-300",
                step.status === "todo" && "border-stone-800 bg-stone-950/60 text-stone-400"
              )}
            >
              {step.status === "done" && <CheckCircle2 className="size-4" />}
              {step.status === "active" && <LoaderCircle className="size-4 animate-spin" />}
              {step.status === "todo" && <Circle className="size-4" />}
              {step.label}
            </li>
          ))}
        </ol>
      </CardContent>
    </Card>
  )
}
