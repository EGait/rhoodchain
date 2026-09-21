import type { Metadata, Viewport } from 'next'
import './globals.css'
import WalletProviderWrapper from './components/WalletProviderWrapper'
import ServiceWorker from './components/ServiceWorker'
import ChatWidget from './components/ChatWidget'

export const metadata: Metadata = {
  metadataBase: new URL('https://rhoodchain.com'),
  title: 'RhoodChain — Your Hub for Robinhood Chain News, Projects and DeFi',
  description: 'RhoodChain is the community hub for Robinhood Chain. Track ecosystem projects, tokenized stocks, DeFi rails, and Robinhood Earn — all in one place.',
  manifest: '/manifest.json',
  keywords: ['Robinhood Chain', 'Robinhood', 'Arbitrum', 'tokenized stocks', 'RWA', 'DeFi', 'Robinhood Earn', 'USDG', 'stock tokens', 'HOOD'],
  authors: [{ name: 'RhoodChain' }],
  creator: 'RhoodChain',
  openGraph: {
    type: 'website',
    url: 'https://rhoodchain.com',
    title: 'RhoodChain — Your Hub for Robinhood Chain News, Projects and DeFi',
    description: 'RhoodChain is the community hub for Robinhood Chain. Track ecosystem projects, tokenized stocks, DeFi rails, and Robinhood Earn — all in one place.',
    siteName: 'RhoodChain',
    images: [
      {
        url: 'https://rhoodchain.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'RhoodChain — The hub for everything Robinhood Chain',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@RHoodChainHQ',
    creator: '@RHoodChainHQ',
    title: 'RhoodChain — Your Hub for Robinhood Chain News, Projects and DeFi',
    description: 'RhoodChain is the community hub for Robinhood Chain. Track ecosystem projects, tokenized stocks, DeFi rails, and Robinhood Earn — all in one place.',
    images: ['https://rhoodchain.com/og-image.png'],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'RhoodChain',
  },
  other: {
    'mobile-web-app-capable': 'yes',
  },
}

export const viewport: Viewport = {
  themeColor: '#22C55E',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/icons/icon-192.png" type="image/png" />
        <link rel="apple-touch-icon" href="/icons/icon-192.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body style={{ backgroundColor: '#08100c' }}>
        <ServiceWorker />
        <WalletProviderWrapper>
          {children}
        </WalletProviderWrapper>
        <ChatWidget />
      </body>
    </html>
  )
}
