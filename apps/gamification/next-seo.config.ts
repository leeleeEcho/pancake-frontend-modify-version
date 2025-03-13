import { DefaultSeoProps } from 'next-seo'

export const SEO: DefaultSeoProps = {
  titleTemplate: '%s | ZTDSwap',
  defaultTitle: 'Game | ZTDSwap',
  description: 'Play different games on ZTDSwap, using CAKE and ZTDSwap NFTs',
  twitter: {
    cardType: 'summary_large_image',
    handle: '@ZTDSwap',
    site: '@ZTDSwap',
  },
  openGraph: {
    title: 'ZTDSwap',
  },
}
