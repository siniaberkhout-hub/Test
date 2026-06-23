These are the actual shipped templates — not recreations. When producing a new asset, open the closest match and adapt it. Don't redraw the look from scratch.

## What's in here

### `lead-magnet-guide/`
`ontdek-in-5-stappen-wax-salon-guide.pdf` — the real 22-page branded lead-magnet PDF. This is the primary source for the brand's paper background, serif/sans pairing, and `brand`/`accent` color usage outside of Instagram. Open this before designing any long-form document (guides, workbooks, PDF lead magnets).

### `logo-source/`
`waxr-academy-logo-source.jpeg` — the canonical, original logo file the rest of `logo/*.svg` was vectorized from. If a logo question can't be answered by `logo/usage.md`, this is the ground truth to check against.

### `instagram-carousel/`
Two real, shipped carousel sets — see `applications/social-instagram.md` for the full breakdown of both formats.
- `typographic-carousel-slide-*-of-14.png` (slides 01, 02, 03, 04, 06, 10 of 14 currently on file) — cream `paper` background, centered serif headline, small sans sub-line. The default format for any new typographic carousel.
- `photo-caption-carousel-slide-*-of-05.png` (slides 01, 02, 03, 05 of 05 currently on file) — real candid photography, full-bleed, rounded orange (`accent/600`) caption bubble. The default format for any new photo-led carousel.

Not every slide in each set has been supplied yet — see `research/reconciliation.md` for which slides are still unconfirmed and why the gaps don't change the pattern.

### `marp-theme.css`
The full `@theme waxr-academy` Marp CSS, identical to the copy inlined in `applications/presentations.md`. Reference this file directly with `theme: waxr-academy` in deck frontmatter rather than re-pasting the CSS.

## How to use this folder

1. Identify the asset type you're producing (carousel, guide, slide deck, logo placement).
2. Open the matching real file above — look at actual spacing, actual type size relative to the canvas, actual color usage.
3. Adapt the content and copy for the new asset; keep the layout, proportions, and color treatment as close to the source as the new content allows.
4. Only invent new layout structure when no real shipped asset covers the surface you're producing (e.g. LinkedIn, email, ads) — and even then, start from the closest related pattern (Instagram's typographic/photo-caption split) before designing from zero.
