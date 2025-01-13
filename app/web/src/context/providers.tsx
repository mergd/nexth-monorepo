'use client'
import { Toaster } from '@/components/ui/sonner'
import { ThemeProvider } from 'next-themes'
import { PropsWithChildren } from 'react'
import { JotaiProvider } from './Jotai'
import { Web3Provider } from './Web3'

export function Providers(props: PropsWithChildren) {
  return (
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
    <JotaiProvider>
      <Web3Provider>{props.children}
      </Web3Provider>
    </JotaiProvider>
      <Toaster />
    </ThemeProvider>
  )
}
