import { NextResponse, type NextRequest } from "next/server"
import { createSupabaseProxyClient } from "@/lib/supabase/proxy"

const REDIRECT_IF_AUTHED = new Set(["/login", "/signup"])

function sanitizeNextPath(nextPath: string | null, fallback = "/dashboard") {
  if (!nextPath) return fallback
  if (!nextPath.startsWith("/") || nextPath.startsWith("//")) return fallback
  return nextPath
}

function isDashboardPath(pathname: string) {
  return pathname === "/dashboard" || pathname.startsWith("/dashboard/")
}

export async function proxy(request: NextRequest) {
  const { supabase, response } = createSupabaseProxyClient(request)
  const { data } = await supabase.auth.getUser()
  const user = data.user

  const { pathname, search } = request.nextUrl

  if (!user && isDashboardPath(pathname)) {
    const loginUrl = new URL("/login", request.url)
    loginUrl.searchParams.set("next", `${pathname}${search}`)
    return NextResponse.redirect(loginUrl)
  }

  if (user && REDIRECT_IF_AUTHED.has(pathname)) {
    const requestedNext = request.nextUrl.searchParams.get("next")
    const destination = sanitizeNextPath(requestedNext)
    return NextResponse.redirect(new URL(destination, request.url))
  }

  return response
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)"],
}
