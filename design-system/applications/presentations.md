# Presentations

16:9, `paper` background by default (`brand/900` only for section dividers and the closing slide). Every slide carries the same footer treatment so the deck reads as one system, not a stack of one-off slides.

## 7 slide templates

1. **Title** — centered `lockup-stacked.svg`, `display-xl` title below in `ink/900`, optional one-line subtitle in `body-lg`, `ink/600`. Paper background.
2. **Section divider** — `brand/900` background, `paper`-colored `overline` + `display-lg` headline, centered, nothing else on the slide.
3. **Big number** — one `display-xl` number in `brand/600`, one `body-lg` label beneath, optional source line in `caption`. Centered, lots of empty space.
4. **Three-column** — `overline` at top, 3 columns of icon chip (`feature-card.tsx` pattern) + short label + one sentence each.
5. **Chart / stat** — chart or stat grid on the left two-thirds, one `h3` takeaway headline + supporting `body-md` on the right third.
6. **Quote / case** — large `h1` or `display-lg` quote in display serif, attribution (name + city) in `body-sm` below, optional real photo as a small corner crop.
7. **Closing CTA** — `brand/900` background, `display-lg` headline, single CTA line (pill button rendered as a static shape since slides aren't interactive — use a solid `accent/600` rect with `ink/900` label text).

## Footer on every slide

Bottom-left: `mark.svg` at 16px. Bottom-right: slide number, `caption` size, `ink/500`. Never anything else in the footer — no taglines repeated on every slide.

## Exceptions

The title slide and section dividers omit the page-number footer (they're not "content" slides). The closing CTA slide omits the mark in favor of the full `lockup-stacked.svg` centered above the headline.

## Full Marp theme CSS

Save as `assets/templates/marp-theme.css` and reference with `theme: waxr-academy` in your Marp frontmatter.

```css
/* @theme waxr-academy */

section {
  width: 1280px;
  height: 720px;
  background: #F2EFEB;
  color: #2A2A2A;
  font-family: 'Inter', ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
  font-size: 28px;
  padding: 72px 88px;
}

section h1 {
  font-family: 'Playfair Display', ui-serif, Georgia, serif;
  font-weight: 600;
  font-size: 56px;
  line-height: 1.15;
  letter-spacing: -0.01em;
  color: #2A2A2A;
  margin: 0 0 24px;
}

section h2 {
  font-family: 'Playfair Display', ui-serif, Georgia, serif;
  font-weight: 600;
  font-size: 40px;
  line-height: 1.2;
  color: #2A2A2A;
  margin: 0 0 16px;
}

section h3 {
  font-family: 'Playfair Display', ui-serif, Georgia, serif;
  font-weight: 600;
  font-size: 28px;
  color: #8F7761;
  margin: 0 0 12px;
}

section p, section li {
  font-size: 22px;
  line-height: 1.5;
  color: #2A2A2A;
}

section a {
  color: #8F7761;
  text-decoration: underline;
}

section.lead {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

section.divider {
  background: #44382B;
  color: #F2EFEB;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}
section.divider h1, section.divider h2 {
  color: #F2EFEB;
}

section.closing {
  background: #44382B;
  color: #F2EFEB;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}
section.closing h1 {
  color: #F2EFEB;
}
section.closing .cta {
  display: inline-block;
  margin-top: 32px;
  padding: 16px 40px;
  background: #FF914D;
  color: #2A2A2A;
  font-weight: 600;
  border-radius: 9999px;
}

section.stat {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}
section.stat .number {
  font-family: 'Playfair Display', ui-serif, Georgia, serif;
  font-weight: 600;
  font-size: 96px;
  color: #8F7761;
  line-height: 1;
}
section.stat .label {
  font-size: 24px;
  color: #3F3F3F;
  margin-top: 16px;
}

section footer {
  position: absolute;
  bottom: 32px;
  left: 88px;
  right: 88px;
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: #7B7B7B;
}

section blockquote {
  font-family: 'Playfair Display', ui-serif, Georgia, serif;
  font-size: 40px;
  font-style: normal;
  color: #2A2A2A;
  border-left: none;
  margin: 0;
  padding: 0;
}
```

## What we never do in decks

No animated slide transitions beyond a simple fade. No more than one chart per slide. No bullet lists deeper than two levels. No stock "business meeting" photography. No slide that mixes the `brand/900` dark treatment with a light treatment side-by-side.
