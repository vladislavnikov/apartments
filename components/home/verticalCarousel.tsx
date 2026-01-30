import React, { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'

interface HorizontalCarouselProps {
  images: { src: string; alt: string; text: string }[]
}

const HorizontalCarousel: React.FC<HorizontalCarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const carouselRef = useRef(null)

  // GSAP animation for auto sliding
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
    }, 3000) // Change every 3 seconds

    return () => clearInterval(interval) // Clean up on component unmount
  }, [images.length])

  useEffect(() => {
    // GSAP animation to smoothly scroll to the next image
    if (carouselRef.current) {
      gsap.to(carouselRef.current, {
        duration: 1,
        x: `-${currentIndex * 100}%`, // Scroll horizontally
        ease: 'power2.inOut',
      })
    }
  }, [currentIndex])

  return (
    <div className="relative overflow-hidden bg-[#50d71e]">
      <div
        ref={carouselRef}
        className="flex transition-transform duration-1000 ease-in-out"
        style={{
          width: `${images.length * 100}%`,
        }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="relative w-full h-96"
            style={{
              backgroundImage: `url(${image.src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 bg-black opacity-40"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-3xl font-bold">
              {image.text}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default HorizontalCarousel
