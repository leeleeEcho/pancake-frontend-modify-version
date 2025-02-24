import cs from './CardSwiper.module.scss'
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'
import Card from './Row3Card'
interface Props {
  cards: any[]
}

export default function CardSwiper(props: Props) {
  return (
    <div className={cs.root}>
      <Swiper slidesPerView={1.2} spaceBetween={20}>
        {props.cards.map((item) => {
          return (
            <SwiperSlide key={item.title} className={cs.bannerSlide}>
              <Card url={item.url} title={item.title} tip={item.tip} />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}
