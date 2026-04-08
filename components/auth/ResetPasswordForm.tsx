"use client"

import Link from "next/link"
import { useActionState } from "react"
import { updatePassword, type AuthActionState } from "@/app/auth/actions"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const initialState: AuthActionState = {}

export function ResetPasswordForm() {
  const [state, action, pending] = useActionState(updatePassword, initialState)

  return (
    <form action={action} className="space-y-3">
      <label className="block space-y-1 text-sm">
        <span className="text-stone-300">New password</span>
        <Input name="password" type="password" autoComplete="new-password" required />
      </label>
      <label className="block space-y-1 text-sm">
        <span className="text-stone-300">Confirm password</span>
        <Input name="confirmPassword" type="password" autoComplete="new-password" required />
      </label>

      {state.error && <p className="text-sm text-red-400">{state.error}</p>}

      <Button
        type="submit"
        className="w-full bg-brand-500 font-semibold text-stone-950 hover:bg-brand-400"
        disabled={pending}
      >
        {pending ? "Updating..." : "Update password"}
      </Button>

      <p className="text-sm text-stone-400">
        Need a fresh link?{" "}
        <Link href="/forgot-password" className="text-brand-400 hover:text-brand-300">
          Reset again
        </Link>
      </p>
    </form>
  )
}
