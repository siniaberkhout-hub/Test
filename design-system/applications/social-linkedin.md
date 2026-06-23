# LinkedIn

No real shipped LinkedIn assets exist yet for this brand (unlike Instagram, where two carousel sets are already shipped). Until real posts exist, build new LinkedIn assets straight from `foundations/color.md`, `foundations/typography.md`, and the Instagram carousel patterns adapted to LinkedIn's flatter, less designed register — LinkedIn audiences expect more text, less art direction.

## Aspect ratios

1:1 (1200×1200) for single-image posts and carousel cover slides. 4:5 (1080×1350) for multi-slide carousels (LinkedIn's native document/carousel format) — same ratio as the Instagram default, so artwork can be reused across both platforms with minimal rework.

## Carousel structure: cover / teaching / takeaway / CTA

1. **Cover** — `paper` background, centered serif headline (`display-lg`–`h1` scale) stating the topic as a question or a concrete claim with a number. `mark.svg` small, bottom corner.
2. **Teaching** (2–4 slides) — one idea per slide, short serif sub-headline + 1–3 sentences of sans body text. More text per slide than Instagram allows — LinkedIn readers expect to read, not just skim.
3. **Takeaway** — one slide restating the core point in a single sentence, set large.
4. **CTA** — short call to action ("Volg voor meer," a question to drive comments, or a link mention — LinkedIn suppresses posts with outbound links in the body, so put the link in a comment, not the slide).

## Post types

- **Text-only thought-leadership**: no image, just copy. Short paragraphs (1–2 sentences each), one core idea, a question at the end to invite comments. This is the highest-trust format on LinkedIn — don't dress it up with an image just to have one.
- **Case study**: real student result, named and located ("Studente, Rotterdam"), with a number and timeframe. Pairs with `Testimonial` pattern from `components/testimonial.tsx`.
- **Number card**: same as the Instagram number card — `paper` background, one `display-xl` number in `brand/600`, one short label beneath.
- **Hiring post**: text-only, plain and specific about the role — no stock "join our team!" photography, no emoji bullets.

## Company page spec

- **Banner** (1128×191): `paper` background, `lockup-horizontal.svg` left-aligned, no busy graphics — the banner is a name tag, not an ad.
- **Logo**: `mark.svg` square crop, `paper` background, per LinkedIn's circular crop requirement — leave clear space so the mark isn't clipped at the edges.
- **Tagline**: one sentence from `voice/homepage-copy.md`'s boilerplate (1-sentence version).
- **About section**: the boilerplate paragraph from `voice/homepage-copy.md`, unedited.

## What we never do

No stock "business meeting" or "diverse team" photography. No carousel slide with more than ~40 words of body text (LinkedIn carousels are still read at a glance, not as a document). No hashtag stuffing (max 3, relevant only — never `#motivation` or `#hustle`). No engagement-bait phrasing ("Tag iemand die dit moet zien," "Comment JA als..."). No AI-generated people or graphics.

## Post frequency

2–3 posts per week, alternating text-only thought-leadership with a case study or carousel — never two carousels back to back. Consistency over volume; a missed week is better than a low-effort filler post.
