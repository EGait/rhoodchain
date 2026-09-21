import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Robinhood Chain News — RhoodChain',
  description: 'The latest news on Robinhood Chain and its DeFi and tokenized asset ecosystem.',
}

export default function NewsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
