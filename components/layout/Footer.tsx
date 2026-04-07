import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-stone-800 bg-stone-950 py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <span className="font-heading text-base font-bold tracking-tight text-stone-100">
              Repurpose<span className="text-amber-400">Tube</span>
            </span>
            <p className="mt-1 text-xs text-stone-500">
              Turn any YouTube video into 6 content formats instantly.
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-stone-500">
            <Link href="/#how-it-works" className="transition-colors hover:text-stone-300">How it works</Link>
            <Link href="/#features" className="transition-colors hover:text-stone-300">Features</Link>
            <Link href="/#faq" className="transition-colors hover:text-stone-300">FAQ</Link>
            <Link href="/blog" className="transition-colors hover:text-stone-300">Blog</Link>
            <Link href="/privacy" className="transition-colors hover:text-stone-300">Privacy</Link>
            <Link href="/terms" className="transition-colors hover:text-stone-300">Terms</Link>
          </nav>
        </div>

        <div className="mt-8 border-t border-stone-800 pt-6 text-xs text-stone-600">
          © {new Date().getFullYear()} RepurposeTube. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
