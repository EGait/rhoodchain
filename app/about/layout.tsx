import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About — RhoodChain',
  description: 'RhoodChain is your go-to hub for Robinhood Chain news, projects, and DeFi.',
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
