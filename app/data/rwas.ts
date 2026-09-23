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
    description: 'Robinhood\'s flagship RWA: ERC-20 tokens issued by Robinhood Assets (Jersey) Limited ("RHJ") that track the price of US equities and ETFs. They are tokenized debt securities that provide economic exposure only — holders get no shareholder rights, no voting rights, and no legal claim on the underlying shares. Not registered under US securities law: not available in the US or to US persons, with additional named restrictions in Canada, the UK, and Switzerland (a full jurisdiction list is published by RHJ). Available to eligible EU/EEA users. Catalog expanded from ~200 to 2,000+ tokens with a €1 minimum entry. Dividends are credited as an offchain USD-equivalent payment, not an onchain distribution. As of Sept 17, 2026, total distributed stock token value across the network reached $2.82B (+13.1% in 30 days) across 3.63M holder addresses (+125% month-over-month).',
    status: 'Live (EU/EEA); US, Canada, UK, Switzerland restricted',
    url: 'https://docs.robinhood.com/chain/stock-tokens/',
  },
  {
    id: 'agentic-trading',
    name: 'Agentic Trading',
    issuer: 'Robinhood',
    category: 'AI Infrastructure',
    icon: '🤖',
    logo: '',
    description: 'AI-powered autonomous trading functionality allowing users to authorize AI agents to trade, swap, lend, and transact with tokenized real-world assets onchain. Launched for US equities and options in May 2026 and already has nearly 100,000 customer accounts holding over $100 million in assets, per Robinhood\'s Q2 2026 earnings. Agentic Accounts for digital assets are expected to follow.',
    status: 'Live (US equities/options)',
    url: 'https://robinhood.com',
  },
]
