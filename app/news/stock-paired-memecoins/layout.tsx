import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Robinhood Built a Chain for Tokenized Stocks. Memecoins Took It Over. — RhoodChain',
  description: 'Inside Robinhood Chain\'s stock-paired memecoin boom — how PONS, CASHCAT, Long.xyz and Artificial Inu turned tokenized equities into memecoin liquidity.',
  openGraph: {
    title: 'Robinhood Built a Chain for Tokenized Stocks. Memecoins Took It Over.',
    description: 'How PONS, CASHCAT, Long.xyz and Artificial Inu turned tokenized equities into memecoin liquidity.',
    images: [{ url: 'https://rhoodchain.com/stock-paired-memecoins.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Robinhood Built a Chain for Tokenized Stocks. Memecoins Took It Over.',
    description: 'How PONS, CASHCAT, Long.xyz and Artificial Inu turned tokenized equities into memecoin liquidity.',
    images: ['https://rhoodchain.com/stock-paired-memecoins.jpg'],
  },
}

export default function ArticleLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
