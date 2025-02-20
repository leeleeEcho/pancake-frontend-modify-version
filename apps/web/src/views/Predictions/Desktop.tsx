import { useTranslation } from '@pancakeswap/localization'
import { PredictionsChartView, PredictionStatus } from '@pancakeswap/prediction'
import useLocalDispatch from 'contexts/LocalRedux/useLocalDispatch'
import debounce from 'lodash/debounce'

import { memo, useEffect, useMemo, useRef } from 'react'
import Split, { SplitInstance } from 'split-grid'
import { setChartPaneState, setChartView } from 'state/predictions'
import {
  // useChartView,
  useGetPredictionsStatus,
  useIsChartPaneOpen,
  useIsHistoryPaneOpen,
  useGetSortedRoundsCurrentEpoch,
} from 'state/predictions/hooks'
import { styled } from 'styled-components'
import Menu from './components/Menu'

import TradingView from './components/TradingView'
import { useConfig } from './context/ConfigProvider'
import History from './History'
import Positions from './Positions'

// import { Box, Button, ChartIcon, Flex, Link } from '@pancakeswap/uikit'
// import { ChartByLabel } from 'components/Chart/ChartbyLabel'
// import { TabToggle } from 'components/TabToggle'
// import delay from 'lodash/delay'
// import dynamic from 'next/dynamic'
// import { ErrorNotification, PauseNotification } from './components/Notification'

import cs from './Desktop.module.scss'
import RoundCard from './components/RoundCard'
import classNames from 'classnames'

// const ChainlinkChart = dynamic(() => import('./components/ChainlinkChart'), { ssr: false })

// The value to set the chart when the user clicks the chart tab at the bottom
// const GRID_TEMPLATE_ROW = '1.2fr 24px .8fr'

// const ExpandButtonGroup = styled(Flex)`
//   bottom: 24px;
//   left: 32px;
//   position: absolute;
//   display: none;
//   background-color: ${({ theme }) => theme.colors.input};
//   border-radius: 24px 24px 0 0;
//   z-index: 50;
//   ${({ theme }) => theme.mediaQueries.lg} {
//     display: inline-flex;
//   }
// `

// const SplitWrapper = styled.div`
//   display: grid;
//   grid-template-columns: 1fr;
//   grid-template-rows: 1fr 24px 0;
//   flex: 1;
//   overflow: hidden;
// `

// const ChartPane = styled.div`
//   overflow: hidden;
//   position: relative;
//   background: ${({ theme }) => theme.colors.background};
// `

const HistoryPane = styled.div<{ $isHistoryPaneOpen: boolean; $isChartPaneOpen: boolean }>`
  flex: none;
  overflow: hidden;
  transition: width 200ms ease-in-out;
  background: ${({ theme }) => theme.card.background};
  padding-bottom: ${({ $isChartPaneOpen }) => ($isChartPaneOpen ? 0 : '24px')};
  width: ${({ $isHistoryPaneOpen }) => ($isHistoryPaneOpen ? '384px' : 0)};
`

const StyledDesktop = styled.div`
  display: none;

  ${({ theme }) => theme.mediaQueries.lg} {
    display: block;
    min-height: 100vh;
  }
`

// const PositionPane = styled.div`
//   align-items: center;
//   display: flex;
//   max-width: 100%;
//   overflow-y: auto;
//   overflow-x: hidden;

//   & > div {
//     flex: 1;
//     overflow: hidden;
//   }
// `

// const Gutter = styled.div<{ $isChartPaneOpen?: boolean }>`
//   background: ${({ theme }) => theme.card.background};
//   cursor: ${({ $isChartPaneOpen }) => ($isChartPaneOpen ? 'row-resize' : 'pointer')};
//   height: 24px;
//   position: relative;

//   &:before {
//     background-color: ${({ theme }) => theme.colors.textSubtle};
//     border-radius: 8px;
//     content: '';
//     height: 4px;
//     left: 50%;
//     margin-left: -32px;
//     position: absolute;
//     top: 10px;
//     width: 64px;
//   }
// `

// const PowerLinkStyle = styled(Link)`
//   position: absolute;
//   right: 16px;
//   top: -60px;
// `

