import Image from "next/image"
import Link from "next/link"
import { LogOut } from "lucide-react"
import { signOut } from "@/app/auth/actions"
import { DashboardMobileMenu } from "@/components/dashboard/DashboardMobileNav"
import { Button } from "@/components/ui/button"

type DashboardHeaderProps = {
  userEmail: string
}

export function DashboardHeader({ userEmail }: DashboardHeaderProps) {
  return (
    <header className="sticky top-3 z-30 rounded-xl border border-stone-800/90 bg-stone-900/85 px-3 py-2 backdrop-blur-sm sm:px-4 lg:static">
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2 lg:hidden">
          <DashboardMobileMenu />
          <Link href="/dashboard/new" className="flex items-center gap-2">
            <Image
              src="/favicon.svg"
              alt="RepurposeTube logo"
              width={18}
              height={18}
              className="shrink-0"
            />
            <span className="font-heading text-sm font-bold tracking-tight text-stone-100">
              Repurpose<span className="text-brand-500">Tube</span>
            </span>
          </Link>
        </div>

        <div className="hidden lg:block">
          <p className="text-sm text-stone-400">Workspace</p>
        </div>

        <div className="flex items-center gap-2">
          <p className="hidden max-w-[240px] truncate text-xs text-stone-400 sm:block">{userEmail}</p>
          <form action={signOut}>
            <Button
              type="submit"
              variant="outline"
              size="sm"
              className="gap-1.5 border-stone-700 bg-stone-900 text-stone-100 hover:bg-stone-800 hover:text-stone-100"
            >
              <LogOut className="size-3.5" />
              Log out
            </Button>
          </form>
        </div>
      </div>
    </header>
  )
}
