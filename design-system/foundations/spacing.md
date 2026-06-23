# Spacing

4px base unit. Every margin, padding, and gap in this system traces back to this scale — no arbitrary pixel values.

## Scale

| Token | Value |
| ----- | ----- |
| `0`   | 0px |
| `0_5` | 2px |
| `1`   | 4px |
| `1_5` | 6px |
| `2`   | 8px |
| `3`   | 12px |
| `4`   | 16px |
| `5`   | 20px |
| `6`   | 24px |
| `8`   | 32px |
| `10`  | 40px |
| `12`  | 48px |
| `16`  | 64px |
| `20`  | 80px |
| `24`  | 96px |
| `32`  | 128px |
| `40`  | 160px |

## Section rhythm template

A standard marketing section, top to bottom:

```
overline           (space/2 below)
h2 headline        (space/4–6 below)
body copy          (space/8–10 below)
content (cards/grid/image)
                    (space/16–24 before next section)
```

## Grid & container spec

- Max content width: **1200px** (`container/max`).
- Reading width for paragraphs: **680px** (`container/reading`).
- Gutter: **16px** mobile, **24px** desktop.

## Internal padding per element

| Element | Padding |
| ------- | ------- |
| Button (md) | `space/3` vertical, `space/6` horizontal |
| Input | `space/3` vertical, `space/4` horizontal |
| Card | `space/6` (mobile), `space/8` (desktop) |
| Badge | `space/1` vertical, `space/3` horizontal |
| Modal | `space/8` |
| Nav bar | `space/4` vertical, `space/6` horizontal |

## Gap conventions

| Context | Gap |
| ------- | --- |
| Card grid | `space/6` |
| Form fields (stacked) | `space/4` |
| Inline button group | `space/3` |
| Nav links | `space/8` |
| Stat grid | `space/8`–`space/12` |

## Core rules

1. Never use a raw pixel value outside this scale — if a spacing need doesn't fit, round up to the nearest token rather than inventing a value.
2. Vertical rhythm between sections always exceeds rhythm within a section — sections breathe; content inside them is tight.
3. Mobile gutters and padding shrink one or two steps from desktop, never collapse to zero.
4. Consistent gap within one composition — don't mix `space/4` and `space/6` gaps in the same card grid.
