'use client'

import { useEffect, useRef, useState } from 'react'

type Props = {
  children: React.ReactNode
  from: 'left' | 'right' | 'top'
  className?: string
}

export default function AnimateIn({ children, from, className = '' }: Props) {
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

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        visible
          ? 'opacity-100 translate-x-0 translate-y-0'
          : from === 'left'
            ? 'opacity-0 -translate-x-16'
            : from === 'right'
              ? 'opacity-0 translate-x-16'
              : 'opacity-0 -translate-y-16'
      } ${className}`}
    >
      {children}
    </div>
  )
}
