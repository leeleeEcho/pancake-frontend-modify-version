import { useTranslation } from '@pancakeswap/localization'
import { useMatchBreakpoints } from '@pancakeswap/uikit'
import useTheme from 'hooks/useTheme'

import cs from './index.module.scss'

import Row1 from './ztdcom/row1'
import Row2 from './ztdcom/row2'
import Row3 from './ztdcom/row3'
import Row4 from './ztdcom/row4'
import Row5 from './ztdcom/row5'
const Home: React.FC<React.PropsWithChildren> = () => {
  const { theme } = useTheme()
  const HomeSectionContainerStyles = { margin: '0', width: '100%', maxWidth: '968px', padding: '0px 16px' }
  const { t } = useTranslation()
  const { isMobile } = useMatchBreakpoints()

  return (
    <div className={cs.root}>
      <Row1 />
      <Row2 />
      <Row3 />
      <Row4 />
      <Row5 />
    </div>
  )
}

export default Home
