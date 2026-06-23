# Email

## Technical specs

- Width: 600px, single column. No multi-column layouts — most opens are mobile.
- Background: `paper` (`#F2EFEB`) outside the content block, `surface` (white) for the content block itself if a card-like container is used; otherwise `paper` straight through.
- Fonts: system email clients strip web fonts unreliably, so headlines fall back to `Georgia, 'Times New Roman', serif` (closest safe stack to Playfair Display) and body text to `'Inter', Helvetica, Arial, sans-serif`. Never rely on `@font-face` loading in email — always set the fallback stack as the real value, not an afterthought.
- Dark mode: don't invert colors with CSS tricks. Use a `paper`-toned background that reads fine if the client forces a dark shell, and never rely on pure black text (`ink/900` is dark enough to stay legible, light enough not to look broken if a client recolors the background).
- Buttons: rendered as bulletproof HTML/CSS buttons (table-based or padding-on-anchor), `accent/600` fill, `ink/900` text, pill shape — never an image-only button.

## Marketing template

1. Logo: `lockup-horizontal.svg`, ~120px wide, top, centered or left.
2. One hero line: short serif headline (sized down from web `display-lg` to something email-safe, ~28–32px), sentence case.
3. 2–4 short paragraphs, sans, `body-md`.
4. One CTA button, `accent/600`, centered.
5. Footer: boilerplate one-sentence line + unsubscribe link + physical/contact info, `caption` size, `ink/500`.

## Transactional template

1. Logo: `mark.svg` only, small, top-left — transactional mail doesn't need the full lockup.
2. Plain statement of what happened ("Je inschrijving is bevestigd.") — no marketing copy, no upsell in the same email.
3. Relevant details in a simple key-value list, not a styled table.
4. One CTA if there's a next action ("Bekijk je dashboard"), otherwise no CTA at all.
5. Same footer as marketing template, minus any promotional line.

## Subject line rules

Sentence case, no emoji, no hype words (see banned list in `foundations/voice.md`), under ~50 characters so it doesn't truncate on mobile. State the concrete content of the email — what's inside, not a curiosity-gap tease ("Je vraag over de opleiding, beantwoord" not "Dit wil je niet missen 👀").

## Types we send

Welcome/onboarding sequence, course-progress and milestone confirmations, payment/invoice receipts, the lead-magnet PDF delivery, occasional case-study or "how it works" educational sends, time-bound enrollment-window reminders (with a real date, not a fake countdown).

## Types we never send

Fake urgency/scarcity ("Nog maar 2 plekken!" without it being literally true), daily promotional blasts, anything with a subject line that misrepresents the content, re-engagement emails dressed as personal messages from a fake sender.
