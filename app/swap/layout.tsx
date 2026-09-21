import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Swap on Robinhood Chain — RhoodChain',
  description: 'Trade on Robinhood Chain through Uniswap, the network\'s core public liquidity.',
}

export default function SwapLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
