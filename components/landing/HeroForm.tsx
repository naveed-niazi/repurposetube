import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroForm() {
  return (
    <div className="mx-auto flex max-w-xl justify-center">
      <Button
        asChild
        className="h-12 rounded-xl bg-brand-500 px-8 text-base font-semibold text-stone-950 hover:bg-brand-400"
      >
        <Link href="/waitlist">
          Get Early Access
          <ArrowRight className="ml-2 size-4" />
        </Link>
      </Button>
    </div>
  )
}
