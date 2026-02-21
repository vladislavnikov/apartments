'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

type Props = { images: { src: string; alt?: string }[] }

export default function VerticalImageCarousel({ images }: Props) {
  return (
    <Swiper
      direction="vertical"
      slidesPerView={1}
      loop={images.length > 1}
      speed={800}
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true }}
      mousewheel={{ forceToAxis: true }}
      keyboard={{ enabled: true }}
      modules={[Pagination, Mousewheel, Keyboard, Autoplay]}
      className="bg-black w-full h-[250px] sm:h-[300px] md:h-full"
    >
      {images.map((img, i) => (
        <SwiperSlide key={img.src} className="w-full h-full">
          <img
            src={img.src}
            alt={img.alt ?? `Slide ${i + 1}`}
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
