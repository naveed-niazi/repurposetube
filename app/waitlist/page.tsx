"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, Check, Loader2, Star } from "lucide-react"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const ROLES = [
  { value: "youtuber", label: "YouTuber / Video Creator" },
  { value: "solopreneur", label: "Solopreneur / Creator Business" },
  { value: "content-marketer", label: "Content Marketer" },
  { value: "agency", label: "Marketing Agency" },
  { value: "other", label: "Something else" },
]

const PERKS = [
  "Full access to all 6 AI content formats — free during beta",
  "Parallel generation: blog post, thread, LinkedIn, SEO package, newsletter, Shorts scripts",
  "Founding member rate locked in when paid plans launch",
  "30 days' notice before any billing — no surprises",
]

export default function WaitlistPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [role, setRole] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError("")
    setLoading(true)

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, role }),
      })
      const data = await res.json()

      if (!res.ok) {
        if (res.status === 409) {
          // Already joined — treat as success
          setSuccess(true)
          return
        }
        setError(data.error?.message ?? "Something went wrong. Please try again.")
        return
      }

      setSuccess(true)
    } catch {
      setError("Network error. Please check your connection and try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar variant="page" />
      <main className="flex-1 bg-stone-950">

        <section className="relative overflow-hidden py-24 sm:py-32">
          {/* Glow */}
          <div className="pointer-events-none absolute inset-0 flex items-start justify-center overflow-hidden">
            <div className="mt-16 size-[700px] rounded-full bg-amber-500/[0.07] blur-[120px]" />
          </div>
          {/* Dot grid */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.12]"
            style={{
              backgroundImage: "radial-gradient(circle, #6b6b5a 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />

          <div className="relative mx-auto max-w-xl px-5 sm:px-8">

            {success ? (
              /* ── Success state ── */
              <div className="text-center">
                <div className="mb-6 flex justify-center">
                  <div className="flex size-16 items-center justify-center rounded-full bg-amber-500/10 ring-1 ring-amber-500/30">
                    <Check className="size-8 text-amber-400" />
                  </div>
                </div>
                <h1 className="font-heading mb-3 text-3xl font-extrabold tracking-tight text-stone-50 sm:text-4xl">
                  You&apos;re on the list.
                </h1>
                <p className="mb-8 text-stone-400 leading-relaxed">
                  We&apos;ll email you at <span className="text-stone-200">{email}</span> as soon as your access opens. Welcome to the founding cohort.
                </p>

                <div className="mb-10 rounded-xl border border-stone-800 bg-stone-900/60 p-5 text-left">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-amber-400">What to expect</p>
                  <ul className="space-y-2.5">
                    {[
                      "Access email with your personal signup link",
                      "Full product — all 6 formats, parallel generation, history",
                      "Founding member rate locked in when paid plans launch",
                      "No card required during beta",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-stone-400">
                        <Check className="mt-0.5 size-3.5 shrink-0 text-amber-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="mb-4 text-sm text-stone-500">While you wait, explore what RepurposeTube does:</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {[
                    { href: "/youtube-to-blog-post", label: "Blog Post" },
                    { href: "/youtube-to-twitter-thread", label: "Twitter Thread" },
                    { href: "/youtube-seo-generator", label: "YouTube SEO" },
                    { href: "/youtube-to-newsletter", label: "Newsletter" },
                  ].map((l) => (
                    <Link
                      key={l.href}
                      href={l.href}
                      className="rounded-full border border-stone-700 bg-stone-900 px-3 py-1.5 text-xs text-stone-400 transition-colors hover:border-amber-500/40 hover:text-stone-200"
                    >
                      {l.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              /* ── Form state ── */
              <>
                <div className="mb-8 text-center">
                  <div className="mb-5 flex items-center justify-center gap-2">
                    <Badge className="border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-amber-400">
                      Beta — Early Access
                    </Badge>
                  </div>

                  <h1 className="font-heading mb-4 text-[clamp(1.75rem,6.25vw,2.75rem)] font-extrabold leading-[1.1] tracking-tight text-stone-50 text-pretty">
                    Get early access to RepurposeTube
                  </h1>
                  <p className="text-stone-400 leading-relaxed text-pretty">
                    We&apos;re onboarding the first wave of users. Join the list and we&apos;ll give you free access — all 6 content formats, no credit card, no catch.
                  </p>
                </div>

                {/* Perks strip */}
                <div className="mb-8 rounded-xl border border-stone-800 bg-stone-900/50 p-5">
                  <div className="mb-3 flex items-center gap-2">
                    <Star className="size-3.5 text-amber-400" />
                    <p className="text-xs font-semibold uppercase tracking-widest text-amber-400">Founding member access includes</p>
                  </div>
                  <ul className="space-y-2">
                    {PERKS.map((perk) => (
                      <li key={perk} className="flex items-start gap-2.5 text-sm text-stone-400">
                        <Check className="mt-0.5 size-3.5 shrink-0 text-amber-400" />
                        {perk}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div>
                    <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-stone-300">
                      Email address <span className="text-amber-400">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="you@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="h-11 w-full rounded-xl border border-stone-700 bg-stone-900 px-4 text-sm text-stone-100 placeholder:text-stone-500 outline-none transition-colors focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
                    />
                  </div>

                  <div>
                    <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-stone-300">
                      Your name <span className="text-stone-600 font-normal">(optional)</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      placeholder="Alex"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="h-11 w-full rounded-xl border border-stone-700 bg-stone-900 px-4 text-sm text-stone-100 placeholder:text-stone-500 outline-none transition-colors focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
                    />
                  </div>

                  <div>
                    <label htmlFor="role" className="mb-1.5 block text-sm font-medium text-stone-300">
                      What best describes you? <span className="text-stone-600 font-normal">(optional)</span>
                    </label>
                    <select
                      id="role"
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                      className="h-11 w-full rounded-xl border border-stone-700 bg-stone-900 px-4 text-sm text-stone-100 outline-none transition-colors focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 [&>option]:bg-stone-900"
                    >
                      <option value="">Select one…</option>
                      {ROLES.map((r) => (
                        <option key={r.value} value={r.value}>{r.label}</option>
                      ))}
                    </select>
                  </div>

                  {error && (
                    <p className="rounded-lg border border-red-500/20 bg-red-500/10 px-4 py-2.5 text-sm text-red-400">
                      {error}
                    </p>
                  )}

                  <Button
                    type="submit"
                    disabled={loading}
                    className="mt-1 h-12 w-full rounded-xl bg-amber-500 text-base font-bold text-stone-950 hover:bg-amber-400 disabled:opacity-60"
                  >
                    {loading ? (
                      <Loader2 className="mr-2 size-4 animate-spin" />
                    ) : null}
                    {loading ? "Joining…" : "Join the Early Access List"}
                    {!loading && <ArrowRight className="ml-2 size-4" />}
                  </Button>

                  <p className="text-center text-xs text-stone-600">
                    No spam. We&apos;ll only email you when your access opens.
                  </p>
                </form>
              </>
            )}
          </div>
        </section>

      </main>
      <Footer />
    </div>
  )
}
