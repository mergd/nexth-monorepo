'use client'
import { ConnectKitButton } from 'connectkit'
import { Loader2 } from 'lucide-react'

export function ConnectButton() {
  return (
    <ConnectKitButton.Custom>
      {({ isConnected, isConnecting, show, hide, address, ensName, chain }) => {
        return (
          <button
            onClick={show}
            className='inline-flex items-center rounded-md border border-[--gray-6] bg-[--gray-3] px-3 py-1.5 text-sm font-medium text-[--gray-12] shadow-sm transition-colors duration-200 hover:bg-[--gray-4] active:bg-[--gray-5]'>
            {isConnecting ? (
              <span className='flex items-center gap-2'>
                <span className='flex h-2 w-2 animate-pulse items-center rounded-full bg-[--gray-8]' />
                Connecting <Loader2 className='h-4 w-4 animate-spin' />
              </span>
            ) : isConnected ? (
              <span className='flex items-center gap-2'>
                <span className='h-2 w-2 rounded-full bg-green-500' />
                {ensName || `${address?.slice(0, 6)}...${address?.slice(-4)}`}
              </span>
            ) : (
              <span className='flex items-center gap-2'>
                <span className='h-2 w-2 rounded-full bg-[--gray-8]' />
                Connect Wallet
              </span>
            )}
          </button>
        )
      }}
    </ConnectKitButton.Custom>
  )
}
