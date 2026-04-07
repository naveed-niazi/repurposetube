# YouTube Buddy MVP Scope

This document defines the **only** scope for the MVP launch.
Any feature not listed here is out of scope for MVP.

## Scope Guardrails

- Build only the features listed in this document.
- Do not add extra product features for MVP unless this document is updated.
- Prioritize `HIGH` features first, then `MED`, then `LOW`.
- Treat all listed items as product requirements for implementation.

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
| 5 | URL Input Field | Single text input on the dashboard accepting YouTube video URLs in any standard format | HIGH | Core |
| 6 | URL Validation | Validate the URL is a real YouTube link before submitting; show inline error if invalid | HIGH | Core |
| 7 | Transcript Fetch | Use `youtube-transcript` package to extract the full video transcript server-side | HIGH | Core |
| 8 | Error Handling | Graceful errors for disabled transcripts, private videos, or unavailable captions with user-friendly messages | HIGH | Core |
| 9 | Video Metadata | Fetch video title and thumbnail from YouTube oEmbed API to display on results page | MED | Core |

### 3.3 AI Content Generation

| # | Feature | Description | Priority | Type |
|---|---|---|---|---|
| 10 | Blog Post | Generate a full SEO-structured blog post (800-1200 words) with H2/H3 headings, intro, and conclusion | HIGH | Core |
| 11 | Twitter/X Thread | Generate 8-12 tweet thread with hook tweet, numbered points, and CTA closing tweet | HIGH | Core |
| 12 | LinkedIn Post | Generate professional long-form LinkedIn post with opening hook and structured paragraphs | HIGH | Core |
| 13 | YouTube SEO Package | Generate optimized video title (A/B option), description (5000 char), and 15 tags | HIGH | Core |
| 14 | Newsletter Email | Generate a plain-text email newsletter version of the video content with subject line | MED | Core |
| 15 | YouTube Shorts Script | Generate 3 punchy Shorts scripts (60 sec each) extracted from the best moments | MED | Core |
| 16 | Parallel Generation | All 6 content types generated in parallel using `Promise.all` to minimize wait time | HIGH | Core |
| 17 | Async Job Queue | Use Bull + Redis to queue generation jobs; prevent timeout on long videos | HIGH | Core |
| 18 | Progress Indicator | Real-time step-by-step progress bar (Fetching -> Analyzing -> Generating -> Done) | HIGH | Core |

### 3.4 Output & Results UI

| # | Feature | Description | Priority | Type |
|---|---|---|---|---|
| 19 | Output Cards | Each content type rendered in its own card with icon, label, scrollable text area | HIGH | Core |
| 20 | Copy to Clipboard | One-click copy button on each card with visual confirmation (checkmark flash) | HIGH | Core |
| 21 | Inline Editing | Each output card is directly editable so users can tweak before copying | HIGH | Core |
| 22 | Regenerate Button | Per-card regenerate button to re-run AI for that content type only without reprocessing the full video | HIGH | Core |
| 23 | Video Preview Banner | Show video thumbnail + title at the top of results so user can confirm it is the right video | MED | Core |
| 24 | Download as TXT | Allow each card to be downloaded as a plain `.txt` file | LOW | Core |

### 3.5 History & Saved Content

| # | Feature | Description | Priority | Type |
|---|---|---|---|---|
| 25 | History List | Dashboard sidebar or section showing last 10 processed videos with thumbnail and date | HIGH | Core |
| 26 | Re-open Results | Click any history item to reload all generated content for that video instantly | HIGH | Core |
| 27 | Delete History Item | Users can delete individual history entries; associated generated content is also removed | MED | Core |
