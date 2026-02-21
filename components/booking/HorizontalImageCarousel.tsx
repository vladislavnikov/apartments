'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'

type Props = { images: { url: string; alt?: string | null }[] }

export default function HorizontalImageCarousel({ images }: Props) {
  if (!images || images.length === 0) return null

  const duplicatedImages = [...images, ...images]

  return (
    <div className="w-full py-3 sm:py-4 md:py-6 bg-white overflow-hidden">
      <div className="w-full [&_.swiper]:!pb-0">
        <Swiper
          slidesPerView="auto"
          spaceBetween={16}
          loop={images.length > 3}
          speed={3000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          allowTouchMove={true}
          freeMode={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 24,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 32,
            },
          }}
          modules={[Autoplay]}
          className="[&_.swiper-wrapper]:!pb-0 [&_.swiper]:!pb-0 [&]:!pb-0"
          style={{ paddingBottom: 0, marginBottom: 0 }}
        >
          {duplicatedImages.map((img, i) => (
            <SwiperSlide
              key={`${img.url}-${i}`}
              className="!w-[calc(50%-8px)] sm:!w-[calc(50%-12px)] md:!w-[calc(33.333%-10.67px)]"
            >
              <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200 h-[200px] sm:h-[300px] md:h-[350px] lg:h-[400px]">
                <img
                  src={img.url}
                  alt={img.alt || `Apartment image ${i + 1}`}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}
