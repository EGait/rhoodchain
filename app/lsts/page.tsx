'use client'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { lsts } from '../data/lsts'

export default function LSTsPage() {

  const visitSite = (url: string) => {
    window.open(url, '_blank')
  }

  return (
    <main className="bg-[#08100c] min-h-screen text-gray-100">
      <Navbar />

      <div className="px-6 md:px-8 py-12 border-b text-center" style={{ borderColor: 'rgba(34,197,94,0.2)' }}>
        <div className="inline-block text-xs px-3 py-1 rounded-full mb-4 border" style={{ backgroundColor: 'rgba(34,197,94,0.1)', borderColor: 'rgba(34,197,94,0.3)', color: '#22C55E' }}>
          Robinhood Earn
        </div>
        <h1 className="text-3xl md:text-4xl font-medium mb-3">
          Earn Yield on <span style={{ color: '#22C55E' }}>Robinhood Chain</span>
        </h1>
        <p className="text-gray-500 text-sm max-w-lg mx-auto">
          Robinhood Chain doesn't have liquid staking like Solana — its yield story runs through Robinhood Earn, a decentralized lending product offering an estimated 7% APY on USDG via Morpho.
        </p>
      </div>

      <div className="px-6 md:px-8 py-8 max-w-5xl mx-auto">
        <div className="rounded-2xl p-5 mb-8" style={{ backgroundColor: 'rgba(34,197,94,0.05)', border: '1px solid rgba(34,197,94,0.2)' }}>
          <div className="text-xs font-medium mb-2" style={{ color: '#22C55E' }}>What is Robinhood Earn?</div>
          <p className="text-xs text-gray-500 leading-relaxed">
            Robinhood Chain doesn't have a native staking token to lock up the way Solana has SOL — instead, yield comes through Robinhood Earn, a decentralized lending product built on Morpho. Depositing USDG earns an estimated 7% APY, with the lending markets running directly on Robinhood Chain's DeFi rails.
          </p>
        </div>

        <div className="text-xs font-medium uppercase tracking-widest mb-4" style={{ color: '#22C55E' }}>
          Yield Products on Robinhood Chain
        </div>

        {/* Desktop table view */}
        <div className="hidden md:block rounded-2xl overflow-hidden" style={{ border: '1px solid rgba(34,197,94,0.15)' }}>
          <div className="grid grid-cols-12 px-4 py-3 text-xs font-medium uppercase tracking-widest" style={{ backgroundColor: 'rgba(34,197,94,0.08)', color: '#22C55E', borderBottom: '1px solid rgba(34,197,94,0.15)' }}>
            <div className="col-span-4">Token</div>
            <div className="col-span-2 text-right">APY</div>
            <div className="col-span-2 text-right">Protocol</div>
            <div className="col-span-2 text-right">TVL</div>
            <div className="col-span-2 text-right">Actions</div>
          </div>

          {lsts.map((lst: any, index: number) => (
            <div
              key={lst.id}
              className="grid grid-cols-12 px-4 py-4 items-center"
              style={{
                borderBottom: index < lsts.length - 1 ? '1px solid rgba(34,197,94,0.08)' : 'none',
                backgroundColor: index % 2 === 0 ? 'rgba(34,197,94,0.02)' : 'transparent'
              }}
            >
              <div className="col-span-4 flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center text-lg flex-shrink-0 overflow-hidden" style={{ backgroundColor: 'rgba(34,197,94,0.1)' }}>
                  {lst.logo ? (
                    <img
                      src={lst.logo}
                      alt={lst.name}
                      className="w-full h-full object-cover rounded-xl"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none'
                        const sibling = e.currentTarget.nextElementSibling as HTMLElement
                        if (sibling) sibling.style.display = 'block'
                      }}
                    />
                  ) : null}
                  <span style={{ display: lst.logo ? 'none' : 'block' }}>{lst.icon}</span>
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-200">{lst.name}</div>
                  <div className="text-xs text-gray-600">{lst.symbol}</div>
                </div>
              </div>
              <div className="col-span-2 text-right">
                <span className="text-sm font-medium" style={{ color: '#22C55E' }}>{lst.apy}</span>
              </div>
              <div className="col-span-2 text-right">
                <span className="text-xs text-gray-300">{lst.protocol}</span>
              </div>
              <div className="col-span-2 text-right">
                <span className="text-xs text-gray-300">{lst.tvl}</span>
              </div>
              <div className="col-span-2 flex items-center justify-end gap-2">
                <button
                  onClick={() => visitSite(lst.website)}
                  className="text-xs px-3 py-1.5 rounded-lg transition-colors text-gray-500 hover:text-gray-300"
                  style={{ border: '1px solid rgba(34,197,94,0.15)' }}
                >
                  Visit
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile card view */}
        <div className="md:hidden flex flex-col gap-3">
          {lsts.map((lst: any) => (
            <div
              key={lst.id}
              className="rounded-2xl p-4"
              style={{ backgroundColor: 'rgba(34,197,94,0.03)', border: '1px solid rgba(34,197,94,0.15)' }}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl overflow-hidden" style={{ backgroundColor: 'rgba(34,197,94,0.1)' }}>
                    {lst.logo ? (
                      <img
                        src={lst.logo}
                        alt={lst.name}
                        className="w-full h-full object-cover rounded-xl"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none'
                          const sibling = e.currentTarget.nextElementSibling as HTMLElement
                          if (sibling) sibling.style.display = 'block'
                        }}
                      />
                    ) : null}
                    <span style={{ display: lst.logo ? 'none' : 'block' }}>{lst.icon}</span>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-200">{lst.name}</div>
                    <div className="text-xs text-gray-600">{lst.symbol}</div>
                  </div>
                </div>
                <span className="text-sm font-medium" style={{ color: '#22C55E' }}>{lst.apy}</span>
              </div>
              <div className="flex gap-4 text-xs mb-3">
                <div>
                  <span className="text-gray-600">Protocol </span>
                  <span className="text-gray-300">{lst.protocol}</span>
                </div>
                <div>
                  <span className="text-gray-600">TVL </span>
                  <span className="text-gray-300">{lst.tvl}</span>
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => visitSite(lst.website)}
                  className="px-3 py-2 text-xs rounded-lg transition-colors text-gray-500 hover:text-gray-300"
                  style={{ border: '1px solid rgba(34,197,94,0.15)' }}
                >
                  Visit
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
<Footer />
    </main>
  )
}