import classNames from 'classnames'
import { random } from 'lodash'
import { useState } from 'react'
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'
import cs from './row1.module.scss'

export default function Row1() {
  const [swiperDom, setSwiperDom] = useState<any>(null)
  const onPrev = () => {
    swiperDom?.slidePrev()
  }

  const onNext = () => {
    swiperDom?.slideNext()
  }

  const [shines, setShines] = useState([
    { v: '1rem 0', ani: true },
    { v: '8rem 1rem', ani: true },
    { v: '14rem 3rem', ani: true },
  ])

  const onShineEnd = (no: number) => {
    const shinesTemp = [...shines]
    shinesTemp[no].ani = false
    setShines(shinesTemp)
    setTimeout(() => {
      shinesTemp[no] = { v: `${random(5 * no, 6 + 6 * no)}rem ${random(0, 6)}rem`, ani: true }
      setShines(shinesTemp)
    }, 32)
  }

  return (
    <section className={cs.homerow1}>
      <div
        className={classNames(cs.shing, { [cs.ani]: shines[0].ani })}
        style={{ translate: shines[0].v }}
        onAnimationEnd={() => onShineEnd(0)}
      ></div>
      <div
        className={classNames(cs.shing, cs.s1, { [cs.ani]: shines[1].ani })}
        style={{ translate: shines[1].v }}
        onAnimationEnd={() => onShineEnd(1)}
      ></div>
      <div
        className={classNames(cs.shing, cs.s2, { [cs.ani]: shines[2].ani })}
        style={{ translate: shines[2].v }}
        onAnimationEnd={() => onShineEnd(2)}
      ></div>
      <div className={cs.bannerbox}>
        <Swiper onSwiper={setSwiperDom}>
          <SwiperSlide className={cs.bannerSlide}>
            <div className={cs.banner}>
              <div className={cs.btxt}>
                <div className={cs.wordbox}>
                  <img className={cs.star} src="/ztd/home/star.png" />
                  <div className={cs.t}>Trading Reward</div>
                  <div className={cs.word}>
                    For the first 1000 users of daily transactions, the platform will waive fees and reward up to 100ZTD
                    for the first daily transaction.
                  </div>
                </div>
                <img className={cs.line} src="/ztd/home/pic1@2x.png" />
                <div className={cs.control}>
                  <div className={cs.left} onClick={onPrev}>
                    <img src="/ztd/home/icon_left@2x.png" />
                  </div>
                  <div className={cs.right} onClick={onNext}>
                    <img src="/ztd/home/icon_right@2x.png" />
                  </div>
                </div>
              </div>
              <img className={cs.bimg} src="/ztd/home/banner03.png" />
            </div>
          </SwiperSlide>
          <SwiperSlide className={cs.bannerSlide}>
            <div className={cs.banner}>
              <div className={cs.btxt}>
                <div className={cs.wordbox}>
                  <img className={cs.star} src="/ztd/home/star.png" />
                  <div className={cs.t}>Enjoy 0% Provider Fees For 2 Weeks Only!</div>
                </div>
                <img className={cs.line} src="/ztd/home/pic1@2x.png" />
                <div className={cs.control}>
                  <div className={cs.left} onClick={onPrev}>
                    <img src="/ztd/home/icon_left@2x.png" />
                  </div>
                  <div className={cs.right} onClick={onNext}>
                    <img src="/ztd/home/icon_right@2x.png" />
                  </div>
                </div>
              </div>
              <img className={cs.bimg} src="/ztd/home/banner02.png" />
            </div>
          </SwiperSlide>
          <SwiperSlide className={cs.bannerSlide}>
            <div className={cs.banner}>
              <div className={cs.btxt}>
                <div className={cs.wordbox}>
                  <img className={cs.star} src="/ztd/home/star.png" />
                  <div className={cs.t}>Invitation with Gifts</div>
                  <div className={cs.word}>
                    Invite success respectively polite, airdrop reward waiting for you to get, the best 1000ZTD
                  </div>
                </div>
                <img className={cs.line} src="/ztd/home/pic1@2x.png" />
                <div className={cs.control}>
                  <div className={cs.left} onClick={onPrev}>
                    <img src="/ztd/home/icon_left@2x.png" />
                  </div>
                  <div className={cs.right} onClick={onNext}>
                    <img src="/ztd/home/icon_right@2x.png" />
                  </div>
                </div>
              </div>
              <img className={cs.bimg} src="/ztd/home/banner03.png" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className={cs.nextrow}>
        <div className={cs.words}>
          <div>
            <img src="/ztd/home/star.png" />
            <span>An innovative decentralized exchange that makes trading more secure.</span>
            <img src="/ztd/home/star.png" />
          </div>
          <div>
            <img src="/ztd/home/star.png" />
            <span>No deal is too hard, no deal is unsafe. </span>
            <img src="/ztd/home/star.png" />
          </div>
          <div>
            <img src="/ztd/home/star.png" />
            <span>Let you enjoy, love to use, like to use, help you achieve wealth.</span>
            <img src="/ztd/home/star.png" />
          </div>
        </div>
        <div className={cs.btns}>
          <div>Connect Wallet</div>
          <div>Trade Now</div>
        </div>
      </div>
    </section>
  )
}
