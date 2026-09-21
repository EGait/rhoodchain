import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Robinhood Wallet vs. Rabby: Which One Do You Need? — RhoodChain',
  description: 'A practical comparison of Robinhood Wallet and Rabby for using Robinhood Chain — features, tradeoffs, and how to set up either one.',
}

export default function GuideLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
