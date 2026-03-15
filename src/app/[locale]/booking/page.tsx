import HorizontalImageCarousel from 'components/booking/HorizontalImageCarousel'
import { Locale } from '@/shared/enum'
import AnimateIn from './animation'

export default async function Contact({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const loc: Locale = locale === 'bg' ? Locale.BG : Locale.EN

  const images = [
    { src: '/booking/carousel/1.jpg', alt: 'Booking 1' },
    { src: '/booking/carousel/2.jpg', alt: 'Booking 2' },
    { src: '/booking/carousel/3.jpg', alt: 'Booking 3' },
    { src: '/booking/carousel/4.jpg', alt: 'Booking 4' },
    { src: '/booking/carousel/5.jpg', alt: 'Booking 5' },
  ]

  const content =
    loc === 'en'
      ? {
          text: <>Looking to book an apartment or need more information?</>,
          address: '1 Mostova Street, Plovdiv, BG',
        }
      : {
          text: <>Искате да резервирате апартамент или имате нужда от повече информация?</>,
          address: 'ул. Мостова 1, Пловдив, България',
        }

  return (
    <section className="w-full h-auto flex flex-col">
      <div className="w-full">
        <div className="max-w-3xl mx-auto px-5 md:px-7 text-center py-3 md:py-7">
          <AnimateIn from="top">
            <p className="mx-auto max-w-3xl text-2xl md:text-3xl text-gray-900">{content.text}</p>
          </AnimateIn>
        </div>
      </div>

      <div className="max-w-5xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-6 mt-3 md:mt-0 px-4 sm:px-6">
        <AnimateIn from="left" className="flex flex-col gap-4 justify-center md:col-span-2">
          <div className="flex flex-col gap-4 justify-center">
            <div className="grid grid-cols-[auto_auto] gap-x-3 gap-y-4 items-center justify-center mx-auto lg:translate-x-7">
              <img src="/booking/pictograms/phone.png" className="w-6 h-6" alt="phone" />
              <p className="text-black text-base sm:text-lg md:text-xl">+359 899 100 537</p>

              <img src="/booking/pictograms/email.png" className="w-6 h-6" alt="email" />
              <p className="text-black text-base sm:text-lg md:text-xl">office@todorov-co.com</p>

              <img src="/booking/pictograms/facebook.png" className="w-6 h-6" alt="facebook" />
              <a
                href="https://www.facebook.com/profile.php?id=61578379520805"
                target="_blank"
                rel="noopener noreferrer"
                className="!text-black text-base sm:text-lg md:text-xl no-underline hover:opacity-70 transition-opacity"
              >
                Apartments by the river
              </a>

              <img src="/booking/pictograms/instagram.png" className="w-6 h-6" alt="instagram" />
              <a
                href="https://www.instagram.com/apartmentsbytheriver?igsh=MWc4bHd6bm45cHRl"
                target="_blank"
                rel="noopener noreferrer"
                className="!text-black text-base sm:text-lg md:text-xl no-underline hover:opacity-70 transition-opacity"
              >
                @apartmentsbytheriver
              </a>

              <img src="/booking/pictograms/map.png" className="w-6 h-6" alt="map" />
              <p className="text-black text-base sm:text-lg md:text-xl">{content.address}</p>
            </div>
          </div>
        </AnimateIn>
      </div>

      <AnimateIn from="right" className="w-full mt-6">
        <div className="w-full h-[300px] sm:h-[360px] md:h-[400px] overflow-hidden">
          <iframe
            title="Apartments by the River"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2958.214!2d24.748!3d42.15!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDLCsDA5JzAwLjAiTiAyNMKwNDQnNTIuOCJF!5e0!3m2!1sen!2sbg!4v123456789"
            className="w-full h-full"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </AnimateIn>

      <div className="w-full">
        <HorizontalImageCarousel images={images} />
      </div>
    </section>
  )
}
