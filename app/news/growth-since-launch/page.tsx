import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

export default function GrowthSinceLaunchPage() {
  return (
    <main className="bg-[#08100c] min-h-screen text-gray-100">
      <Navbar />

      <article className="max-w-3xl mx-auto px-6 md:px-8 py-12">
        <div className="mb-8">
          <div className="inline-block text-xs px-3 py-1 rounded-full mb-4 border" style={{ backgroundColor: 'rgba(34,197,94,0.1)', borderColor: 'rgba(34,197,94,0.3)', color: '#22C55E' }}>
            Explainer
          </div>
          <h1 className="text-3xl md:text-4xl font-medium mb-3">
            Robinhood Chain, <span style={{ color: '#22C55E' }}>Two Months In</span>: The Numbers So Far
          </h1>
          <div className="flex items-center gap-3 text-xs text-gray-600">
            <span>By RhoodChain</span>
            <span>•</span>
            <span>September 20, 2026</span>
            <span>•</span>
            <span>9 min read</span>
          </div>
        </div>

        <div className="flex flex-col gap-8 text-sm text-gray-400 leading-relaxed">

          <div>
            <h2 className="text-lg font-medium text-gray-200 mb-3">If You're New Here: The 30-Second Version</h2>
            <p className="mb-3">
              Robinhood Chain is a blockchain built by Robinhood — the brokerage app millions of people already use to trade stocks. It's an Ethereum Layer 2, built on Arbitrum's Orbit stack, and it went live to the public on <strong className="text-gray-200">July 1, 2026</strong> at a keynote called "The World Is Flat" in London.
            </p>
            <p className="mb-3">
              The pitch: instead of stocks trading only 9:30am–4pm on weekdays through a traditional brokerage pipeline, tokenize them so they can trade 24/7, settle instantly, and plug into the same kind of onchain finance tools (lending, swapping, collateral) that crypto already has. Robinhood's own Stock Tokens — ERC-20s that track the price of real equities — are the flagship product.
            </p>
            <p>
              One important caveat up front: these are currently available only to verified users in the <strong className="text-gray-200">EU and EEA</strong>. The US is explicitly excluded, pending SEC approval of a tokenized-securities framework. For the full breakdown of how the chain works, see our <a href="/news/what-is-robinhood-chain" style={{ color: '#22C55E' }}>explainer piece</a>.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-medium text-gray-200 mb-3">The Timeline So Far</h2>
            <div className="flex flex-col gap-3">
              <div className="flex gap-4 items-start">
                <div className="text-xs font-medium whitespace-nowrap" style={{ color: '#22C55E' }}>Feb 10, 2026</div>
                <p className="text-xs text-gray-500">Public testnet launches — 4 million transactions in the first week alone.</p>
              </div>
              <div className="flex gap-4 items-start">
                <div className="text-xs font-medium whitespace-nowrap" style={{ color: '#22C55E' }}>Jul 1, 2026</div>
                <p className="text-xs text-gray-500">Public mainnet goes live — 95 tokenized equities priced by Chainlink oracles, a Uniswap deployment for liquidity, Morpho-powered lending.</p>
              </div>
              <div className="flex gap-4 items-start">
                <div className="text-xs font-medium whitespace-nowrap" style={{ color: '#22C55E' }}>Jul 14, 2026</div>
                <p className="text-xs text-gray-500">Two weeks in: $294M stablecoin market cap, $140M TVL, and more than $3B in seven-day DEX volume — momentum reporters compared to Ethereum's own launch.</p>
              </div>
              <div className="flex gap-4 items-start">
                <div className="text-xs font-medium whitespace-nowrap" style={{ color: '#22C55E' }}>Jul 22, 2026</div>
                <p className="text-xs text-gray-500">Three weeks in: TVL climbs to $450M, with 95M+ cumulative transactions. Robinhood Crypto GM Johann Kerbrat says the team wasn't sure what kind of reception to expect.</p>
              </div>
              <div className="flex gap-4 items-start">
                <div className="text-xs font-medium whitespace-nowrap" style={{ color: '#22C55E' }}>Sep 2026</div>
                <p className="text-xs text-gray-500">TVL approaches $929M, single-day DEX volume hits $1.88B, and total distributed value of Stock Tokens reaches $2.82B — up 13% in 30 days, with 3.63M holder addresses (up 125% month-over-month).</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-medium text-gray-200 mb-3">What's Actually Driving the Volume</h2>
            <p className="mb-3">
              Here's the twist worth knowing before you look at any of these numbers: Robinhood built this chain for tokenized stocks, and the early activity has mostly come from somewhere else entirely — memecoins. Launchpads like Pons let anyone create a tradable token for about $1, and a wave of Robinhood-themed community tokens (starting with CASHCAT) took off within days of mainnet going live.
            </p>
            <p>
              The strangest twist: some of these memecoins now use tokenized stocks like NVDA as their trading pairs instead of a stablecoin — meaning buying a dog coin actually generates real trading volume in tokenized Nvidia. We go deep on this in <a href="/news/stock-paired-memecoins" style={{ color: '#22C55E' }}>a separate piece</a>, but the short version is: the RWA infrastructure works, it's just memecoin speculation that's currently paying the network's bills, not the institutional use case Robinhood pitched at launch.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-medium text-gray-200 mb-3">Zooming Out: How Robinhood the Company Is Doing</h2>
            <p className="mb-3">
              Robinhood Chain isn't a side project from a struggling company — it's a bet placed by a brokerage in the middle of one of its strongest stretches ever. Robinhood's Q2 2026 earnings, reported July 29 (right after the chain's mainnet launch), showed broad growth across nearly every part of the business:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-4">
              <div className="rounded-xl p-3 text-center" style={{ backgroundColor: 'rgba(34,197,94,0.04)', border: '1px solid rgba(34,197,94,0.15)' }}>
                <div className="text-lg font-medium" style={{ color: '#22C55E' }}>$1.31B</div>
                <div className="text-xs text-gray-600">Total revenue, +32% YoY</div>
              </div>
              <div className="rounded-xl p-3 text-center" style={{ backgroundColor: 'rgba(34,197,94,0.04)', border: '1px solid rgba(34,197,94,0.15)' }}>
                <div className="text-lg font-medium" style={{ color: '#22C55E' }}>$573M</div>
                <div className="text-xs text-gray-600">Net income, +48% YoY</div>
              </div>
              <div className="rounded-xl p-3 text-center" style={{ backgroundColor: 'rgba(34,197,94,0.04)', border: '1px solid rgba(34,197,94,0.15)' }}>
                <div className="text-lg font-medium" style={{ color: '#22C55E' }}>$21.7B</div>
                <div className="text-xs text-gray-600">Net deposits (quarter)</div>
              </div>
              <div className="rounded-xl p-3 text-center" style={{ backgroundColor: 'rgba(34,197,94,0.04)', border: '1px solid rgba(34,197,94,0.15)' }}>
                <div className="text-lg font-medium" style={{ color: '#22C55E' }}>4.8M</div>
                <div className="text-xs text-gray-600">Gold subscribers, +39% YoY</div>
              </div>
              <div className="rounded-xl p-3 text-center" style={{ backgroundColor: 'rgba(34,197,94,0.04)', border: '1px solid rgba(34,197,94,0.15)' }}>
                <div className="text-lg font-medium" style={{ color: '#22C55E' }}>$956B</div>
                <div className="text-xs text-gray-600">Equity volume, +85% YoY</div>
              </div>
              <div className="rounded-xl p-3 text-center" style={{ backgroundColor: 'rgba(34,197,94,0.04)', border: '1px solid rgba(34,197,94,0.15)' }}>
                <div className="text-lg font-medium" style={{ color: '#22C55E' }}>$34.5B</div>
                <div className="text-xs text-gray-600">Retirement AUC, +82% YoY</div>
              </div>
            </div>
            <p className="mb-3">
              A few other things worth knowing about where Robinhood is putting its energy right now: <strong className="text-gray-200">international expansion</strong> crossed 1 million funded accounts outside the US following the acquisition of Canadian firm WonderFi and new licensing in Singapore. The <strong className="text-gray-200">Gold Card</strong> (their credit card) passed 1 million cardholders with $17B in annualized purchase volume. <strong className="text-gray-200">Agentic Trading</strong> — letting AI agents trade equities and options on a customer's behalf — launched in May and already has nearly 100,000 accounts with over $100M in assets. And <strong className="text-gray-200">Trump Accounts</strong>, a kids' investment account product, hit 7 million sign-ups with roughly $1.5B contributed.
            </p>
            <p>
              The context matters for reading the chain's numbers correctly: this is a company with real momentum across its core brokerage business, using that position to make a genuine infrastructure bet — not a company pivoting to crypto because its main business is struggling.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-medium text-gray-200 mb-3">A Note on Crypto Specifically</h2>
            <p>
              It's worth flagging one nuance: Robinhood's dedicated crypto trading revenue actually declined earlier in 2026 (down 47% year-over-year in Q1, with trading volume down 48%) even as the rest of the company grew — a reminder that "Robinhood Chain" and "Robinhood's crypto trading business" are related but distinct things. The chain is infrastructure Robinhood built and operates; crypto trading is a product line whose volume moves with the broader crypto market. The Q2 results above reflect the whole company, not crypto specifically.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-medium text-gray-200 mb-3">What to Watch Next</h2>
            <div className="flex flex-col gap-2">
              <p>• <strong className="text-gray-300">Whether RWA usage catches up to memecoin usage</strong> — right now the launchpad economy dwarfs the tokenized-stock use case in day-to-day activity.</p>
              <p>• <strong className="text-gray-300">Whether the EU/EEA restriction loosens</strong> — Robinhood's CEO has publicly lobbied for a US tokenized-securities framework and submitted a formal proposal to the SEC.</p>
              <p>• <strong className="text-gray-300">Whether stablecoin and TVL growth holds</strong> — chains that launch with a memecoin wave often see volume drop sharply once the initial speculation cools.</p>
              <p>• <strong className="text-gray-300">New RWA categories</strong> — Robinhood has signaled plans to eventually tokenize private equity, real estate, and other illiquid assets beyond public stocks.</p>
            </div>
          </div>

          <div className="rounded-xl p-4 mt-4" style={{ backgroundColor: 'rgba(34,197,94,0.04)', border: '1px solid rgba(34,197,94,0.15)' }}>
            <p className="text-xs text-gray-600 italic">
              Disclaimer: This article is for informational purposes only and does not constitute financial advice. Figures are point-in-time snapshots pulled from public company disclosures and third-party trackers and can change quickly. RhoodChain is an independent community site and is not affiliated with, endorsed by, or sponsored by Robinhood Markets, Inc. or any of its subsidiaries.
            </p>
          </div>

        </div>
      </article>

      <Footer />
    </main>
  )
}
