'use client'
import { useEffect, useRef, useState } from 'react'

type Props = {
  images: { src?: string; url?: string; alt?: string }[]
}

function getUrl(img: { src?: string; url?: string }) {
  return img.url ?? img.src ?? ''
}

function buildBase(images: Props['images']) {
  if (images.length >= 6) return images
  return [...images, ...images, ...images]
}

function ImageGroup({
  images,
  hidden = false,
  groupRef,
}: {
  images: Props['images']
  hidden?: boolean
  groupRef?: React.RefObject<HTMLDivElement | null>
}) {
  return (
    <div
      ref={groupRef}
      className="flex shrink-0 gap-2 pr-2 sm:gap-3 sm:pr-3 md:gap-4 md:pr-4"
      aria-hidden={hidden}
    >
      {images.map((img, i) => (
        <div key={`${hidden ? 'clone' : 'main'}-${i}`} className="flex-shrink-0">
          <div className="relative w-[140px] h-[140px] sm:w-[200px] sm:h-[200px] md:w-[240px] md:h-[240px] overflow-hidden rounded-2xl border border-gray-200 shadow-lg">
            <img
              src={getUrl(img)}
              alt={img.alt || `Apartment image ${i + 1}`}
              loading="lazy"
              className="absolute inset-0 block !h-full !w-full object-cover"
            />
          </div>
        </div>
      ))}
    </div>
  )
}

export default function HorizontalImageCarousel({ images }: Props) {
  const groupRef = useRef<HTMLDivElement>(null)
  const [groupWidth, setGroupWidth] = useState(0)

  if (!images?.length) return null

  const base = buildBase(images)

  useEffect(() => {
    const measure = () => {
      if (groupRef.current) {
        setGroupWidth(groupRef.current.getBoundingClientRect().width)
      }
    }

    measure()

    const resizeObserver = new ResizeObserver(measure)
    if (groupRef.current) {
      resizeObserver.observe(groupRef.current)
    }

    window.addEventListener('resize', measure)

    return () => {
      resizeObserver.disconnect()
      window.removeEventListener('resize', measure)
    }
  }, [base.length])

  return (
    <div className="w-full py-3 sm:py-4 md:py-6 bg-[var(--color-navbar)] overflow-hidden">
      <style>{`
        .carousel-track {
          display: flex;
          width: max-content;
          will-change: transform;
        }

        .carousel-track.is-ready {
          animation: marquee var(--duration, 120s) linear infinite;
        }

        .carousel-track:hover {
          animation-play-state: paused;
        }

        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(calc(-1px * var(--scroll-width)));
          }
        }
      `}</style>

      <div className="overflow-hidden">
        <div
          className={`carousel-track ${groupWidth ? 'is-ready' : ''}`}
          style={
            {
              ['--scroll-width' as string]: groupWidth,
              ['--duration' as string]: '90s',
            } as React.CSSProperties
          }
        >
          <ImageGroup images={base} groupRef={groupRef} />
          <ImageGroup images={base} hidden />
        </div>
      </div>
    </div>
  )
}
