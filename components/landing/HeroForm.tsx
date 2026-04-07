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
    <form onSubmit={handleSubmit} className="mx-auto flex max-w-2xl flex-col gap-3 sm:flex-row">
      <input
        type="url"
        placeholder="https://youtube.com/watch?v=..."
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        className="h-13 flex-1 rounded-lg border border-stone-700 bg-stone-900 px-4 text-base text-stone-100 placeholder:text-stone-500 outline-none transition-colors focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
      />
      <Button
        type="submit"
        disabled={loading}
        className="h-13 shrink-0 px-6 text-base font-semibold"
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
