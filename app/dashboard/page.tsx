import { redirect } from "next/navigation"
import { signOut } from "@/app/auth/actions"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { createSupabaseServerClient } from "@/lib/supabase/server"

export default async function DashboardPage() {
  const supabase = await createSupabaseServerClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect("/login?next=/dashboard")
  }

  return (
    <main className="min-h-screen bg-stone-950 px-4 py-12">
      <div className="mx-auto max-w-3xl space-y-6">
        <Card className="border border-stone-800 bg-stone-900 text-stone-100">
          <CardHeader className="flex flex-row items-center justify-between gap-4">
            <CardTitle className="text-xl font-semibold">Dashboard</CardTitle>
            <form action={signOut}>
              <Button type="submit" variant="outline">
                Log out
              </Button>
            </form>
          </CardHeader>
          <CardContent className="space-y-2 text-sm text-stone-300">
            <p className="text-stone-400">Signed in as:</p>
            <p className="font-medium text-stone-100">{user.email}</p>
            <p className="pt-2 text-stone-400">
              MVP auth is active. Next, we can implement the transcript and generation workflow inside this protected
              area.
            </p>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
