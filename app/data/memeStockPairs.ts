// Notable memecoin / Stock Token trading pairs on Robinhood Chain.
// Sources: KuCoin, Defiprime, AirdropAlert, MEXC, techflowpost, 0xsammy (Sept 2026).
// NOTE: Market caps and pool sizes for memecoins move violently and these are
// point-in-time snapshots, not live data. Holding any of these grants no
// ownership of, or claim on, the referenced company.

export const memeStockPairs = [
  {
    meme: 'AI',
    memeName: 'Artificial Inu',
    stock: 'NVDA',
    stockName: 'NVIDIA Corp',
    note: 'The flagship pairing and largest by far — at points, 16-23% of all tokenized NVDA on the chain sat inside AI\'s pool and treasury.',
    peak: '$280M-$325M market cap (early Sept 2026)',
  },
  {
    meme: 'BONER',
    memeName: 'Boner Coin',
    stock: 'HIMS',
    stockName: 'Hims & Hers Health',
    note: 'Buyers cornered roughly 81% of all tokenized HIMS into BONER\'s liquidity pool at its peak.',
    peak: '$100M-$254M market cap (varies by snapshot)',
  },
  {
    meme: 'SPACEHOOD',
    memeName: 'SPACEHOOD',
    stock: 'SPCX',
    stockName: 'SpaceX',
    note: 'Smaller cap than AI or BONER, but leans on instantly-recognizable SpaceX/Musk narrative appeal.',
    peak: '$10M+ market cap',
  },
  {
    meme: 'MOO',
    memeName: 'Memory Cow',
    stock: 'MU',
    stockName: 'Micron Technology',
    note: 'Part of the broader wave of stock-paired launches following Artificial Inu\'s success.',
    peak: 'Smaller cap, part of the long tail',
  },
  {
    meme: 'MEME',
    memeName: 'MEME',
    stock: 'AMC',
    stockName: 'AMC Entertainment',
    note: 'Subject of an active dispute — AMC\'s CEO publicly demanded Robinhood halt tokenized AMC trading on Sept 4, 2026; Robinhood\'s chief legal officer declined the same day.',
    peak: 'Ongoing legal dispute, unresolved',
  },
]
