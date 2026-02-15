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
        <div className="absolute z-30 left-1/2 -translate-x-1/2 bottom-3 flex gap-2">
          {imgs.map((img, idx) => (
            <button
              key={img.id ?? idx}
              type="button"
              aria-label={`Slide ${idx + 1}`}
              aria-current={idx === safe}
              onClick={() => setActive(idx)}
              className={`h-2.5 w-2.5 rounded-full border border-white/80 transition-all ${
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
            className="absolute z-30 left-2 top-1/2 -translate-y-1/2 group"
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
            onClick={next}
            className="absolute z-30 right-2 top-1/2 -translate-y-1/2 group"
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
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </span>
          </button>
        </>
      )}
    </div>
  )
}
