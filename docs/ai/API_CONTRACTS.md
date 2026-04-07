# API Contracts (MVP)

Use these standards for all server endpoints.

## 1) General Rules

- All endpoints return JSON unless explicitly documented otherwise.
- Validate input at the API boundary.
- Use consistent status codes and error shape.
- Do not leak stack traces or internal provider errors to clients.

## 2) Response Shape

Successful response:

```json
{
  "data": {},
  "meta": {}
}
```

Error response:

```json
{
  "error": {
    "code": "STRING_CODE",
    "message": "User-safe message"
  }
}
```

## 3) Status Code Conventions

- `200`: Success read/update.
- `201`: Resource created.
- `400`: Invalid input.
- `401`: Unauthenticated.
- `403`: Authenticated but not authorized.
- `404`: Resource not found.
- `409`: Conflict (duplicate or invalid state transition).
- `422`: Validation passed shape but failed business rules.
- `429`: Rate limit exceeded.
- `500`: Unexpected server error.

## 4) Input Validation

- Reject malformed or unsupported fields.
- Prefer schema validation for body/query params.
- Return field-level guidance in `error.message` when helpful.

## 5) Idempotency and Retries

- Read endpoints must be side-effect free.
- Mutations triggered by retries must be idempotent where possible.
- Background tasks should dedupe by stable keys when applicable.

## 6) Auth and Access Rules

- Protected endpoints require valid auth session.
- Authorization checks must happen server-side, never only in UI.
- Return `401` for no session and `403` for disallowed access.
