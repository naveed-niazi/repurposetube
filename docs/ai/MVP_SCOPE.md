# YouTube Buddy MVP Scope

This document defines the **only** scope for the MVP launch.
Any feature not listed here is out of scope for MVP.

## Scope Guardrails

- Build only the features listed in this document.
- Do not add extra product features for MVP unless this document is updated.
- Prioritize `HIGH` features first, then `MED`, then `LOW`.
- Treat all listed items as product requirements for implementation.

## AI Implementation Instructions (Mandatory)

The following stack decisions are mandatory for AI-assisted development.

### Architecture and Platform

- Use **Next.js as the full-stack framework**.
- Keep app code within the Next.js codebase (frontend + backend together).
- Use Next.js API support (Route Handlers / API routes as applicable) for server endpoints.

### Required Tech Stack

| Layer | Required Choice |
|---|---|
| Database + Auth + Storage | Supabase |
| ORM | Prisma |
| Background Jobs | Inngest |
| Hosting | Vercel |
| Frontend UI | shadcn/ui + Radix UI |

### Approved Core Packages

- `@supabase/supabase-js` for Supabase client access.
- `@supabase/ssr` for Supabase auth/session handling with Next.js SSR and server components.
- `prisma` and `@prisma/client` for ORM and generated DB client.

### Package and Tooling Constraints for AI

- For any gap not explicitly defined here (libraries, adapters, helper packages, SDK choices, etc.), **ask the user for confirmation before adding dependencies**.
- Do not assume package choices beyond this stack without user confirmation.
- ORM is fixed to Prisma for MVP; do not switch to Drizzle unless the user explicitly changes this document.

## 3. MVP Feature List

Every feature listed below is scoped for the MVP only. Nothing outside this list is in scope for the initial launch.

### 3.1 User Authentication

| # | Feature | Description | Priority | Type |
|---|---|---|---|---|
| 1 | Sign Up (Email/Password) | Email + password registration with basic validation and hashed password storage | HIGH | Core |
| 2 | Log In / Log Out (Email/Password) | JWT-based session management with secure token storage in HTTP-only cookie | HIGH | Core |
| 3 | Google Auth (OAuth) | Sign up and log in with Google OAuth; create/link user account and issue the same secure app session | HIGH | Core |
| 4 | Protected Routes | All dashboard routes require valid auth session; redirect to login if unauthorized | HIGH | Core |
| 5 | Password Reset | Email/password users can reset password via a time-limited email token flow | MED | Core |

### 3.2 YouTube URL Input & Transcript Fetch

| # | Feature | Description | Priority | Type |
|---|---|---|---|---|
| 6 | URL Input Field | Single text input on the dashboard accepting YouTube video URLs in any standard format | HIGH | Core |
| 7 | URL Validation | Validate the URL is a real YouTube link before submitting; show inline error if invalid | HIGH | Core |
| 8 | Transcript Fetch | Use `youtube-transcript` package to extract the full video transcript server-side | HIGH | Core |
| 9 | Error Handling | Graceful errors for disabled transcripts, private videos, or unavailable captions with user-friendly messages | HIGH | Core |
| 10 | Video Metadata | Fetch video title and thumbnail from YouTube oEmbed API to display on results page | MED | Core |

### 3.3 AI Content Generation

| # | Feature | Description | Priority | Type |
|---|---|---|---|---|
| 11 | Blog Post | Generate a full SEO-structured blog post (800-1200 words) with H2/H3 headings, intro, and conclusion | HIGH | Core |
| 12 | Twitter/X Thread | Generate 8-12 tweet thread with hook tweet, numbered points, and CTA closing tweet | HIGH | Core |
| 13 | LinkedIn Post | Generate professional long-form LinkedIn post with opening hook and structured paragraphs | HIGH | Core |
| 14 | YouTube SEO Package | Generate optimized video title (A/B option), description (5000 char), and 15 tags | HIGH | Core |
| 15 | Newsletter Email | Generate a plain-text email newsletter version of the video content with subject line | MED | Core |
| 16 | YouTube Shorts Script | Generate 3 punchy Shorts scripts (60 sec each) extracted from the best moments | MED | Core |
| 17 | Parallel Generation | All 6 content types generated in parallel using `Promise.all` to minimize wait time | HIGH | Core |
| 18 | Async Job Queue | Use Inngest to run background generation jobs and prevent timeout on long videos | HIGH | Core |
| 19 | Progress Indicator | Real-time step-by-step progress bar (Fetching -> Analyzing -> Generating -> Done) | HIGH | Core |

### 3.4 Output & Results UI

| # | Feature | Description | Priority | Type |
|---|---|---|---|---|
| 20 | Output Cards | Each content type rendered in its own card with icon, label, scrollable text area | HIGH | Core |
| 21 | Copy to Clipboard | One-click copy button on each card with visual confirmation (checkmark flash) | HIGH | Core |
| 22 | Inline Editing | Each output card is directly editable so users can tweak before copying | HIGH | Core |
| 23 | Regenerate Button | Per-card regenerate button to re-run AI for that content type only without reprocessing the full video | HIGH | Core |
| 24 | Video Preview Banner | Show video thumbnail + title at the top of results so user can confirm it is the right video | MED | Core |
| 25 | Download as TXT | Allow each card to be downloaded as a plain `.txt` file | LOW | Core |

### 3.5 History & Saved Content

| # | Feature | Description | Priority | Type |
|---|---|---|---|---|
| 26 | History List | Dashboard sidebar or section showing last 10 processed videos with thumbnail and date | HIGH | Core |
| 27 | Re-open Results | Click any history item to reload all generated content for that video instantly | HIGH | Core |
| 28 | Delete History Item | Users can delete individual history entries; associated generated content is also removed | MED | Core |
