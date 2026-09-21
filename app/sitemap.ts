import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://rhoodchain.com', lastModified: new Date(), changeFrequency: 'daily', priority: 1 },
    { url: 'https://rhoodchain.com/projects', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: 'https://rhoodchain.com/markets', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: 'https://rhoodchain.com/news', lastModified: new Date(), changeFrequency: 'daily', priority: 0.9 },
    { url: 'https://rhoodchain.com/news/arcus-dydx-robinhood', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: 'https://rhoodchain.com/news/growth-since-launch', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: 'https://rhoodchain.com/news/stock-paired-memecoins', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: 'https://rhoodchain.com/news/what-is-robinhood-chain', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: 'https://rhoodchain.com/learn', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: 'https://rhoodchain.com/learn/wallet-safety-101', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://rhoodchain.com/learn/robinhood-wallet-and-rabby', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://rhoodchain.com/learn/bridging-to-robinhood-chain', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://rhoodchain.com/about', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
  ]
}
