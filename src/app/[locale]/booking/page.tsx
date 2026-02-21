import { getApartments } from '@/app/api/apartments'
import HorizontalImageCarousel from 'components/booking/HorizontalImageCarousel'
import { Locale } from '@/shared/enum'

export default async function Contact({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const loc: Locale = locale === 'bg' ? Locale.BG : Locale.EN

  const apartments = await getApartments(loc)
  const allImages =
    apartments?.sections?.flatMap((section) => section.images ?? []).filter((img) => img?.url) ?? []

  const content =
    loc === 'en'
      ? {
          title: 'Get in Touch',
          text: (
            <>
              Want to book an apartment or need more information?
              <br />
              Feel free to reach out to us via phone <em>(WhatsApp, Viber)</em> or email, and
              we&apos;ll respond promptly to assist you.
              <br />
              We are eager to hear from you!
            </>
          ),
        }
      : {
          title: 'Свържете се с нас',
          text: (
            <>
              Искате ли да резервирате апартамент или имате нужда от повече информация?
              <br />
              Чувствайте се свободни да се свържете с нас по телефон <em>(WhatsApp, Viber)</em> или
              имейл, и ние ще отговорим бързо, за да ви помогнем.
              <br />
              Очакваме с нетърпение да чуем от вас!
            </>
          ),
        }

  return (
    <section className="w-full h-auto flex flex-col">
      <div className="bg-white flex-grow flex flex-col">
        <div className="w-full bg-white">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-center py-3 sm:py-4 text-black">
            {content.title}
          </h2>
        </div>
        <div className="w-full bg-gray-100">
          <div className="max-w-3xl mx-auto px-3 sm:px-4 md:px-6 text-center py-3 sm:py-2 md:py-2">
            <p className="inline-block max-w-md text-sm sm:text-base md:text-lg leading-relaxed text-gray-900 text-center">
              {content.text}
            </p>
          </div>
        </div>

        {allImages.length > 0 && (
          <div className="w-full">
            <HorizontalImageCarousel images={allImages} />
          </div>
        )}
      </div>
    </section>
  )
}
