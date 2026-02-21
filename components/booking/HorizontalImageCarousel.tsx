'use client'

import { useMemo, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import { Spinner } from '@heroui/spinner'

type Props = { images: { url: string; alt?: string | null }[] }

export default function HorizontalImageCarousel({ images }: Props) {
  const duplicatedImages = useMemo(() => (images ? [...images, ...images] : []), [images])
  const [loaded, setLoaded] = useState<Record<number, boolean>>({})

  if (!images || images.length === 0) return null

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
          allowTouchMove
          freeMode
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 24 },
            1024: { slidesPerView: 3, spaceBetween: 32 },
          }}
          modules={[Autoplay]}
          className="[&_.swiper-wrapper]:!pb-0 [&_.swiper]:!pb-0 [&]:!pb-0"
          style={{ paddingBottom: 0, marginBottom: 0 }}
        >
          {duplicatedImages.map((img, i) => {
            const isLoaded = !!loaded[i]

            return (
              <SwiperSlide
                key={`${img.url}-${i}`}
                className="!w-[calc(50%-8px)] sm:!w-[calc(50%-12px)] md:!w-[calc(33.333%-10.67px)]"
              >
                <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200 h-[200px] sm:h-[300px] md:h-[350px] lg:h-[400px] relative">
                  {!isLoaded && (
                    <div className="absolute inset-0 grid place-items-center bg-white">
                      <Spinner color="warning" label="Loading..." labelColor="warning" />
                    </div>
                  )}

                  <img
                    src={img.url}
                    alt={img.alt || `Apartment image ${i + 1}`}
                    loading="lazy"
                    className={`w-full h-full object-cover transition-opacity duration-300 ${
                      isLoaded ? 'opacity-100' : 'opacity-0'
                    }`}
                    onLoad={() => setLoaded((prev) => ({ ...prev, [i]: true }))}
                    onError={() => setLoaded((prev) => ({ ...prev, [i]: true }))} // hide spinner even if broken
                  />
                </div>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </div>
  )
}
