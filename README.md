# RhoodChain

**The Robinhood Chain ecosystem hub** — news, project discovery, and DeFi tracking in one place, built for Robinhood's Layer 2 blockchain.

🌐 **Live at [rhoodchain.com](https://rhoodchain.com)**

---

## What It Does

RhoodChain is a one-stop dashboard for anyone active in the Robinhood Chain ecosystem — tracking tokenized stocks, DeFi rails, and Robinhood Earn ahead of and after mainnet.

- **News Feed** — Aggregated Robinhood Chain and DeFi ecosystem news
- **Project Discovery** — Browse projects building on Robinhood Chain (Uniswap, Pleiades, Chainlink, and more)
- **Robinhood Earn / Yield** — Track yield products (currently: ~7% APY on USDG via Morpho)
- **Stablecoins** — Compare stablecoins available on Robinhood Chain
- **RWAs** — Tokenized stocks, Agentic Trading, and other real-world asset products
- **AI Assistant** — A chat assistant grounded in the site's own data

> **Status:** Robinhood Chain mainnet launched July 1, 2026. Data files are seeded
> with real launch-partner information; expand as the ecosystem grows.

---

## Tech Stack

- **Framework**: Next.js (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **AI**: Google Gemini + OpenRouter (optional — site works without keys, just no chat widget)
- **Deployment**: Vercel

---

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Environment variables (optional, for the AI assistant)

Create a `.env.local` in the project root:

```dotenv
GEMINI_API_KEY=your_gemini_key
OPENROUTER_API_KEY=your_openrouter_key
```

---

## Project Structure

```
app/
├── api/
│   ├── chat/       # AI assistant endpoint
│   └── news/       # News aggregation endpoint
├── data/           # Hand-maintained datasets (projects, stablecoins, rwas, lsts/earn, guides)
├── news/           # News aggregation + articles
├── projects/       # Project discovery
├── swap/           # DeFi swap page (Uniswap/Pleiades/Rialto/Lighter)
├── lsts/           # Robinhood Earn / yield comparisons
├── stablecoins/    # Stablecoin comparisons
├── rwas/           # Tokenized real-world assets
└── components/     # Shared UI components
```

---

## Content Status

This project was forked from a similar Solana-focused hub and rebranded for
Robinhood Chain:

- `app/data/*.ts` — seeded with real launch-partner data (Uniswap, Pleiades,
  Chainlink, Alchemy, BitGo, LayerZero, TRM Labs, Morpho/Robinhood Earn)
- One featured research article is live: "What Is Robinhood Chain?"
- The swap page is a placeholder pointing to the real DEXs live on the chain
  (Uniswap, Pleiades, Rialto, Lighter) — no swap widget wired up yet

---

## Roadmap

- Expand `app/data/projects.ts` as more ecosystem projects launch
- Add more research articles (Stock Tokens deep dive, Agentic Trading explainer)
- Wire up a real swap widget once a DEX aggregator integration is chosen
- Set up a dedicated Google Analytics property

---

## License

[MIT](./license)
