import classNames from 'classnames'
import cs from './row2.module.scss'

export default function Row() {
  return (
    <section className={cs.homerow2}>
      <div className={cs.content}>
        <img className={cs.light} src="/ztd/home/light2.png" />
        <img className={classNames([cs.icon, cs.i99])} src="/ztd/home/Group 99@2x.png" />
        <img className={classNames([cs.icon, cs.i100])} src="/ztd/home/Group 100@2x.png" />
        <img className={classNames([cs.icon, cs.i101])} src="/ztd/home/Group 101@2x.png" />
        <div className={classNames([cs.q, cs.quan1])}></div>
        <div className={classNames([cs.q, cs.quan2])}></div>
        <div className={classNames([cs.q, cs.quan3])}></div>
        <div className={classNames([cs.q, cs.quan4])}></div>
        <div className={classNames([cs.q, cs.quan5])}></div>
        <div className={classNames([cs.q, cs.quan6])}></div>
        <div className={classNames([cs.q, cs.quan7])}></div>
        <div className={classNames([cs.q, cs.quan8])}></div>
        <div className={classNames([cs.q, cs.quan9])}></div>
        <div className={cs.center}>核心功能</div>

        <div className={classNames([cs.txtbox, cs.t1])}>
          <div className={cs.t}>治理机制</div>
          <div className={cs.v}>通过代币持有者的投票权，实现平台的去中心化治理。</div>
        </div>
        <div className={classNames([cs.txtbox, cs.t2])}>
          <div className={cs.t}>资产代币化</div>
          <div className={cs.v}>将RWA映射为数字代币，便于在平台上交易。</div>
        </div>
        <div className={classNames([cs.txtbox, cs.t3])}>
          <div className={cs.t}>流动性池</div>
          <div className={cs.v}>引入流动性挖矿机制，激励用户提供流动性，增强市场流动性。</div>
        </div>
      </div>
    </section>
  )
}
