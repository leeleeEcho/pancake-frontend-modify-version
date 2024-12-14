import cs from './row4.module.scss'

export default function Row4() {
  return (
    <section className={cs.homerow4}>
      <div className={cs.content}>
        <div className={cs.title}>
          <img className={cs.a} src="/ztd/home/star.png" />
          <img className={cs.b} src="/ztd/home/star.png" />
          <img className={cs.c} src="/ztd/home/star.png" />
          <span>加入我们的社区</span>
        </div>
        <div className={cs.info}>我们可以携手壮大ZTD社区</div>

        <div className={cs.n}>
          <div className={cs.l}>
            <div>
              <div>社区成员数量</div>
              <div>2.0M+</div>
            </div>
            <div>
              <div>社区语种数目</div>
              <div>10+</div>
            </div>
            <div>
              <div>社区大使</div>
              <div>35+</div>
            </div>
          </div>
          <div className={cs.r}>
            <div className={cs.tit}>Top Tweet of the week</div>
            <div className={cs.li}>
              <span>@ZTD</span>
              <span>May 16</span>
              <span>1k</span>
              <span>297.9k</span>
            </div>
            <div className={cs.tip}>
              Get Your unisway interface fees refunded on pancakesZTD,up to $9M!Get Your unisway interface fees refunded
              on pancakesZTD,up to $9M!
            </div>
          </div>
        </div>

        <img className={cs.z52} src="/ztd/home/Group 52@2x.png" />
        <img className={cs.z54} src="/ztd/home/Group 54@2x.png" />
        <img className={cs.z542} src="/ztd/home/Group 54@2x.png" />
        <img className={cs.z55} src="/ztd/home/Group 55@2x.png" />
      </div>
    </section>
  )
}
