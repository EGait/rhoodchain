// Most-traded Stock Tokens on Robinhood Chain by lifetime DEX volume.
// Source: SQD.dev onchain analysis (robinhood-mainnet, genesis through Aug 30, 2026),
// CoinDesk (Jul 25, 2026), CryptoBriefing (Sept 2026). Figures are point-in-time
// snapshots — trading volume on a 2-month-old chain moves fast.

export const topStockTokens = [
  {
    ticker: 'NVDA',
    underlying: 'NVIDIA Corp',
    name: 'NVDA Stock Token',
    note: 'The single most-traded asset on the chain, including versus every launchpad token — nearly 3M swaps.',
    volume: '$706M lifetime volume',
    rank: '#1 by volume',
  },
  {
    ticker: 'SPCX',
    underlying: 'SpaceX',
    name: 'SpaceX Stock Token',
    note: 'A private company, not a public stock — the only major tokenized name on the chain with no public-market equivalent. More than 4x Apple\'s volume.',
    volume: '$303M lifetime volume',
    rank: '#2 by volume',
  },
  {
    ticker: 'GME',
    underlying: 'GameStop Corp',
    name: 'GME Stock Token',
    note: 'One of the earliest tokenized names to clear meaningful daily volume after mainnet, alongside NVDA and SPCX.',
    volume: 'Top 4 by volume',
  },
  {
    ticker: 'AAPL',
    underlying: 'Apple Inc.',
    name: 'AAPL Stock Token',
    note: 'Rounds out the top four names that together account for roughly 70% of all stock-token trading on the network.',
    volume: 'Top 4 by volume',
  },
]
