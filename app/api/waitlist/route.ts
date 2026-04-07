import { createClient } from "@supabase/supabase-js"
import { NextResponse } from "next/server"

/*
  Run this SQL in your Supabase dashboard (SQL editor) once before deploying:

  create table if not exists waitlist (
    id          bigserial primary key,
    email       text not null unique,
    name        text,
    role        text,
    created_at  timestamptz not null default now()
  );

  Env vars required:
    NEXT_PUBLIC_SUPABASE_URL      — your Supabase project URL
    SUPABASE_SERVICE_ROLE_KEY     — service role key (Settings → API)
*/

export async function POST(request: Request) {
  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json(
      { error: { code: "BAD_REQUEST", message: "Invalid request body." } },
      { status: 400 }
    )
  }

  const { name, email, role } = body as Record<string, string>

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
    return NextResponse.json(
      { error: { code: "INVALID_EMAIL", message: "Please enter a valid email address." } },
      { status: 400 }
    )
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

  if (!supabaseUrl || !serviceKey) {
    console.error("[waitlist] missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY")
    return NextResponse.json(
      { error: { code: "SERVER_ERROR", message: "Something went wrong. Please try again." } },
      { status: 500 }
    )
  }

  const supabase = createClient(supabaseUrl, serviceKey)

  const { error } = await supabase.from("waitlist").insert({
    email: email.trim().toLowerCase(),
    name: name?.trim() || null,
    role: role || null,
  })

  if (error) {
    if (error.code === "23505") {
      // unique constraint — already signed up
      return NextResponse.json(
        { error: { code: "ALREADY_JOINED", message: "You're already on the list — we'll be in touch soon." } },
        { status: 409 }
      )
    }
    console.error("[waitlist] insert error", error)
    return NextResponse.json(
      { error: { code: "SERVER_ERROR", message: "Something went wrong. Please try again." } },
      { status: 500 }
    )
  }

  return NextResponse.json({ data: { ok: true } }, { status: 201 })
}
