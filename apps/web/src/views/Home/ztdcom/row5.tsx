import classNames from 'classnames'
import cs from './row5.module.scss'

export default function Row5() {
  return (
    <section className={cs.homerow5}>
      <div className={cs.content}>
        <div className={cs.t}>马上加入ZTD，给您带来不一样的交易体验！</div>
        <div className={cs.btn}>Connect Wallet</div>

        <img className={classNames([cs.i, cs.i39])} src="/ztd/home/Group 39@2x.png" />
        <img className={classNames([cs.i, cs.i40])} src="/ztd/home/Group 40@2x.png" />
        <img className={classNames([cs.i, cs.i41])} src="/ztd/home/Group 41@2x.png" />
        <img className={classNames([cs.i, cs.i42])} src="/ztd/home/Group 42@2x.png" />
        <img className={classNames([cs.i, cs.i59])} src="/ztd/home/Group 59@2x.png" />
      </div>
    </section>
  )
}
