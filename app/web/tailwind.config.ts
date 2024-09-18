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
        gray: generateScale('gray'),
        custom: generateScale('custom'),

        border: 'hsl(var(--gray-a6))',
        input: 'hsl(var(--gray-a6))',
        ring: 'hsl(var(--gray-a6))',
        background: 'hsl(var(--gray-a1))',
        foreground: 'hsl(var(--gray-a12))',
        primary: {
          DEFAULT: 'hsl(var(--gray-a2))',
          foreground: 'hsl(var(--gray-a12))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--gray-a5))',
          foreground: 'hsl(var(--muted-gray-a10))',
        },
        accent: {
          DEFAULT: 'hsl(var(--custom-a2))',
          foreground: 'hsl(var(--custom-a12))',
        },
        popover: {
          DEFAULT: 'hsl(var(--gray-a3))',
          foreground: 'hsl(var(--gray-a11))',
        },
        card: {
          DEFAULT: 'hsl(var(--gray-a2))',
          foreground: 'hsl(var(--gray-a12))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
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
