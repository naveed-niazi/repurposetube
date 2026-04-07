import Link from "next/link"
import { ArrowRight } from "lucide-react"

const COMPARISONS = [
  {
    slug: "castmagic",
    href: "/alternatives/castmagic-alternative",
    label: "RepurposeTube vs Castmagic",
    note: "Podcast-first vs YouTube-native",
  },
  {
    slug: "repurpose-io",
    href: "/alternatives/repurpose-io-alternative",
    label: "RepurposeTube vs Repurpose.io",
    note: "Video distribution vs content writing",
  },
  {
    slug: "autorepurpose",
    href: "/alternatives/autorepurpose-alternative",
    label: "RepurposeTube vs AutoRepurpose",
    note: "3 formats vs 6 formats",
  },
]

interface AlsoCompareProps {
  /** Slug of the current comparison page — excluded from the list */
  currentSlug: "castmagic" | "repurpose-io" | "autorepurpose"
}

export function AlsoCompare({ currentSlug }: AlsoCompareProps) {
  const others = COMPARISONS.filter((c) => c.slug !== currentSlug)

  return (
    <section className="bg-stone-50 py-14">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
        <p className="mb-6 text-xs font-semibold uppercase tracking-widest text-stone-400">
          More comparisons
        </p>
        <div className="mb-5 flex flex-wrap justify-center gap-3">
          {others.map((c) => (
            <Link
              key={c.slug}
              href={c.href}
              title={`${c.label} — Feature Comparison`}
              className="group flex items-center gap-2 rounded-full border border-stone-200 bg-white px-4 py-2 text-sm text-stone-600 shadow-sm transition-all hover:border-brand-300 hover:text-stone-900 hover:shadow-md"
            >
              <span className="font-medium">{c.label}</span>
              <span className="text-stone-300">·</span>
              <span className="text-stone-400 text-xs">{c.note}</span>
              <ArrowRight className="size-3.5 text-stone-400 transition-transform group-hover:translate-x-0.5 group-hover:text-brand-500" />
            </Link>
          ))}
        </div>
        <Link
          href="/best-youtube-repurposing-tools"
          title="Best YouTube Content Repurposing Tools — Full Roundup"
          className="text-sm font-semibold text-brand-600 underline-offset-4 hover:text-brand-500 hover:underline"
        >
          See the full roundup: Best YouTube repurposing tools in 2025 →
        </Link>
      </div>
    </section>
  )
}
