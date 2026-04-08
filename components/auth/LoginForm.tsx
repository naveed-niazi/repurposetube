"use client"

import Link from "next/link"
import { useMemo, useState } from "react"
import { useActionState } from "react"
import { signInWithGoogle, signInWithPassword, type AuthActionState } from "@/app/auth/actions"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const initialState: AuthActionState = {}

function sanitizeNextPath(nextPath: string | null) {
  if (!nextPath) return "/dashboard"
  if (!nextPath.startsWith("/") || nextPath.startsWith("//")) return "/dashboard"
  return nextPath
}

type LoginFormProps = {
  nextPath?: string
  callbackMessage?: string
  callbackError?: string
}

export function LoginForm({ nextPath, callbackMessage, callbackError }: LoginFormProps) {
  const safeNextPath = sanitizeNextPath(nextPath ?? null)
  const [state, action, pending] = useActionState(signInWithPassword, initialState)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const canSubmitWithEmail = useMemo(() => {
    return email.trim().length > 0 && password.length > 0
  }, [email, password])

  return (
    <div className="space-y-5">
      <form action={signInWithGoogle}>
        <input type="hidden" name="next" value={safeNextPath} />
        <Button
          type="submit"
          className="w-full bg-brand-500 font-semibold text-stone-950 hover:bg-brand-400"
        >
          Continue with Google
        </Button>
      </form>

      <p className="text-center text-xs uppercase tracking-wide text-stone-500">-- OR --</p>

      <form action={action} className="space-y-4">
        <input type="hidden" name="next" value={safeNextPath} />
        <label className="block space-y-1.5 text-sm">
          <span className="text-stone-300">Email</span>
          <Input
            name="email"
            type="email"
            autoComplete="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>
        <label className="block space-y-1.5 text-sm">
          <span className="text-stone-300">Password</span>
          <Input
            name="password"
            type="password"
            autoComplete="current-password"
            required
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>

        {(state.error || callbackError) && (
          <p className="text-sm text-red-400">{state.error ?? callbackError}</p>
        )}
        {(state.success || callbackMessage) && (
          <p className="text-sm text-emerald-400">{state.success ?? callbackMessage}</p>
        )}

        <Button
          type="submit"
          className="w-full bg-brand-500 font-semibold text-stone-950 hover:bg-brand-400"
          disabled={pending || !canSubmitWithEmail}
        >
          {pending ? "Signing in..." : "Sign in"}
        </Button>
      </form>

      <div className="flex items-center justify-between text-sm">
        <Link href="/forgot-password" className="text-stone-300 hover:text-stone-100">
          Forgot password?
        </Link>
        <Link
          href={`/signup?next=${encodeURIComponent(safeNextPath)}`}
          className="group inline-flex items-center gap-1 text-brand-400 hover:text-brand-300"
        >
          <span>Create account</span>
          <span className="transition-transform duration-200 group-hover:translate-x-0.5">-&gt;</span>
        </Link>
      </div>
    </div>
  )
}
