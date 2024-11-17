'use client'
import { Toaster } from '@/components/ui/toaster'
import { TooltipProvider } from '@/components/ui/tooltip'
import { ThemeProvider } from 'next-themes'
import { PropsWithChildren } from 'react'
import { JotaiProvider } from './Jotai'
import { Web3Provider } from './Web3'

export function Providers(props: PropsWithChildren) {
  return (
      
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
    <JotaiProvider>
        <TooltipProvider>
      <Web3Provider>{props.children}

            <Toaster />
      </Web3Provider>
    </TooltipProvider>
    </JotaiProvider>
    </ThemeProvider>
  )
}
