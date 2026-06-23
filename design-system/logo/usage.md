# Logo — usage

## What this logo actually is

The real WAXR Academy logo (see `assets/templates/logo-source/waxr-academy-logo-source.jpeg`) is **purely typographic**. It is two words set in two different type styles, stacked:

- **WAXR** — all-caps, high-contrast Didone serif (flat slab terminals). Free substitute: **Playfair Display**, weight 600.
- **Academy** — a flowing cursive script, set smaller, underneath. Free substitute: **Allura**.

Both run in the same taupe, `brand/600` (`#8F7761`), on the cream paper plate (`#F2EFEB`).

**There is no separate icon, symbol, or mark in the source.** No emblem, no badge, no abstract shape — just the two words. This system does not invent one. `mark.svg` is a single "W" lifted directly from the wordmark's own letterform (same typeface, same weight, same color), used only where space is too tight for the full word — not a new symbol. Do not add a circle, badge, frame, or decorative device around it; that would be a feature the brand doesn't have.

## File inventory

| File                     | What it is                                          | When to use |
| ------------------------ | ---------------------------------------------------- | ----------- |
| `mark.svg` / `.png/.jpg` | "W" monogram, `brand/600` on paper                   | Favicons, app icons, social avatars, anywhere the full wordmark won't fit |
| `mark-inverse.svg`       | Same "W", set in `paper` (`#F2EFEB`) for dark grounds | On `brand/900`, on photo, on dark UI |
| `wordmark.svg`           | "WAXR" alone, `ink/900` (`#2A2A2A`)                   | Contexts needing just the brand name in running ink color (e.g. inline in body copy, footers) |
| `lockup-horizontal.svg` / `.png/.jpg` | "WAXR" + "Academy" side by side, both `brand/600` | Wide headers, navbars, letterhead, anywhere short and wide |
| `lockup-stacked.svg` / `.png/.jpg`    | "WAXR" above "Academy", both `brand/600`         | Square/portrait placements — covers, title slides, Instagram avatar-adjacent lockups |
| `favicon.svg`            | "W" centered in a `rx=6` cream rounded square, 32×32 | Browser tab icon only |

Only `mark.svg`, `lockup-horizontal.svg`, and `lockup-stacked.svg` are rendered to raster (PNG + JPG), per the standard six-SVG set. `mark-inverse.svg`, `wordmark.svg`, and `favicon.svg` ship as SVG only.

## Construction

- Both lockups are simply the two text runs ("WAXR" in Playfair Display, "Academy" in Allura) placed together — there is no mark/wordmark combination in the traditional logo-system sense, because the source brand never combines an icon with the name. Don't introduce one.
- `mark.svg` viewBox `0 0 64 64`: the "W" is centered, baseline at y=46, font-size 48 — directly proportioned from the wordmark's own letter, not redrawn as a custom glyph.
- `favicon.svg` viewBox `0 0 32 32`: same "W" treatment, smaller (font-size 22, baseline y=23), on a `#F2EFEB` rounded square (`rx="6"`) so it reads at 16–32px.
- `lockup-stacked.svg` viewBox `0 0 480 220`: "WAXR" (font-size 80) centered above "Academy" (font-size 58), matching the real proportion and gap seen in the source plate.
- `lockup-horizontal.svg` viewBox `0 0 620 110`: same two words, "Academy" placed to the right of "WAXR" with a fixed x-offset (312) rather than auto-flow, so the gap stays consistent at any scale.
- `wordmark.svg` viewBox `0 0 360 90`: "WAXR" only, set in `ink/900` rather than `brand/600` — this variant exists for places the word needs to sit in running text color, not as a brand mark.

## Clear space

Minimum clear space around any variant = the cap-height of the "W" in that asset (i.e., for the mark, its own height; for the lockups, the cap-height of "WAXR"). Never crop closer than that on any side.

## Minimum sizes

| Variant   | Web        | Print    |
| --------- | ---------- | -------- |
| Lockup    | 80px wide  | 20mm wide |
| Mark      | 24px       | 8mm      |
| Favicon   | 16px       | —        |

Below these sizes the script "Academy" stops being legible — drop to `mark.svg` alone instead of shrinking a lockup further.

## Color variants

| Ground            | Use                                  |
| ------------------ | ------------------------------------- |
| Paper (`#F2EFEB`)  | `mark.svg`, `lockup-*.svg` (default, `brand/600`) |
| `brand/900`        | Use `mark-inverse.svg` (paper-colored "W") |
| Photo background    | Use `mark-inverse.svg` with a scrim, or place on a solid paper card — never directly on a busy photo |
| Single-color (embroidery, fax, engraving) | `mark.svg` in solid `ink/900` or solid black; no tints |

## What not to do

- Do not stretch, skew, or rotate any variant.
- Do not recolor outside the documented variants (no brand/600 mark-inverse, no gradient fills, no outline/stroke versions).
- Do not add a badge, circle, frame, or icon around the "W" — the source has none.
- Do not animate the mark.
- Do not place any variant on a busy photo without a solid scrim or card behind it.
- Do not substitute a different script or serif font "for legibility" — Playfair Display and Allura are the documented stand-ins for the real (unlicensed) source faces; swapping them changes the brand.
