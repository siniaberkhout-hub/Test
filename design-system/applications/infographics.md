# Infographics

## Canvas sizes

1080×1350 (4:5) for social-native infographics — same canvas as the Instagram typographic carousel, so the same layout grid and type scale apply directly. 1200×1600 (3:4) for standalone/PDF-embedded infographics that need slightly more vertical room for a longer list or timeline.

## Four types

1. **Process/timeline**: a numbered horizontal or vertical sequence (e.g. the 3-step "leer de techniek → zet je salon op → begin binnen circa 3 maanden" path). Each step: a small `brand/600`-numbered circle, a short serif label, one sentence of sans body.
2. **Comparison**: two columns ("met WAXR Academy" vs "zonder traject") — never more than two columns, never framed as attacking a named competitor.
3. **Stat roundup**: 2–4 `display-lg` numbers in `brand/600`, each with a one-line label beneath, arranged in a simple grid. Same visual language as the "Number card" Instagram post type and the deck's "Big number" slide template.
4. **How-it-works diagram**: a simple flow of labeled boxes/arrows showing a system (e.g. how the home-salon business model works: klant boekt → behandeling → herhaalafspraak). Flat shapes only — no 3D, no isometric icons.

## Layout rules

- `paper` background always — infographics never use `surface` or a dark background.
- One serif headline at the top (`display-lg`–`h1`), sentence case, stating the topic plainly.
- Body content in sans, `body-md` minimum — never shrink supporting text below `body-sm` (14px) to cram in more.
- `mark.svg` small, bottom corner, same placement rule as Instagram carousels.
- Numbers and icons in `brand/600`; never introduce `accent/600` into an infographic unless one element is a literal call-to-action button.

## Anti-patterns

No more than one chart or diagram per infographic — if the data needs two charts, it's two infographics. No 3D bars, no donut charts with more than 4 segments, no decorative icons that don't map to a real data point. No invented statistics — every number must trace back to a real source (course data, a named case study, or a cited external stat with attribution).

## Generation workflow

1. Identify the one idea the infographic needs to land — write it as a single sentence headline first.
2. Pick the matching type from the four above.
3. Build at 1080×1350 using `tokens.css` values directly (color, type scale, spacing) — don't eyeball values.
4. Place `mark.svg`, confirm sentence case, confirm every number has a source.
5. Export at 2x for retina/print-safe resolution.

## Worked example: "Het pad naar je eigen salon" (process/timeline type)

- Headline: "Het pad naar je eigen salon" (serif, `h1`, centered top).
- Three numbered steps, stacked vertically, each with a `brand/600` circled numeral, a `h3` serif label, and one sans sentence:
  1. **Leer de techniek** — Vanaf de basis, stap voor stap, veilig en professioneel.
  2. **Zet je salon op** — Ruimte, prijzen, eerste klanten — alles wat je nodig hebt om te starten.
  3. **Begin binnen circa 3 maanden** — Met een eigen, winstgevende salon vanuit huis.
- `mark.svg`, bottom-right corner, 24px.
- This reuses the exact 3-step copy already established in `voice/homepage-copy.md`'s "Hoe het werkt" section — infographics should pull from existing approved copy rather than writing new claims.
