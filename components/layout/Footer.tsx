import Link from "next/link"

const OUTPUT_FORMATS = [
  { href: "/youtube-to-blog-post", label: "YouTube → Blog Post" },
  { href: "/youtube-to-twitter-thread", label: "YouTube → Twitter Thread" },
  { href: "/youtube-to-linkedin-post", label: "YouTube → LinkedIn Post" },
  { href: "/youtube-seo-generator", label: "YouTube SEO Generator" },
  { href: "/youtube-to-newsletter", label: "YouTube → Newsletter" },
  { href: "/youtube-to-shorts-script", label: "YouTube → Shorts Scripts" },
]

const USE_CASES = [
  { href: "/for-youtubers", label: "For YouTubers" },
  { href: "/for-solopreneurs", label: "For Solopreneurs" },
  { href: "/for-content-marketers", label: "For Content Marketers" },
  { href: "/repurpose-youtube-video", label: "Repurpose YouTube Video" },
  { href: "/youtube-to-all-content-formats", label: "All Formats at Once" },
]

const COMPARE = [
  { href: "/best-youtube-repurposing-tools", label: "Best Repurposing Tools" },
  { href: "/alternatives/castmagic-alternative", label: "vs Castmagic" },
  { href: "/alternatives/repurpose-io-alternative", label: "vs Repurpose.io" },
  { href: "/alternatives/autorepurpose-alternative", label: "vs AutoRepurpose" },
]

const COMPANY = [
  { href: "/blog", label: "Blog" },
  { href: "/pricing", label: "Pricing" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
]

function FooterCol({ heading, links }: { heading: string; links: { href: string; label: string }[] }) {
  return (
    <div>
      <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-stone-500">{heading}</p>
      <ul className="space-y-2">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="text-sm text-stone-500 transition-colors hover:text-stone-300">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function Footer() {
  return (
    <footer className="border-t border-stone-800 bg-stone-950 pt-14 pb-8">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Main grid */}
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-5">
          {/* Brand */}
          <div className="col-span-2 sm:col-span-3 lg:col-span-1">
            <Link href="/">
              <span className="font-heading text-base font-bold tracking-tight text-stone-100">
                Repurpose<span className="text-amber-400">Tube</span>
              </span>
            </Link>
            <p className="mt-2 max-w-[200px] text-xs leading-relaxed text-stone-500">
              Turn any YouTube video into 6 content formats in 60 seconds.
            </p>
          </div>

          <FooterCol heading="Output Formats" links={OUTPUT_FORMATS} />
          <FooterCol heading="Use Cases" links={USE_CASES} />
          <FooterCol heading="Compare" links={COMPARE} />
          <FooterCol heading="Company" links={COMPANY} />
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-stone-800 pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-stone-600">© {new Date().getFullYear()} RepurposeTube. All rights reserved.</p>
          <p className="text-xs text-stone-600">
            Powered by AI — built for creators, solopreneurs, and marketers.
          </p>
        </div>
      </div>
    </footer>
  )
}
