import { useReadContract } from 'wagmi'
import { Address, erc20Abi, zeroAddress } from 'viem'
import { State } from '@/utils/types'
import { QueryObserverResult } from '@tanstack/react-query'

export const useTokenBalance = ({
  address,
  tokenAddress,
}: {
  address?: Address
  tokenAddress?: Address
}): State<bigint, QueryObserverResult> => {
  const {
    data: erc20Balance,
    isLoading: erc20BalanceLoading,
    isError: erc20BalanceError,
    refetch: refetchTokenBalance,
  } = useReadContract({
    abi: erc20Abi,
    address: tokenAddress,
    functionName: 'balanceOf',
    args: [address ?? zeroAddress],
  })

  return {
    data: erc20Balance,
    loading: erc20BalanceLoading,
    error: String(erc20BalanceError),
    refetch: refetchTokenBalance,
  }
}
