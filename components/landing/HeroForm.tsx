"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ArrowRight, Loader2 } from "lucide-react"

export function HeroForm() {
  const [url, setUrl] = useState("")
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const trimmed = url.trim()
    if (!trimmed) return
    setLoading(true)
    router.push(`/dashboard?url=${encodeURIComponent(trimmed)}`)
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto flex max-w-xl flex-col gap-3 sm:flex-row sm:max-w-2xl">
      <input
        type="url"
        placeholder="Paste a YouTube URL..."
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        className="h-12 flex-1 rounded-xl border border-stone-700 bg-stone-900 px-4 text-base text-stone-100 placeholder:text-stone-500 outline-none transition-colors focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
      />
      <Button
        type="submit"
        disabled={loading}
        className="h-12 shrink-0 rounded-xl bg-brand-500 px-6 text-base font-semibold text-stone-950 hover:bg-brand-400"
      >
        {loading ? (
          <Loader2 className="mr-2 size-4 animate-spin" />
        ) : null}
        Repurpose Now
        {!loading && <ArrowRight className="ml-2 size-4" />}
      </Button>
    </form>
  )
}
