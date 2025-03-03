import TradingViewChart from 'components/TradingView'
import { useConfig } from '../context/ConfigProvider'

const TRADING_VIEW_COMPONENT_ID = 'tradingview_b239c'

interface Props {
  fromSymbol?: string
  toSymbol?: string
}
const TradingView = (props: Props) => {
  const config = useConfig()
  return (
    <TradingViewChart
      id={TRADING_VIEW_COMPONENT_ID}
      symbol={`BINANCE:${props.fromSymbol || config?.token.symbol}${props.toSymbol || 'USD'}`}
    />
  )
}

export default TradingView
