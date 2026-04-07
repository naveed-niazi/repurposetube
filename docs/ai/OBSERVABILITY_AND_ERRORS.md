# Observability and Error Handling (MVP)

These rules ensure failures are diagnosable and user-safe.

## 1) Logging Standards

- Log structured events (JSON-like key/value fields).
- Include request/job correlation id where possible.
- Include route or job name, outcome, and duration for key operations.
- Never log secrets, tokens, or raw sensitive payloads.

## 2) Error Classification

- **User errors**: invalid input, unauthorized, not found.
- **System errors**: provider downtime, DB/network failures, unexpected exceptions.
- Use stable error codes in API responses.

## 3) User-Facing Error Rules

- Messages must be clear and actionable.
- Do not expose stack traces or provider internals to users.
- Keep technical details in server logs only.

## 4) Retry and Timeout Rules

- Retry transient external failures with bounded attempts.
- Use exponential backoff for retries.
- Set explicit timeouts for external API calls.
- Avoid infinite retries.

## 5) Background Job Reliability

- Inngest jobs must record start, success, and failure events.
- Failed jobs should capture reason code and retry state.
- Ensure job handlers are safe to re-run when retries happen.

## 6) Monitoring Checklist

- Track error rate for API routes.
- Track failed/successful background jobs.
- Track latency for transcript fetch and content generation paths.
