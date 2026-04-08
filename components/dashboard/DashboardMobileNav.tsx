"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { DASHBOARD_NAV_ITEMS, DASHBOARD_QUICK_ITEMS } from "@/components/dashboard/nav-items"

export function DashboardMobileMenu() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button variant="ghost" size="icon-sm" onClick={() => setOpen((v) => !v)} aria-label="Open menu">
        {open ? <X className="size-4" /> : <Menu className="size-4" />}
      </Button>

      {open && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button
            className="absolute inset-0 bg-black/60"
            aria-label="Close menu overlay"
            onClick={() => setOpen(false)}
          />
          <div className="absolute left-3 right-3 top-16 rounded-xl border border-stone-800 bg-stone-900 p-3 shadow-2xl">
            <p className="mb-2 px-1 text-xs uppercase tracking-wide text-stone-500">Navigation</p>
            <div className="space-y-1">
              {DASHBOARD_NAV_ITEMS.map((item) => {
                const Icon = item.icon
                const active = pathname === item.href
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "flex items-center gap-2 rounded-lg border border-transparent px-3 py-2 text-sm text-stone-300 transition-colors",
                      active
                        ? "border-brand-500/40 bg-brand-500/10 text-brand-300"
                        : "hover:border-stone-700 hover:bg-stone-800/70 hover:text-stone-100"
                    )}
                  >
                    <Icon className="size-4" />
                    {item.label}
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export function DashboardMobileQuickNav() {
  const pathname = usePathname()

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-stone-800 bg-stone-950/95 px-3 pb-[calc(0.6rem+env(safe-area-inset-bottom))] pt-2 backdrop-blur lg:hidden">
      <nav className="mx-auto grid max-w-md grid-cols-2 gap-2">
        {DASHBOARD_QUICK_ITEMS.map((item) => {
          const Icon = item.icon
          const active = pathname === item.href
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center justify-center gap-1.5 rounded-lg border px-2 py-2 text-xs font-medium transition-colors",
                active
                  ? "border-brand-500/40 bg-brand-500/10 text-brand-300"
                  : "border-stone-800 bg-stone-900 text-stone-300 hover:border-stone-700 hover:text-stone-100"
              )}
            >
              <Icon className="size-3.5" />
              {item.label}
            </Link>
          )
        })}
      </nav>
    </div>
  )
}
