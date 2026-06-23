# Typography

Two families, used deliberately — not one default with exceptions. This is the one place this system diverges from "single sans typeface": two independent real shipped surfaces (the 22-page lead-magnet guide and the 14-slide Instagram typographic carousel) both consistently pair a serif headline with a sans body, so the system follows the evidence rather than forcing Inter onto everything.

- **Display / headline serif:** Playfair Display (open-source stand-in for the logo's unlicensed Didone serif).
- **Body / UI sans:** Inter.
- **Code/mono:** JetBrains Mono (UI only — no shipped evidence of a brand "code" surface, included as a standard fallback).

## Full scale

| Token | Size | Line-height | Weight | Tracking | Family |
| ----- | ---- | ----------- | ------ | -------- | ------ |
| `display-xl` | 72px | 80px | 600 | -0.01em | Display |
| `display-lg` | 56px | 64px | 600 | -0.01em | Display |
| `h1` | 40px | 48px | 600 | -0.005em | Display |
| `h2` | 32px | 40px | 600 | -0.005em | Display |
| `h3` | 24px | 32px | 600 | 0em | Display |
| `h4` | 20px | 28px | 600 | 0em | Sans |
| `body-lg` | 18px | 28px | 400 | — | Sans |
| `body-md` | 16px | 24px | 400 | — | Sans |
| `body-sm` | 14px | 20px | 400 | — | Sans |
| `caption` | 12px | 16px | 500 | — | Sans |
| `overline` | 11px | 16px | 600 | +0.06em, uppercase | Sans |
| `code` | 14px | 20px | 400 | — | Mono |

`h4` is the handoff point: everything `h3` and above is set in the display serif; `h4` and everything smaller is sans. This matches the shipped guide, where serif is reserved for actual headlines and every sub-line, label, and body paragraph is sans.

## Weights actually used

- **400** — sans body copy.
- **500** — sans medium emphasis (captions, sub-lines).
- **600** — display headlines (all sizes), sans `h4` and overlines.
- **700** — reserved for rare sans emphasis inside body copy (bold inline spans). Not used as a default heading weight — 600 already carries that.

## The 7 rules

1. **Sentence case everywhere**, including headlines. No Title Case, no ALL CAPS except `overline` tokens (which are uppercase by design, in small caps-scale text only).
2. **Max 3 sizes per composition.** A hero uses `overline` + `display-lg` + `body-lg` — not five different sizes fighting for attention.
3. **Line length**: body copy never exceeds ~75 characters per line. Use `container/reading` (680px) as the max width for any paragraph block.
4. **Weights**: 400 for body, 600 for emphasis. Never use 700+ for headlines — the display serif's own contrast (thick/thin strokes) already creates weight; piling on bold makes it look heavy-handed, not confident.
5. **Italics**: permitted sparingly on the display serif for a single emphasized word in a headline (the source guide does this on cover pages) — never on body copy, never on sans.
6. **No text shadow, ever.**
7. **Heading spacing**: an `overline` directly above a heading sits `space/2` (8px) away; a heading above body copy sits `space/4`–`space/6` (16–24px) away, scaling with the heading's own size.

## Pairings by context

| Context | Overline | Headline | Body |
| ------- | -------- | -------- | ---- |
| Marketing hero | `overline` | `display-lg` or `display-xl` | `body-lg` |
| Section | `overline` | `h2` | `body-md` |
| Card | — | `h4` | `body-sm` |
| Slide (deck) | `overline` | `h1` or `display-lg` | `body-lg` |
| Instagram carousel | — | `h1`–`h2` scale, centered | `body-md`, centered |

## Font loading (web)

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600;700&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
```

Allura (the logo's "Academy" script) is **not** loaded site-wide — it appears only inside the logo SVGs themselves, never as a body or headline typeface for general content.

## When not to use the display serif

- Never for UI copy: buttons, form labels, nav links, badges, table headers — all sans, always.
- Never below `h4` size — the serif's fine details disappear and it just reads as a worse sans at small sizes.
- Never for long-form paragraphs — it's a display face, not a reading face.
- Never in dense data contexts (dashboards, tables, stat grids) — those stay entirely sans for scanability.
