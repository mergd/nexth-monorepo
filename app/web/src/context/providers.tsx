'use client'
import { Toaster } from '@/components/ui/sonner'
import { Theme } from '@radix-ui/themes'
import { ThemeProvider } from 'next-themes'
import { PropsWithChildren } from 'react'
import { JotaiProvider } from './Jotai'
import { Web3Provider } from './Web3'
export function Providers(props: PropsWithChildren) {
  return (
    <Theme scaling='95%' grayColor='sage'>
      <ThemeProvider attribute='class' enableSystem>
        <JotaiProvider>
          <Web3Provider>{props.children}</Web3Provider>
        </JotaiProvider>
        <Toaster />
      </ThemeProvider>
    </Theme>
  )
}
