import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Bridge Funds to Robinhood Chain — RhoodChain',
  description: 'A practical guide to bridging ETH and USDG to Robinhood Chain using the Arbitrum canonical bridge, deBridge, Across, and other routes.',
}

export default function GuideLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
