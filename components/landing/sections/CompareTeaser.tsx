import Link from "next/link"
import { ArrowRight } from "lucide-react"

const TOOLS = [
  { href: "/alternatives/castmagic-alternative", name: "Castmagic", note: "Podcast-first" },
  { href: "/alternatives/repurpose-io-alternative", name: "Repurpose.io", note: "Video distribution" },
  { href: "/alternatives/autorepurpose-alternative", name: "AutoRepurpose", note: "3 of 6 formats" },
]

export function CompareTeaser() {
  return (
    <section className="bg-stone-50 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-center gap-8 text-center sm:gap-10">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-stone-400">
              See how we compare
            </p>
            <h2 className="font-heading mb-4 text-2xl font-extrabold tracking-tight text-stone-900 sm:text-3xl">
              The only YouTube-native tool that covers all 6 formats
            </h2>
            <p className="mx-auto max-w-xl text-base text-stone-500">
              Castmagic is podcast-first. Repurpose.io distributes video but writes nothing. AutoRepurpose
              covers 3 of 6 formats. RepurposeTube is the only tool built around a YouTube URL with all 6
              written outputs in one run.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {TOOLS.map((t) => (
              <Link
                key={t.href}
                href={t.href}
                className="group flex items-center gap-2 rounded-full border border-stone-200 bg-white px-4 py-2 text-sm text-stone-600 shadow-sm transition-all hover:border-amber-300 hover:text-stone-900 hover:shadow-md"
              >
                <span className="font-medium">{t.name}</span>
                <span className="text-stone-400">·</span>
                <span className="text-stone-400">{t.note}</span>
                <ArrowRight className="size-3.5 text-stone-400 transition-transform group-hover:translate-x-0.5 group-hover:text-amber-500" />
              </Link>
            ))}
          </div>

          <Link
            href="/best-youtube-repurposing-tools"
            title="Best YouTube Content Repurposing Tools — Full Comparison 2025"
            className="flex items-center gap-2 text-sm font-semibold text-amber-600 underline-offset-4 hover:text-amber-500 hover:underline"
          >
            Compare all YouTube repurposing tools in 2025 →
          </Link>
        </div>
      </div>
    </section>
  )
}
