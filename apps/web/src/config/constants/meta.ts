import { ContextApi } from '@pancakeswap/localization'
import memoize from 'lodash/memoize'
import { ASSET_CDN } from './endpoints'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'ZTD',
  description: 'Trade, earn, and own crypto on the all-in-one multichain DEX',
}

interface PathList {
  paths: { [path: string]: { title: string; basePath?: boolean; description?: string; image?: string } }
  defaultTitleSuffix: string
}

const getPathList = memoize((t: ContextApi['t']): PathList => {
  return {
    paths: {
      '/home': { title: t('Home') },
      '/': { basePath: true, title: t('Exchange') },
      '/swap': { basePath: true, title: t('Exchange') },
      '/limit-orders': { basePath: true, title: t('Limit Orders') },
      '/add': { basePath: true, title: t('Add Liquidity') },
      '/remove': { basePath: true, title: t('Remove Liquidity') },
      '/liquidity': { title: t('Liquidity') },
      '/find': { title: t('Import Pool') },
      '/competition': { title: t('Trading Battle') },
      '/prediction': { title: t('Prediction') },
      '/prediction/leaderboard': { title: t('Leaderboard') },
      '/liquidity/pools': { title: t('Earn from LP') },
      '/liquidity/positions': { title: t('My Positions') },
      '/farms/auction': { title: t('Farm Auctions') },
      '/pools': { title: t('Pools') },
      '/lottery': { title: t('Lottery') },
      '/ifo': { title: t('Initial Farm Offering') },
      '/teams': { basePath: true, title: t('Leaderboard') },
      '/voting': { basePath: true, title: t('Voting') },
      '/voting/proposal': { title: t('Proposals') },
      '/voting/proposal/create': { title: t('Make a Proposal') },
      '/info': {
        basePath: true,
        title: `${t('Overview')} - ${t('Info')}`,
        description: 'View statistics for ZTDswap exchanges.',
      },
      '/info/pairs': {
        title: `${t('Pairs')} - ${t('Info')}`,
        description: 'View statistics for ZTDswap exchanges.',
      },
      '/info/tokens': {
        title: `${t('Tokens')} - ${t('Info')}`,
        description: 'View statistics for ZTDswap exchanges.',
      },
      '/info/v3/pairs': {
        title: `${t('Pairs')} - ${t('Info')}`,
        description: 'View statistics for ZTDswap exchanges.',
      },
      '/info/v3/tokens': {
        title: `${t('Tokens')} - ${t('Info')}`,
        description: 'View statistics for ZTDswap exchanges.',
      },
      '/liquidity/pool': {
        basePath: true,
        title: `${t('Pool Detail')}`,
        description: 'View statistics for ZTDswap pool.',
      },
      '/nfts': { title: t('NFT Marketplace') },
      '/nfts/collections': { basePath: true, title: t('Collections') },
      '/nfts/activity': { title: t('Activity') },
      '/profile': { basePath: true, title: t('Profile') },
      '/pancake-squad': { basePath: true, title: t('Pancake Squad') },
      '/pottery': { basePath: true, title: t('Pottery') },
      '/position-manager': { basePath: true, title: t('Position Manager') },
      '/cake-staking': { basePath: true, title: t('CAKE Staking') },
      '/buy-crypto': { basePath: true, title: t('Buy Crypto') },
      '/gauges-voting': { basePath: true, title: t('Gauges Voting') },
    },
    defaultTitleSuffix: 'ZTD',
  }
})

export const getCustomMeta = memoize(
  (path: string, t: ContextApi['t'], _: string): PageMeta | null => {
    const pathList = getPathList(t)
    let pathMetadata = pathList.paths[path]
    if (!pathMetadata) {
      const basePath = Object.entries(pathList.paths).find(([url, data]) => data.basePath && path.startsWith(url))?.[0]
      if (basePath) {
        pathMetadata = pathList.paths[basePath]
      }
    }

    if (pathMetadata) {
      return {
        title: `${pathMetadata.title}`,
        ...(pathMetadata.description && { description: pathMetadata.description }),
        image: pathMetadata.image,
      }
    }
    return null
  },
  (path, _, locale) => `${path}#${locale}`,
)
