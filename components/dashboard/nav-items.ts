import { History, PlusSquare, Settings } from "lucide-react"

export type DashboardNavItem = {
  href: string
  label: string
  icon: typeof PlusSquare
}

export const DASHBOARD_NAV_ITEMS: DashboardNavItem[] = [
  { href: "/dashboard/new", label: "New", icon: PlusSquare },
  { href: "/dashboard/history", label: "History", icon: History },
  { href: "/dashboard/settings", label: "Settings", icon: Settings },
]

export const DASHBOARD_QUICK_ITEMS = DASHBOARD_NAV_ITEMS.filter(
  (item) => item.href === "/dashboard/new" || item.href === "/dashboard/history"
)
