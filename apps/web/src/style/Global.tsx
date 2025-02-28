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
    --colors-background: #100F15;
    --colors-gradientBubblegum:url('/ztd/trade/bg_trade_swap.jpg');
    --colors-textSubtle: #f0f0f0;
    --colors-input: #222;
    /* --colors-inputSecondary: none; */
    --colors-primary60: #f0f0f0;
    --colors-success: #FFC402;
    --colors-cardBorder:#1c1b25;
    --radii-card:4px; 
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

  .twapOrderSelf{
    .css-9fbwoq{
      background-color: #1c1b25;
    }
    .css-dr0zfv, .css-9fbwoq{
      border-radius: 0;
      color: #fff;
    }
  }

  .twapPanelSelf {
    .css-g226oo {
      background-color: #15141c !important;
    }
    .css-25x1fc, .css-dsqei{
      border-color: #ffc402;
      color: #ffc402;
    }

    .css-160rjgb .twap-limit-reset * {
      stroke: #ffc402;
    }

    .css-3jg30m {
      &:hover{
        button{
          background-color: rgba(0,0,0,.5);
        }
        
      }
      button{
        background-color: rgba(0,0,0,.5);
      }
      button svg{
        color: #ffc402;
        fill: #ffc402;
      }
    } 

    .twap-switch .Mui-checked+.MuiSwitch-track{
      background: #ffc402 !important;
    }

    .css-daxhzn, .css-jtp3vz{
      background-color: #15141c;
    }

    .twap-powered-by{
      display:none;
    }

    .css-mfhuwl-MuiSlider-root .MuiSlider-track{
      background-color: #ffc402;
      border-color: #ffc402;
    }

    .css-1osrwpx p{
      color: #ffc402;
    }
}
`

export default GlobalStyle
