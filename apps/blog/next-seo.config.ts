import { DefaultSeoProps } from 'next-seo'

export const SEO: DefaultSeoProps = {
  titleTemplate: '%s | ZTDSwap',
  defaultTitle: 'Blog | ZTDSwap',
  description: 'Trade, earn, and own crypto on the all-in-one multichain DEX',
  twitter: {
    cardType: 'summary_large_image',
    handle: '@ZTDSwap',
    site: '@ZTDSwap',
  },
  openGraph: {
    title: "🥞 ZTDSwap - Everyone's Favorite DEX",
  },
}
