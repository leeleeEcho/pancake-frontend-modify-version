import cs from './Row4.module.scss'

export default function Row4() {
  return (
    <section className={cs.root}>
      <div className={cs.content}>
        <img className={cs.img1} src="/ztd/home/new/pic5.png" />
        <img className={cs.img2} src="/ztd/home/new/pic5.png" />

        <div className={cs.title}>
          <span>Join our Community</span>
          <img className={cs.star1} src="/ztd/home/new/star.png" />
          <img className={cs.star2} src="/ztd/home/new/star.png" />
          <img className={cs.star3} src="/ztd/home/new/star.png" />
        </div>

        <div className={cs.tip}>Together we can make the ZTD community even stronger</div>

        <div className={cs.infobox}>
          <div className={cs.left}>
            <div className={cs.item}>
              <div>Community member</div>
              <div>2.0M +</div>
            </div>
            <div className={cs.item}>
              <div>Community language</div>
              <div>10 +</div>
            </div>
            <div className={cs.item}>
              <div>Community ambassador</div>
              <div>35 +</div>
            </div>
          </div>
          <div className={cs.right}>
            <div className={cs.t}>Top Tweet of the week</div>
            <div className={cs.i}>
              <span>@ZTD</span>
              <span>May 16</span>
              <span>1k</span>
              <span>297.9k</span>
            </div>
            <div className={cs.info}>
              Get Your unisway interface fees refunded on pancakesZTD,up to $9M!Get Your unisway interface fees refunded
              on pancakesZTD,up to $9M!
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
