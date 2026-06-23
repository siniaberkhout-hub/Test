/**
 * WAXR Academy Design System — Tailwind preset
 *
 * Use in your project:
 *
 *   // tailwind.config.js
 *   const brand = require('./design-system/tokens/tailwind.preset.js')
 *   module.exports = {
 *     presets: [brand],
 *     content: ['./app/**\/*.{ts,tsx,mdx}'],
 *   }
 */
module.exports = {
  theme: {
    extend: {
      colors: {
        brand: {
          50:  '#F6F4F2',
          100: '#EBE7E3',
          200: '#D9D1C9',
          300: '#C5B8AD',
          400: '#AC9A8A',
          500: '#9C8774',
          600: '#8F7761',
          700: '#735F4D',
          800: '#5A4B3B',
          900: '#44382B',
        },
        accent: {
          100: '#FFE9D6',
          600: '#FF914D',
          700: '#E87A33',
        },
        ink: {
          100: '#F2F2F2',
          200: '#E1E1E1',
          300: '#C3C3C3',
          400: '#9F9F9F',
          500: '#7B7B7B',
          600: '#595959',
          700: '#3F3F3F',
          900: '#2A2A2A',
        },
        paper:     '#F2EFEB',
        surface:   '#FFFFFF',
        line: {
          DEFAULT: '#E2DDD5',
          soft:    '#ECE8E2',
        },
        success: { 100: '#E2F5EC', 600: '#1F9D6B' },
        warn:    { 100: '#FBF2DC', 600: '#C08415' },
        danger:  { 100: '#FAE4E2', 600: '#C8382F' },
        info:    { 100: '#EBE7E3', 600: '#8F7761' },
      },
      fontFamily: {
        sans:    ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['Playfair Display', 'ui-serif', 'Georgia', 'serif'],
        mono:    ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      fontSize: {
        'display-xl': ['72px', { lineHeight: '80px', letterSpacing: '-0.01em',  fontWeight: '600' }],
        'display-lg': ['56px', { lineHeight: '64px', letterSpacing: '-0.01em',  fontWeight: '600' }],
        'h1':         ['40px', { lineHeight: '48px', letterSpacing: '-0.005em', fontWeight: '600' }],
        'h2':         ['32px', { lineHeight: '40px', letterSpacing: '-0.005em', fontWeight: '600' }],
        'h3':         ['24px', { lineHeight: '32px', fontWeight: '600' }],
        'h4':         ['20px', { lineHeight: '28px', fontWeight: '600' }],
        'body-lg':    ['18px', { lineHeight: '28px', fontWeight: '400' }],
        'body-md':    ['16px', { lineHeight: '24px', fontWeight: '400' }],
        'body-sm':    ['14px', { lineHeight: '20px', fontWeight: '400' }],
        'caption':    ['12px', { lineHeight: '16px', fontWeight: '500' }],
        'overline':   ['11px', { lineHeight: '16px', letterSpacing: '0.06em', fontWeight: '600' }],
        'code':       ['14px', { lineHeight: '20px', fontWeight: '400' }],
      },
      borderRadius: {
        'none': '0px',
        'xs':   '4px',
        'sm':   '6px',
        'md':   '10px',
        'lg':   '16px',
        'xl':   '24px',
        'full': '9999px',
      },
      boxShadow: {
        'xs': '0 1px 2px rgba(42, 42, 42, 0.04)',
        'sm': '0 1px 3px rgba(42, 42, 42, 0.06), 0 1px 2px rgba(42, 42, 42, 0.04)',
        'md': '0 4px 12px rgba(42, 42, 42, 0.06), 0 2px 4px rgba(42, 42, 42, 0.04)',
        'lg': '0 12px 32px rgba(42, 42, 42, 0.08), 0 4px 8px rgba(42, 42, 42, 0.04)',
        'xl': '0 24px 48px rgba(42, 42, 42, 0.10), 0 8px 16px rgba(42, 42, 42, 0.06)',
      },
      transitionDuration: {
        'xs': '80ms',
        'sm': '160ms',
        'md': '240ms',
        'lg': '480ms',
        'xl': '720ms',
      },
      transitionTimingFunction: {
        'out':      'cubic-bezier(0.22, 1, 0.36, 1)',
        'in-out':   'cubic-bezier(0.4, 0, 0.2, 1)',
        'standard': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      maxWidth: {
        'container':    '1200px',
        'reading':      '680px',
        'hero-subcopy': '520px',
      },
      screens: {
        'sm':  '640px',
        'md':  '768px',
        'lg':  '1024px',
        'xl':  '1280px',
        '2xl': '1536px',
      },
    },
  },
}
