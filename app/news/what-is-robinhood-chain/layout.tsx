import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'What Is Robinhood Chain? Inside the Brokerage\'s Bet on Onchain Finance — RhoodChain',
  description: 'Robinhood Chain launched mainnet July 1, 2026 with $450M TVL and 95M+ transactions in three weeks. Here\'s how it works and why Robinhood built it.',
  openGraph: {
    title: 'What Is Robinhood Chain? Inside the Brokerage\'s Bet on Onchain Finance',
    description: 'Robinhood Chain launched mainnet July 1, 2026 with $450M TVL and 95M+ transactions in three weeks.',
    images: [{ url: 'https://rhoodchain.com/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'What Is Robinhood Chain? Inside the Brokerage\'s Bet on Onchain Finance',
    description: 'Robinhood Chain launched mainnet July 1, 2026 with $450M TVL and 95M+ transactions in three weeks.',
  },
}

export default function ArticleLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
