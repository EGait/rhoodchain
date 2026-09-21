import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Arcus: The dYdX Team\'s $2 Billion Bet on Robinhood Chain — RhoodChain',
  description: 'dYdX Labs and Robinhood Crypto built Arcus, a DEX for tokenized stocks and perpetuals that has already done $2B+ in volume on Robinhood Chain.',
  openGraph: {
    title: 'Arcus: The dYdX Team\'s $2 Billion Bet on Robinhood Chain',
    description: 'dYdX Labs and Robinhood Crypto built Arcus, a DEX that has already done $2B+ in volume on Robinhood Chain.',
    images: [{ url: 'https://rhoodchain.com/arcus-dydx-robinhood.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Arcus: The dYdX Team\'s $2 Billion Bet on Robinhood Chain',
    description: 'dYdX Labs and Robinhood Crypto built Arcus, a DEX that has already done $2B+ in volume on Robinhood Chain.',
    images: ['https://rhoodchain.com/arcus-dydx-robinhood.jpg'],
  },
}

export default function ArticleLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
