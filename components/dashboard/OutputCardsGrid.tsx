import { Copy, Download, Pencil, RefreshCcw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export type OutputCardItem = {
  title: string
  sample: string
}

const OUTPUT_ITEMS: OutputCardItem[] = [
  { title: "Blog Post", sample: "SEO-structured draft with H2/H3 sections and CTA placeholder..." },
  { title: "Twitter/X Thread", sample: "Hook + 8-12 tweet outline placeholder preview..." },
  { title: "LinkedIn Post", sample: "Professional long-form post skeleton for creator voice..." },
  { title: "YouTube SEO Package", sample: "Title A/B, description skeleton, and tags preview..." },
  { title: "Newsletter Email", sample: "Plain-text newsletter draft with subject line placeholder..." },
  { title: "Shorts Scripts", sample: "Three short script hooks and beat structure placeholders..." },
]

type OutputCardsGridProps = {
  outputs?: OutputCardItem[]
}

export function OutputCardsGrid({ outputs }: OutputCardsGridProps) {
  const items = outputs ?? OUTPUT_ITEMS
  return (
    <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
      {items.map((item) => (
        <Card key={item.title} className="border-stone-800 bg-stone-900/80 text-stone-100">
          <CardHeader className="space-y-1">
            <CardTitle className="text-base">{item.title}</CardTitle>
            <CardDescription className="text-stone-400">Placeholder content card for MVP layout validation.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="h-28 overflow-y-auto rounded-md border border-stone-800 bg-stone-950/70 p-3 text-sm text-stone-300">
              {item.sample}
            </div>
            <div className="grid grid-cols-2 gap-2">
              <Button
                variant="outline"
                size="sm"
                className="justify-start border-stone-700 bg-stone-900 text-xs text-stone-100 hover:bg-stone-800 hover:text-stone-100"
              >
                <Copy className="size-3.5" />
                Copy
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="justify-start border-stone-700 bg-stone-900 text-xs text-stone-100 hover:bg-stone-800 hover:text-stone-100"
              >
                <Pencil className="size-3.5" />
                Edit
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="justify-start border-stone-700 bg-stone-900 text-xs text-stone-100 hover:bg-stone-800 hover:text-stone-100"
              >
                <RefreshCcw className="size-3.5" />
                Regenerate
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="justify-start border-stone-700 bg-stone-900 text-xs text-stone-100 hover:bg-stone-800 hover:text-stone-100"
              >
                <Download className="size-3.5" />
                Download
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
