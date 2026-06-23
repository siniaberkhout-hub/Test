# Iconography

## Library

**Lucide** — outline icons only, no other icon library mixed in. No shipped asset shows a custom icon set, so Lucide is the default rather than something invented for this system.

- Stroke width: **1.5**.
- Style: outline only — no filled/solid icon variants.
- Corners: default Lucide rounding, not overridden.

## Size by context

| Context | Size |
| ------- | ---- |
| Inline with 14px text | 14px |
| Inline with 16px text | 16px |
| Inline with 18px text | 18px |
| Button icon | 18px |
| Nav icon | 20px |
| Feature icon (inside a chip) | 20px |
| Hero / large decorative icon | 32px |
| Empty state | 40px |

## Color rules

- Default: `currentColor` — icons inherit the text color around them.
- Feature chip pattern (see below): icon in `brand/600` on a `brand/100` chip background.
- Never accent-colored except inside an actual CTA button where the icon sits beside button text (then it matches the button's text color).

## The feature-icon pattern

A 40×40px chip, `radius/md`, filled `brand/100`, with a centered 20px Lucide icon in `brand/600`. This is the standard way to introduce a feature/benefit in a card or list — never a bare icon floating with no container, never a photo used as a feature icon.

## What the brand doesn't use

- **No emoji in marketing copy or UI.** (Captions on real shipped Instagram slides skew toward plain typographic emphasis, not emoji — keep the system consistent with that.)
- **No other icon libraries** (no Font Awesome, no Heroicons, no custom hand-drawn icon set) mixed into the same surface as Lucide.

## Custom-icon fallback order

1. Check Lucide first — it covers nearly everything this brand needs (calendar, clock, check, home, scissors-adjacent treatment icons, etc.).
2. If genuinely missing, commission or draw a single new icon matching Lucide's exact stroke width (1.5) and corner rounding — never mix a heavier or filled icon into an otherwise-outline set.
3. Never substitute an emoji as a stand-in for a missing icon.
