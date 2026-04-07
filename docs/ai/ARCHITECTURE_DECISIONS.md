# Architecture Decisions (MVP)

This file captures binding architecture decisions for MVP.
If a decision changes, update this file first.

## ADR-001: Full-stack framework

- **Decision**: Use Next.js for both frontend and backend.
- **Why**: Single codebase, fast iteration, native Vercel support.
- **Rule**: Server endpoints use Next.js API support (Route Handlers / API routes).

## ADR-002: Data/Auth/Storage platform

- **Decision**: Use Supabase for database platform, auth, and storage.
- **Why**: Managed Postgres + auth + storage in one platform.
- **Rule**: Prefer official Supabase packages listed in `docs/ai/MVP_SCOPE.md`.

## ADR-003: ORM

- **Decision**: Use Prisma as the only ORM for MVP.
- **Why**: Strong ecosystem support, stable migrations, broad AI familiarity.
- **Rule**: Do not introduce Drizzle unless explicitly approved by user.

## ADR-004: Background jobs

- **Decision**: Use Inngest for async/background workflows.
- **Why**: Good Next.js integration and durable function orchestration.
- **Rule**: Do not add Bull/Redis queue implementations for MVP.

## ADR-005: Deployment

- **Decision**: Deploy on Vercel.
- **Why**: Tight Next.js integration and simple operational model.
- **Rule**: Keep runtime and configuration compatible with Vercel defaults.

## ADR-006: UI foundation

- **Decision**: Use shadcn/ui + Radix UI.
- **Why**: Accessible primitives and consistent component system.
- **Rule**: New UI patterns should follow `docs/ai/UI_SYSTEM_RULES.md`.
