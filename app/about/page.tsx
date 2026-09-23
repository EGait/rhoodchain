'use client'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function AboutPage() {
  return (
    <main className="bg-[#08100c] min-h-screen text-gray-100">
      <Navbar />

      <div className="px-6 md:px-8 py-12 border-b text-center" style={{ borderColor: 'rgba(34,197,94,0.2)' }}>
        <div className="inline-block text-xs px-3 py-1 rounded-full mb-4 border" style={{ backgroundColor: 'rgba(34,197,94,0.1)', borderColor: 'rgba(34,197,94,0.3)', color: '#22C55E' }}>
          About
        </div>
        <h1 className="text-3xl md:text-4xl font-medium mb-3">
          About{' '}
          <span style={{ color: '#22C55E' }}>RhoodChain</span>
        </h1>
        <p className="text-gray-500 text-sm max-w-md mx-auto">
          Your go-to hub for everything happening on Robinhood Chain.
        </p>
      </div>

      <div className="max-w-2xl mx-auto px-6 md:px-8 py-12">
        <div className="rounded-xl p-5 mb-8" style={{ backgroundColor: 'rgba(34,197,94,0.05)', border: '1px solid rgba(34,197,94,0.25)' }}>
          <div className="text-sm font-medium text-gray-200 mb-2">Independent &amp; Unaffiliated</div>
          <p className="text-xs text-gray-500 leading-relaxed">
            RhoodChain is an independent, community-run news and information site. We are <strong className="text-gray-400">not affiliated with, endorsed by, or sponsored by Robinhood Markets, Inc.</strong>, Robinhood Financial LLC, Robinhood Crypto LLC, or any of their subsidiaries. We are not a broker, exchange, or financial advisor, and nothing on this site is financial advice.
          </p>
          <p className="text-xs text-gray-500 leading-relaxed mt-2">
            Tokens launched on Robinhood Chain are created by independent third parties. Robinhood operates the network but does not vet, endorse, or stand behind any token on it — no more than Ethereum is responsible for tokens deployed on Ethereum. Always do your own research.
          </p>
        </div>

        <div className="flex flex-col gap-8 text-sm text-gray-400 leading-relaxed">
          <div>
            <h2 className="text-base font-medium text-gray-200 mb-3">Our Mission</h2>
            <p>
              RhoodChain is built to be the one place Robinhood Chain users actually need. We bring together the best projects, breaking news, tokenized stocks, DeFi rails, and Robinhood Earn — all in one clean, fast hub built for the Robinhood Chain community.
            </p>
          </div>

          <div>
            <h2 className="text-base font-medium text-gray-200 mb-3">What We Offer</h2>
            <div className="flex flex-col gap-3 text-gray-500">
              <p>📰 <strong className="text-gray-400">Daily News</strong> — Stay up to date with the latest Robinhood Chain news and updates.</p>
              <p>🔭 <strong className="text-gray-400">Project Directory</strong> — Browse our curated directory of the best projects building on Robinhood Chain.</p>
              <p>📈 <strong className="text-gray-400">Tokenized Stocks</strong> — Track Stock Tokens available to verified EU/EEA users through the Robinhood Wallet (not available in the US, Canada, UK, or Switzerland).</p>
              <p>🏦 <strong className="text-gray-400">Robinhood Earn</strong> — Compare yield products and lending markets on Robinhood Chain.</p>
              <p>💵 <strong className="text-gray-400">Stablecoins</strong> — Browse and compare stablecoins available on Robinhood Chain, including USDG.</p>
            </div>
          </div>

          <div>
            <h2 className="text-base font-medium text-gray-200 mb-3">Robinhood Chain Ecosystem Partners</h2>
            <p className="mb-4">
              Robinhood Chain launched with deep integrations across DeFi, infrastructure, and compliance. Here's who's building on it:
            </p>

            <div className="mb-3">
              <div className="text-xs font-medium uppercase tracking-widest mb-2" style={{ color: '#22C55E' }}>DeFi & Trading</div>
              <p className="text-gray-500">Uniswap (dedicated AMM), Pleiades (proprietary trading venue), Rialto, Lighter, Morpho (Robinhood Earn lending)</p>
            </div>

            <div className="mb-3">
              <div className="text-xs font-medium uppercase tracking-widest mb-2" style={{ color: '#22C55E' }}>Infrastructure & Oracles</div>
              <p className="text-gray-500">Chainlink (official oracle and cross-chain infrastructure), Alchemy, LayerZero, Allium</p>
            </div>

            <div className="mb-3">
              <div className="text-xs font-medium uppercase tracking-widest mb-2" style={{ color: '#22C55E' }}>Custody & Compliance</div>
              <p className="text-gray-500">BitGo, TRM Labs</p>
            </div>

            <div className="mb-3">
              <div className="text-xs font-medium uppercase tracking-widest mb-2" style={{ color: '#22C55E' }}>Chain Architecture</div>
              <p className="text-gray-500">Built on the Arbitrum stack, settling to Ethereum for security, with 100ms block times</p>
            </div>
          </div>

          <div>
            <h2 className="text-base font-medium text-gray-200 mb-3">Contact</h2>
            <p>
              Have a project you want featured? Want to get in touch?
            </p>
            <button
              onClick={() => window.location.href = 'mailto:RHoodChainHQ@gmail.com'}
              className="mt-3 text-xs px-4 py-2 rounded-lg transition-colors"
              style={{ backgroundColor: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.3)', color: '#22C55E' }}
            >
              RHoodChainHQ@gmail.com
            </button>
          </div>

          <div>
            <h2 className="text-base font-medium text-gray-200 mb-3">Follow Us</h2>
            <button
              onClick={() => window.open('https://x.com/RHoodChainHQ', '_blank')}
              className="text-xs px-4 py-2 rounded-lg transition-colors"
              style={{ backgroundColor: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.3)', color: '#22C55E' }}
            >
              𝕏 @RHoodChainHQ
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
