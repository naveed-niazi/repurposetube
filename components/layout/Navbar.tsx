import Link from "next/link"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

interface NavbarProps {
  variant?: "home" | "page"
}

const FEATURES = [
  { href: "/youtube-to-blog-post", label: "Blog Post" },
  { href: "/youtube-to-twitter-thread", label: "Twitter / X Thread" },
  { href: "/youtube-to-linkedin-post", label: "LinkedIn Post" },
  { href: "/youtube-seo-generator", label: "YouTube SEO Package" },
  { href: "/youtube-to-newsletter", label: "Newsletter Email" },
  { href: "/youtube-to-shorts-script", label: "Shorts Scripts" },
]

const USE_CASES = [
  { href: "/for-youtubers", label: "For YouTubers" },
  { href: "/for-solopreneurs", label: "For Solopreneurs" },
  { href: "/for-content-marketers", label: "For Marketers" },
  { href: "/youtube-to-all-content-formats", label: "All Formats at Once" },
]

export function Navbar({ variant = "home" }: NavbarProps) {
  const prefix = variant === "page" ? "/" : ""
  return (
    <header className="sticky top-0 z-50 border-b border-stone-800/60 bg-stone-950/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <span className="font-heading text-lg font-bold tracking-tight text-stone-100">
            Repurpose<span className="text-amber-400">Tube</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 text-sm font-medium text-stone-400 sm:flex">

          {/* Features dropdown */}
          <div className="group/feat relative">
            <div className="flex cursor-default select-none items-center gap-1 rounded-md px-3 py-2 transition-colors group-hover/feat:bg-stone-900 group-hover/feat:text-stone-100">
              Features
              <ChevronDown className="size-3.5 opacity-60 transition-transform duration-200 group-hover/feat:rotate-180" />
            </div>
            {/* Dropdown */}
            <div className="invisible absolute left-1/2 top-full z-50 mt-1.5 w-52 -translate-x-1/2 rounded-xl border border-stone-800 bg-stone-900 p-1.5 opacity-0 shadow-2xl shadow-black/40 transition-all duration-150 group-hover/feat:visible group-hover/feat:opacity-100">
              <div className="mb-1 px-2 pt-1 text-[10px] font-semibold uppercase tracking-widest text-stone-600">
                Output formats
              </div>
              {FEATURES.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block rounded-lg px-3 py-2 text-sm text-stone-400 transition-colors hover:bg-stone-800 hover:text-stone-100"
                >
                  {item.label}
                </Link>
              ))}
              <div className="mt-1 border-t border-stone-800 pt-1">
                <Link
                  href="/repurpose-youtube-video"
                  className="block rounded-lg px-3 py-2 text-sm font-medium text-amber-400 transition-colors hover:bg-stone-800"
                >
                  All outputs overview →
                </Link>
              </div>
            </div>
          </div>

          {/* Use Cases dropdown */}
          <div className="group/for relative">
            <div className="flex cursor-default select-none items-center gap-1 rounded-md px-3 py-2 transition-colors group-hover/for:bg-stone-900 group-hover/for:text-stone-100">
              Use cases
              <ChevronDown className="size-3.5 opacity-60 transition-transform duration-200 group-hover/for:rotate-180" />
            </div>
            <div className="invisible absolute left-1/2 top-full z-50 mt-1.5 w-52 -translate-x-1/2 rounded-xl border border-stone-800 bg-stone-900 p-1.5 opacity-0 shadow-2xl shadow-black/40 transition-all duration-150 group-hover/for:visible group-hover/for:opacity-100">
              <div className="mb-1 px-2 pt-1 text-[10px] font-semibold uppercase tracking-widest text-stone-600">
                Who it&apos;s for
              </div>
              {USE_CASES.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block rounded-lg px-3 py-2 text-sm text-stone-400 transition-colors hover:bg-stone-800 hover:text-stone-100"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <Link
            href="/best-youtube-repurposing-tools"
            className="rounded-md px-3 py-2 transition-colors hover:bg-stone-900 hover:text-stone-100"
          >
            Compare
          </Link>

          <Link
            href="/pricing"
            className="rounded-md px-3 py-2 transition-colors hover:bg-stone-900 hover:text-stone-100"
          >
            Pricing
          </Link>

          <Link
            href={`${prefix}#faq`}
            className="rounded-md px-3 py-2 transition-colors hover:bg-stone-900 hover:text-stone-100"
          >
            FAQ
          </Link>
        </nav>

        {/* CTA buttons */}
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            asChild
            className="text-stone-300 hover:bg-stone-800 hover:text-stone-100"
          >
            <Link href="/login">Log in</Link>
          </Button>
          <Button
            size="sm"
            asChild
            className="bg-amber-500 font-semibold text-stone-950 hover:bg-amber-400"
          >
            <Link href="/signup">Get Started Free</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
