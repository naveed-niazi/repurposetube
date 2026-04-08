import { NextResponse, type NextRequest } from "next/server"
import { createSupabaseServerClient } from "@/lib/supabase/server"

function sanitizeNextPath(nextPath: string | null, fallback = "/dashboard") {
  if (!nextPath) return fallback
  if (!nextPath.startsWith("/") || nextPath.startsWith("//")) return fallback
  return nextPath
}

export async function GET(request: NextRequest) {
  const requestUrl = new URL(request.url)
  const code = requestUrl.searchParams.get("code")
  const errorDescription = requestUrl.searchParams.get("error_description")
  const nextPath = sanitizeNextPath(requestUrl.searchParams.get("next"))

  if (errorDescription) {
    const loginErrorUrl = new URL("/login", request.url)
    loginErrorUrl.searchParams.set("error", errorDescription)
    return NextResponse.redirect(loginErrorUrl)
  }

  if (!code) {
    const loginErrorUrl = new URL("/login", request.url)
    loginErrorUrl.searchParams.set("error", "Missing authentication code. Please try again.")
    return NextResponse.redirect(loginErrorUrl)
  }

  const supabase = await createSupabaseServerClient()
  const { error } = await supabase.auth.exchangeCodeForSession(code)

  if (error) {
    const loginErrorUrl = new URL("/login", request.url)
    loginErrorUrl.searchParams.set("error", "Could not complete authentication. Please try again.")
    return NextResponse.redirect(loginErrorUrl)
  }

  return NextResponse.redirect(new URL(nextPath, request.url))
}
