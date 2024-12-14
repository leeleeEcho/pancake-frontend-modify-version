import cs from './row3.module.scss'

export default function Row3() {
  return (
    <section className={cs.homerow3}>
      <div className={cs.content}>
        <div className={cs.tt}>
          <div className={cs.line}></div>
          <img src="/ztd/home/star.png" />
          <span>探索代币经济模式</span>
          <img src="/ztd/home/star.png" />
          <div className={cs.line}></div>
        </div>

        <div className={cs.list}>
          <div>
            <img src="/ztd/home/Frame 62@2x.png" />
            <div className={cs.t}>Swap</div>
            <div className={cs.i}>跨多链实时交易虚拟货币</div>
          </div>
          <div>
            <img src="/ztd/home/Frame 61@2x.png" />
            <div className={cs.t}>双激励模式</div>
            <div className={cs.i}>积分和代币两种激励方式，旨在建立一个可持续的去中心化金融体系</div>
          </div>
          <div>
            <img src="/ztd/home/Frame 64@2x.png" />
            <div className={cs.t}>交易挖矿</div>
            <div className={cs.i}>用户通过交易活动参与挖矿，获取代币奖励</div>
          </div>
          <div>
            <img src="/ztd/home/Frame 63@2x.png" />
            <div className={cs.t}>流动性奖励</div>
            <div className={cs.i}>用户通过提供流动性获取代币奖励</div>
          </div>
        </div>
      </div>
    </section>
  )
}
