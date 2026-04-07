import type { Metadata } from "next"
import Link from "next/link"
import { Check, Zap, Lock, Star } from "lucide-react"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { buildPageMetadata } from "@/lib/seo"

export const metadata: Metadata = buildPageMetadata({
  title: "Pricing — Free Beta Access | RepurposeTube",
  description:
    "RepurposeTube is free during beta. Get complete access to all 6 AI content formats — blog post, Twitter thread, LinkedIn post, YouTube SEO package, newsletter, and Shorts scripts. No credit card. No catch.",
  canonical: "https://repurposetube.com/pricing",
  keywords: ["repurposetube pricing", "repurposetube free", "youtube repurposing tool free"],
})

const FEATURES = [
  "YouTube to Blog Post (800–1,200 words, SEO structured)",
  "YouTube to Twitter / X Thread (8–12 tweets, hook + CTA)",
  "YouTube to LinkedIn Post (professional long-form)",
  "YouTube SEO Package (A/B titles, full description, 15 tags)",
  "YouTube to Newsletter Email (subject line + full copy)",
  "YouTube to Shorts Scripts (3 × 60-second scripts)",
  "All 6 formats generated in parallel — ~60 seconds total",
  "Inline editing on every output card",
  "Per-card regeneration without reprocessing",
  "Video history — revisit and re-open any past result",
  "Download outputs as .txt files",
  "No file uploads — YouTube URL is all you need",
]

const FAQ = [
  {
    q: "Will RepurposeTube always be free?",
    a: "No — paid plans will be introduced once we exit beta. But everyone who signs up during beta locks in a founding-member discount for life. We'll give you at least 30 days' notice before any billing begins, and you'll never be charged without explicitly choosing a plan.",
  },
  {
    q: "When does beta end?",
    a: "We're not putting a hard date on it. Beta ends when the core product is stable and we've validated the experience with real users. If you're reading this, you're still in the window.",
  },
  {
    q: "Do I need a credit card to sign up?",
    a: "No. Zero. Not even to \"verify\" your identity. Free means free — you sign up with an email, confirm it, and start repurposing.",
  },
  {
    q: "What will paid plans cost?",
    a: "We haven't finalised pricing yet — that's part of beta. What we can commit to: founding members will receive a permanent discount from whatever the public launch price is.",
  },
  {
    q: "What's the catch?",
    a: "Honestly? There isn't one. We're a small team building in public. Early users help us learn what to build next. In exchange, you get the full product for free while we're figuring that out. That's the whole deal.",
  },
]

