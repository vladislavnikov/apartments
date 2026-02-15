'use client'

import { useMemo, useState } from 'react'

type Img = {
  id: number
  url: string
  alt?: string | null
}

export default function ImageCarousel({ images, title }: { images: Img[]; title: string }) {
  const imgs = useMemo(() => (images ?? []).filter((x) => !!x?.url), [images])
  const [active, setActive] = useState(0)

  if (!imgs.length) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-600">
        No image
      </div>
    )
  }

  const hasMany = imgs.length > 1
  const safe = Math.min(active, imgs.length - 1)

  const prev = () => setActive((p) => (p - 1 + imgs.length) % imgs.length)
  const next = () => setActive((p) => (p + 1) % imgs.length)

  return (
    <div className="relative w-full h-full object-fill bg-gray-100 flex items-center justify-center">
      <img
        src={imgs[safe].url}
        alt={imgs[safe].alt || title}
        className="w-full h-full object-cover"
        loading="lazy"
        draggable={false}
      />
      {hasMany && (
        <div className="absolute z-30 left-1/2 -translate-x-1/2 bottom-3 flex gap-2">
          {imgs.map((img, idx) => (
            <button
              key={img.id ?? idx}
              type="button"
              aria-label={`Slide ${idx + 1}`}
              aria-current={idx === safe}
              onClick={() => setActive(idx)}
              className={`h-2.5 w-2.5 rounded-full border border-white/80 ${
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
            onClick={prev}
            className="absolute z-30 left-0 top-0 h-full px-4 flex items-center"
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black/25 hover:bg-black/40 text-white text-2xl">
              ‹
            </span>
          </button>

          <button
            type="button"
            aria-label="Next"
            onClick={next}
            className="absolute z-30 right-0 top-0 h-full px-4 flex items-center"
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black/25 hover:bg-black/40 text-white text-2xl">
              ›
            </span>
          </button>
        </>
      )}
    </div>
  )
}
