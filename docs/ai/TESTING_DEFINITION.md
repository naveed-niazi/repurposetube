# Testing Definition (MVP)

This defines the minimum testing bar for each feature.

## 1) Required Test Layers

- **Unit tests** for pure business logic and helpers.
- **Integration tests** for API routes, auth checks, and DB interactions.
- **E2E smoke tests** for critical user journeys.

## 2) Critical Journeys (Must Pass)

- Sign up, log in, and log out.
- Google auth sign-in flow.
- Protected route redirect for unauthenticated users.
- Submit valid YouTube URL and receive generated results.
- Handle invalid URL/transcript errors with user-safe messages.
- Regenerate a single content card.
- Re-open a history item and delete a history item.

## 3) Background Job Testing

- Verify Inngest job trigger and completion path.
- Verify failure handling and retry behavior.
- Verify duplicate job prevention for the same request key where applicable.

## 4) UI State Coverage

For every major async screen, test:

- Loading state.
- Empty state.
- Error state.
- Success state.

## 5) Done Criteria Before Merge

- New behavior has tests at the correct layer.
- Existing tests still pass.
- Lint and type checks pass.
- No known failing critical journey.
