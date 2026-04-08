import type { ReactNode } from "react"
import { redirect } from "next/navigation"
import { DashboardShell } from "@/components/dashboard/DashboardShell"
import { createSupabaseServerClient } from "@/lib/supabase/server"

type DashboardLayoutProps = {
  children: ReactNode
}

export default async function DashboardLayout({ children }: DashboardLayoutProps) {
  const supabase = await createSupabaseServerClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect("/login?next=/dashboard")
  }

  return <DashboardShell userEmail={user.email ?? "account@repurposetube.com"}>{children}</DashboardShell>
}
