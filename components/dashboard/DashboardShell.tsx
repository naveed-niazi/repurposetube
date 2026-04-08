import type { ReactNode } from "react"
import { DashboardHeader } from "@/components/dashboard/DashboardHeader"
import { DashboardMobileQuickNav } from "@/components/dashboard/DashboardMobileNav"
import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar"

type DashboardShellProps = {
  userEmail: string
  children: ReactNode
}

export function DashboardShell({ userEmail, children }: DashboardShellProps) {
  return (
    <main className="relative min-h-screen overflow-hidden bg-stone-950">
      <div className="pointer-events-none absolute inset-0 flex items-start justify-center overflow-hidden">
        <div className="mt-16 size-[680px] rounded-full bg-brand-500/8 blur-[110px]" />
      </div>
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage: "radial-gradient(circle, #6b6b5a 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative mx-auto flex w-full max-w-7xl gap-4 px-3 pb-24 pt-3 sm:px-4 sm:pt-4 lg:h-[calc(100dvh-2.5rem)] lg:items-stretch lg:overflow-hidden lg:pb-5 lg:pt-5">
        <DashboardSidebar userEmail={userEmail} />

        <div className="flex min-w-0 flex-1 flex-col gap-4 lg:h-full lg:min-h-0 lg:rounded-2xl lg:border lg:border-stone-800/90 lg:bg-stone-900/70 lg:p-3 lg:backdrop-blur-sm">
          <DashboardHeader userEmail={userEmail} />
          <section className="min-w-0 pb-4 lg:h-0 lg:min-h-0 lg:flex-1 lg:overflow-y-auto lg:pr-1 lg:pb-0">{children}</section>
        </div>
      </div>

      <DashboardMobileQuickNav />
    </main>
  )
}
