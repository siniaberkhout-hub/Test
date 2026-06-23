# Motion

Minimal, quick, purposeful. Motion confirms an action happened — it never performs.

## Duration tokens

| Token | Value |
| ----- | ----- |
| `xs`  | 80ms |
| `sm`  | 160ms |
| `md`  | 240ms |
| `lg`  | 480ms |
| `xl`  | 720ms |

## Easing tokens

| Token | Value | Use |
| ----- | ----- | --- |
| `out` | `cubic-bezier(0.22, 1, 0.36, 1)` | Default — entrances, reveals |
| `in-out` / `standard` | `cubic-bezier(0.4, 0, 0.2, 1)` | UI state changes (hover, focus, toggle) |
| `linear` | `linear` | Loaders/spinners only |

## Standard animations

| Interaction | Duration | Easing |
| ----------- | -------- | ------ |
| Button press | `xs` | `standard` |
| Input focus (border/ring) | `sm` | `standard` |
| Menu open | `sm` | `out` |
| Modal open | `md` | `out` |
| Scroll reveal (fade + slight rise) | `lg` | `out` |
| Page transition | `md` | `standard` |

## We do not do

No parallax. No marquee on a hero. No looping background video. No scroll-jacking. No entrance animation that delays or blocks reading a headline. No shake, bounce, or wobble. No confetti.

## Acceptable 21st.dev-style motion components

Acceptable, used sparingly: spotlight hover, magic-card-border (rare, never on more than one element per screen), a quiet logo-band marquee (slow, pauses on hover), number counters on stat reveals, scroll reveal as above.

**Banned:** typewriter text effects, text shimmer/gradient-animation effects — both read as generic AI-tool decoration, not this brand.

## Reduced motion

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```
