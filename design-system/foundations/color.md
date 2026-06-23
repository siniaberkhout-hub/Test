# Color

## Brand scale

`brand` is taupe — derived from three real samples (the logo plate, and two pages of the "Ontdek in 5 stappen" lead-magnet guide), averaged and interpolated into a consistent 50–900 scale. Primary sits at `600`.

| Token       | Hex       | Use |
| ----------- | --------- | --- |
| `brand/50`  | `#F6F4F2` | Faint tint fills, hover backgrounds |
| `brand/100` | `#EBE7E3` | Subtle chip/badge backgrounds |
| `brand/200` | `#D9D1C9` | Borders on brand-tinted surfaces |
| `brand/300` | `#C5B8AD` | Disabled brand elements |
| `brand/400` | `#AC9A8A` | Decorative accents, illustration fills |
| `brand/500` | `#9C8774` | Secondary emphasis |
| `brand/600` | `#8F7761` | **Primary.** Wordmark, headlines, link color, icon emphasis |
| `brand/700` | `#735F4D` | Hover/pressed state of `600` |
| `brand/800` | `#5A4B3B` | Dark brand surfaces, deep emphasis |
| `brand/900` | `#44382B` | Darkest brand surface (e.g. footer band) |

## Accent — the one exception

| Token        | Hex       | Use |
| ------------ | --------- | --- |
| `accent/100` | `#FFE9D6` | Accent-tinted backgrounds (rare) |
| `accent/600` | `#FF914D` | **The single CTA/action color.** Sampled directly from the lead-magnet guide's buttons and the Instagram photo-carousel caption bubbles. |
| `accent/700` | `#E87A33` | Accent hover/pressed |

Orange is the **one** documented exception to "one primary color." It exists purely as a separate signal for *action* — primary CTA buttons, the caption-bubble treatment on social, anything the reader needs to physically click or tap. It is never used decoratively, never used for headlines, and never appears alongside `brand/600` as if they were two competing primaries — when accent is present, brand recedes to text/wordmark duty only.

## Ink (text) scale

| Token      | Hex       | Use |
| ---------- | --------- | --- |
| `ink/100`  | `#F2F2F2` | Rarely used directly — near-white |
| `ink/200`  | `#E1E1E1` | Disabled text on dark |
| `ink/300`  | `#C3C3C3` | Placeholder text |
| `ink/400`  | `#9F9F9F` | Disabled text on light |
| `ink/500`  | `#7B7B7B` | Tertiary text, metadata |
| `ink/600`  | `#595959` | Secondary text |
| `ink/700`  | `#3F3F3F` | Strong secondary text |
| `ink/900`  | `#2A2A2A` | **Primary text.** True charcoal — not pure black. Matches the body-copy ink sampled from the lead-magnet guide. |

## Paper, surface, line

| Token        | Hex       | Use |
| ------------ | --------- | --- |
| `paper`      | `#F2EFEB` | Page background. Warm cream — confirmed across all 22 pages of the lead-magnet guide and both Instagram carousels. This is the canvas, full stop. |
| `surface`    | `#FFFFFF` | Cards, modals, inputs — pure white, lifted just slightly off paper |
| `line`       | `#E2DDD5` | Dividers, borders on paper |
| `line-soft`  | `#ECE8E2` | Quieter dividers, internal card separators |

## Semantic colors

| State    | 100 (bg)  | 600 (fg/icon) |
| -------- | --------- | ------------- |
| Success  | `#E2F5EC` | `#1F9D6B`     |
| Warn     | `#FBF2DC` | `#C08415`     |
| Danger   | `#FAE4E2` | `#C8382F`     |
| Info     | `#EBE7E3` | `#8F7761`     |

Info reuses brand — there's no second neutral identity needed for "informational."

## Where primary goes / where it does not go

**`brand/600` goes on:** the wordmark and mark, headline text color (when not using `ink/900`), link text, feature-icon chips, quiet borders/dividers in brand-tinted sections, secondary buttons (outline, brand text on transparent).

**`brand/600` does NOT go on:** primary CTA buttons (that's `accent/600` — see above), large background fills (it's a text/emphasis color, not a fill color at this value — use `brand/50` or `brand/100` for tinted fills instead), error/destructive actions, body copy (use `ink/900`).

## Text contrast minimums

| Pairing | Ratio | Passes |
| ------- | ----- | ------ |
| `ink/900` on `paper` | 12.6:1 | AAA |
| `ink/900` on `surface` | 13.6:1 | AAA |
| `brand/600` on `paper` | 3.3:1 | Large text / UI only, not body copy |
| `surface` (white text) on `accent/600` | 2.0:1 | **Fails** — CTA buttons use `ink/900` text on `accent/600`, not white |
| `ink/900` on `accent/600` | 6.4:1 | AA |
| `paper` (cream text) on `brand/900` | 9.8:1 | AAA |

Because `accent/600` is a mid-value orange, white text on it fails contrast — every CTA button in this system uses dark (`ink/900`) text on the orange fill, matching what's actually visible in the shipped lead-magnet guide's own buttons.

## Why this palette

The taupe-on-cream pairing isn't a stylistic add-on — it's what the brand already looks like everywhere it has shipped: the founder's own logo, all 22 pages of the flagship lead magnet, and 10 real Instagram carousel slides across two different formats. Treating taupe as the single primary (rather than promoting the checkout page's plain dark-brown-on-tan, which is the thinnest and least-designed surface available) keeps the system anchored to the brand's best, most consistent real output. Orange earns its place as the sole accent because it's the one color that shows up *only* at the moment of action — buttons and attention-grabbing caption bubbles — never as page decoration, which is exactly the kind of restraint a single-accent rule is meant to protect.
