import cs from './Row2.module.scss'
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useMemo, useState } from 'react'
import classNames from 'classnames'
import { Autoplay } from 'swiper/modules'
import 'swiper/css/autoplay'

export default function Row2() {
  const [swiperDom, setSwiperDom] = useState<any>(null)

  const [activeIndex, setActiveIndex] = useState(0)
  const onSetSwiperIndex = (index: number) => {
    swiperDom.slideTo(index, 300, false)
  }

  const onSlideChange = () => {
    setActiveIndex(swiperDom.activeIndex)
  }

  return (
    <section className={cs.root}>
      <div className={cs.component}>
        <Swiper modules={[Autoplay]} autoplay onSwiper={setSwiperDom} onSlideChange={() => onSlideChange()}>
          <SwiperSlide className={cs.bannerSlide}>
            <div className={cs.item}>
              <div className={cs.imgBox}>
                <img src="/ztd/home/new/banner1@2x.png" />
              </div>
              <div className={cs.words}>
                <div className={cs.t}>Trading Teward</div>
                <div className={cs.i}>
                  For the first 1000 users of daily transactions, the platform will waive fees and reward up to 100ZTD
                  for the first daily transaction.
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className={cs.bannerSlide}>
            <div className={cs.item}>
              <div className={cs.imgBox}>
                <img src="/ztd/home/new/banner2@2x.png" />
              </div>
              <div className={cs.words}>
                <div className={cs.t}>Enjoy 0% Provider Fees For 2 Weeks Only!</div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className={cs.bannerSlide}>
            <div className={cs.item}>
              <div className={cs.imgBox}>
                <img src="/ztd/home/new/banner3@2x.png" />
              </div>
              <div className={cs.words}>
                <div className={cs.t}>Invitation with Gifts</div>
                <div className={cs.i}>
                  Invite success respectively polite, airdrop reward waiting for you to get, the best 1000ZTD
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        <div className={cs.control}>
          {[1, 2, 3].map((item, index) => {
            return (
              <div
                className={classNames(cs.dot, { [cs.chose]: index === activeIndex })}
                key={item}
                onClick={() => onSetSwiperIndex(index)}
              ></div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
