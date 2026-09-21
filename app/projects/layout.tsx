import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Top Robinhood Chain Projects — RhoodChain',
  description: 'Discover the best projects building on Robinhood Chain — DeFi, tokenized assets, infrastructure, and more.',
}

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
