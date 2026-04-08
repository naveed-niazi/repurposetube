"use client"

import Link from "next/link"
import { useMemo, useState } from "react"
import { useActionState } from "react"
import { signInWithGoogle, signUpWithPassword, type AuthActionState } from "@/app/auth/actions"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const initialState: AuthActionState = {}

function sanitizeNextPath(nextPath: string | null) {
  if (!nextPath) return "/dashboard"
  if (!nextPath.startsWith("/") || nextPath.startsWith("//")) return "/dashboard"
  return nextPath
}

type SignupFormProps = {
  nextPath?: string
}

export function SignupForm({ nextPath }: SignupFormProps) {
  const safeNextPath = sanitizeNextPath(nextPath ?? null)
  const [state, action, pending] = useActionState(signUpWithPassword, initialState)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const canSubmitWithEmail = useMemo(() => {
    return email.trim().length > 0 && password.length > 0 && confirmPassword.length > 0
  }, [email, password, confirmPassword])

  if (state.success) {
    return (
      <div className="space-y-5">
        <div className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-4 text-sm text-emerald-300">
          {state.success}
        </div>
        <Link
          href={`/login?next=${encodeURIComponent(safeNextPath)}`}
          className="group inline-flex items-center gap-1 text-sm text-brand-400 hover:text-brand-300"
        >
          <span>Go to sign in</span>
          <span className="transition-transform duration-200 group-hover:translate-x-0.5">-&gt;</span>
        </Link>
      </div>
    )
  }

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
            autoComplete="new-password"
            required
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
        <label className="block space-y-1.5 text-sm">
          <span className="text-stone-300">Confirm password</span>
          <Input
            name="confirmPassword"
            type="password"
            autoComplete="new-password"
            required
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
          />
        </label>

        {state.error && <p className="text-sm text-red-400">{state.error}</p>}
        {state.success && <p className="text-sm text-emerald-400">{state.success}</p>}

        <Button
          type="submit"
          className="w-full bg-brand-500 font-semibold text-stone-950 hover:bg-brand-400"
          disabled={pending || !canSubmitWithEmail}
        >
          {pending ? "Creating account..." : "Create account"}
        </Button>
      </form>

      <p className="text-sm text-stone-400">
        Already have an account?{" "}
        <Link
          href={`/login?next=${encodeURIComponent(safeNextPath)}`}
          className="group inline-flex items-center gap-1 text-brand-400 hover:text-brand-300"
        >
          <span>Sign in</span>
          <span className="transition-transform duration-200 group-hover:translate-x-0.5">-&gt;</span>
        </Link>
      </p>
    </div>
  )
}
