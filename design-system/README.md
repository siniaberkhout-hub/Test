# WAXR Academy — design system

**WAXR Academy** — een online opleiding voor vrouwen die professioneel waxspecialist worden en binnen circa 3 maanden hun eigen winstgevende waxsalon vanuit huis opzetten.

> "Je kunt starten zonder ervaring."

This folder is a self-contained, Claude-Design-compatible design system: brand foundations, design tokens, a faithfully-reconstructed logo, React component starters, Dutch voice guidance, and application templates for every surface the brand ships on.

## File tree

```
design-system/
├── README.md                  ← you are here
├── CLAUDE.md                  ← read this first if you're an LLM producing an asset
├── BRAND-SUMMARY.md           ← one-page brand snapshot
├── foundations/
│   ├── brand.md               ← mission, positioning, archetype
│   ├── voice.md                ← how the brand sounds (Dutch)
│   ├── vocabulary.md          ← word preferences (Dutch)
│   ├── color.md               ← palette + usage rules
│   ├── typography.md          ← type scale + rules
│   ├── spacing.md             ← 4px scale
│   ├── radius.md
│   ├── shadow.md
│   ├── motion.md
│   ├── iconography.md
│   └── imagery.md
├── tokens/
│   ├── tokens.json            ← W3C-ish design tokens
│   ├── tokens.css             ← CSS custom properties
│   └── tailwind.preset.js     ← Tailwind preset
├── logo/
│   ├── mark.svg / .png / .jpg
│   ├── mark-inverse.svg
│   ├── wordmark.svg
│   ├── lockup-horizontal.svg / .png / .jpg
│   ├── lockup-stacked.svg / .png / .jpg
│   ├── favicon.svg
│   └── usage.md               ← construction notes, clear space, what not to do
├── components/
│   ├── README.md
│   ├── utils.ts
│   ├── button.tsx / input.tsx / card.tsx / badge.tsx
│   ├── feature-card.tsx / nav.tsx / hero.tsx
│   ├── testimonial.tsx / cta-section.tsx / stat.tsx
│   └── animated.tsx
├── voice/
│   ├── examples.md            ← do/don't pairs (Dutch)
│   └── homepage-copy.md       ← drop-in hero/CTA copy (Dutch)
├── applications/
│   ├── web.md
│   ├── presentations.md       ← full Marp theme inline
│   ├── social-instagram.md
│   ├── social-linkedin.md
│   ├── email.md
│   ├── infographics.md
│   └── ads.md
├── assets/
│   ├── patterns/
│   │   ├── grid.svg
│   │   └── brand-wash.svg
│   └── templates/
│       ├── README.md          ← index of the real shipped assets below
│       ├── lead-magnet-guide/      ← real 22-page PDF, "Ontdek in 5 stappen…"
│       ├── instagram-carousel/     ← real shipped Instagram exports (two formats)
│       ├── logo-source/            ← original logo file
│       └── marp-theme.css
└── research/
    └── reconciliation.md      ← sources, conflicts, decisions — read this to understand "why"
```

## Quick start

**If you're adding a landing page** — start at `applications/web.md`, pull copy patterns from `voice/homepage-copy.md`, and use `components/hero.tsx` + `components/cta-section.tsx`.

**If you're making an Instagram post** — open the closest real example in `assets/templates/instagram-carousel/` and adapt it; don't redraw the look from scratch. Read `applications/social-instagram.md` for sizing and structure rules.

**If you're writing any copy at all** — read `foundations/voice.md` and `foundations/vocabulary.md` first. All copy is Dutch, second-person, short sentences, no hype.

**If you're placing the logo anywhere** — read `logo/usage.md` first. The logo is purely typographic (no icon exists in the source); don't invent one.

**If you're an LLM and this is your first time in this folder** — read `CLAUDE.md`, not this file, first.

## 6–8 principles, distilled

1. One primary color (`brand/600` taupe). One accent, action-only (`accent/600` orange).
2. Two typefaces, deliberately: Playfair Display for headlines, Inter for everything else.
3. One canvas: warm cream paper (`#F2EFEB`), confirmed across every real shipped surface.
4. Sentence case, always. No hype vocabulary, no English marketing loanwords in Dutch copy.
5. Real photography of real women in real rooms — never stock, never AI-generated people.
6. Minimal motion: fade + small translate, nothing that performs.
7. No gradients, glassmorphism, 3D, or neumorphism.
8. Every claim gets a number or a timeframe — "binnen circa 3 maanden," not "verander je leven."
