'use client'
import { useEffect, useRef, useState } from 'react'

export default function ApartmentCard({
  children,
  index,
}: {
  children: React.ReactNode
  index: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true)
      },
      { threshold: 0.1 },
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const direction = index % 2 === 0 ? '-translate-x-16' : 'translate-x-16'

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${visible ? 'opacity-100 translate-x-0' : `opacity-0 ${direction}`}`}
    >
      {children}
    </div>
  )
}
