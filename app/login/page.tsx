import { AuthContainer } from "@/components/auth/AuthContainer"
import { LoginForm } from "@/components/auth/LoginForm"

type PageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>
}

function readParam(value: string | string[] | undefined) {
  if (Array.isArray(value)) return value[0]
  return value
}

export default async function LoginPage({ searchParams }: PageProps) {
  const params = await searchParams

  return (
    <AuthContainer title="Welcome back" description="Sign in to continue to your dashboard.">
      <LoginForm
        nextPath={readParam(params.next)}
        callbackMessage={readParam(params.message)}
        callbackError={readParam(params.error)}
      />
    </AuthContainer>
  )
}
