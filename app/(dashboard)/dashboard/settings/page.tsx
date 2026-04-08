import { Bell, CreditCard, ShieldCheck, User } from "lucide-react"
import { signOut } from "@/app/auth/actions"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { createSupabaseServerClient } from "@/lib/supabase/server"

const SETTINGS_BLOCKS = [
  {
    title: "Account",
    description: "Profile, email preferences, and password controls.",
    icon: User,
  },
  {
    title: "Plan and billing",
    description: "Usage limits, subscription details, and invoices.",
    icon: CreditCard,
  },
  {
    title: "Notifications",
    description: "Generation updates and system notifications.",
    icon: Bell,
  },
  {
    title: "Security",
    description: "Session management and account protection settings.",
    icon: ShieldCheck,
  },
]

export default async function DashboardSettingsPage() {
  const supabase = await createSupabaseServerClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  return (
    <div className="space-y-4">
      <Card className="border-stone-800 bg-stone-900/80 text-stone-100">
        <CardHeader className="space-y-1">
          <CardTitle className="text-xl">Settings</CardTitle>
          <CardDescription className="text-stone-400">
            MVP settings scaffold with clear placeholders for account and plan management.
          </CardDescription>
        </CardHeader>
      </Card>

      <Card className="border-stone-800 bg-stone-900/80 text-stone-100">
        <CardHeader className="space-y-1">
          <CardTitle className="text-base">Account</CardTitle>
          <CardDescription className="text-stone-400">
            Manage your session and basic account context from one place.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-wide text-stone-500">Signed in as</p>
            <p className="text-sm text-stone-100">{user?.email ?? "account@repurposetube.com"}</p>
          </div>
          <form action={signOut}>
            <Button
              type="submit"
              variant="outline"
              className="border-stone-700 bg-stone-900 text-stone-100 hover:bg-stone-800 hover:text-stone-100"
            >
              Log out
            </Button>
          </form>
        </CardContent>
      </Card>

      <div className="grid gap-3 sm:grid-cols-2">
        {SETTINGS_BLOCKS.map((item) => {
          const Icon = item.icon
          return (
            <Card key={item.title} className="border-stone-800 bg-stone-900/80 text-stone-100">
              <CardHeader className="space-y-1">
                <CardTitle className="flex items-center gap-2 text-base">
                  <Icon className="size-4 text-brand-400" />
                  {item.title}
                </CardTitle>
                <CardDescription className="text-stone-400">{item.description}</CardDescription>
              </CardHeader>
              <CardContent className="text-xs text-stone-500">
                Placeholder only - detailed controls are scheduled for the next implementation phase.
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
