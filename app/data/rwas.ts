// Tokenized real-world assets on Robinhood Chain — the core thesis of the network.
// Sources: docs.robinhood.com/chain/stock-tokens, RWA.xyz (Sept 17, 2026 snapshot),
// Robinhood EU support docs, techflowpost.com (Sept 2026).
// NOTE: Stock Tokens are tokenized DEBT SECURITIES, not shares — see disclaimer below.

export const tokenizedStocks: any[] = []

export const rwas = [
  {
    id: 'stock-tokens',
    name: 'Stock Tokens',
    issuer: 'Robinhood Assets (Jersey) Limited',
    category: 'Tokenized Equities',
    icon: '📈',
    logo: '',
    description: 'Robinhood\'s flagship RWA: ERC-20 tokens issued by Robinhood Assets (Jersey) Limited that track the price of US equities and ETFs. They are tokenized debt securities that provide economic exposure only — holders get no shareholder rights, no voting rights, and no legal claim on the underlying shares. Live for verified EU/EEA users (US explicitly excluded pending SEC approval); catalog expanded from ~200 to 2,000+ tokens with a €1 minimum entry. Dividends are credited as an offchain USD-equivalent payment, not an onchain distribution. As of Sept 17, 2026, total distributed stock token value across the network reached $2.82B (+13.1% in 30 days) across 3.63M holder addresses (+125% month-over-month).',
    status: 'Live (EU/EEA only)',
    url: 'https://docs.robinhood.com/chain/stock-tokens/',
  },
  {
    id: 'tokenized-tax-liens',
    name: 'Tokenized Tax Liens',
    issuer: 'Virtuals Protocol ecosystem',
    category: 'AI Agents & RWA',
    icon: '🧾',
    logo: '',
    description: 'A genuinely novel RWA category brought onchain by AI-agent builders in the Virtuals Protocol ecosystem on Robinhood Chain — tax lien certificates, traditionally a niche, illiquid asset class, represented as tokenized products. Part of a broader wave of agent-built RWA, collectibles, and financial products spanning 4,500+ deployed agents.',
    status: 'Live (agent-built)',
    url: 'https://virtuals.io',
  },
  {
    id: 'agentic-trading',
    name: 'Agentic Trading',
    issuer: 'Robinhood',
    category: 'AI Infrastructure',
    icon: '🤖',
    logo: '',
    description: 'AI-powered autonomous trading functionality allowing users to authorize AI agents to trade, swap, lend, and transact with tokenized real-world assets onchain. Launched for US equities and options in June 2026, with Agentic Accounts for digital assets to follow.',
    status: 'Live (US equities/options)',
    url: 'https://robinhood.com',
  },
]
