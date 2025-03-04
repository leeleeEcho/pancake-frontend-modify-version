import { NodeRound } from 'state/types'
import cs from './index.module.scss'
import { getRoundPosition, getPriceDifference, formatTokenv2 } from '../../helpers'
import { formatBnb, formatUsd } from '../History/helpers'
import { BetPosition } from '@pancakeswap/prediction'
import { useMemo } from 'react'
import { LockPriceRow, PrizePoolRow, RoundResultBox } from '../RoundResult'
import { formatBigInt } from '@pancakeswap/utils/formatBalance'
import { useConfig } from 'views/Predictions/context/ConfigProvider'
import classNames from 'classnames'
import { Box, Flex, FlexProps, Skeleton, Text } from '@pancakeswap/uikit'
interface Props {
  round: NodeRound
}
interface PrizePoolRowProps extends FlexProps {
  totalAmount: NodeRound['totalAmount']
}
export default function CardItem(props: Props) {
  const { round } = props
  const { epoch, lockPrice, closePrice, totalAmount } = round

  const config = useConfig()
  console.log('round:', round)

  const betPosition = getRoundPosition(lockPrice ?? 0n, closePrice ?? 0n)

  const locdPriceStr = useMemo(() => {
    if (!lockPrice) return '-'
    return formatUsd(Number(formatBigInt(lockPrice, 8, config?.lockPriceDecimals ?? 8)), config?.displayedDecimals ?? 0)
  }, [lockPrice])

  const upOrDown = useMemo(() => {
    return betPosition === BetPosition.BEAR ? 'DOWN' : 'UP'
  }, [betPosition])

  const closedPriceStr = useMemo(() => {
    if (!closePrice) return '-'
    return formatUsd(
      Number(formatBigInt(closePrice, 8, config?.closePriceDecimals ?? 8)),
      config?.displayedDecimals ?? 0,
    )
  }, [closePrice])

  const priceDiffNum = useMemo(() => {
    if (!closePrice && closePrice !== 0n) return 0
    if (!lockPrice && lockPrice !== 0n) return 0

    const priceDifference = getPriceDifference(closePrice, lockPrice)
    return Number(formatBigInt(priceDifference, 8, config?.closePriceDecimals ?? 8))
  }, [closePrice, lockPrice])

  const priceDiff = useMemo(() => {
    if (priceDiffNum === 0) return '-'
    return formatUsd(priceDiffNum, config?.displayedDecimals ?? 0)
  }, [priceDiffNum])

  const getPrizePoolAmount = (
    totalAmount: PrizePoolRowProps['totalAmount'],
    decimals: number,
    displayedDecimals: number,
  ) => {
    if (typeof totalAmount !== 'bigint') {
      return '0'
    }

    return formatTokenv2(totalAmount, decimals, displayedDecimals)
  }
  const prizePool = useMemo(() => {
    return getPrizePoolAmount(
      totalAmount,
      config?.token?.decimals ?? 0,
      config?.balanceDecimals ?? config?.displayedDecimals ?? 0,
    )
  }, [totalAmount])

  return (
    <li className={cs.item}>
      <div>#{round.epoch}</div>
      <div>{upOrDown}</div>
      <div className={cs.close}>
        <span>{closedPriceStr}</span>
        <div className={classNames(cs.tag, { [cs.up]: priceDiffNum > 0, [cs.down]: priceDiffNum < 0 })}>
          <span className={cs.icon}>→</span>
          {priceDiff}
        </div>
      </div>
      <div>{locdPriceStr}</div>
      <div>
        {prizePool} {config?.token?.symbol}
      </div>
    </li>
  )
}
