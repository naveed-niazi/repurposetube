import { AuthContainer } from "@/components/auth/AuthContainer"
import { SignupForm } from "@/components/auth/SignupForm"

type PageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>
}

function readParam(value: string | string[] | undefined) {
  if (Array.isArray(value)) return value[0]
  return value
}

export default async function SignupPage({ searchParams }: PageProps) {
  const params = await searchParams

  return (
    <AuthContainer title="Create your account" description="Get started with RepurposeTube in seconds.">
      <SignupForm nextPath={readParam(params.next)} />
    </AuthContainer>
  )
}
