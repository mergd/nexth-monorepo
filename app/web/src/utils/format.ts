import { format, formatDistanceToNow } from 'date-fns'
import { Chain } from 'viem'

export function TruncateMiddle(text: string, length: number = 5) {
  if (text?.length > length * 2 + 1) {
    return `${text.substring(0, length)}...${text.substring(text.length - length, text.length)}`
  }

  return text
}

export function formatNumber(value: number | string, decimals = 2) {
  value = Number(value)
  // return number with decimals and k/M/B suffix
  if (value < 1) {
    // Return value with 2 significant digits
    return value.toFixed(decimals)
  }

  const suffixes = ['', 'k', 'M', 'B']
  let suffixIndex = 0
  while (value >= 1000 && suffixIndex < suffixes.length - 1) {
    value /= 1000
    suffixIndex++
  }

  return `${value.toFixed(decimals)}${suffixes[suffixIndex]}`
}
export function formatNumberWithCommas(value: number | string, decimals = 2) {
  value = Number(value)
  return value.toLocaleString('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  })
}

export function truncateAddress(address: string, chars: number = 9) {
  if (!address) return ''
  if (address.length <= 18) return address
  return `${address.slice(0, chars)}...${address.slice(-chars)}`
}

export function truncateString(string: string, length: number = 15) {
  if (string?.length > length * 2 + 1) {
    return `${string.substring(0, length)}...${string.substring(string.length - length, string.length)}`
  }

  return string
}

export function txHashToLink(txHash: string, chain: Chain) {
  return `${chain.blockExplorers?.default.url}/tx/${txHash}`
}
interface FormatTimestampOptions {
  alwaysShowRelative?: boolean
}
export function formatTimestamp(unixTime: number, options: FormatTimestampOptions = {}): string {
  const date = new Date(unixTime * 1000)
  const now = new Date()
  const diffInHours = (now.getTime() - date.getTime()) / (1000 * 60 * 60)

  if (options.alwaysShowRelative || diffInHours < 48) {
    const relativeTime = formatDistanceToNow(date, { addSuffix: true })
    return relativeTime
  } else {
    return format(date, 'yyyy-MM-dd')
  }
}
