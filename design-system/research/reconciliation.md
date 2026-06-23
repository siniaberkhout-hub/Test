# Reconciliation — WAXR Academy

This documents what was actually extracted, where sources disagreed, and the decision made on each conflict. Per the design-system-creator skill's Branch B rules, decisions favor (in order): user-uploaded logo > website-scraped logo; user-stated values > scraped values; shipped-asset colors > website colors on 1:1 conflicts; recently-shipped voice > website voice; explicit brand docs > anything inferred. No formal brand-rules doc existed, so this table — and your sign-off on it — is the closest thing to one.

## Sources gathered

| Source | What it gave us |
| --- | --- |
| `waxr.nl` (Firecrawl scrape + screenshot) | Purple/lilac "WAXR." wordmark, modern salon photography — this is the **salon** brand, not the Academy |
| `waxracademy.plugandpay.com/checkout/de-waxr-method` (Firecrawl scrape) | Tan/brown background, dark-brown bold sans headline, plain "waxr.academy" text label (no real logo asset) |
| Uploaded logo file (`IMG_6452.jpeg`) | The real WAXR Academy lockup: "WAXR" in a high-contrast serif (Didone, all caps) + "Academy" in script, taupe ink on cream plate |
| Uploaded PDF — "Ontdek in 5 stappen…" (22 pages, real shipped lead magnet) | Cream canvas, serif headlines, sans body, orange CTA buttons, real interior/salon photography |
| Uploaded Instagram carousel — typographic set, 6 of 14 slides (`@waxr.academy`) | Cream canvas, centered serif headline + small sans sub-line — same pattern as the PDF, on a different surface |
| Uploaded Instagram carousel — photo + caption-bubble set, 4 of 5 slides (`@waxr.academy`, "Niet morgen…") | Real candid photography (a real woman, real rooms, real streets), orange/coral rounded caption bubbles, bold white sans inside the bubbles |

## Conflicts and decisions

| Attribute | waxr.nl (salon) | Checkout page | Logo (uploaded) | PDF guide + IG carousels (shipped) | Decision |
| --- | --- | --- | --- | --- | --- |
| Brand in scope | Salon (consumer-facing wax studio) | Academy (the course) | Academy | Academy | **Academy only** — confirmed earlier in this thread. The lilac "WAXR." salon brand is a separate, unrelated identity and is excluded from this system. |
| Primary color | Lilac/purple | Tan/brown (`~#3A2E2A` text on tan) | Taupe `#A28D78` | Taupe, sampled at `#7A6E5A` and `#926B52` across different PDF pages | **`#8F7761`** — the average of the three real taupe samples (logo + two PDF pages). The earlier "tan/brown, Inter-only" call was made before the PDF/carousel evidence existed and is superseded here. |
| Canvas / paper | White | Tan | Cream plate `#DEDACF` (logo-only background) | Cream `#F2EFEB`, repeated across 22 PDF pages and both carousels | **`#F2EFEB`**. The logo's own cream plate is close but slightly warmer/darker — kept as the logo's own background only, not promoted to the system canvas, since the canvas color needs one consistent value across *all* surfaces and the PDF/carousel cream is the one that repeats. |
| Ink (body text) | — | Dark brown `#3A2E2A` | — | Charcoal `#222`–`#333` across pages | **`#2A2A2A`** — true charcoal, not pure black, not the checkout page's brown (brown read as too close to the primary taupe once both are on the same cream canvas — would blur the one-primary-color rule). |
| Headline typeface | Sans (site default) | Sans, bold | Serif (Didone, all-caps) + script accent on "Academy" | **Serif on every headline**, both PDF and the 14-slide typographic carousel | **Serif for all display/headline type** — this directly overrides the earlier "Inter for everything" sign-off. Two independent real shipped surfaces (a 22-page document and a 14-slide social carousel) consistently use a serif headline; the checkout page was the only sans-only sample and is the thinnest, least-designed surface we have (a payment page, not a marketing surface). Flagging this clearly per your request — replace with Inter-only if you'd rather keep the checkout page's treatment as canon. |
| Body typeface | Inter (scraped) | Inter (scraped) | — | Clean geometric/humanist sans, consistent with Inter | **Inter** — confirmed by both the scrape and visual match to the shipped body copy. |
| CTA / accent color | — | — | — | Vivid orange `#FF914D`, repeated on every PDF CTA button and as the caption-bubble color in the photo carousel | **`#FF914D` as a single accent color**, reserved for calls-to-action and the caption-bubble treatment — kept separate from the primary taupe so the system still has exactly "one primary," with orange documented as the sole permitted exception (action-only, never decorative). |
| Logo | n/a (different brand) | Plain text label, no asset | The real lockup | Logo appears small on PDF cover only | **Uploaded file is canonical.** Rendered faithfully — see `logo/usage.md` for the construction notes on what was and wasn't carried over. |
| Imagery | Studio/product photography | None | n/a | Real interiors, real hands during treatments, real candid photos of the founder/students in everyday settings (a street, a kitchen table, a treatment room) | **Real, candid, unstaged photography of real women in real rooms** — explicitly not posed stock, not AI-generated people. |
| Voice | — | — | — | Direct, second-person, short lines, builds tension before the offer ("Niet morgen…", "Je voelt al een tijdje dat je meer wilt") | Second-person, short sentences, names the reader's actual situation before naming the program. Documented in `foundations/voice.md`. |

## What's still a draft, pending your confirmation

- **Display typeface**: the real font name is unknown (Didone-style serif, all-caps in the logo). I've specified **Playfair Display** (free, Google Fonts) as the closest open substitute for everything *except* the logo file itself, which keeps its own exact letterforms untouched. If you have the licensed font name (common candidates in this style: Bodoni, Canela, Marcellus), tell me and I'll swap the token.
- **8 of the 14 typographic-carousel slides and 1 of the 5 photo-carousel slides** were not shared — the 6 + 4 we do have (including slide 10/14, which lands deep in the deck and still matches the cream/serif pattern from slides 1–6) are fully consistent with each other, so I'm treating the pattern as confirmed rather than waiting on the rest. If the missing slides contradict this (e.g. a slide with a different bg color), send them and I'll patch the system.
- **Exact CTA button shape** (pill vs. rounded-rect) in the PDF wasn't pixel-measured — I defaulted to pill for marketing CTAs per the non-negotiables, which is also consistent with what's visible in the guide's button screenshots.
