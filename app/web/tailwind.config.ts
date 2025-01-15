import type { Config } from 'tailwindcss'

const config = {
  darkMode: ['class'],
  content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './app/**/*.{ts,tsx}', './src/**/*.{ts,tsx}'],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        border: 'var(--gray-6)',
        input: 'var(--gray-6)',
        ring: 'var(--gray-8)',
        background: 'var(--color-background)',
        foreground: 'var(--gray-12)',
        primary: {
          DEFAULT: 'var(--custom-9)',
          foreground: 'var(--custom-contrast)',
        },
        secondary: {
          DEFAULT: 'var(--gray-4)',
          foreground: 'var(--gray-12)',
        },
        destructive: {
          DEFAULT: 'hsl(0 62.8% 30.6%)',
          foreground: 'var(--gray-1)',
        },
        muted: {
          DEFAULT: 'var(--gray-3)',
          foreground: 'var(--gray-11)',
        },
        accent: {
          DEFAULT: 'var(--custom-3)',
          foreground: 'var(--custom-11)',
        },
        popover: {
          DEFAULT: 'var(--custom-surface)',
          foreground: 'var(--gray-12)',
        },
        card: {
          DEFAULT: 'var(--custom-surface)',
          foreground: 'var(--gray-12)',
        },
      },
      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate'), require('tailwindcss-radix')()],
} satisfies Config

function generateScale(name) {
  let scale = Array.from({ length: 12 }, (_, i) => {
    let id = i + 1
    return [
      [id, `var(--${name}-${id})`],
      [`a${id}`, `var(--${name}-a${id})`],
    ]
  }).flat()

  return Object.fromEntries(scale)
}

export default config
