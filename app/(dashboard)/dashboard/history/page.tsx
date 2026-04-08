import { HistoryList } from "@/components/dashboard/HistoryList"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function DashboardHistoryPage() {
  return (
    <div className="space-y-4">
      <Card className="border-stone-800 bg-stone-900/80 text-stone-100">
        <CardHeader className="space-y-1">
          <CardTitle className="text-xl">History</CardTitle>
          <CardDescription className="text-stone-400">
            Placeholder list for the last 10 processed videos with open and delete actions.
          </CardDescription>
        </CardHeader>
      </Card>

      <HistoryList />
    </div>
  )
}
