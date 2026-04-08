"use server"

import { headers } from "next/headers"
import { redirect } from "next/navigation"
import { createSupabaseServerClient } from "@/lib/supabase/server"
import { getSiteUrl } from "@/lib/supabase/env"

export type AuthActionState = {
  error?: string
  success?: string
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function sanitizeNextPath(nextPath: FormDataEntryValue | null, fallback = "/dashboard") {
  const value = typeof nextPath === "string" ? nextPath : ""
  if (!value.startsWith("/") || value.startsWith("//")) return fallback
  return value
}

async function getRequestSiteUrl() {
  const envSiteUrl = getSiteUrl()
  if (envSiteUrl !== "http://localhost:3000") return envSiteUrl

  const headerStore = await headers()
  const forwardedHost = headerStore.get("x-forwarded-host")
  const host = forwardedHost ?? headerStore.get("host")
  const proto = headerStore.get("x-forwarded-proto") ?? "http"
  if (!host) return envSiteUrl
  return `${proto}://${host}`
}

export async function signUpWithPassword(
  _prevState: AuthActionState,
  formData: FormData
): Promise<AuthActionState> {
  const email = String(formData.get("email") ?? "").trim().toLowerCase()
  const password = String(formData.get("password") ?? "")
  const confirmPassword = String(formData.get("confirmPassword") ?? "")
  const nextPath = sanitizeNextPath(formData.get("next"))

  if (!EMAIL_REGEX.test(email)) {
    return { error: "Please enter a valid email address." }
  }

  if (password.length < 8) {
    return { error: "Password must be at least 8 characters." }
  }

  if (password !== confirmPassword) {
    return { error: "Passwords do not match." }
  }

  const supabase = await createSupabaseServerClient()
  const siteUrl = await getRequestSiteUrl()
  const callbackPath = `/auth/callback?next=${encodeURIComponent(nextPath)}`

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${siteUrl}${callbackPath}`,
    },
  })

  if (error) {
    return { error: error.message }
  }

  if (data.session) {
    redirect(nextPath)
  }

  return {
    success: "Check your email to confirm your account, then continue signing in.",
  }
}

export async function signInWithPassword(
  _prevState: AuthActionState,
  formData: FormData
): Promise<AuthActionState> {
  const email = String(formData.get("email") ?? "").trim().toLowerCase()
  const password = String(formData.get("password") ?? "")
  const nextPath = sanitizeNextPath(formData.get("next"))

  if (!EMAIL_REGEX.test(email)) {
    return { error: "Please enter a valid email address." }
  }

  if (password.length === 0) {
    return { error: "Please enter your password." }
  }

  const supabase = await createSupabaseServerClient()
  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  if (error) {
    return { error: "Invalid credentials. Please try again." }
  }

  redirect(nextPath)
}

export async function signInWithGoogle(formData: FormData) {
  const nextPath = sanitizeNextPath(formData.get("next"))
  const siteUrl = await getRequestSiteUrl()
  const callbackPath = `/auth/callback?next=${encodeURIComponent(nextPath)}`

  const supabase = await createSupabaseServerClient()
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: `${siteUrl}${callbackPath}`,
    },
  })

  if (error || !data.url) {
    const params = new URLSearchParams({ error: "Google sign-in failed. Please try again." })
    redirect(`/login?${params.toString()}`)
  }

  redirect(data.url)
}

export async function sendPasswordResetEmail(
  _prevState: AuthActionState,
  formData: FormData
): Promise<AuthActionState> {
  const email = String(formData.get("email") ?? "").trim().toLowerCase()

  if (!EMAIL_REGEX.test(email)) {
    return { error: "Please enter a valid email address." }
  }

  const siteUrl = await getRequestSiteUrl()
  const callbackPath = `/auth/callback?next=${encodeURIComponent("/reset-password")}`

  const supabase = await createSupabaseServerClient()
  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${siteUrl}${callbackPath}`,
  })

  if (error) {
    return { error: "Could not send reset email right now. Please try again." }
  }

  return {
    success: "Password reset link sent. Check your inbox.",
  }
}

export async function updatePassword(
  _prevState: AuthActionState,
  formData: FormData
): Promise<AuthActionState> {
  const password = String(formData.get("password") ?? "")
  const confirmPassword = String(formData.get("confirmPassword") ?? "")

  if (password.length < 8) {
    return { error: "Password must be at least 8 characters." }
  }

  if (password !== confirmPassword) {
    return { error: "Passwords do not match." }
  }

  const supabase = await createSupabaseServerClient()
  const { error } = await supabase.auth.updateUser({ password })

  if (error) {
    return { error: "Password reset session is invalid or expired. Request a new reset link." }
  }

  redirect("/dashboard")
}

export async function signOut() {
  const supabase = await createSupabaseServerClient()
  await supabase.auth.signOut()
  redirect("/login")
}
