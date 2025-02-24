// import { useTranslation } from '@pancakeswap/localization'
// import { useMatchBreakpoints } from '@pancakeswap/uikit'
// import useTheme from 'hooks/useTheme'

import cs from './index.module.scss'

import Row1 from './ztdcom2/Row1'
import Row2 from './ztdcom2/Row2'
import Row3 from './ztdcom2/Row3'
import Row4 from './ztdcom2/Row4'

export default function Home() {
  return (
    <div className={cs.root}>
      <Row1 />
      <Row2 />
      <Row3 />
      <Row4 />
      <img className={cs.img3} src="/ztd/home/new/pic5.png" />
    </div>
  )
}
