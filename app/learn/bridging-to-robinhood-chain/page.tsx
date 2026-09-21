import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

export default function BridgingGuidePage() {
  return (
    <main className="bg-[#08100c] min-h-screen text-gray-100">
      <Navbar />

      <article className="max-w-3xl mx-auto px-6 md:px-8 py-12">
        <div className="mb-8">
          <div className="inline-block text-xs px-3 py-1 rounded-full mb-4 border" style={{ backgroundColor: 'rgba(34,197,94,0.1)', borderColor: 'rgba(34,197,94,0.3)', color: '#22C55E' }}>
            Learn · Getting Started
          </div>
          <h1 className="text-3xl md:text-4xl font-medium mb-3">
            How to Bridge Funds to <span style={{ color: '#22C55E' }}>Robinhood Chain</span>
          </h1>
          <div className="flex items-center gap-3 text-xs text-gray-600">
            <span>By RhoodChain</span>
            <span>•</span>
            <span>September 20, 2026</span>
            <span>•</span>
            <span>8 min read</span>
          </div>
        </div>

        <div className="flex flex-col gap-8 text-sm text-gray-400 leading-relaxed">

          <div className="rounded-xl p-5" style={{ backgroundColor: 'rgba(34,197,94,0.04)', border: '1px solid rgba(34,197,94,0.15)' }}>
            <p className="text-sm text-gray-300">
              New to wallets entirely? Read <a href="/learn/wallet-safety-101" style={{ color: '#22C55E' }}>Wallet Safety 101</a> first. This guide assumes you already have a wallet set up.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-medium text-gray-200 mb-3">Why You'd Need to Bridge at All</h2>
            <p className="mb-3">
              If your ETH, USDC, or other assets sit on Ethereum, Base, Arbitrum, Solana, or another chain, they don't automatically exist on Robinhood Chain too. Blockchains are separate ledgers — moving value between them requires a <strong className="text-gray-200">bridge</strong>: a service that locks or burns your asset on the source chain and mints or releases an equivalent on the destination chain.
            </p>
            <p>
              Robinhood Chain is Chain ID <strong className="text-gray-200">4663</strong>, an Ethereum Layer 2 built on Arbitrum's technology. Its native gas token is <strong className="text-gray-200">ETH</strong> — not USDG, not a Robinhood-branded token. Every transaction, including moving USDG around, costs a small amount of ETH. That single fact causes more first-time confusion than anything else on this page, so keep it in mind throughout.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-medium text-gray-200 mb-3">The Two Assets Most People Actually Want</h2>
            <div className="flex flex-col gap-3">
              <div className="rounded-xl p-4" style={{ backgroundColor: 'rgba(34,197,94,0.04)', border: '1px solid rgba(34,197,94,0.15)' }}>
                <div className="text-sm font-medium text-gray-200 mb-1">ETH — for gas</div>
                <p className="text-xs text-gray-500">You need at least a small amount of native ETH on Robinhood Chain to pay for any transaction — sending, swapping, approving, anything. No ETH means a wallet full of tokens you can't move.</p>
              </div>
              <div className="rounded-xl p-4" style={{ backgroundColor: 'rgba(34,197,94,0.04)', border: '1px solid rgba(34,197,94,0.15)' }}>
                <div className="text-sm font-medium text-gray-200 mb-1">USDG — for spending, saving, and Robinhood Earn</div>
                <p className="text-xs text-gray-500">USDG launched natively on Robinhood Chain on July 1, 2026 — the first stablecoin issued directly on the network, and the default asset for Robinhood Earn's ~7% APY lending product. Robinhood is part of the Global Dollar Network (GDN), the Paxos-led consortium behind USDG, so this is the "home" stablecoin of the chain in a way USDC or USDT aren't.</p>
              </div>
            </div>
            <p className="mt-3">
              <strong className="text-gray-200">The practical takeaway:</strong> if you're bridging USDG (or any token) to a fresh wallet, bring a little ETH along in the same transaction batch, or bridge ETH first. Arriving with only USDG and zero ETH is the single most common beginner mistake.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-medium text-gray-200 mb-3">Option 1: The Canonical Arbitrum Bridge (Slowest, Most Trustless)</h2>
            <p className="mb-3">
              Since Robinhood Chain is built on Arbitrum's stack, it uses Arbitrum's own canonical bridge for deposits from Ethereum. This is the most trust-minimized route — no third-party operator, just the underlying protocol.
            </p>
            <div className="flex flex-col gap-2">
              <p>• <strong className="text-gray-300">Deposits</strong> (Ethereum → Robinhood Chain): confirm in roughly 10 minutes.</p>
              <p>• <strong className="text-gray-300">Withdrawals</strong> (Robinhood Chain → Ethereum): sit through Arbitrum's standard <strong className="text-gray-200">7-day challenge period</strong> before you can claim them. This is normal for Arbitrum-style rollups, not a bug or a Robinhood-specific delay — but it surprises people who expect symmetric speed both ways.</p>
            </div>
            <p className="mt-3">
              You can access this either through the <a href="https://bridge.arbitrum.io" target="_blank" rel="noopener noreferrer" style={{ color: '#22C55E' }}>Arbitrum Bridge/Portal</a> directly (select Robinhood Chain from the network dropdown) or through Uniswap's own interface, which supports the same underlying route.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-medium text-gray-200 mb-3">Option 2: Third-Party Intent Bridges (Faster, More Convenient)</h2>
            <p className="mb-3">
              For most people, especially moving smaller amounts, a third-party "intent-based" bridge is faster and simpler than the canonical route. These work differently: instead of a slow lock-and-mint process, you place an order, and independent solvers race to fulfill it on the destination chain — usually settling in seconds to a couple of minutes.
            </p>
            <div className="rounded-xl p-5 mb-3" style={{ backgroundColor: 'rgba(34,197,94,0.04)', border: '1px solid rgba(34,197,94,0.15)' }}>
              <div className="text-sm font-medium text-gray-200 mb-2">deBridge</div>
              <p className="text-xs text-gray-500 mb-2">
                deBridge runs on its DLN (deBridge Liquidity Network) — an intent-based, <strong className="text-gray-300">zero-TVL</strong> model, meaning it doesn't hold large static pools of funds that become honeypot targets for exploits. Instead, off-chain solvers compete to fill your order, which tends to make it fast and competitively priced.
              </p>
              <p className="text-xs text-gray-500">
                Worth knowing specifically: deBridge supports a <strong className="text-gray-300">direct Solana → Robinhood Chain route</strong>. If your funds are on Solana rather than an EVM chain, this is one of the few bridges that gets you there without an intermediate hop through Ethereum or another EVM chain first.
              </p>
            </div>
            <p className="mb-3">
              Other established options that support Robinhood Chain include <strong className="text-gray-300">Across</strong> (fast, intent-based relayer pools — strong for ETH/USDC/USDG), <strong className="text-gray-300">Relay</strong>, and <strong className="text-gray-300">Stargate</strong> (built on LayerZero's messaging layer, which Robinhood Chain uses as an official bridge partner for assets like ETH and USDG).
            </p>
          </div>

          <div>
            <h2 className="text-lg font-medium text-gray-200 mb-3">Step by Step: Bridging ETH + USDG From Ethereum</h2>
            <div className="flex flex-col gap-3">
              <div className="rounded-xl p-4" style={{ backgroundColor: 'rgba(34,197,94,0.04)', border: '1px solid rgba(34,197,94,0.15)' }}>
                <div className="text-sm font-medium text-gray-200 mb-1">1. Open a bridge that supports Robinhood Chain</div>
                <p className="text-xs text-gray-500">deBridge, Across, or the Arbitrum Portal are all reasonable starting points. Connect your wallet.</p>
              </div>
              <div className="rounded-xl p-4" style={{ backgroundColor: 'rgba(34,197,94,0.04)', border: '1px solid rgba(34,197,94,0.15)' }}>
                <div className="text-sm font-medium text-gray-200 mb-1">2. Select Ethereum (or your source chain) and Robinhood Chain as the destination</div>
                <p className="text-xs text-gray-500">Double-check "Robinhood Chain" or Chain ID 4663 is actually selected before confirming — a look-alike or wrong-chain destination can make funds very hard to recover.</p>
              </div>
              <div className="rounded-xl p-4" style={{ backgroundColor: 'rgba(34,197,94,0.04)', border: '1px solid rgba(34,197,94,0.15)' }}>
                <div className="text-sm font-medium text-gray-200 mb-1">3. Bridge a small amount of ETH first (or alongside your main transfer)</div>
                <p className="text-xs text-gray-500">Even $10–20 worth is plenty to cover gas for a while. This step is what most beginners skip and immediately regret.</p>
              </div>
              <div className="rounded-xl p-4" style={{ backgroundColor: 'rgba(34,197,94,0.04)', border: '1px solid rgba(34,197,94,0.15)' }}>
                <div className="text-sm font-medium text-gray-200 mb-1">4. Bridge your USDC, USDT, or other stablecoin — or swap into USDG once you arrive</div>
                <p className="text-xs text-gray-500">Some bridges deliver USDG directly; others deliver a different stablecoin that you then swap for USDG on Uniswap once you've landed on Robinhood Chain.</p>
              </div>
              <div className="rounded-xl p-4" style={{ backgroundColor: 'rgba(34,197,94,0.04)', border: '1px solid rgba(34,197,94,0.15)' }}>
                <div className="text-sm font-medium text-gray-200 mb-1">5. Confirm receipt on the explorer</div>
                <p className="text-xs text-gray-500">Check <a href="https://robinhoodchain.blockscout.com" target="_blank" rel="noopener noreferrer" style={{ color: '#22C55E' }}>robinhoodchain.blockscout.com</a> with your wallet address to confirm funds actually landed before you assume something went wrong.</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-medium text-gray-200 mb-3">Adding Robinhood Chain to Your Wallet Manually</h2>
            <p>
              Some wallets (Rabby, in particular) auto-detect Robinhood Chain the moment you connect to a dApp running on it. If yours doesn't, add it manually via <strong className="text-gray-200">Settings → Networks → Add Network</strong> using Chain ID <strong className="text-gray-200">4663</strong> and the RPC details from <a href="https://docs.robinhood.com/chain/" target="_blank" rel="noopener noreferrer" style={{ color: '#22C55E' }}>Robinhood's official chain documentation</a> — never from a random link or DM.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-medium text-gray-200 mb-3">Common Mistakes</h2>
            <div className="flex flex-col gap-2">
              <p>• <strong className="text-gray-300">Bridging a token with no ETH for gas</strong> — covered above, but it's the #1 issue by a wide margin.</p>
              <p>• <strong className="text-gray-300">Selecting the wrong destination chain</strong> — always verify Chain ID 4663 specifically, not a similarly-named or similarly-numbered network.</p>
              <p>• <strong className="text-gray-300">Expecting withdrawals to be as fast as deposits</strong> — the canonical bridge's 7-day exit window only applies going back to Ethereum through the trustless route; third-party bridges typically don't have this delay in either direction, at the cost of trusting their solver network instead of pure protocol logic.</p>
              <p>• <strong className="text-gray-300">Bridging directly from Solana without checking the route</strong> — most bridges don't support a direct Solana-to-Robinhood-Chain path yet; deBridge is one of the few that does. Others may route through an intermediate EVM chain first, which adds time and an extra fee.</p>
            </div>
          </div>

          <div className="rounded-xl p-4 mt-4" style={{ backgroundColor: 'rgba(34,197,94,0.04)', border: '1px solid rgba(34,197,94,0.15)' }}>
            <p className="text-xs text-gray-600 italic">
              Disclaimer: This guide is for educational purposes only and does not constitute financial, legal, or security advice. Bridge protocols are third-party services with their own risks; always verify you're using an official interface before connecting a wallet or approving a transaction. RhoodChain is an independent community site and is not affiliated with, endorsed by, or sponsored by Robinhood Markets, Inc., deBridge, Across, LayerZero, Arbitrum, or any of their subsidiaries.
            </p>
          </div>

        </div>
      </article>

      <Footer />
    </main>
  )
}
