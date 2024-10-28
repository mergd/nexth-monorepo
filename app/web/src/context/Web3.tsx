'use client'

import { WALLETCONNECT_CONFIG } from '@/utils/web3'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ConnectKitProvider } from 'connectkit'
import { PropsWithChildren } from 'react'
import { State, WagmiProvider } from 'wagmi'

interface Props extends PropsWithChildren {
  initialState?: State
}

const queryClient = new QueryClient()

export function Web3Provider(props: Props) {
  return (
    <>
      <WagmiProvider config={WALLETCONNECT_CONFIG} initialState={props.initialState}>
        <QueryClientProvider client={queryClient}>
          <ConnectKitProvider>{props.children}</ConnectKitProvider>
        </QueryClientProvider>
      </WagmiProvider>
    </>
  )
}
