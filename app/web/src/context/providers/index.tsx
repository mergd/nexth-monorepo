'use client'
import { system } from '@/assets/theme'
import { Provider } from '@/components/ui/provider'
import { Toaster } from '@/components/ui/sonner'
import { PropsWithChildren } from 'react'
import { JotaiProvider } from './jotai'
import { Web3Provider } from './web3'
export function Providers(props: PropsWithChildren) {
  return (
    <Provider value={system}>
      <JotaiProvider>
        <Web3Provider>{props.children}</Web3Provider>
      </JotaiProvider>
      <Toaster />
    </Provider>
  )
}
