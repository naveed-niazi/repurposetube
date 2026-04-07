# Database Rules (Prisma + Supabase)

These rules keep schema and migration work stable.

## 1) Source of Truth

- Prisma schema is the application schema source of truth.
- Use Prisma Migrate for schema changes.
- Never edit past migration files after they are applied/shared.

## 2) Naming Conventions

- Prisma models: `PascalCase` singular (for example `User`, `VideoJob`).
- Prisma fields: `camelCase`.
- Database tables/columns may use `snake_case` via `@map` and `@@map` when needed.
- Use explicit relation names when model relations are ambiguous.

## 3) Required Columns

Each mutable table should include:

- `id` primary key.
- `createdAt`.
- `updatedAt`.

Use soft deletes only when the feature requires recoverability or audit retention.

## 4) Migration Workflow

- Create one focused migration per logical schema change.
- Review generated SQL before applying.
- Apply migrations in dev before pushing.
- Keep seed scripts deterministic and idempotent.

## 5) Data Safety Rules

- Use transactions for multi-step writes that must succeed together.
- Add unique constraints for identity and deduplication boundaries.
- Avoid cascade deletes unless explicitly required and documented.

## 6) Supabase Integration Rules

- Use Supabase auth user identity as canonical auth principal.
- Keep app-level profile data in app tables keyed to auth user id.
- Store files through Supabase Storage with explicit bucket policies.
