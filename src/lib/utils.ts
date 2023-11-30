import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { parseUnits } from 'viem'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatNumber(number: number, decimals = 2) {
  return number.toLocaleString(undefined, {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  })
}

export function parseLocalizedValue(amount: string, decimals = 18) {
  const cleaned = amount.replace(/[^\d.-]/g, '')
  return parseUnits(cleaned, decimals)
}

export function debounce<T extends (...args: any[]) => any>(func: T, wait = 100) {
  let timeout: ReturnType<typeof setTimeout> | undefined
  return function (this: any, ...args: Parameters<T>) {
    const later = () => {
      timeout = undefined
      func.apply(this, args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  } as T
}
