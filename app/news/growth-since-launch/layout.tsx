import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Robinhood Chain, Two Months In: The Numbers So Far — RhoodChain',
  description: 'A beginner-friendly look at Robinhood Chain\'s growth since its July 1, 2026 mainnet launch, plus how Robinhood the company is performing after a record Q2 2026.',
  openGraph: {
    title: 'Robinhood Chain, Two Months In: The Numbers So Far',
    description: 'Robinhood Chain\'s growth since launch, plus how Robinhood the company is performing after a record Q2 2026.',
    images: [{ url: 'https://rhoodchain.com/growth-since-launch.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Robinhood Chain, Two Months In: The Numbers So Far',
    description: 'Robinhood Chain\'s growth since launch, plus how Robinhood the company is performing after a record Q2 2026.',
    images: ['https://rhoodchain.com/growth-since-launch.jpg'],
  },
}

export default function ArticleLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
