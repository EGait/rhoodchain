import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

export default function RobinhoodWalletAndRabbyPage() {
  return (
    <main className="bg-[#08100c] min-h-screen text-gray-100">
      <Navbar />

      <article className="max-w-3xl mx-auto px-6 md:px-8 py-12">
        <div className="mb-8">
          <div className="inline-block text-xs px-3 py-1 rounded-full mb-4 border" style={{ backgroundColor: 'rgba(34,197,94,0.1)', borderColor: 'rgba(34,197,94,0.3)', color: '#22C55E' }}>
            Learn · Wallets
          </div>
          <h1 className="text-3xl md:text-4xl font-medium mb-3">
            Robinhood Wallet vs. <span style={{ color: '#22C55E' }}>Rabby</span>: Which One Do You Need?
          </h1>
          <div className="flex items-center gap-3 text-xs text-gray-600">
            <span>By RhoodChain</span>
            <span>•</span>
            <span>September 20, 2026</span>
            <span>•</span>
            <span>7 min read</span>
          </div>
        </div>

        <div className="flex flex-col gap-8 text-sm text-gray-400 leading-relaxed">

          <div className="rounded-xl p-5" style={{ backgroundColor: 'rgba(34,197,94,0.04)', border: '1px solid rgba(34,197,94,0.15)' }}>
            <p className="text-sm text-gray-300">
              New to wallets entirely? Read our <a href="/learn/wallet-safety-101" style={{ color: '#22C55E' }}>Wallet Safety 101</a> guide first — this piece assumes you already know what a seed phrase is.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-medium text-gray-200 mb-3">First: Robinhood's Two Different Crypto Products</h2>
            <p className="mb-3">
              This trips up a lot of people, so it's worth being precise. Robinhood has <strong className="text-gray-200">two separate ways</strong> to hold crypto, and they work completely differently:
            </p>
            <div className="flex flex-col gap-3">
              <div className="rounded-xl p-4" style={{ backgroundColor: 'rgba(34,197,94,0.04)', border: '1px solid rgba(34,197,94,0.15)' }}>
                <div className="text-sm font-medium text-gray-200 mb-1">Buying crypto in the main Robinhood app</div>
                <p className="text-xs text-gray-500">This is custodial — Robinhood holds the keys, similar to how it holds your stocks. Simple, but you don't have a private key or seed phrase to manage, and you can't directly interact with onchain apps.</p>
              </div>
              <div className="rounded-xl p-4" style={{ backgroundColor: 'rgba(34,197,94,0.04)', border: '1px solid rgba(34,197,94,0.15)' }}>
                <div className="text-sm font-medium text-gray-200 mb-1">The Robinhood Wallet app</div>
                <p className="text-xs text-gray-500">A separate, standalone app. This is self-custody — you hold the seed phrase, you control the keys, and Robinhood can't freeze or restore your funds. It's built for people who want to move beyond simple buying/holding and actually interact with onchain apps, dApps, and DeFi.</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-medium text-gray-200 mb-3">Robinhood Wallet: The Basics</h2>
            <p className="mb-3">
              Robinhood Wallet is a standalone, self-custody app — separate from the main brokerage app, though it ties into the same Robinhood account for a smoother experience if you're already a Robinhood customer.
            </p>
            <div className="flex flex-col gap-3">
              <div className="rounded-xl p-4" style={{ backgroundColor: 'rgba(34,197,94,0.04)', border: '1px solid rgba(34,197,94,0.15)' }}>
                <div className="text-sm font-medium text-gray-200 mb-1">Multi-chain support</div>
                <p className="text-xs text-gray-500">Covers Ethereum, Bitcoin, Solana, Dogecoin, Arbitrum, Polygon, Optimism, Base, and Robinhood Chain — a genuinely broad spread across both major L1s and several L2s in one app.</p>
              </div>
              <div className="rounded-xl p-4" style={{ backgroundColor: 'rgba(34,197,94,0.04)', border: '1px solid rgba(34,197,94,0.15)' }}>
                <div className="text-sm font-medium text-gray-200 mb-1">Built-in Web3 browser</div>
                <p className="text-xs text-gray-500">Lets you connect directly to dApps from inside the wallet app itself, rather than needing a separate browser extension.</p>
              </div>
              <div className="rounded-xl p-4" style={{ backgroundColor: 'rgba(34,197,94,0.04)', border: '1px solid rgba(34,197,94,0.15)' }}>
                <div className="text-sm font-medium text-gray-200 mb-1">Familiar UX if you're already a Robinhood user</div>
                <p className="text-xs text-gray-500">If you already trade stocks or crypto on Robinhood, the wallet app's design will feel immediately familiar — one of its main selling points is lowering the learning curve into self-custody.</p>
              </div>
            </div>
            <p className="mt-3 text-xs text-gray-600">
              Worth remembering: crypto held in the self-custody wallet is not FDIC insured or SIPC protected — the same is true of virtually every self-custody wallet, but it's an easy thing to assume incorrectly given the Robinhood brand.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-medium text-gray-200 mb-3">Rabby: The Basics</h2>
            <p className="mb-3">
              Rabby is a different kind of wallet — EVM-only (no native Bitcoin or Solana support), but built by a team (OPCODE LABS, the group behind DeBank) whose whole focus is power-user DeFi safety and portfolio tools.
            </p>
            <div className="flex flex-col gap-3">
              <div className="rounded-xl p-4" style={{ backgroundColor: 'rgba(34,197,94,0.04)', border: '1px solid rgba(34,197,94,0.15)' }}>
                <div className="text-sm font-medium text-gray-200 mb-1">Transaction simulation before you sign</div>
                <p className="text-xs text-gray-500">Rabby's standout feature: before you approve a transaction, it shows you a preview of what will actually happen — which tokens move, to where, and what permissions you're granting. This catches a meaningful share of scams before they happen, rather than after.</p>
              </div>
              <div className="rounded-xl p-4" style={{ backgroundColor: 'rgba(34,197,94,0.04)', border: '1px solid rgba(34,197,94,0.15)' }}>
                <div className="text-sm font-medium text-gray-200 mb-1">90+ EVM networks supported</div>
                <p className="text-xs text-gray-500">Rabby often auto-detects a new EVM chain the moment you connect to a dApp running on it, which is exactly what happened with Robinhood Chain — Rabby added support just two days after mainnet launched.</p>
              </div>
              <div className="rounded-xl p-4" style={{ backgroundColor: 'rgba(34,197,94,0.04)', border: '1px solid rgba(34,197,94,0.15)' }}>
                <div className="text-sm font-medium text-gray-200 mb-1">Built-in swap aggregation and approval management</div>
                <p className="text-xs text-gray-500">Rabby compares swap routes across DEXs directly in the wallet (0.25% standard swap fee) and gives you a dashboard of every approval you've ever granted, so you can revoke old ones in a couple of taps.</p>
              </div>
              <div className="rounded-xl p-4" style={{ backgroundColor: 'rgba(34,197,94,0.04)', border: '1px solid rgba(34,197,94,0.15)' }}>
                <div className="text-sm font-medium text-gray-200 mb-1">Hardware wallet support</div>
                <p className="text-xs text-gray-500">Connects to Ledger and other hardware wallets, letting you get Rabby's transaction previews while keeping your actual keys on an offline device — a strong combination for anyone holding meaningful value.</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-medium text-gray-200 mb-3">Which One Should You Actually Use?</h2>
            <div className="flex flex-col gap-3">
              <div className="rounded-xl p-4" style={{ backgroundColor: 'rgba(34,197,94,0.04)', border: '1px solid rgba(34,197,94,0.15)' }}>
                <div className="text-sm font-medium text-gray-200 mb-1">Choose Robinhood Wallet if...</div>
                <p className="text-xs text-gray-500">you're already a Robinhood user, you want one app that spans multiple chains including non-EVM ones like Bitcoin and Solana, and you value a simpler, more guided experience over deep DeFi tooling.</p>
              </div>
              <div className="rounded-xl p-4" style={{ backgroundColor: 'rgba(34,197,94,0.04)', border: '1px solid rgba(34,197,94,0.15)' }}>
                <div className="text-sm font-medium text-gray-200 mb-1">Choose Rabby if...</div>
                <p className="text-xs text-gray-500">you're doing more active DeFi activity — swapping, using multiple dApps, interacting with new or unfamiliar contracts — and want the transaction-preview safety net plus approval management. It's a favorite among more experienced onchain users specifically because of those protections.</p>
              </div>
              <div className="rounded-xl p-4" style={{ backgroundColor: 'rgba(34,197,94,0.04)', border: '1px solid rgba(34,197,94,0.15)' }}>
                <div className="text-sm font-medium text-gray-200 mb-1">Or: use both</div>
                <p className="text-xs text-gray-500">Nothing stops you from running both — Robinhood Wallet for simplicity and multi-chain coverage, Rabby specifically when you're doing something you want previewed and double-checked first. Many onchain users keep more than one wallet for exactly this reason.</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-medium text-gray-200 mb-3">Setting Up Robinhood Chain in Either Wallet</h2>
            <p className="mb-3">
              Since Robinhood Chain is EVM-compatible, both wallets can connect to it. In practice:
            </p>
            <div className="flex flex-col gap-2">
              <p>• <strong className="text-gray-300">Robinhood Wallet</strong> — Robinhood Chain is supported natively; no manual setup needed.</p>
              <p>• <strong className="text-gray-300">Rabby</strong> — often auto-detects Robinhood Chain the first time you connect to a dApp running on it. If it doesn't, you can add it manually via Settings → Networks → Add Network using Robinhood Chain's network details, available in <a href="https://docs.robinhood.com/chain/" target="_blank" rel="noopener noreferrer" style={{ color: '#22C55E' }}>Robinhood's official chain documentation</a>.</p>
            </div>
            <p className="mt-3">
              A quick safety note either way: your seed phrase produces the same wallet address across MetaMask, Rabby, Trust Wallet, and most other EVM wallets. That portability is convenient, but it also means the phrase itself is what needs protecting — not any particular app.
            </p>
          </div>

          <div className="rounded-xl p-4 mt-4" style={{ backgroundColor: 'rgba(34,197,94,0.04)', border: '1px solid rgba(34,197,94,0.15)' }}>
            <p className="text-xs text-gray-600 italic">
              Disclaimer: This guide is for educational purposes only and does not constitute financial, legal, or security advice. RhoodChain is an independent community site and is not affiliated with, endorsed by, or sponsored by Robinhood Markets, Inc., OPCODE LABS PTE. LTD. (Rabby), or any of their subsidiaries. Always verify wallet downloads through official sources.
            </p>
          </div>

        </div>
      </article>

      <Footer />
    </main>
  )
}
