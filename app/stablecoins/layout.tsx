import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Robinhood Chain Stablecoins — RhoodChain',
  description: 'Compare stablecoins on Robinhood Chain, including USDG.',
}

export default function StablecoinsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
