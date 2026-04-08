"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { DASHBOARD_NAV_ITEMS } from "@/components/dashboard/nav-items"

type DashboardSidebarProps = {
  userEmail: string
}

export function DashboardSidebar({ userEmail }: DashboardSidebarProps) {
  const pathname = usePathname()

  return (
    <aside className="hidden w-64 shrink-0 lg:flex lg:h-full">
      <div className="flex h-full w-full flex-col rounded-2xl border border-stone-800/90 bg-stone-900/70 p-3 backdrop-blur-sm">
        <Link href="/dashboard/new" className="mb-4 flex items-center gap-2 rounded-lg px-2 py-2">
          <Image
            src="/favicon.svg"
            alt="RepurposeTube logo"
            width={20}
            height={20}
            className="shrink-0"
          />
          <span className="font-heading text-sm font-bold tracking-tight text-stone-100">
            Repurpose<span className="text-brand-500">Tube</span>
          </span>
        </Link>

        <nav className="space-y-1">
          {DASHBOARD_NAV_ITEMS.map((item) => {
            const Icon = item.icon
            const active = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-2 rounded-lg border border-transparent px-3 py-2 text-sm text-stone-300 transition-colors hover:border-stone-700 hover:bg-stone-800/70 hover:text-stone-100",
                  active && "border-brand-500/40 bg-brand-500/10 text-brand-300"
                )}
              >
                <Icon className="size-4" />
                {item.label}
              </Link>
            )
          })}
        </nav>

        <div className="mt-auto space-y-3 rounded-xl border border-stone-800 bg-stone-950/60 p-3">
          <div className="space-y-1">
            <p className="text-xs uppercase tracking-wide text-stone-500">Signed in</p>
            <p className="truncate text-sm text-stone-200">{userEmail}</p>
          </div>
          <Button
            asChild
            variant="outline"
            className="w-full border-stone-700 bg-stone-900 text-xs text-stone-100 hover:bg-stone-800 hover:text-stone-100"
          >
            <Link href="/dashboard/settings">Account settings</Link>
          </Button>
        </div>
      </div>
    </aside>
  )
}
