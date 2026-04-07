# Engineering Guardrails

These are non-negotiable implementation rules for MVP.

## 1) Core Principles

- Prefer simple, readable solutions over clever abstractions.
- Build only what is required by `docs/ai/MVP_SCOPE.md`.
- Keep changes small, testable, and reversible.
- Fail loudly; never hide errors with silent fallbacks.

## 2) Security and Privacy

- Never commit secrets or tokens to the repository.
- Use environment variables for all secrets and API keys.
- Validate all input on server boundaries.
- Enforce auth checks on every protected server route.
- Return user-safe error messages; keep internal details in logs only.

## 3) Product and Data Integrity

- Do not ship placeholder TODO logic in production paths.
- Do not use mock data in production flows.
- Do not bypass authorization for convenience during development.
- Preserve user-generated content; destructive actions require explicit intent.

## 4) Dependency Policy

- Use the approved stack from `docs/ai/MVP_SCOPE.md`.
- Before adding any new dependency not explicitly approved, ask the user.
- Prefer official SDKs and maintained libraries with active community support.
- Avoid overlapping libraries that solve the same problem.

## 5) Code Quality

- Keep functions focused and short where practical.
- Prefer explicit types on public interfaces and shared modules.
- Keep API contracts stable and documented in `docs/ai/API_CONTRACTS.md`.
- Add brief comments only where logic is not self-evident.

## 6) Definition of Done (Engineering)

A task is done only when:

- Acceptance criteria are met.
- Relevant tests are added or updated.
- Lint/type checks pass.
- Error states and loading states are handled.
- Documentation is updated when behavior or contracts change.
