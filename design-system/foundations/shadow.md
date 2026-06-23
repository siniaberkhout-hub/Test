# Shadow

Low-opacity `ink/900` only — never colored, never heavy.

## Scale

| Token | Value |
| ----- | ----- |
| `none` | `none` |
| `xs`   | `0 1px 2px rgba(42, 42, 42, 0.04)` |
| `sm`   | `0 1px 3px rgba(42, 42, 42, 0.06), 0 1px 2px rgba(42, 42, 42, 0.04)` |
| `md`   | `0 4px 12px rgba(42, 42, 42, 0.06), 0 2px 4px rgba(42, 42, 42, 0.04)` |
| `lg`   | `0 12px 32px rgba(42, 42, 42, 0.08), 0 4px 8px rgba(42, 42, 42, 0.04)` |
| `xl`   | `0 24px 48px rgba(42, 42, 42, 0.10), 0 8px 16px rgba(42, 42, 42, 0.06)` |

## Rules

1. **Default is `none`.** Most cards, buttons, and surfaces sit flat against paper — a hairline border (`line`) does the separating work, not a shadow.
2. **Add `xs` on hover** for interactive cards/buttons — just enough to signal "this lifts."
3. **Reserve `md` and above for dropdowns, modals, and popovers** — anything that's genuinely floating above the page.
4. **No colored shadows** — never a brand- or accent-tinted shadow. Shadow is always neutral `ink/900` at low opacity.
5. **No inner shadows.**
