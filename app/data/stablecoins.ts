// Stablecoins on Robinhood Chain.
// Source: KuCoin, Morpho blog, CryptoBriefing, FalconX Robinhood Chain Primer (July 2026).

export const stablecoins = [
  {
    id: 'usdg',
    name: 'USDG',
    issuer: 'Global Dollar Network (Paxos)',
    icon: '💵',
    logo: '',
    peg: 'USD',
    description: 'The primary and native stablecoin on Robinhood Chain, powering Robinhood Earn and everyday settlement. Backed by cash and US Treasuries via Paxos.',
    highlight: '68% of chain stablecoin supply (~$327.6M)',
    url: 'https://www.global.dollar',
  },
  {
    id: 'usde',
    name: 'USDe',
    issuer: 'Ethena',
    icon: '🔷',
    logo: '',
    peg: 'USD (synthetic)',
    description: 'Ethena\'s synthetic dollar stablecoin. On Robinhood Chain, USDe is primarily used as collateral inside Morpho vaults, where it\'s one of the protocols borrowers draw on to take out USDG loans that generate Robinhood Earn\'s yield.',
    highlight: '$103M market cap on-chain, mostly deposited in Morpho',
    url: 'https://ethena.fi',
  },
]
