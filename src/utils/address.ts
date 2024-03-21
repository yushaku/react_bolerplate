import { BSC } from '@/components/icons/BSC'
import { Ethereum } from '@/components/icons/Ethereum'

export const shortenAddress = (add: string | undefined) => {
  if (!add) return ''
  return add.slice(0, 6) + '...' + add.slice(-4)
}

export const getNativeToken = (chainId: number) => {
  switch (chainId) {
    case 1:
    case 5:
    case 11155111: {
      return Ethereum
    }
    case 97: {
      return BSC
    }
  }
}