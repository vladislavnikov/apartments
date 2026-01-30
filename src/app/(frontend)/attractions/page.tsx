'use client'
import Image from 'next/image'
import React from 'react'

const places = [
  {
    title: 'Old Town of Plovdiv',
    text: `The Old Town of Plovdiv is a beautifully preserved historic area where
    cobblestone streets, colorful Revival-era houses, and quiet courtyards
    create a timeless atmosphere. This district is home to small museums,
    art galleries, and traditional cafés, offering visitors a deeper look
    into the city’s cultural and architectural heritage.`,
    image: '/images/attractions/oldTown.avif',
    reverse: false,
  },
  {
    title: 'Ancient Theatre',
    text: `The Ancient Theatre is one of the best-preserved Roman theatres in the
    world and a defining landmark of Plovdiv. Built in the 1st century AD,
    the theatre still hosts concerts and performances, blending ancient
    history with modern cultural life.`,
    image: '/images/attractions/theatre.avif',
    reverse: true,
  },
]

export default function ExplorePlovdiv() {
  return (
    <section className="bg-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-medium text-center mb-12 text-black">Explore Plovdiv</h2>
        <div className="space-y-16">
          {places.map((place, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${
                place.reverse ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className={place.reverse ? 'md:order-2' : ''}>
                <Image
                  src={place.image}
                  alt={place.title}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div
                className={
                  place.reverse
                    ? 'md:order-1 text-center md:text-right'
                    : 'text-center md:text-left'
                }
              >
                <h3 className="text-lg font-semibold mb-4 text-black text-center ">
                  {place.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-700 text-center">{place.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
