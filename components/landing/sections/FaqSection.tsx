import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import type { FaqItem } from "@/lib/landing-data"

interface FaqSectionProps {
  headline?: string
  subheadline?: string
  items: FaqItem[]
}

export function FaqSection({
  headline = "Frequently asked questions",
  subheadline = "Everything you need to know before you start.",
  items,
}: FaqSectionProps) {
  return (
    <section id="faq" className="bg-stone-50 py-24">
      <div className="mx-auto max-w-2xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <h2 className="font-heading mb-4 text-3xl font-extrabold tracking-tight text-stone-900 sm:text-4xl">
            {headline}
          </h2>
          {subheadline && <p className="text-stone-500">{subheadline}</p>}
        </div>

        <Accordion type="single" collapsible className="w-full">
          {items.map((item, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="border-stone-200">
              <AccordionTrigger className="font-heading text-left text-sm font-semibold text-stone-900 hover:no-underline">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-stone-500">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
