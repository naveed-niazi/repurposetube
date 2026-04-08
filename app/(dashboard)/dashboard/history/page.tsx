import Link from "next/link"
import { redirect } from "next/navigation"
import { HistoryList } from "@/components/dashboard/HistoryList"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { listGenerationHistoryPage } from "@/lib/db/generation-runs"
import { createSupabaseServerClient } from "@/lib/supabase/server"

type DashboardHistoryPageProps = {
  searchParams?: Promise<{
    page?: string
  }>
}

function parsePositiveInt(value: string | undefined, fallback: number) {
  if (!value) return fallback
  const parsed = Number.parseInt(value, 10)
  if (!Number.isFinite(parsed) || parsed < 1) return fallback
  return parsed
}

export default async function DashboardHistoryPage({ searchParams }: DashboardHistoryPageProps) {
  const supabase = await createSupabaseServerClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect("/login?next=/dashboard/history")
  }

  const params = searchParams ? await searchParams : undefined
  const page = parsePositiveInt(params?.page, 1)
  const history = await listGenerationHistoryPage(user.id, { page, perPage: 10 })
  const hasPrev = history.page > 1
  const hasNext = history.page < history.totalPages

  return (
    <div className="space-y-4">
      <Card className="border-stone-800 bg-stone-900/80 text-stone-100">
        <CardHeader className="space-y-1">
          <CardTitle className="text-xl">History</CardTitle>
          <CardDescription className="text-stone-400">
            All recent generation runs are stored and shown here.
          </CardDescription>
        </CardHeader>
      </Card>

      <HistoryList
        items={history.items}
        page={history.page}
        perPage={history.perPage}
        totalItems={history.totalItems}
        totalPages={history.totalPages}
      />

      <div className="flex items-center justify-between rounded-lg border border-stone-800 bg-stone-900/70 px-3 py-2">
        <p className="text-xs text-stone-400">
          Page {history.page} of {history.totalPages}
        </p>
        <div className="flex gap-2">
          {hasPrev ? (
            <Button
              asChild
              size="sm"
              variant="outline"
              className="border-stone-700 bg-stone-900 text-xs text-stone-100 hover:bg-stone-800 hover:text-stone-100"
            >
              <Link href={`/dashboard/history?page=${Math.max(1, history.page - 1)}`}>Previous</Link>
            </Button>
          ) : (
            <Button
              size="sm"
              variant="outline"
              className="border-stone-800 bg-stone-900 text-xs text-stone-500 hover:bg-stone-900 hover:text-stone-500"
              disabled
            >
              Previous
            </Button>
          )}

          {hasNext ? (
            <Button
              asChild
              size="sm"
              variant="outline"
              className="border-stone-700 bg-stone-900 text-xs text-stone-100 hover:bg-stone-800 hover:text-stone-100"
            >
              <Link href={`/dashboard/history?page=${Math.min(history.totalPages, history.page + 1)}`}>Next</Link>
            </Button>
          ) : (
            <Button
              size="sm"
              variant="outline"
              className="border-stone-800 bg-stone-900 text-xs text-stone-500 hover:bg-stone-900 hover:text-stone-500"
              disabled
            >
              Next
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
