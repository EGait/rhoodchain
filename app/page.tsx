'use client'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { stablecoins } from '../data/stablecoins'
import { rwas } from '../data/rwas'
import { lsts } from '../data/lsts'
import { topStockTokens } from '../data/topStockTokens'
import { memeStockPairs } from '../data/memeStockPairs'
import TvlGrowthChart from '../components/TvlGrowthChart'

export default function MarketsPage() {
  return (
    <main className="bg-[#08100c] min-h-screen text-gray-100">
      <Navbar />

      <div className="px-6 md:px-8 py-12 border-b text-center" style={{ borderColor: 'rgba(34,197,94,0.2)' }}>
        <div className="inline-block text-xs px-3 py-1 rounded-full mb-4 border" style={{ backgroundColor: 'rgba(34,197,94,0.1)', borderColor: 'rgba(34,197,94,0.3)', color: '#22C55E' }}>
          Robinhood Chain Financial Products
        </div>
        <h1 className="text-3xl md:text-4xl font-medium mb-3">
          <span style={{ color: '#22C55E' }}>Markets</span>
        </h1>
        <p className="text-gray-500 text-sm max-w-lg mx-auto">
          Stablecoins, yield products, and tokenized real-world assets on Robinhood Chain — the financial building blocks of the ecosystem.
        </p>
        <p className="text-xs text-gray-600 max-w-2xl mx-auto mt-4">
          Disclaimer: This page is for informational purposes only and is not financial, legal, or investment advice. Tokenized securities carry issuer, structural, and regulatory risks, and most are unavailable to US persons or require KYC. External links go to third-party platforms with their own terms. RhoodChain is not affiliated with the issuers listed and does not recommend any asset.
        </p>
      </div>

      <div className="px-6 md:px-8 py-10 max-w-5xl mx-auto">

        {/* Most traded stock tokens */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-1">
            <h2 className="text-lg font-medium text-gray-200">Most Traded Stock Tokens</h2>
            <div
              className="text-[10px] px-2 py-0.5 rounded-full border"
              style={{ backgroundColor: 'rgba(34,197,94,0.1)', borderColor: 'rgba(34,197,94,0.3)', color: '#22C55E' }}
            >
              Onchain data
            </div>
          </div>
          <p className="text-xs text-gray-600 mb-4">
            More than 2,000 Stock Tokens are listed in the full catalog (roughly 190-200 with meaningful onchain trading volume), but activity is heavily concentrated: the four biggest names account for roughly 70% of all stock-token trading on the network. NVDA alone has traded over $700M across nearly 3 million swaps since mainnet — more than any other single asset, including index funds. Figures below are lifetime DEX volume through late August/early September 2026 and will shift as trading continues.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <TvlGrowthChart />
            <a
              href="https://robinhood.com/rhj/stocktokens/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl p-5 flex flex-col justify-center items-center text-center transition-all hover:scale-[1.02]"
              style={{ backgroundColor: 'rgba(34,197,94,0.04)', border: '1px solid rgba(34,197,94,0.15)' }}
            >
              <span className="text-3xl mb-3">📋</span>
              <div className="text-sm font-medium text-gray-200 mb-1">Browse the Full Catalog</div>
              <p className="text-xs text-gray-500 mb-3">
                See all 2,000+ Stock Tokens — not just the top 4 by volume — directly on Robinhood's official product page.
              </p>
              <span className="text-xs px-4 py-2 rounded-lg font-medium" style={{ backgroundColor: '#22C55E', color: '#08100c' }}>
                Open Official Catalog ↗
              </span>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {topStockTokens.map((s: any) => (
              <div
                key={s.ticker}
                className="rounded-lg border p-5"
                style={{ borderColor: 'rgba(34,197,94,0.2)', backgroundColor: 'rgba(34,197,94,0.04)' }}
              >
                <div className="flex items-baseline justify-between gap-2 mb-1">
                  <span className="font-medium" style={{ color: '#22C55E' }}>{s.ticker}</span>
                  <span className="text-xs text-gray-500">{s.underlying}</span>
                </div>
                <div className="text-sm text-gray-200 mb-2">{s.name}</div>
                <div className="text-xs text-gray-500 mb-3">{s.note}</div>
                <div className="flex items-center gap-3">
                  <span className="text-[10px] px-2 py-0.5 rounded-full border border-gray-800 text-gray-500">
                    {s.volume}
                  </span>
                  {s.rank && (
                    <span className="text-[10px] px-2 py-0.5 rounded-full" style={{ backgroundColor: 'rgba(34,197,94,0.1)', color: '#22C55E' }}>
                      {s.rank}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-lg border p-4 mt-4" style={{ borderColor: 'rgba(34,197,94,0.15)', backgroundColor: 'rgba(34,197,94,0.03)' }}>
            <p className="text-xs text-gray-500 leading-relaxed">
              ⚠️ Worth knowing: Robinhood Chain ran a 90-day gas subsidy covering swaps and stock-token transactions from launch, expiring around <strong className="text-gray-400">September 29, 2026</strong>. Some of the volume above may reflect subsidized activity — worth watching whether it holds once users pay full gas costs.
            </p>
          </div>
        </div>

        {/* Stablecoins */}
        <div className="mb-12">
          <div className="text-xs font-medium uppercase tracking-widest mb-2" style={{ color: '#22C55E' }}>
            Stablecoins
          </div>
          <p className="text-xs text-gray-600 mb-6">
            USDG is the primary stablecoin on Robinhood Chain, powering Robinhood Earn and everyday settlement.
          </p>
          {stablecoins.length > 0 ? (
            <div className={
              stablecoins.length === 1
                ? "grid grid-cols-1 max-w-sm"
                : stablecoins.length === 2
                ? "grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl"
                : "grid grid-cols-1 md:grid-cols-3 gap-4"
            }>
              {stablecoins.map((coin: any) => (
                <div key={coin.id} className="rounded-2xl p-5 transition-all hover:scale-[1.02]" style={{ backgroundColor: 'rgba(34,197,94,0.04)', border: '1px solid rgba(34,197,94,0.15)' }}>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">{coin.icon}</span>
                    <div>
                      <div className="text-sm font-medium text-gray-200">{coin.name}</div>
                      <div className="text-xs text-gray-600">{coin.issuer} · Pegged to {coin.peg}</div>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed mb-3">{coin.description}</p>
                  {coin.highlight && (
                    <span className="text-xs px-2 py-0.5 rounded" style={{ backgroundColor: 'rgba(34,197,94,0.1)', color: '#22C55E' }}>
                      {coin.highlight}
                    </span>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="rounded-lg border px-6 py-10 text-center text-sm text-gray-500" style={{ borderColor: 'rgba(34,197,94,0.2)' }}>
              Stablecoin data coming soon.
            </div>
          )}
        </div>

        {/* Yield */}
        <div className="mb-12">
          <div className="text-xs font-medium uppercase tracking-widest mb-2" style={{ color: '#22C55E' }}>
            Robinhood Earn &amp; Yield
          </div>
          <p className="text-xs text-gray-600 mb-6">
            Robinhood Chain doesn't have liquid staking — yield comes through Robinhood Earn, a decentralized lending product built on Morpho.
          </p>
          {lsts.length > 0 ? (
            <div className="flex flex-col gap-4">
              {lsts.map((item: any) => (
                <div key={item.id} className="rounded-2xl p-5 transition-all hover:scale-[1.01]" style={{ backgroundColor: 'rgba(34,197,94,0.04)', border: '1px solid rgba(34,197,94,0.15)' }}>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{item.icon}</span>
                      <div>
                        <div className="text-sm font-medium text-gray-200">{item.name}</div>
                        <div className="text-xs text-gray-600">{item.symbol} · via {item.protocol}</div>
                      </div>
                    </div>
                    <span className="text-sm font-medium" style={{ color: '#22C55E' }}>{item.apy} APY</span>
                  </div>
                  {item.mechanics && (
                    <p className="text-xs text-gray-500 leading-relaxed">{item.mechanics}</p>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="rounded-lg border px-6 py-10 text-center text-sm text-gray-500" style={{ borderColor: 'rgba(34,197,94,0.2)' }}>
              Yield data coming soon.
            </div>
          )}

          <div className="rounded-lg border p-4 mt-4" style={{ borderColor: 'rgba(34,197,94,0.15)', backgroundColor: 'rgba(34,197,94,0.03)' }}>
            <p className="text-xs text-gray-500 leading-relaxed">
              💡 For comparison: Coinbase runs a nearly identical Morpho-powered USDC lending product, but with a <strong className="text-gray-400">variable rate up to 10.8% plus MORPHO token rewards</strong>. Robinhood took the opposite bet — a <strong className="text-gray-400">fixed, insured 7%</strong> rather than a floating, uninsured, potentially higher rate. Neither platform built its own lending protocol; both chose Morpho as the underlying credit network.
            </p>
          </div>
        </div>

        {/* Stock-paired memecoins */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-1">
            <h2 className="text-lg font-medium text-gray-200">Notable Stock-Paired Memecoins</h2>
            <div
              className="text-[10px] px-2 py-0.5 rounded-full border"
              style={{ backgroundColor: 'rgba(34,197,94,0.1)', borderColor: 'rgba(34,197,94,0.3)', color: '#22C55E' }}
            >
              Onchain data
            </div>
          </div>
          <p className="text-xs text-gray-600 mb-4">
            The strangest development on Robinhood Chain: memecoins that trade directly against tokenized stocks instead of ETH or a stablecoin, meaning meme demand mechanically drives real Stock Token volume. Roughly 27 documented pairs span 22+ tickers, with more than 400 live pools using a tokenized equity as the quote asset. See our <a href="/news/stock-paired-memecoins" style={{ color: '#22C55E' }}>full deep dive</a> for how the mechanism actually works.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {memeStockPairs.map((p: any) => (
              <div
                key={p.meme}
                className="rounded-lg border p-5"
                style={{ borderColor: 'rgba(34,197,94,0.2)', backgroundColor: 'rgba(34,197,94,0.04)' }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-medium" style={{ color: '#22C55E' }}>${p.meme}</span>
                  <span className="text-gray-600">×</span>
                  <span className="text-gray-300">${p.stock}</span>
                </div>
                <div className="text-xs text-gray-500 mb-1">
                  {p.memeName} paired against tokenized {p.stockName}
                </div>
                <p className="text-xs text-gray-500 leading-relaxed mb-3">{p.note}</p>
                <span className="text-[10px] px-2 py-0.5 rounded-full border border-gray-800 text-gray-500">
                  {p.peak}
                </span>
              </div>
            ))}
          </div>

          <div className="rounded-lg border p-4 mt-4" style={{ borderColor: 'rgba(34,197,94,0.15)', backgroundColor: 'rgba(34,197,94,0.03)' }}>
            <p className="text-xs text-gray-500 leading-relaxed">
              ⚠️ Holding a stock-paired memecoin grants no ownership of, or claim on, the referenced company — the stock pairing is a liquidity structure and a narrative, not backing. Several of these tokens have seen their entire supply drop 80%+ from peak within weeks.
            </p>
          </div>
        </div>

        {/* RWA & Agentic products — one shared grid rather than one section
            per category, since most categories here only have a single entry */}
        <div className="mb-10">
          <h2 className="text-lg font-medium text-gray-200 mb-1">Real-World Assets &amp; Agentic Infrastructure</h2>
          <p className="text-xs text-gray-600 mb-4">
            Beyond tokenized stocks and stablecoin yield, a handful of other real-world-asset and AI-agent products are live on Robinhood Chain.
          </p>
          <div className={
            rwas.length === 1
              ? "grid grid-cols-1 max-w-sm"
              : rwas.length === 2
              ? "grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl"
              : "grid grid-cols-1 md:grid-cols-3 gap-4"
          }>
            {rwas.map((r: any) => (
              <div
                key={r.id}
                className="rounded-lg border p-5 flex flex-col"
                style={{ borderColor: 'rgba(34,197,94,0.2)', backgroundColor: 'rgba(34,197,94,0.04)' }}
              >
                <div className="flex items-baseline justify-between gap-2 mb-1">
                  <span className="text-gray-100 font-medium flex items-center gap-2">
                    <span>{r.icon}</span> {r.name}
                  </span>
                </div>
                <div className="text-[10px] uppercase tracking-widest text-gray-500 mb-2">
                  {r.issuer}
                </div>
                <p className="text-gray-400 text-xs leading-relaxed mb-4 flex-1">
                  {r.description}
                </p>
                <div className="flex flex-wrap items-center gap-2">
                  <span
                    className="text-[10px] px-2 py-0.5 rounded-full border"
                    style={{ backgroundColor: 'rgba(34,197,94,0.1)', borderColor: 'rgba(34,197,94,0.3)', color: '#22C55E' }}
                  >
                    {r.status}
                  </span>
                  <span
                    onClick={() => window.open(r.url, '_blank')}
                    className="text-[10px] cursor-pointer hover:opacity-80 transition-opacity ml-auto"
                    style={{ color: '#22C55E' }}
                  >
                    Learn more ↗
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      <Footer />
    </main>
  )
}
