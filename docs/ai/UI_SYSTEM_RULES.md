# UI System Rules (shadcn/ui + Radix UI)

Use these rules for all frontend work.

## 1) Component Strategy

- Prefer shadcn/ui components first.
- Use Radix primitives for accessible behavior when composing custom UI.
- Build custom components only when no suitable shadcn/Radix pattern exists.

## 2) Consistency Rules

- Reuse existing design tokens and spacing scale.
- Keep button variants, input styles, and card patterns consistent.
- Avoid one-off styles for common controls.

## 3) Accessibility Requirements

- Every interactive element must be keyboard reachable.
- Inputs require labels and clear error messaging.
- Dialogs, menus, and popovers must follow Radix accessibility patterns.
- Maintain visible focus states.

## 4) Form and Feedback Rules

- Validate client-side for UX and server-side for correctness.
- Show inline field errors near the input.
- Show optimistic UI only when failure rollback is handled.
- Provide clear success/failure feedback for actions (copy, regenerate, delete).

## 5) Required Async States

Every async view must have:

- Loading UI.
- Empty UI.
- Error UI with retry when possible.
- Success UI.

## 6) Content Editing Rules

- Inline editable outputs must preserve user edits until explicit discard/reset.
- Regenerate actions must clearly indicate scope (single card vs full set).
