import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Crypto Wallet Safety 101 — RhoodChain',
  description: 'A beginner\'s guide to crypto wallet safety — seed phrases, custodial vs. self-custody, phishing, and the real threats to know before you connect a wallet.',
}

export default function GuideLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
