# CLAUDE.md — read this first

This is the design system for **WAXR Academy**, a Dutch online opleiding voor vrouwen die professioneel waxspecialist worden en binnen ~3 maanden hun eigen winstgevende waxsalon vanuit huis opzetten. If you're an LLM about to produce any asset for this brand — copy, a slide, a social post, a web section — read this file before anything else in the folder.

## 1. Load order

1. **This file.**
2. `BRAND-SUMMARY.md` — one-page snapshot of what the brand is and how it should feel.
3. `foundations/brand.md` + `foundations/voice.md` + `foundations/vocabulary.md` — if the task involves any copy.
4. `foundations/color.md` + `foundations/typography.md` — if the task involves any visual design.
5. The specific `applications/*.md` file matching the surface you're producing (see cheat sheet below).
6. `tokens/tokens.json` (or `.css` / `tailwind.preset.js`) for exact values once you know what you're building.
7. `logo/usage.md` before placing any logo variant.
8. `research/reconciliation.md` if you need to understand *why* a decision was made, or whether something is still a draft.

## 2. Non-negotiables, in WAXR Academy's terms

1. **One primary color.** `brand/600` (`#8F7761`, taupe) is the only primary. Never introduce a second "primary" — orange (`accent/600`) is the single, documented exception and is action-only (CTA buttons), never decorative.
2. **Two typefaces, deliberately, not one.** Inter for body/UI, Playfair Display for headlines `h3` and above. This is the one place this system departs from "single typeface," because two independent real shipped surfaces (the lead-magnet PDF and the Instagram carousel) both pair a serif headline with a sans body — see `research/reconciliation.md` for the full reasoning. Never add a third typeface.
3. **One canvas: `paper` (`#F2EFEB`).** Warm cream, confirmed on every real shipped surface. `surface` (white) is for cards lifted off paper only.
4. **Sentence case, always**, including headlines. Uppercase only on `overline` tokens.
5. **No hype vocabulary.** No "revolutionair," "game changer," "ontketen," or English marketing loanwords. See the banned list in `foundations/voice.md`.
6. **Voice rules**: second person ("jij/je"), short sentences, name the reader's actual situation before naming the program. All copy is in **Dutch**.
7. **Real photography only.** Real candid photos of real women in real rooms — see `foundations/imagery.md`. Never stock, never AI-generated people.
8. **Minimal motion.** Fade + small translate. See `foundations/motion.md` for the full duration/easing tokens and the banned list.
9. **No gradients, no glassmorphism, no 3D, no neumorphism.** Flat color, real photography, hairline borders.
10. **Every claim gets a number or a name.** "Binnen circa 3 maanden je eigen salon" — never "verander je leven" without a timeframe or outcome attached.

## 3. Defaults when ambiguous

| Question | Default |
| -------- | ------- |
| Background | `paper` (`#F2EFEB`) |
| Case | Sentence case |
| Body text size | `body-md` (16px) |
| CTA button shape | Pill (`radius/full`), `accent/600` fill, `ink/900` text |
| Section spacing | `space/16`–`space/24` between sections |
| Instagram carousel aspect | 4:5 (1080×1350) |
| Slide deck aspect | 16:9 |
| Email width | 600px |
| Headline typeface | Playfair Display (`h3` and above only) |
| Logo variant when unspecified | `lockup-horizontal.svg` on light backgrounds, `mark.svg` when space is tight |

## 4. Asset-type cheat sheet

| User asks for… | Read |
| --------------- | ---- |
| "Landing page" / "homepage" / "website section" | `applications/web.md` + `voice/homepage-copy.md` |
| "Slide deck" / "presentation" | `applications/presentations.md` (full Marp theme inline) |
| "Instagram post / carousel" | `applications/social-instagram.md` + `assets/templates/instagram-carousel/` (real shipped examples — adapt, don't redraw) |
| "LinkedIn post" | `applications/social-linkedin.md` |
| "Email" | `applications/email.md` |
| "Infographic" | `applications/infographics.md` |
| "Ad" | `applications/ads.md` |
| "Button / card / nav / component" | `components/` (React + Tailwind starters) |
| "What does this brand sound like" | `foundations/voice.md` + `voice/examples.md` |

## 5. Quality bar — self-check before delivering

1. Is every headline in sentence case, and is the display serif used only at `h3` size and above?
2. Is `accent/600` (orange) used *only* on the action element (CTA), never as decoration or a second headline color?
3. Does every outcome claim include a number or timeframe ("binnen circa 3 maanden"), not a vague feeling?
4. Is the copy in Dutch, second person, and does it name the reader's actual situation before the offer?
5. If a logo appears, does it match `logo/usage.md` exactly — no recoloring, no stretching, no invented icon?
6. If a photo is used, is it real (from the shipped asset library) — not stock, not AI-generated?
