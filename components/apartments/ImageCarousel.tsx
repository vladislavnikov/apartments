'use client'

import { useCallback, useEffect, useMemo, useRef, useState } from 'react'

type Img = {
  id: number
  url: string
  alt?: string | null
}

export default function ImageCarousel({ images, title }: { images: Img[]; title: string }) {
  const imgs = useMemo(() => (images ?? []).filter((x) => !!x?.url), [images])
  const [active, setActive] = useState(0)

  const [open, setOpen] = useState(false)
  const safe = Math.min(active, Math.max(imgs.length - 1, 0))
  const hasMany = imgs.length > 1

  const prev = useCallback(() => {
    setActive((p) => {
      const n = imgs.length
      if (n <= 1) return 0
      return (p - 1 + n) % n
    })
  }, [imgs.length])

  const next = useCallback(() => {
    setActive((p) => {
      const n = imgs.length
      if (n <= 1) return 0
      return (p + 1) % n
    })
  }, [imgs.length])

  useEffect(() => {
    if (!open) return

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
      if (!hasMany) return
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }

    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, hasMany, prev, next])

  const thumbs = useMemo(() => imgs.map((img, idx) => ({ img, idx })), [imgs])

  const rotatedThumbs = useMemo(() => {
    const n = thumbs.length
    if (!n) return []
    const center = Math.floor(n / 2)
    const start = (safe - center + n) % n // ensures rotated[center].idx === safe
    return Array.from({ length: n }, (_, i) => thumbs[(start + i) % n])
  }, [thumbs, safe])

  const activeThumbRef = useRef<HTMLButtonElement | null>(null)

  useEffect(() => {
    if (!open || !hasMany) return
    activeThumbRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center',
    })
  }, [open, safe, hasMany])

  if (!imgs.length) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-600">
        No image
      </div>
    )
  }

  return (
    <>
      <div className="relative w-full h-full bg-gray-100 flex items-center justify-center">
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="w-full h-full cursor-pointer"
          aria-label="Open gallery"
        >
          <img
            src={imgs[safe].url}
            alt={imgs[safe].alt || title}
            className="w-full h-full object-cover scale-105 md:scale-150"
            loading="lazy"
            draggable={false}
          />
        </button>

        {hasMany && (
          <div className="absolute z-10 left-1/2 -translate-x-1/2 bottom-2 sm:bottom-3 flex gap-1.5 sm:gap-2">
            {imgs.map((img, idx) => (
              <button
                key={img.id ?? idx}
                type="button"
                aria-label={`Slide ${idx + 1}`}
                aria-current={idx === safe}
                onClick={(e) => {
                  e.stopPropagation()
                  setActive(idx)
                }}
                className={`h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full transition-all ${
                  idx === safe ? 'bg-white' : 'bg-white/40'
                }`}
              />
            ))}
          </div>
        )}

        {hasMany && (
          <>
            <button
              type="button"
              aria-label="Previous"
              onClick={(e) => {
                e.stopPropagation()
                prev()
              }}
              className="absolute z-10 left-1 sm:left-2 top-1/2 -translate-y-1/2"
            >
              <span className="inline-flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white pr-0.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
              </span>
            </button>

            <button
              type="button"
              aria-label="Next"
              onClick={(e) => {
                e.stopPropagation()
                next()
              }}
              className="absolute z-10 right-1 sm:right-2 top-1/2 -translate-y-1/2"
            >
              <span className="inline-flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white pl-0.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </span>
            </button>
          </>
        )}
      </div>

      {open && (
        <div
          className="fixed inset-0 z-[999] bg-black/40 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={`${title} gallery`}
          onClick={() => setOpen(false)}
        >
          <div
            className="mx-auto w-full max-w-6xl h-[90vh] sm:h-[85vh] mt-[5vh] px-3 sm:px-4 md:px-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-full rounded-xl overflow-hidden bg-white shadow-2xl flex flex-col">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="absolute right-3 top-3 z-30 inline-flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 transition-all"
                aria-label="Close"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  className="w-5 h-5 sm:w-6 sm:h-6"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="px-4 py-3 sm:py-4 border-b border-gray-200">
                <h2 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 text-center">
                  {title}
                </h2>
              </div>

              {/* Main image area */}
              <div className="relative flex-1 flex items-center justify-center bg-gray-50 p-4 sm:p-6 md:p-8 min-h-0">
                <div className="w-full h-full flex items-center justify-center">
                  <img
                    src={imgs[safe].url}
                    alt={imgs[safe].alt || title}
                    className="max-w-full max-h-full w-auto h-auto object-contain select-none"
                    style={{
                      width: 'auto',
                      height: 'auto',
                      maxWidth: '100%',
                      maxHeight: '100%',
                      objectFit: 'contain',
                    }}
                    draggable={false}
                    loading="eager"
                  />
                </div>

                {/* Navigation arrows */}
                {hasMany && (
                  <>
                    <button
                      type="button"
                      aria-label="Previous"
                      onClick={prev}
                      className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/90 hover:bg-white shadow-lg border border-gray-200 text-gray-700 flex items-center justify-center transition-all hover:scale-110"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={3}
                        stroke="currentColor"
                        className="w-5 h-5 sm:w-6 sm:h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 19.5L8.25 12l7.5-7.5"
                        />
                      </svg>
                    </button>

                    <button
                      type="button"
                      aria-label="Next"
                      onClick={next}
                      className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/90 hover:bg-white shadow-lg border border-gray-200 text-gray-700 flex items-center justify-center transition-all hover:scale-110"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={3}
                        stroke="currentColor"
                        className="w-5 h-5 sm:w-6 sm:h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M8.25 4.5l7.5 7.5-7.5 7.5"
                        />
                      </svg>
                    </button>
                  </>
                )}

                {/* Image counter */}
                {hasMany && (
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-white/90 backdrop-blur-sm shadow-md border border-gray-200 text-gray-700 text-sm font-medium">
                    {safe + 1} / {imgs.length}
                  </div>
                )}
              </div>

              {/* Thumbnail strip (enhanced) */}
              {hasMany && (
                <div className="border-t border-gray-200 bg-gray-50">
                  <div className="h-24 sm:h-28 md:h-32 px-2 sm:px-2 py-1 sm:py-1 overflow-visible flex items-center justify-center w-full">
                    <div
                      className={[
                        'h-full flex gap-2 sm:gap-3 items-center',
                        'overflow-x-auto overflow-y-visible',
                        'scroll-smooth snap-x snap-mandatory',
                        'py-2 w-fit',
                        '[scrollbar-width:none]',
                        '[-ms-overflow-style:none]',
                        '[&::-webkit-scrollbar]:hidden',
                      ].join(' ')}
                    >
                      {rotatedThumbs.map(({ img, idx }, renderIdx) => {
                        const activeThumb = idx === safe

                        return (
                          <button
                            key={`${img.id}-${idx}-${renderIdx}`}
                            ref={activeThumb ? activeThumbRef : null}
                            type="button"
                            onClick={() => setActive(idx)}
                            className={[
                              'flex-shrink-0 h-full aspect-[4/3]',
                              'rounded-lg border-2 overflow-hidden transition-all focus:outline-none',
                              'snap-center',
                              activeThumb
                                ? 'border-gray-900 ring-2 ring-gray-400 shadow-md scale-[1.03]'
                                : 'border-gray-300 hover:border-gray-500 opacity-70 hover:opacity-100',
                            ].join(' ')}
                            aria-label={`Go to image ${idx + 1}`}
                            aria-current={activeThumb}
                            title={`Image ${idx + 1}`}
                          >
                            <img
                              src={img.url}
                              alt={img.alt || title}
                              className={[
                                'w-full h-full object-cover transition-transform',
                                activeThumb ? 'scale-105' : 'hover:scale-105',
                              ].join(' ')}
                              draggable={false}
                            />
                          </button>
                        )
                      })}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
