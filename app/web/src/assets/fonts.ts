import { cn } from '@/lib/utils'

import { Inter, JetBrains_Mono, Source_Serif_4 } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const sourceSerif4 = Source_Serif_4({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-source-serif-4',
})

const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jet-brains-mono',
})

export const fonts = cn(jetBrainsMono.variable, sourceSerif4.variable, inter.variable, 'font-sans antialiased')
