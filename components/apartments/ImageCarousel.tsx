'use client'

import { useEffect, useMemo, useState } from 'react'

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

  const prev = () => setActive((p) => (p - 1 + imgs.length) % imgs.length)
  const next = () => setActive((p) => (p + 1) % imgs.length)

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
  }, [open, hasMany, imgs.length])

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
          className="w-full h-full"
          aria-label="Open gallery"
        >
          <img
            src={imgs[safe].url}
            alt={imgs[safe].alt || title}
            className="w-full h-full object-contain object-center"
            loading="lazy"
            draggable={false}
          />
        </button>

        {hasMany && (
          <div className="absolute z-10 left-1/2 -translate-x-1/2 bottom-3 flex gap-2">
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
                className={`h-2.5 w-2.5 rounded-full transition-all ${
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
              className="absolute z-10 left-2 top-1/2 -translate-y-1/2"
            >
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  className="w-4 h-4 text-white pr-0.5"
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
              className="absolute z-10 right-2 top-1/2 -translate-y-1/2"
            >
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  className="w-4 h-4 text-white pl-0.5"
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

      {/* --- Modal (unchanged design) --- */}
      {open && (
        <div
          className="fixed inset-0 z-[999] bg-black/50"
          role="dialog"
          aria-modal="true"
          aria-label={`${title} gallery`}
          onClick={() => setOpen(false)}
        >
          <div
            className="mx-auto w-full max-w-4xl h-[75vh] mt-[10vh] px-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-full rounded-xl overflow-hidden bg-white shadow-2xl">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="absolute right-3 top-3 z-20 inline-flex items-center justify-center w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 text-white"
                aria-label="Close"
              >
                ✕
              </button>

              <div className="relative h-[78%] flex flex-col items-center justify-center gap-4">
                <h2 className="text-xl font-semibold text-gray-900 text-center px-4">{title}</h2>

                <img
                  src={imgs[safe].url}
                  alt={imgs[safe].alt || title}
                  className="max-h-[85%] max-w-full object-contain select-none"
                  draggable={false}
                />

                {hasMany && (
                  <>
                    <button
                      type="button"
                      aria-label="Previous"
                      onClick={prev}
                      className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/45 hover:bg-black/65 text-white flex items-center justify-center"
                    >
                      ‹
                    </button>

                    <button
                      type="button"
                      aria-label="Next"
                      onClick={next}
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/45 hover:bg-black/65 text-white flex items-center justify-center"
                    >
                      ›
                    </button>
                  </>
                )}
              </div>

              {hasMany && (
                <div className="h-[22%] bg-white backdrop-blur-sm">
                  <div className="h-full flex gap-2 overflow-x-auto px-2 items-center">
                    {imgs.map((img, idx) => {
                      const activeThumb = idx === safe
                      return (
                        <button
                          key={img.id ?? idx}
                          type="button"
                          onClick={() => setActive(idx)}
                          className={`h-full aspect-[4/3] rounded-lg overflow-hidden transition-all focus:outline-none ${
                            activeThumb ? 'ring-2 ring-white' : ''
                          }`}
                          aria-label={`Go to image ${idx + 1}`}
                          aria-current={activeThumb}
                          title={`Image ${idx + 1}`}
                        >
                          <img
                            src={img.url}
                            alt={img.alt || title}
                            className={`h-full w-full object-cover transition-opacity ${
                              activeThumb ? 'opacity-100' : 'opacity-40 hover:opacity-70'
                            }`}
                            draggable={false}
                          />
                        </button>
                      )
                    })}
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
