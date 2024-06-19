import { mainnet, arbitrum, base, linea, polygon, optimism, scroll } from 'viem/chains'
import { Chain, hardhat, sepolia } from 'viem/chains'

let chains = [mainnet, arbitrum, base, linea, polygon, optimism, scroll] as [Chain, ...Chain[]]

if (process.env.NODE_ENV !== 'production') chains.push(sepolia, hardhat)

export const ETH_CHAINS = chains
