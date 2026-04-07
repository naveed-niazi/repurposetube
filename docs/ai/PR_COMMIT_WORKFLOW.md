# PR and Commit Workflow

Use this workflow before every commit and PR.
Goal: keep commits reliable, reviewable, and aligned with project rules.

## 1) Scope and Rules Check (Mandatory)

Before committing, verify changes comply with:

- `docs/ai/MVP_SCOPE.md`
- `docs/ai/ENGINEERING_GUARDRAILS.md`
- `docs/ai/ARCHITECTURE_DECISIONS.md`
- `docs/ai/API_CONTRACTS.md`
- `docs/ai/DATABASE_RULES.md`
- `docs/ai/UI_SYSTEM_RULES.md`
- `docs/ai/OBSERVABILITY_AND_ERRORS.md`
- `docs/ai/TESTING_DEFINITION.md`

If any change conflicts with these docs, fix it before commit.

## 2) Self Code Review (Mandatory)

Review your own diff before commit:

- Confirm no scope creep outside MVP requirements.
- Confirm no secrets, keys, tokens, or unsafe logs are included.
- Confirm auth and authorization checks are present for protected actions.
- Confirm API errors are user-safe and consistent with `API_CONTRACTS.md`.
- Confirm UI has loading/empty/error/success states where relevant.
- Confirm no dead code, TODO placeholders, or debug-only hacks remain.

## 3) Quality Gates (Mandatory)

Run and pass all relevant checks for touched code:

- Lint
- Type checks
- Tests (unit/integration/e2e as applicable)
- Build check for production readiness (when appropriate)

If any gate fails, do not commit until fixed.

## 4) Commit Standards

- Make focused commits (one logical change per commit when practical).
- Use clear commit messages that explain intent and impact.
- Do not commit unrelated files.
- Do not bypass hooks unless explicitly approved by the user.

## 5) PR Readiness Checklist

Before opening or updating a PR:

- Summarize what changed and why.
- Include test evidence (what was run and result).
- Call out risk areas and rollout considerations.
- Confirm all mandatory checks passed.

## 6) AI Agent Enforcement

When asked to commit:

- The AI must perform scope/rules check, self-review, and quality gates first.
- If checks cannot be executed, the AI must clearly report what could not be verified.
- The AI should not claim completion unless required checks are done or explicitly waived by user.
