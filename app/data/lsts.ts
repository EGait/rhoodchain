// Yield products on Robinhood Chain — no liquid staking here, since the chain
// uses a permissioned validator set rather than SOL/ETH-style staking. Yield
// instead comes through decentralized lending products like Robinhood Earn.
// Source: Morpho blog, CryptoBriefing, FalconX Robinhood Chain Primer (July 2026).

export const lsts = [
  {
    id: 'robinhood-earn-usdg',
    name: 'Robinhood Earn',
    symbol: 'USDG',
    icon: '🏦',
    logo: '',
    apy: '7% (fixed, 1yr)',
    protocol: 'Morpho, curated by Steakhouse Financial',
    tvl: 'Growing',
    website: 'https://robinhood.com',
    mechanics: 'USDG deposits flow into a Morpho Vault, then get allocated across Morpho Markets. Borrowers post collateral from Spark, Ethena, and Maple to take out USDG loans — their interest is your yield. Robinhood fixes the rate at 7% for a year rather than letting it float, and backs the vault with Lloyd\'s of London insurance.',
  },
]
