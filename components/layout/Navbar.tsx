import Link from "next/link"
import { Button } from "@/components/ui/button"

interface NavbarProps {
  /** "home" uses hash anchors (#features). "page" uses absolute paths (/#features). */
  variant?: "home" | "page"
}

export function Navbar({ variant = "home" }: NavbarProps) {
  const prefix = variant === "page" ? "/" : ""
  return (
    <header className="sticky top-0 z-50 border-b border-stone-800/60 bg-stone-950/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center">
          <span className="font-heading text-lg font-bold tracking-tight text-stone-100">
            Repurpose<span className="text-amber-400">Tube</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 text-sm font-medium text-stone-400 sm:flex">
          <Link href={`${prefix}#how-it-works`} className="transition-colors hover:text-stone-100">
            How it works
          </Link>
          <Link href={`${prefix}#features`} className="transition-colors hover:text-stone-100">
            Features
          </Link>
          <Link href={`${prefix}#faq`} className="transition-colors hover:text-stone-100">
            FAQ
          </Link>
        </nav>

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
