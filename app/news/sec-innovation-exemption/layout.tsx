import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The SEC Just Opened a Door for Tokenized Stocks. Here\'s Why It\'s Bullish for Robinhood Chain. — RhoodChain',
  description: 'The SEC\'s September 17 Innovation Exemption opens a legal path for tokenized US stocks — but Robinhood\'s current product doesn\'t qualify yet. Plus: Robinhood Chain vs Solana tokenized stock volume, tracked.',
  openGraph: {
    title: 'The SEC Just Opened a Door for Tokenized Stocks. Here\'s Why It\'s Bullish for Robinhood Chain.',
    description: 'The SEC\'s Innovation Exemption and what it means for Robinhood Chain, plus how it stacks up against Solana in tokenized stock volume.',
    images: [{ url: 'https://rhoodchain.com/sec-innovation-exemption.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The SEC Just Opened a Door for Tokenized Stocks. Here\'s Why It\'s Bullish for Robinhood Chain.',
    description: 'The SEC\'s Innovation Exemption and what it means for Robinhood Chain, plus how it stacks up against Solana in tokenized stock volume.',
    images: ['https://rhoodchain.com/sec-innovation-exemption.jpg'],
  },
}

export default function ArticleLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}