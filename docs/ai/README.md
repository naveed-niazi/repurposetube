# AI Docs Index

This folder contains the AI development rules and product constraints for this project.

## Core Scope and Decisions

- `MVP_SCOPE.md`: MVP-only feature scope, mandatory tech stack, and package constraints.
- `ARCHITECTURE_DECISIONS.md`: Binding architecture decisions (ADR-style) for MVP.

## Engineering Standards

- `ENGINEERING_GUARDRAILS.md`: Non-negotiable coding, security, and delivery guardrails.
- `API_CONTRACTS.md`: API response/error standards and status code conventions.
- `DATABASE_RULES.md`: Prisma + Supabase schema and migration rules.
- `UI_SYSTEM_RULES.md`: shadcn/Radix frontend consistency and accessibility rules.
- `OBSERVABILITY_AND_ERRORS.md`: Logging, retry, timeout, and error-handling standards.
- `TESTING_DEFINITION.md`: Required test layers and merge-readiness criteria.

## Workflow and Delivery

- `PR_COMMIT_WORKFLOW.md`: Required pre-commit and pre-PR quality checklist for AI and humans.
- `SEO_LANDING_PAGES_TASK.md`: SEO landing pages execution checklist and acceptance criteria.

## Usage

- `CLAUDE.md` imports these docs so AI sessions load this guidance automatically.
- If project decisions change, update the relevant file here before implementation.
