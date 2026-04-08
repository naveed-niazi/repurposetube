import type { ReactNode } from "react"
import Image from "next/image"
import Link from "next/link"
import { CheckCircle2, ShieldCheck, Zap } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

type AuthContainerProps = {
  title: string
  description: string
  children: ReactNode
}

export function AuthContainer({ title, description, children }: AuthContainerProps) {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-stone-950 px-4 py-12 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0 flex items-start justify-center overflow-hidden">
        <div className="mt-20 size-[680px] rounded-full bg-brand-500/8 blur-[110px]" />
      </div>
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.14]"
        style={{
          backgroundImage: "radial-gradient(circle, #6b6b5a 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative mx-auto w-full max-w-4xl space-y-4">
        <Link href="/" className="mx-auto block w-fit lg:hidden!">
          <span className="inline-flex items-center gap-2">
            <Image
              src="/favicon.svg"
              alt="RepurposeTube logo"
              width={24}
              height={24}
              className="shrink-0"
            />
            <span className="font-heading text-base font-bold tracking-tight text-stone-100">
              Repurpose<span className="text-brand-500">Tube</span>
            </span>
          </span>
        </Link>

      <Card className="relative mx-auto w-full max-w-4xl border border-stone-800 bg-stone-900/88 text-stone-100 backdrop-blur-sm">
        <div className="grid lg:grid-cols-[1fr_0.9fr]">
          <div className="px-2 py-2 lg:flex lg:min-h-[440px] lg:flex-col lg:justify-start">
            <CardHeader className="space-y-2 pb-2">
              <CardTitle className="text-xl font-semibold">{title}</CardTitle>
              <CardDescription className="text-stone-400">{description}</CardDescription>
            </CardHeader>
            <CardContent className="pt-4">{children}</CardContent>
          </div>

          <div className="hidden border-stone-800 lg:block lg:border-l lg:px-1 lg:py-1">
            <CardHeader className="space-y-3">
              <div className="inline-flex w-fit items-center gap-2 rounded-md border border-brand-500/35 bg-brand-500/10 px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-brand-400">
                <Image
                  src="/favicon.svg"
                  alt="RepurposeTube logo"
                  width={14}
                  height={14}
                  className="shrink-0"
                />
                <span className="font-heading text-sm font-bold tracking-tight text-brand-400 normal-case">
                  Repurpose<span className="text-brand-500">Tube</span>
                </span>
              </div>
              <CardTitle className="font-heading text-2xl leading-tight">
                Turn one video into six polished formats in minutes
              </CardTitle>
              <CardDescription className="text-stone-400">
                Secure workspace, instant generation, and outputs optimized for each channel.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="rounded-lg border border-stone-800 bg-stone-950/70 p-4">
                <ul className="space-y-3 text-sm text-stone-300">
                  <li className="flex items-start gap-2.5">
                    <Zap className="mt-0.5 size-4 text-brand-400" />
                    <span>
                      Generate blog posts, threads, LinkedIn, SEO package, newsletter, and Shorts scripts in parallel.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <ShieldCheck className="mt-0.5 size-4 text-brand-400" />
                    <span>Keep your voice consistent with brand-ready drafts tailored for each platform.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="mt-0.5 size-4 text-brand-400" />
                    <span>Built for creators and teams that need channel-ready assets fast.</span>
                  </li>
                </ul>
              </div>
              <p className="text-xs text-stone-500">Tip: use Google sign-in for the fastest onboarding experience.</p>
            </CardContent>
          </div>
        </div>
      </Card>
      </div>
    </main>
  )
}