const Desktop: React.FC<React.PropsWithChildren> = () => {
  // const splitWrapperRef = useRef<HTMLDivElement>(null)
  const chartRef = useRef<HTMLDivElement>(null)
  const gutterRef = useRef<HTMLDivElement>(null)
  const isHistoryPaneOpen = useIsHistoryPaneOpen()
  const isChartPaneOpen = useIsChartPaneOpen()
  // const chartView = useChartView()
  const dispatch = useLocalDispatch()
  const { t } = useTranslation()
  const status = useGetPredictionsStatus()
  const config = useConfig()

  useEffect(() => {
    if (config?.galetoOracleAddress || config?.ai) {
      dispatch(setChartPaneState(false))
      dispatch(setChartView(PredictionsChartView.TradingView))
    }
  }, [config, dispatch])

  // const openChartPane = useCallback(() => {
  //   if (splitWrapperRef.current) {
  //     splitWrapperRef.current.style.transition = 'grid-template-rows 150ms'
  //     splitWrapperRef.current.style.gridTemplateRows = GRID_TEMPLATE_ROW
  //   }

  //   // Purely comedic: We only want to animate if we are clicking the open chart button
  //   // If we keep the transition on the resizing becomes very choppy
  //   delay(() => {
  //     if (splitWrapperRef.current) {
  //       splitWrapperRef.current.style.transition = ''
  //     }
  //   }, 150)

  //   dispatch(setChartPaneState(true))
  // }, [dispatch])

  const splitInstance = useRef<SplitInstance>()

  // const tokenSymbol = useMemo(() => config?.token.symbol ?? '', [config])

  useEffect(() => {
    if (chartRef.current) {
      const { height } = chartRef.current.getBoundingClientRect()

      if (height > 0 && !isChartPaneOpen) {
        dispatch(setChartPaneState(true))
      }
    }
  }, [isChartPaneOpen, dispatch])

  // unmount
  useEffect(() => {
    return () => {
      dispatch(setChartPaneState(false))
    }
  }, [dispatch])

  useEffect(() => {
    const threshold = 100
    const handleDrag = debounce(() => {
      if (chartRef.current) {
        const { height } = chartRef.current.getBoundingClientRect()

        // If the height of the chart pane goes below the "snapOffset" threshold mark the chart pane as closed
        dispatch(setChartPaneState(height > threshold))
      }
    }, 50)

    if (isChartPaneOpen && !splitInstance.current && gutterRef?.current) {
      splitInstance.current = Split({
        dragInterval: 1,
        snapOffset: threshold,
        onDrag: handleDrag,
        rowGutters: [
          {
            track: 1,
            element: gutterRef.current,
          },
        ],
      })
    } else if (!isChartPaneOpen && splitInstance.current) {
      splitInstance.current?.destroy()
      splitInstance.current = undefined
    }

    return () => {
      splitInstance.current?.destroy()
      splitInstance.current = undefined
    }
  }, [gutterRef, chartRef, dispatch, isChartPaneOpen])

  // const sourceUrl = useMemo(() => {
  //   let url = chartView === PredictionsChartView.Chainlink ? 'https://chain.link/data-feeds' : 'https://pyth.network/'
  //   if (chartView === PredictionsChartView.TradingView) {
  //     url = `https://www.tradingview.com/chart/?symbol=BINANCE%3A${tokenSymbol}USD`
  //   }
  //   return url
  // }, [chartView, tokenSymbol])

  // return (
  //   <StyledDesktop>
  //     <SplitWrapper ref={splitWrapperRef}>
  //       <PositionPane>
  //         {status === PredictionStatus.ERROR && <ErrorNotification />}
  //         {status === PredictionStatus.PAUSED && <PauseNotification />}
  //         {[PredictionStatus.INITIAL, PredictionStatus.LIVE].includes(status) && (
  //           <Box>
  //             <Menu />
  //             {status === PredictionStatus.LIVE ? <Positions /> : null}
  //           </Box>
  //         )}
  //       </PositionPane>

  //       <Gutter ref={gutterRef} $isChartPaneOpen={isChartPaneOpen} onClick={openChartPane}>
  //         {config?.chainlinkOracleAddress && (
  //           <PowerLinkStyle href="https://chain.link/" external>
  //             <img src="/images/powered-by-chainlink.svg" alt="Powered by ChainLink" width="170px" height="48px" />
  //           </PowerLinkStyle>
  //         )}
  //         {config?.galetoOracleAddress && (
  //           <PowerLinkStyle href="https://pyth.network/" external>
  //             <img src="/images/powered-by-pyth.svg" alt="Powered by PYTH" width="170px" height="48px" />
  //           </PowerLinkStyle>
  //         )}
  //         <ExpandButtonGroup>
  //           <TabToggle
  //             height="42px"
  //             as={Button}
  //             style={{ whiteSpace: 'nowrap', alignItems: 'center' }}
  //             isActive={chartView === PredictionsChartView.TradingView}
  //             onMouseDown={(e) => {
  //               e.stopPropagation()
  //               e.preventDefault()
  //               dispatch(setChartView(PredictionsChartView.TradingView))
  //             }}
  //           >
  //             {chartView === PredictionsChartView.TradingView && <ChartIcon mr="10px" />} TradingView {t('Chart')}
  //           </TabToggle>
  //           {config?.chainlinkOracleAddress && (
  //             <TabToggle
  //               as={Button}
  //               height="42px"
  //               style={{ whiteSpace: 'nowrap', alignItems: 'center' }}
  //               isActive={chartView === PredictionsChartView.Chainlink}
  //               onMouseDown={(e) => {
  //                 e.stopPropagation()
  //                 e.preventDefault()
  //                 dispatch(setChartView(PredictionsChartView.Chainlink))
  //               }}
  //             >
  //               {chartView === PredictionsChartView.Chainlink && <ChartIcon mr="10px" />} Chainlink {t('Chart')}
  //             </TabToggle>
  //           )}
  //         </ExpandButtonGroup>
  //         {isChartPaneOpen && (
  //           <ChartByLabel
  //             justifyContent="flex-end"
  //             symbol={`${tokenSymbol}/USD`}
  //             by={chartView}
  //             linkProps={{
  //               onMouseDown: (e) => {
  //                 window.open(sourceUrl, '_blank', 'noopener noreferrer')
  //                 e.stopPropagation()
  //                 e.preventDefault()
  //               },
  //             }}
  //             link={sourceUrl}
  //           />
  //         )}
  //       </Gutter>
  //       <ChartPane ref={chartRef}>
  //         {isChartPaneOpen && (chartView === PredictionsChartView.TradingView ? <TradingView /> : <ChainlinkChart />)}
  //       </ChartPane>
  //     </SplitWrapper>
  //     <HistoryPane $isHistoryPaneOpen={isHistoryPaneOpen} $isChartPaneOpen={isChartPaneOpen}>
  //       <History />
  //     </HistoryPane>
  //   </StyledDesktop>
  // )

  const { currentEpoch, rounds } = useGetSortedRoundsCurrentEpoch()
  // console.log('what is rounds', rounds)

  const roundsExpired = useMemo(() => {
    return (
      rounds
        ?.filter((round) => {
          return (
            !(round.epoch > currentEpoch) &&
            !(round.epoch === currentEpoch && round.lockPrice === null) &&
            !(round.closePrice === null && round.epoch === currentEpoch - 1)
          )
        })
        .sort((a, b) => b.epoch - a.epoch)
        .slice(0, 3) || []
    )
  }, [rounds])
  return (
    <StyledDesktop>
      <div className={cs.rootBox}>
        <div className={cs.itemMenu}>
          <Menu />
        </div>
        <div className={cs.itemChart}>
          <TradingView />
        </div>
        <div className={cs.itemList}>{status === PredictionStatus.LIVE ? <Positions /> : null}</div>
        <div className={cs.itemNext}>
          <div>
            {roundsExpired.map((round) => {
              return (
                <div className={cs.item}>
                  <RoundCard round={round} />
                </div>
              )
            })}
          </div>
        </div>
        <div className={classNames(cs.itemHistory, { [cs.show]: isHistoryPaneOpen })}>
          <HistoryPane $isHistoryPaneOpen={isHistoryPaneOpen} $isChartPaneOpen={isChartPaneOpen}>
            <History />
          </HistoryPane>
        </div>
      </div>
    </StyledDesktop>
  )
}

export default memo(Desktop)
