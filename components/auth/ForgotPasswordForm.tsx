"use client"

import Link from "next/link"
import { useActionState } from "react"
import { sendPasswordResetEmail, type AuthActionState } from "@/app/auth/actions"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const initialState: AuthActionState = {}

export function ForgotPasswordForm() {
  const [state, action, pending] = useActionState(sendPasswordResetEmail, initialState)

  return (
    <form action={action} className="space-y-3">
      <label className="block space-y-1 text-sm">
        <span className="text-stone-300">Email</span>
        <Input name="email" type="email" autoComplete="email" required />
      </label>

      {state.error && <p className="text-sm text-red-400">{state.error}</p>}
      {state.success && <p className="text-sm text-emerald-400">{state.success}</p>}

      <Button
        type="submit"
        className="w-full bg-brand-500 font-semibold text-stone-950 hover:bg-brand-400"
        disabled={pending}
      >
        {pending ? "Sending..." : "Send reset link"}
      </Button>

      <p className="text-sm text-stone-400">
        Remembered it?{" "}
        <Link href="/login" className="text-brand-400 hover:text-brand-300">
          Back to login
        </Link>
      </p>
    </form>
  )
}
