import Link from "next/link"
import { AuthContainer } from "@/components/auth/AuthContainer"
import { ResetPasswordForm } from "@/components/auth/ResetPasswordForm"
import { createSupabaseServerClient } from "@/lib/supabase/server"

export default async function ResetPasswordPage() {
  const supabase = await createSupabaseServerClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  return (
    <AuthContainer title="Choose a new password" description="Set a new password to secure your account.">
      {user ? (
        <ResetPasswordForm />
      ) : (
        <div className="space-y-3 text-sm">
          <p className="text-stone-300">
            Your reset session is missing or expired. Request a new password reset link.
          </p>
          <Link href="/forgot-password" className="text-brand-400 hover:text-brand-300">
            Send a new reset link
          </Link>
        </div>
      )}
    </AuthContainer>
  )
}
