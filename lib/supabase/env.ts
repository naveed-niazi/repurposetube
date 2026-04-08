function readEnv(name: string): string | undefined {
  const value = process.env[name]
  if (!value) return undefined
  const trimmed = value.trim()
  return trimmed.length > 0 ? trimmed : undefined
}

export function getSupabaseEnv() {
  const url = readEnv("NEXT_PUBLIC_SUPABASE_URL")
  const anonKey = readEnv("SUPABASE_ANON_KEY") ?? readEnv("SUPABASE_PUBLISHABLE_KEY")

  if (!url || !anonKey) {
    throw new Error(
      "Missing Supabase env vars. Set NEXT_PUBLIC_SUPABASE_URL and SUPABASE_ANON_KEY (or SUPABASE_PUBLISHABLE_KEY)."
    )
  }

  return { url, anonKey }
}

export function getSiteUrl() {
  const siteUrl = readEnv("NEXT_PUBLIC_SITE_URL")
  if (siteUrl) return siteUrl.replace(/\/$/, "")
  return "http://localhost:3000"
}
