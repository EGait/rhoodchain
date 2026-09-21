import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Markets — Stablecoins, Earn & RWAs on Robinhood Chain — RhoodChain',
  description: 'Explore financial products on Robinhood Chain — USDG, Robinhood Earn, tokenized stocks, and Agentic Trading.',
}

export default function MarketsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
