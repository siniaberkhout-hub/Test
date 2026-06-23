# Imagery

## The single most important rule

**Real photography of real women, in real rooms, doing real things.** Every shipped asset — the lead-magnet guide, both Instagram carousels — uses candid, unstaged photography: a woman at her own kitchen counter, a treatment table with a rolled towel and a laptop, someone walking down an ordinary street. No posed stock photography, no AI-generated people, ever.

## Photography

**What we shoot:** the founder and real students, in their own homes and home treatment rooms; hands during an actual wax treatment; everyday spaces (kitchen tables, hallways, a street) that read as "this could be your life," not a studio.

**How we shoot:** natural light, candid framing (not posed-and-smiling-at-camera), slightly imperfect/real rather than polished commercial photography. Warm, slightly desaturated color grading consistent with the cream/taupe palette.

**What we don't use:** stock photography of generic "beauty salon" models, AI-generated people, overly staged "lifestyle" stock, anyone who doesn't look like an actual student/founder in this specific program.

**Image treatments:** kept close to natural — a light warm color grade to sit comfortably against the cream paper canvas. No heavy filters, no black-and-white, no duotone.

**What we never do:** no stock photo of a generic spa with candles and orchids, no stretched/cropped stock hands holding a generic product, no smiling-at-camera group of unrelated models pretending to be "the team."

## Illustration

No illustration style has shipped yet — when one is genuinely needed (e.g. a process diagram), keep it minimal and line-based, consistent with the Lucide icon language already in use.

**What we never illustrate:** generic AI-art tropes (gradient blobs, abstract floating shapes with no meaning), 3D isometric scenes, Memphis-style geometric patterns, corporate-Memphis "blob people" illustrations.

## OG / social image spec (1200×630)

- Background: `paper` (`#F2EFEB`).
- Centered or left-aligned lockup (`logo/lockup-horizontal.svg` or `lockup-stacked.svg`).
- One headline in `display-lg`, `ink/900` or `brand/600`.
- Optional single real photo, right-aligned, never more than ~45% of the frame.

## Patterns & backgrounds

- `assets/patterns/grid.svg` — quiet dot grid, `ink/200` on `paper`.
- `assets/patterns/brand-wash.svg` — soft radial wash, `brand/50` fading to `paper`.
- Hairline dividers (`line` token) for simple section separation.
- **No animated backgrounds, no particle effects, no aurora/gradient-mesh backgrounds** — none of these appear anywhere in the real shipped material, and they'd clash with the brand's grounded, handmade feel.

## Fallback order when photography isn't available

1. Use a real photo from the existing shipped asset library (lead-magnet guide pages, Instagram carousel exports) cropped to fit.
2. If none fits, use a solid `paper`/`brand/50` background with the lockup and headline only — text-only is always safer than a wrong photo.
3. Only as a last resort, use the `brand-wash.svg` pattern behind text.
4. Never reach for stock photography or AI-generated imagery to fill the gap.
