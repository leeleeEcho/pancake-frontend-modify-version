import { PancakeTheme } from '@pancakeswap/uikit'
import { createGlobalStyle } from 'styled-components'

declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends PancakeTheme {}
}

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Kumbh Sans', 'Kanit', sans-serif;
    --colors-primary: #FFC402;
    --colors-secondary:#FFC402;
    --colors-background: #000000;
    --colors-gradientBubblegum:url('/ztd/trade/bg_trade_swap.jpg');
    --colors-textSubtle: #f0f0f0;
    --colors-input: none;
    --colors-inputSecondary: none;
    --colors-primary60: #f0f0f0;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    background-color: ${({ theme }) => theme.colors.background};
    overflow-x: hidden;

    img {
      height: auto;
      max-width: 100%;
    }
  }

  #__next {
    position: relative;
    z-index: 1;
  }

  #portal-root {
    position: relative;
    z-index: 2;
  }
`

export default GlobalStyle
