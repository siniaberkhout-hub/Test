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

## What we never post

Generic beauty-industry stock photography, AI-generated people, hype captions ("GAME CHANGER 🔥"), emoji-heavy captions, more than one accent-bubble color per carousel.

## Caption template

```
[Herkenningszin die de situatie van de lezer benoemt.]

[Eén of twee zinnen die het concrete pad of resultaat noemen — met een getal of tijdlijn.]

[Korte CTA — "Link in bio" of een directe vraag.]
```
