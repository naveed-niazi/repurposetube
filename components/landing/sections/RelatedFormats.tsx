import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { OUTPUT_FORMATS } from "@/lib/landing-data"

interface RelatedFormatsProps {
  /** Slug of the current page's format — excluded from the list */
  currentSlug: string
}

export function RelatedFormats({ currentSlug }: RelatedFormatsProps) {
  const others = OUTPUT_FORMATS.filter((f) => f.slug !== currentSlug)

  return (
    <section className="bg-white py-14">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <p className="mb-6 text-center text-xs font-semibold uppercase tracking-widest text-stone-400">
          Also generate from the same YouTube video
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {others.map((f) => (
            <Link
              key={f.slug}
              href={f.href}
              title={`${f.fullLabel} Generator — RepurposeTube`}
              className="group flex items-center gap-1.5 rounded-full border border-stone-200 bg-stone-50 px-4 py-2 text-sm font-medium text-stone-700 transition-all hover:border-amber-300 hover:bg-amber-50/50 hover:text-stone-900 hover:shadow-sm"
            >
              {f.fullLabel}
              <ArrowRight className="size-3.5 text-stone-400 transition-transform group-hover:translate-x-0.5 group-hover:text-amber-500" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
