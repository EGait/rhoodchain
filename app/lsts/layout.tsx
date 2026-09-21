import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Robinhood Earn & Yield — RhoodChain',
  description: 'Compare yield products on Robinhood Chain, including Robinhood Earn.',
}

export default function LSTsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
