# Radius

## Scale

| Token  | Value |
| ------ | ----- |
| `none` | 0px |
| `xs`   | 4px |
| `sm`   | 6px |
| `md`   | 10px |
| `lg`   | 16px |
| `xl`   | 24px |
| `full` | 9999px |

## The two rules

1. **Marketing CTA buttons are pill-shaped** (`full`) — this matches the rounded buttons visible in the lead-magnet guide.
2. **Product UI buttons (forms, dashboards, in-app actions) are `md`** — a pill reads as "marketing," not "tool." Keep the two contexts visually distinct.

## Consistency within a composition

Don't mix radius scales within one card, modal, or section. If a card uses `lg`, every nested element inside it (image, inner card, badge) picks a radius from the same neighborhood (`md` or `lg`), not `xs` next to `xl`.

## Exceptions

| Element | Radius |
| ------- | ------ |
| Avatar / profile photo | `full` (circle), always |
| Logo (any variant) | `none` — never round the corners of `mark.svg` or any lockup |
| Images on paper (hero, card thumbnails) | `lg` |
| Modals | `lg` |
| Badges / pills | `full` |
