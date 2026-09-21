import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

export default function ArcusArticlePage() {
  return (
    <main className="bg-[#08100c] min-h-screen text-gray-100">
      <Navbar />

      <article className="max-w-3xl mx-auto px-6 md:px-8 py-12">
        <div className="mb-8">
          <div className="inline-block text-xs px-3 py-1 rounded-full mb-4 border" style={{ backgroundColor: 'rgba(34,197,94,0.1)', borderColor: 'rgba(34,197,94,0.3)', color: '#22C55E' }}>
            Featured Research
          </div>
          <h1 className="text-3xl md:text-4xl font-medium mb-3">
            Arcus: The dYdX Team's <span style={{ color: '#22C55E' }}>$2 Billion Bet</span> on Robinhood Chain
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

          <div>
            <h2 className="text-lg font-medium text-gray-200 mb-3">Same Day as Mainnet, a New Exchange Was Born</h2>
            <p>
              When Robinhood Chain went live at "The World Is Flat" keynote on July 1, 2026, it wasn't just Robinhood's own products going live alongside it. That same day, the team behind dYdX — one of crypto's most established decentralized perpetuals exchanges — launched an entirely new product built specifically for the chain: <strong className="text-gray-200">Arcus</strong>.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-medium text-gray-200 mb-3">Who's Actually Behind It</h2>
            <p className="mb-3">
              Arcus is built by <strong className="text-gray-200">dYdX Labs</strong> — the company behind the dYdX protocol — in direct partnership with <strong className="text-gray-200">Robinhood Crypto</strong>, which made a strategic, undisclosed investment in the project. It's led by CEO <strong className="text-gray-200">Eddie Zhang</strong> (whose trading startup Pocket Protector was previously acquired by dYdX Labs), with dYdX founder <strong className="text-gray-200">Antonio Juliano</strong> sitting on the board.
            </p>
            <div className="rounded-xl p-4 border-l-4" style={{ backgroundColor: 'rgba(34,197,94,0.04)', borderColor: '#22C55E', borderTop: '1px solid rgba(34,197,94,0.12)', borderRight: '1px solid rgba(34,197,94,0.12)', borderBottom: '1px solid rgba(34,197,94,0.12)' }}>
              <div className="text-sm font-medium text-gray-200 mb-1">Rebrand, or new product? The story got confused fast.</div>
              <p className="text-xs text-gray-500">
                An X post announcing the launch said "dYdX is now Arcus," and several outlets initially reported it as a rebrand of the dYdX exchange. The dYdX Foundation quickly clarified that framing was wrong: the existing dYdX Chain and DYDX token continue operating completely independently, governed by their own token holders and secured by their own validators. Arcus is a new, separate product built by the same team — not a migration, and not a replacement.
              </p>
            </div>
            <p className="mt-3">
              The market reacted before the clarification fully landed: DYDX briefly dropped 12–23% on the initial news, as traders priced in fears that dYdX Labs' attention and resources would shift away from the original protocol. Robinhood's own stock moved the opposite direction, climbing more than 10% the same day.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-medium text-gray-200 mb-3">What Arcus Actually Does</h2>
            <p className="mb-3">
              Arcus is a self-custodial decentralized exchange combining two things that don't normally sit in the same product: tokenized stock trading and crypto-style perpetual futures.
            </p>
            <div className="flex flex-col gap-3">
              <div className="rounded-xl p-4" style={{ backgroundColor: 'rgba(34,197,94,0.04)', border: '1px solid rgba(34,197,94,0.15)' }}>
                <div className="text-sm font-medium text-gray-200 mb-1">Spot trading — live since day one</div>
                <p className="text-xs text-gray-500">24/7, zero-fee trading on 95+ Stock Tokens, covering mega-caps like Nvidia, Apple, Microsoft, Tesla, Meta, Alphabet, and Amazon. The pitch is simple: trade a tokenized Tesla position at 2am on a Sunday, something no traditional brokerage allows.</p>
              </div>
              <div className="rounded-xl p-4" style={{ backgroundColor: 'rgba(34,197,94,0.04)', border: '1px solid rgba(34,197,94,0.15)' }}>
                <div className="text-sm font-medium text-gray-200 mb-1">Perpetual futures — beta, up to 50x leverage</div>
                <p className="text-xs text-gray-500">Covering equities, ETFs, commodities, and crypto (SPY, QQQ, GLD, USO, BTC, ETH, SOL, XRP), rolling out to a waitlist that topped 75,000 signups before general availability.</p>
              </div>
              <div className="rounded-xl p-4" style={{ backgroundColor: 'rgba(34,197,94,0.04)', border: '1px solid rgba(34,197,94,0.15)' }}>
                <div className="text-sm font-medium text-gray-200 mb-1">pTokens — leveraged positions as transferable ERC-20s</div>
                <p className="text-xs text-gray-500">Launched in August: Arcus wraps an open perpetual position into a standard ERC-20 token that can move across lending markets and other onchain protocols. Initial offerings included pBTC and pBTC3x (1x/3x Bitcoin exposure) and pHOOD3x — 3x leveraged exposure to Robinhood's own stock, wrapped as a token you can hold in any wallet.</p>
              </div>
              <div className="rounded-xl p-4" style={{ backgroundColor: 'rgba(34,197,94,0.04)', border: '1px solid rgba(34,197,94,0.15)' }}>
                <div className="text-sm font-medium text-gray-200 mb-1">Multi-asset collateral</div>
                <p className="text-xs text-gray-500">Selected Stock Tokens — including SPY, QQQ, and "MAG7" basket tokens — can be posted directly as collateral for perpetual positions, rather than requiring a separate stablecoin deposit first.</p>
              </div>
              <div className="rounded-xl p-4" style={{ backgroundColor: 'rgba(34,197,94,0.04)', border: '1px solid rgba(34,197,94,0.15)' }}>
                <div className="text-sm font-medium text-gray-200 mb-1">Pre-IPO access — announced, not yet live</div>
                <p className="text-xs text-gray-500">Arcus has stated plans to eventually offer trading exposure to major private companies before they go public, with names like OpenAI and SpaceX mentioned as examples of the category it's targeting.</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-medium text-gray-200 mb-3">The Numbers</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
              <div className="rounded-xl p-3 text-center" style={{ backgroundColor: 'rgba(34,197,94,0.04)', border: '1px solid rgba(34,197,94,0.15)' }}>
                <div className="text-lg font-medium" style={{ color: '#22C55E' }}>$2B+</div>
                <div className="text-xs text-gray-600">Cumulative volume since launch</div>
              </div>
              <div className="rounded-xl p-3 text-center" style={{ backgroundColor: 'rgba(34,197,94,0.04)', border: '1px solid rgba(34,197,94,0.15)' }}>
                <div className="text-lg font-medium" style={{ color: '#22C55E' }}>$100M+</div>
                <div className="text-xs text-gray-600">Average daily volume</div>
              </div>
              <div className="rounded-xl p-3 text-center" style={{ backgroundColor: 'rgba(34,197,94,0.04)', border: '1px solid rgba(34,197,94,0.15)' }}>
                <div className="text-lg font-medium" style={{ color: '#22C55E' }}>95+</div>
                <div className="text-xs text-gray-600">Stock Tokens tradable</div>
              </div>
              <div className="rounded-xl p-3 text-center" style={{ backgroundColor: 'rgba(34,197,94,0.04)', border: '1px solid rgba(34,197,94,0.15)' }}>
                <div className="text-lg font-medium" style={{ color: '#22C55E' }}>75K+</div>
                <div className="text-xs text-gray-600">Perps beta waitlist</div>
              </div>
            </div>
            <p>
              For context: in just its first week live, Arcus reportedly processed close to 285,000 transactions on roughly $33M in volume and $15M in TVL. The growth since then — to $2B+ cumulative and $100M+ in average daily volume — represents one of the fastest rises to real trading volume of any new DEX product this year.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-medium text-gray-200 mb-3">Who Can Actually Use It</h2>
            <p>
              Arcus is available in 120+ countries — but like most of Robinhood Chain's tokenized-asset products, the <strong className="text-gray-200">US, UK, and Canada are explicitly excluded</strong>. That's consistent with the regulatory posture across the rest of Robinhood's tokenized-stock offerings: the underlying legal and compliance framework for retail tokenized securities in those three markets isn't settled yet.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-medium text-gray-200 mb-3">What About an ARCUS Token?</h2>
            <p>
              A governance token is planned but not yet tradable. dYdX has said allocations will be reserved for the existing dYdX community — specifically people who have traded, staked, or validated on the dYdX chain — prioritizing them over new entrants once the token launches. No snapshot date or detailed eligibility criteria has been announced as of this writing.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-medium text-gray-200 mb-3">Why This Matters for Robinhood Chain</h2>
            <p className="mb-3">
              Most of the chain's early headline volume has come from memecoin launchpads like Pons — speculative, low-stakes, and largely disconnected from the "serious finance" pitch Robinhood made at launch. Arcus is different: it's the clearest example yet of an established, credible DeFi team building genuine trading infrastructure specifically for tokenized real-world assets on this chain, backed directly by Robinhood's own crypto arm.
            </p>
            <p>
              Whether Arcus becomes the chain's flagship serious-finance product — or whether it ends up as one more speculative venue among many — is still an open question. But the combination of dYdX's trading infrastructure pedigree, Robinhood's distribution, and genuinely large early volume makes it one of the few Robinhood Chain projects that looks built to last past the initial hype cycle.
            </p>
          </div>

          <div className="rounded-xl p-4 mt-4" style={{ backgroundColor: 'rgba(34,197,94,0.04)', border: '1px solid rgba(34,197,94,0.15)' }}>
            <p className="text-xs text-gray-600 italic">
              Disclaimer: This article is for informational purposes only and does not constitute financial advice. Figures are point-in-time snapshots and can change quickly. RhoodChain is an independent community site and is not affiliated with, endorsed by, or sponsored by Robinhood Markets, Inc., dYdX Labs, Arcus, or any of their subsidiaries.
            </p>
          </div>

        </div>
      </article>

      <Footer />
    </main>
  )
}
