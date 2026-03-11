'use client'
import { useEffect, useRef } from 'react'

export default function ApartmentCard({
  children,
  index,
}: {
  children: React.ReactNode
  index: number
}) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.remove('opacity-0', index % 2 === 0 ? '-translate-x-16' : 'translate-x-16')
          el.classList.add('opacity-100', 'translate-x-0')
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [index])

  const direction = index % 2 === 0 ? '-translate-x-16' : 'translate-x-16'

  return (
    <div ref={ref} className={`transition-all duration-700 ease-out opacity-0 ${direction}`}>
      {children}
    </div>
  )
}
