import cs from './Row3.module.scss'
import Card from './Row3Card'
import { useMatchBreakpoints } from '@pancakeswap/uikit'
import CardSwiper from './CardSwiper'

export default function Row3() {
  const { isMobile } = useMatchBreakpoints()

  const datas = [
    {
      url: '/ztd/home/new/pic1@2x.png',
      title: 'Centralized Trading Experience',
      tip: 'Centralized trading experience, making transactionssmoother and more convenient.',
    },
    {
      url: '/ztd/home/new/pic2@2x.png',
      title: 'Dual incentive Model',
      tip: 'Two incentive methods, points and tokens, aim toestablish a sustainable decentralized financial system.',
    },
    {
      url: '/ztd/home/new/pic3@2x.png',
      title: 'Transaction Mining',
      tip: 'Users participate in mining through trading activitiesto earn token rewards.',
    },
    {
      url: '/ztd/home/new/pic4@2x.png',
      title: 'DAO Organizational Governance',
      tip: 'Reduce trading risks and make transactions moreransparent.',
    },
  ]
  return (
    <section className={cs.root}>
      <div className={cs.content}>
        <div className={cs.title}>Exploring Token Economic Models</div>
        {!isMobile && (
          <div className={cs.cardList}>
            {datas.map((item, index) => {
              return <Card key={item.title} url={item.url} title={item.title} tip={item.tip} />
            })}
          </div>
        )}
        {!!isMobile && <CardSwiper cards={datas} />}
      </div>
    </section>
  )
}
