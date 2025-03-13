// TradingViewWidget.jsx
import React, { useEffect, useRef, memo } from 'react'

interface Props {
  fromSymbol?: string
  toSymbol?: string
}
function TradingViewWidget(props: Props) {
  const container = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js'
    script.type = 'text/javascript'
    script.async = true
    script.innerHTML = `
        {
          "autosize": true,
          "symbol": "BINANCE:${props.fromSymbol || 'BNB'}${props.toSymbol || 'USDT'}",
          "interval": "D",
          "timezone": "Etc/UTC",
          "theme": "dark",
          "style": "1",
          "locale": "en",
          "allow_symbol_change": true,
          "calendar": false,
          "support_host": "https://www.tradingview.com"
        }`

    if (container.current) {
      container.current.innerHTML = ''
      container.current.appendChild(script)
    }
  }, [props.fromSymbol, props.toSymbol])

  return (
    <div className="tradingview-widget-container" ref={container} style={{ height: '100%', width: '100%' }}>
      <div
        className="tradingview-widget-container__widget"
        style={{ height: 'calc(100% - 32px)', width: '100%' }}
      ></div>
    </div>
  )
}

export default memo(TradingViewWidget)
