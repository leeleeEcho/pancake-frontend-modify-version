import { ContextApi } from '@pancakeswap/localization'
import { SUPPORTED_CHAIN_IDS as PREDICTION_SUPPORTED_CHAINS } from '@pancakeswap/prediction'
import {
  DropdownMenuItems,
  EarnFillIcon,
  EarnIcon,
  GameIcon,
  MenuItemsType,
  MoreIcon,
  SwapFillIcon,
  SwapIcon,
} from '@pancakeswap/uikit'
import { SUPPORT_FARMS } from 'config/constants/supportChains'

export type ConfigMenuDropDownItemsType = DropdownMenuItems & {
  hideSubNav?: boolean
  overrideSubNavItems?: DropdownMenuItems['items']
  matchHrefs?: string[]
}
export type ConfigMenuItemsType = Omit<MenuItemsType, 'items'> & {
  hideSubNav?: boolean
  image?: string
  items?: ConfigMenuDropDownItemsType[]
  overrideSubNavItems?: ConfigMenuDropDownItemsType[]
}

export const addMenuItemSupported = (item, chainId) => {
  if (!chainId || !item.supportChainIds) {
    return item
  }
  if (item.supportChainIds?.includes(chainId)) {
    return item
  }
  return {
    ...item,
    disabled: true,
  }
}

const config: (
  t: ContextApi['t'],
  isDark: boolean,
  languageCode?: string,
  chainId?: number,
) => ConfigMenuItemsType[] = (t, isDark, languageCode, chainId) =>
  [
    {
      label: t('Swap'),
      icon: SwapIcon,
      fillIcon: SwapFillIcon,
      href: '/',
      hideSubNav: true,
      //   items: [
      //     {
      //       label: t('Swap'),
      //       href: '/',
      //     },
      //     {
      //       label: t('Perps'),
      //       href: getPerpetualUrl({
      //         chainId,
      //         languageCode,
      //         isDark,
      //       }),
      //       confirmModalId: 'perpConfirmModal',
      //       type: DropdownMenuItemType.EXTERNAL_LINK,
      //     },
      //     {
      //       label: t('Options'),
      //       href: getOptionsUrl(),
      //       confirmModalId: 'optionsConfirmModal',
      //       type: DropdownMenuItemType.EXTERNAL_LINK,
      //     },
      //     {
      //       label: t('Buy Crypto'),
      //       href: '/buy-crypto',
      //     },
      //   ].map((item) => addMenuItemSupported(item, chainId)),
    },
    {
      label: 'Explore',
      href: '/liquidity/pools',
      icon: EarnIcon,
      fillIcon: EarnFillIcon,
      image: '/images/decorations/pe2.png',
      supportChainIds: SUPPORT_FARMS,
      items: [
        {
          label: 'My Positions',
          href: '/liquidity/positions',
          supportChainIds: PREDICTION_SUPPORTED_CHAINS,
        },
        {
          label: 'Pools',
          href: '/liquidity/pools',
          supportChainIds: SUPPORT_FARMS,
        },
        {
          label: 'History',
          href: '/farms/history',
          supportChainIds: SUPPORT_FARMS,
        },
      ].map((item) => addMenuItemSupported(item, chainId)),
    },

    // {
    //   label: t('Bridge'),
    //   href: 'https://bridge.pancakeswap.finance',
    //   icon: BridgeIcon,
    //   type: DropdownMenuItemType.EXTERNAL_LINK,
    //   image: '/images/decorations/pe2.png',
    //   items: [
    //     {
    //       label: t('Stargate'),
    //       href: 'https://bridge.pancakeswap.finance/stargate',
    //       type: DropdownMenuItemType.EXTERNAL_LINK,
    //     },
    //     {
    //       label: t('Axelar'),
    //       href: 'https://bridge.pancakeswap.finance/axelar',
    //       type: DropdownMenuItemType.EXTERNAL_LINK,
    //     },
    //     {
    //       label: t('Celer'),
    //       href: 'https://cbridge.celer.network/1/12360001/',
    //       type: DropdownMenuItemType.EXTERNAL_LINK,
    //     },
    //     {
    //       label: t('Wormhole'),
    //       href: 'https://bridge.pancakeswap.finance/wormhole',
    //       type: DropdownMenuItemType.EXTERNAL_LINK,
    //     },
    //     {
    //       label: t('Aptos'),
    //       href: 'https://docs.pancakeswap.finance/readme/get-started-aptos/aptos-coin-guide',
    //       type: DropdownMenuItemType.EXTERNAL_LINK,
    //     },
    //   ].map((item) => addMenuItemSupported(item, chainId)),
    // },
    {
      label: t('Play'),
      icon: GameIcon,
      href: '/prediction',
      overrideSubNavItems: [
        {
          label: t('Prediction'),
          href: '/prediction',
        },
        {
          label: t('Lottery'),
          href: '/lottery',
        },
      ],
      items: [
        // {
        //   status: { text: t('New'), color: 'success' },
        //   label: t('Springboard'),
        //   href: 'https://springboard.pancakeswap.finance',
        //   type: DropdownMenuItemType.EXTERNAL_LINK,
        // },
        {
          label: t('Prediction (BETA)'),
          href: '/prediction',
          image: '/images/decorations/prediction.png',
          supportChainIds: PREDICTION_SUPPORTED_CHAINS,
        },
        // {
        //   label: t('Lottery'),
        //   href: '/lottery',
        //   image: '/images/decorations/lottery.png',
        // },
        // {
        //   label: t('Quests'),
        //   href: 'https://quest.pancakeswap.finance/quests',
        //   type: DropdownMenuItemType.EXTERNAL_LINK,
        // },
      ].map((item) => addMenuItemSupported(item, chainId)),
    },
    {
      label: t('Info'),
      href: '/info/v3',
      icon: MoreIcon,
      hideSubNav: true,
      items: [
        // {
        //   label: t('Info'),
        //   href: '/info/v3',
        // },
        // {
        //   label: t('IFO'),
        //   href: '/ifo',
        //   image: '/images/ifos/ifo-bunny.png',
        //   overrideSubNavItems: [
        //     {
        //       label: t('Latest'),
        //       href: '/ifo',
        //     },
        //     {
        //       label: t('Finished'),
        //       href: '/ifo/history',
        //     },
        //   ],
        // },
        // {
        //   label: t('Voting'),
        //   image: '/images/voting/voting-bunny.png',
        //   items: [
        //     {
        //       label: t('Proposals'),
        //       href: '/voting',
        //       supportChainIds: SUPPORT_ONLY_BSC,
        //     },
        //     {
        //       label: t('Gauges'),
        //       href: '/gauges-voting',
        //       supportChainIds: SUPPORT_CAKE_STAKING,
        //     },
        //   ].map((item) => addMenuItemSupported(item, chainId)),
        // },
        // {
        //   type: DropdownMenuItemType.DIVIDER,
        // },
        // {
        //   label: t('Blog'),
        //   href: 'https://blog.pancakeswap.finance',
        //   type: DropdownMenuItemType.EXTERNAL_LINK,
        // },
        // {
        //   label: t('Docs'),
        //   href: 'https://docs.pancakeswap.finance',
        //   type: DropdownMenuItemType.EXTERNAL_LINK,
        // },
      ].map((item) => addMenuItemSupported(item, chainId)),
    },
  ].map((item) => addMenuItemSupported(item, chainId))

export default config
