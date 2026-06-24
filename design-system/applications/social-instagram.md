# Instagram

This brand already has two real, shipped carousel formats — see `assets/templates/instagram-carousel/`. Open the closest match before designing anything new; don't redraw the look from scratch.

## Aspect ratios

4:5 (1080×1350) is the default — matches both shipped carousel sets. 1:1 (1080×1080) for single-image posts. 9:16 (1080×1920) for Stories/Reels only.

## Carousel structure: hook / thread / payoff

Two real shipped patterns to follow:

1. **Typographic carousel** (`typographic-carousel-slide-*-of-14.png`): cream `paper` background, centered serif headline (display-lg/h1 scale), small sans sub-line beneath. Hook slide states the reader's situation; middle slides build the case point by point; closing slides land on the offer.
2. **Photo + caption-bubble carousel** (`photo-caption-carousel-slide-*-of-05.png`): real candid photography, full-bleed, with a rounded orange (`accent/600`) caption bubble holding bold white/dark sans text. Each slide is one beat of a short story (situation → tension → resolution → CTA).

## Design rules

- Instagram type scale: headline at roughly `display-lg`–`h1` size relative to the 1080px canvas (don't shrink to web-page sizes — carousels are viewed at thumbnail size first).
- Logo placement: `mark.svg` only, small, bottom corner — never the full lockup on every slide (it competes with the headline).
- Color rotation: stay on `paper` for the typographic format; stay on real photography for the photo format. Don't mix the two treatments within one carousel.

## Post types

- **Single-image spotlight**: one real photo, optional one-line caption overlay in an `accent/600` bubble (photo-carousel style).
- **Quote card**: cream background, centered serif quote, small attribution line — typographic-carousel style, single slide.
- **Number card**: cream background, one big `display-xl` number in `brand/600`, one short label beneath.

## Stories / Reels rules

- Cover frame: `lockup-stacked.svg` or `mark.svg` centered on `paper` — never a busy first frame.
- First frame of any Reel: a real, in-context shot (treatment room, founder talking to camera) — never a title card with stock motion graphics.
- Caption style: short, second person, sentence case — same voice as the feed.

### Story register (`story.css`)

Stories are a third register, distinct from both the editorial web/PDF style and the carousel style above. Never mix them. See `story.css` and `Story Whiteboard.html` (week-planning overview, 5 day-rows of real 1080×1920 stories) for the full implementation.

- **Background**: real photo, full-bleed, with a dark gradient scrim (`.story-scrim`) over it so text stays legible top and bottom. Max one photo-less slide per day's sequence — solid `brand/900` canvas (`.story--no-photo`), reserved for that day's single impact-statement / belief-shift line.
- **Text**: Inter only inside `.story` — Playfair Display never appears in story content, only in the whiteboard chrome around it. One short idea per text box (`.story-textbox`), vertically centered, **left-aligned** (never centered — stories read left to right). Key words get `.story-highlight` (`accent/600`) — used sparingly, on the phrase that carries the point, not decoratively.
- **CTA sub-line**: when a slide's source copy has both a body line and a separate CTA line, the CTA renders as a smaller `.story-cta-sub` block beneath the main text, divided by a hairline — never as invented extra slides.
- **Stickers**: poll/tap/DM placeholders (`.story-sticker--poll` / `--tap` / `--dm`) are compact and **horizontally centered**, sitting below the text box, never overlapping it. They're deliberately small — real Instagram stickers get placed over them after upload. Slide 1 of every day's sequence gets an automatic generic poll placeholder; explicit engagement lines (real polls, tap-the-heart asks, DM-keyword asks) get a sticker with that line's exact wording, never invented copy.
- **Fixed chrome on every slide**: progress segments (`.story-progress`) reflecting position in that day's sequence, account header ("waxr.academy · nu") with `mark-inverse.svg` avatar, and a bottom-corner `mark-inverse.svg` watermark — the documented logo variant for photo backgrounds with a scrim.
- **Scale technique**: each `.story` keeps real 1080×1920 dimensions; a `.story-thumb` wrapper scales it down to ~260px wide for the whiteboard view via CSS `transform: scale()`, so the same markup captures at full resolution for export.
- **Export**: the whiteboard's "Download alle stories (PNG)" button renders every story from a hidden, unscaled `#render-stage` via `html-to-image` at 2x pixel ratio and bundles them into `stories.zip` via JSZip — keeps the visible whiteboard editable while still producing publish-ready files.

## What we never post

Generic beauty-industry stock photography, AI-generated people, hype captions ("GAME CHANGER 🔥"), emoji-heavy captions, more than one accent-bubble color per carousel.

## Caption template

```
[Herkenningszin die de situatie van de lezer benoemt.]

[Eén of twee zinnen die het concrete pad of resultaat noemen — met een getal of tijdlijn.]

[Korte CTA — "Link in bio" of een directe vraag.]
```