export default function PricingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar variant="page" />
      <main className="flex-1">

        {/* ── Hero ── */}
        <section className="relative overflow-hidden bg-stone-950 pb-24 pt-24 sm:pt-32">
          {/* Glow */}
          <div className="pointer-events-none absolute inset-0 flex items-start justify-center overflow-hidden">
            <div className="mt-20 size-[600px] rounded-full bg-amber-500/8 blur-[120px]" />
          </div>
          {/* Dot grid */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.12]"
            style={{
              backgroundImage: "radial-gradient(circle, #6b6b5a 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />

          <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
            <div className="mb-5 flex items-center justify-center gap-2">
              <Badge className="border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-amber-400">
                Beta Release
              </Badge>
              <Badge className="border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-400">
                Free Access Open
              </Badge>
            </div>

            <h1 className="font-heading mb-5 text-[1.75rem] font-extrabold leading-[1.1] tracking-tight text-stone-50 text-balance sm:text-5xl lg:text-6xl">
              You&apos;re Early.{" "}
              <span className="text-amber-400">That Means Free.</span>
            </h1>

            <p className="mx-auto mb-4 max-w-xl text-base leading-relaxed text-stone-400 text-pretty sm:text-lg">
              RepurposeTube is in beta. Every feature — all 6 AI content formats, parallel generation, editing, history — is fully available to everyone who signs up right now.
            </p>
            <p className="mx-auto mb-10 max-w-xl text-base leading-relaxed text-stone-500 text-pretty sm:text-base">
              No credit card. No trial period. No usage cap while we&apos;re in beta. Just complete access while we build.
            </p>

            <Button
              asChild
              className="h-12 bg-amber-500 px-8 text-base font-bold text-stone-950 hover:bg-amber-400"
            >
              <Link href="/waitlist">Get Free Access Now</Link>
            </Button>
            <p className="mt-3 text-sm text-stone-600">No credit card required — ever, during beta</p>
          </div>
        </section>

        {/* ── Single plan card ── */}
        <section className="bg-stone-900 py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <div className="mb-10 text-center">
              <h2 className="font-heading mb-3 text-2xl font-extrabold tracking-tight text-stone-50 sm:text-3xl">
                Everything included. One plan. Free.
              </h2>
              <p className="text-stone-400">This is the complete product — no locked features, no upsell tier.</p>
            </div>

            <div className="rounded-2xl border border-amber-500/20 bg-stone-950 p-8 shadow-2xl shadow-black/40 sm:p-10">
              <div className="mb-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
                <div>
                  <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-amber-400">Beta Plan</p>
                  <p className="font-heading text-4xl font-extrabold text-stone-50">
                    $0
                    <span className="ml-1.5 text-lg font-medium text-stone-500">/ month</span>
                  </p>
                  <p className="mt-1 text-sm text-stone-500">Free for all beta users · Founding member perks on launch</p>
                </div>
                <Button
                  asChild
                  className="shrink-0 bg-amber-500 px-6 font-bold text-stone-950 hover:bg-amber-400"
                >
                  <Link href="/waitlist">Start Free</Link>
                </Button>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {FEATURES.map((feat) => (
                  <div key={feat} className="flex items-start gap-3">
                    <Check className="mt-0.5 size-4 shrink-0 text-amber-400" />
                    <span className="text-sm text-stone-300">{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Founding member perks ── */}
        <section className="bg-stone-950 py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <div className="rounded-2xl border border-stone-800 bg-stone-900/50 p-8 sm:p-10">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-xl bg-amber-500/10">
                  <Star className="size-5 text-amber-400" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-amber-400">Founding Members</p>
                  <h2 className="font-heading text-xl font-extrabold text-stone-50">Lock in your access before pricing launches</h2>
                </div>
              </div>
              <p className="mb-6 text-stone-400 leading-relaxed">
                Everyone who signs up during beta becomes a founding member. When RepurposeTube introduces paid plans, founding members receive a permanent discount — locked to your account for as long as you stay subscribed. No re-applying, no limited-time codes, no expiry.
              </p>
              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  {
                    icon: Zap,
                    title: "Full access now",
                    body: "Everything is unlocked. No features gated behind a paid tier during beta.",
                  },
                  {
                    icon: Lock,
                    title: "Founding rate locked in",
                    body: "Sign up today. When pricing launches, your rate is lower than public pricing — permanently.",
                  },
                  {
                    icon: Star,
                    title: "30-day notice, always",
                    body: "We will never charge you without clear advance notice and your explicit choice to upgrade.",
                  },
                ].map((item) => (
                  <div key={item.title} className="rounded-xl border border-stone-800 bg-stone-950 p-5">
                    <item.icon className="mb-3 size-5 text-amber-400" />
                    <p className="mb-1.5 text-sm font-semibold text-stone-100">{item.title}</p>
                    <p className="text-xs leading-relaxed text-stone-500">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="bg-stone-900 py-20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <h2 className="font-heading mb-10 text-center text-2xl font-extrabold tracking-tight text-stone-50 sm:text-3xl">
              Pricing questions, answered
            </h2>
            <div className="space-y-6">
              {FAQ.map((item) => (
                <div key={item.q} className="rounded-xl border border-stone-800 bg-stone-950/60 p-6">
                  <p className="mb-2 font-semibold text-stone-100">{item.q}</p>
                  <p className="text-sm leading-relaxed text-stone-400">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Final CTA ── */}
        <section className="bg-stone-950 py-20">
          <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
            <h2 className="font-heading mb-4 text-2xl font-extrabold tracking-tight text-stone-50 sm:text-3xl">
              The window is open.{" "}
              <span className="text-amber-400">Get in while it&apos;s free.</span>
            </h2>
            <p className="mx-auto mb-8 max-w-lg text-stone-400">
              Beta access is open right now — no waitlist, no invite code. Sign up and start repurposing your first video in 60 seconds.
            </p>
            <Button
              asChild
              className="bg-amber-500 px-8 text-base font-bold text-stone-950 hover:bg-amber-400"
            >
              <Link href="/waitlist">Create Your Free Account</Link>
            </Button>
            <p className="mt-3 text-sm text-stone-600">No credit card · No trial · No catch</p>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  )
}
