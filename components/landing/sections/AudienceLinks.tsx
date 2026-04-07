import Link from "next/link"
import { ArrowRight, Clapperboard, User, BarChart2 } from "lucide-react"
import type { LucideIcon } from "lucide-react"

interface AudienceCard {
  href: string
  icon: LucideIcon
  label: string
  headline: string
  body: string
  cta: string
}

const AUDIENCE: AudienceCard[] = [
  {
    href: "/for-youtubers",
    icon: Clapperboard,
    label: "YouTubers",
    headline: "Grow beyond YouTube",
    body: "Turn every upload into a full presence on LinkedIn, Twitter, and email — without writing a single word.",
    cta: "RepurposeTube for YouTubers",
  },
  {
    href: "/for-solopreneurs",
    icon: User,
    label: "Solopreneurs",
    headline: "A content team in one tool",
    body: "One URL replaces a blog writer, social media tool, and email service. Sixty seconds per video.",
    cta: "RepurposeTube for Solopreneurs",
  },
  {
    href: "/for-content-marketers",
    icon: BarChart2,
    label: "Content Marketers",
    headline: "Scale client content fast",
    body: "Turn any client video into a full written campaign. Handle more clients without more hours.",
    cta: "RepurposeTube for Content Marketers",
  },
]

interface AudienceLinksProps {
  headline?: string
  subheadline?: string
}

export function AudienceLinks({
  headline = "Built for how you work",
  subheadline = "Whether you're a solo creator or managing client campaigns, RepurposeTube fits your workflow.",
}: AudienceLinksProps) {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <h2 className="font-heading mb-4 text-2xl font-extrabold tracking-tight text-stone-900 text-pretty sm:text-4xl">
            {headline}
          </h2>
          <p className="mx-auto max-w-xl text-base text-stone-500">{subheadline}</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-3">
          {AUDIENCE.map((item) => {
            const Icon = item.icon
            return (
              <Link
                key={item.href}
                href={item.href}
                title={`${item.cta} — Content Repurposing for ${item.label}`}
                className="group flex flex-col gap-4 rounded-2xl border border-stone-200 bg-stone-50 p-7 transition-all duration-200 hover:border-amber-300 hover:bg-amber-50/30 hover:shadow-md"
              >
                <div className="flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-xl bg-amber-100 text-amber-600">
                    <Icon className="size-5" />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-widest text-stone-400">
                    {item.label}
                  </span>
                </div>
                <div>
                  <h3 className="font-heading mb-1.5 text-lg font-bold text-stone-900">{item.headline}</h3>
                  <p className="text-sm leading-relaxed text-stone-500">{item.body}</p>
                </div>
                <div className="mt-auto flex items-center gap-1 text-sm font-medium text-amber-600 transition-colors group-hover:text-amber-500">
                  {item.cta}
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
