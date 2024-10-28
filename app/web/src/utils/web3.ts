'use client'
import { getDefaultConfig } from 'connectkit'
import { createConfig } from 'wagmi'
import { env } from '../lib/env'
import { ETH_CHAINS } from './network'
import { SITE_INFO, SITE_NAME, SITE_URL } from './site'

export const WALLETCONNECT_PROJECT_ID = env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID

export const WALLETCONNECT_CONFIG = createConfig(
  getDefaultConfig({
    // Your dApps chains
    chains: ETH_CHAINS,
    // Required API Keys
    walletConnectProjectId: WALLETCONNECT_PROJECT_ID,

    // Required App Info
    appName: SITE_NAME,

    // Optional App Info
    appDescription: SITE_INFO,
    appUrl: SITE_URL,
    appIcon: 'https://family.co/logo.png',
  })
)
