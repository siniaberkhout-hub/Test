# Web

## Global primitives

- Max content width: `container/max` (1200px). Reading width for paragraphs: `container/reading` (680px).
- Gutter: 16px mobile, 24px desktop.
- Paper (`#F2EFEB`) is the default page background. `surface` (white) lifts cards off it — that small step, not a shadow, gives cards their separation.
- Section padding: `space/24` (96px) desktop, `space/16` (64px) mobile, top and bottom.

## Nav bar spec

See `components/nav.tsx`. Sticky after 80px scroll, transparent until then, `surface/95` + backdrop-blur + `shadow/xs` once stuck. Logo on the left (`lockup-horizontal.svg`, ~32px tall), links centered/right, one CTA button (`accent/600`, pill) on the far right. Mobile collapses to a hamburger → full-screen `paper` drawer.

## Hero rules

1. One headline, 6–12 words, sentence case, display serif (`font-display`, `text-display-lg`).
2. One subhead, max 28 words, max width 520px, sans.
3. Primary CTA (`accent/600`) + optional secondary (ghost).
4. Optional real photograph on the right — never AI-generated, never stock.

```tsx
<Hero
  overline="Geen ervaring nodig"
  headline="Je kunt starten zonder ervaring."
  subhead="We leren je alles vanaf de basis: professioneel, veilig en met goede techniek."
  primaryCta={{ label: 'Bekijk de opleiding', href: '/opleiding' }}
  image={{ src: '/real-photo.jpg', alt: 'Studente tijdens een behandeling' }}
/>
```

## Six section patterns

1. **Why** — 3-up `FeatureCard` grid, `space/6` gap, each card: 40×40 brand-tinted icon chip + `h4` title + `body-md` body.
2. **How it works** — numbered 3-step list, each step a short sans label + one sentence, laid out horizontally on desktop, stacked on mobile.
3. **Case** — `Testimonial` block: quote in display serif (`h2`), attribution with real name + city, optional outcome aside in `brand/50`.
4. **Feature** — single feature, headline + body on one side, real photo or screenshot on the other (alternating left/right per repeat).
5. **Pricing** — single tier card (this brand sells one offer, not a tier ladder): headline price, bullet list of inclusions, one CTA.
6. **Final CTA** — `CtaSection`, dark variant (`brand/900` bg), single headline + single CTA. Use once per page, near the bottom.

## Footer spec

Three columns max: (1) logo + one-sentence boilerplate, (2) page links, (3) contact/social. `brand/900` or `paper` background — pick one and stay consistent with the rest of the page. Hairline (`line`) divider above the footer, not a shadow.

## Pages every brand should have

Home, /opleiding (or /de-methode), /prijzen, /over-ons, /contact. Optional: /faq, a single case-study or testimonial page if more than 2–3 real stories exist.

## What we never do

No gradient hero backgrounds, no glassmorphism panels, no 3D device mockups, no auto-playing looping video, no scroll-jacking, no stock photography of generic "diverse team" people.

## Accessibility baseline

- Every interactive element has a visible focus ring (`focus-visible:ring-2 ring-brand-600/40`).
- Color is never the only signal for state (errors get icon + text, not just red).
- All images have real, descriptive `alt` text — never `alt=""` on meaningful content.
- Respect `prefers-reduced-motion` site-wide via the reset in `tokens/tokens.css`.
- Minimum body text size 16px; never below `body-sm` (14px) for any reading content.
