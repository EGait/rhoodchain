import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function SwapPage() {
  return (
    <main className="bg-[#08100c] min-h-screen text-gray-100">
      <Navbar />

      <div className="px-6 md:px-8 py-12 border-b text-center" style={{ borderColor: 'rgba(34,197,94,0.2)' }}>
        <div className="inline-block text-xs px-3 py-1 rounded-full mb-4 border" style={{ backgroundColor: 'rgba(34,197,94,0.1)', borderColor: 'rgba(34,197,94,0.3)', color: '#22C55E' }}>
          DeFi
        </div>
        <h1 className="text-3xl md:text-4xl font-medium mb-3">
          Swap on <span style={{ color: '#22C55E' }}>Robinhood Chain</span>
        </h1>
        <p className="text-gray-500 text-sm max-w-md mx-auto">
          Uniswap runs the core public liquidity on Robinhood Chain. Trade directly on their app.
        </p>
      </div>

      <div className="flex justify-center items-start py-16 px-4">
        <div
          className="w-full max-w-md rounded-2xl border p-8 text-center"
          style={{ borderColor: 'rgba(34,197,94,0.2)', backgroundColor: 'rgba(34,197,94,0.04)' }}
        >
          <div className="text-5xl mb-4">🦄</div>
          <div className="text-lg font-medium text-gray-100 mb-2">Trade on Uniswap</div>
          <p className="text-sm text-gray-500 mb-6">
            Opens Uniswap's own app in a new tab. RhoodChain doesn't process trades or hold funds — you connect your own wallet directly with Uniswap.
          </p>
          <a
            href="https://app.uniswap.org"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-sm px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
            style={{ backgroundColor: '#22C55E', color: '#08100c' }}
          >
            Open Uniswap ↗
          </a>
        </div>
      </div>

      <Footer />
    </main>
  )
}
