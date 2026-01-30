'use client'
import Image from 'next/image'
import React from 'react'
import { text } from 'stream/consumers'

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
  {
    title: 'Ancient Stadium',
    text: `Hidden beneath Plovdiv’s main pedestrian street, the Ancient Stadium reveals the city’s Roman past in an unexpected way. Once used for athletic competitions and public events, parts of the stadium remain visible today, seamlessly integrated into the modern urban environment. This unique blend of ancient ruins and contemporary city life highlights Plovdiv’s continuous history spanning thousands of years`,
    image: '/images/attractions/stadium.avif',
    reverse: false,
  },
  {
    title: 'Nebet Tepe',
    text: `Nebet Tepe is one of Plovdiv’s ancient hills and among the earliest settlement areas of the city. The site features archaeological remains dating back thousands of years, along with some of the best panoramic views of Plovdiv. It is a quiet and atmospheric spot, ideal for sunset walks and for experiencing the deep historical layers that define the city.`,
    image: '/images/attractions/nebet.avif',
    reverse: true,
  },
  {
    title: 'Tsar Simeon Garden',
    text: `Tsar Simeon Garden is a central green oasis where locals and visitors come to relax, stroll, and enjoy the city’s lively rhythm. With shaded walkways, fountains, and open spaces, the park offers a peaceful escape just minutes from historic landmarks and busy streets. In the evenings, the nearby Singing Fountains add music and light, creating a vibrant yet relaxing atmosphere.`,
    image: '/images/attractions/garden.avif',
    reverse: false,
  },
  {
    title: 'Kapana District',
    text: `The Kapana District is Plovdiv’s creative heart, known for its narrow streets, artistic spirit, and lively atmosphere. Once a traditional craftsmen’s area, Kapana has transformed into a vibrant cultural quarter filled with independent boutiques, art studios, cafés, bars, and restaurants. Colorful street art, creative installations, and frequent cultural events give the neighborhood a dynamic and modern feel, while its historic layout preserves its authentic character.`,
    image: '/images/attractions/kapana.avif',
    reverse: true,
  },
  {
    title: 'Regional Ethnographic Museum',
    text: `TThe Regional Ethnographic Museum is one of the city’s most impressive cultural landmarks, housed in the beautifully preserved Kuyumdzhioglu House in the Old Town. The museum offers insight into traditional Bulgarian life through rich exhibitions of folk costumes, crafts, household items, and customs from the region. A visit to the museum provides a deeper understanding of Plovdiv’s cultural identity and the traditions that have shaped the city over centuries.`,
    image: '/images/attractions/museum.avif',
    reverse: false,
  },
  {
    title: 'Rowing Canal',
    text: `The Rowing Canal, originally built for professional rowing competitions, is now a popular destination for walking, jogging, cycling, and relaxing by the water. Lined with greenery and open paths, it offers a peaceful escape from the city center while still being easily accessible. With scenic views, fresh air, and a relaxed atmosphere, the Rowing Canal is ideal for outdoor activities, sunset walks, and enjoying a quieter side of Plovdiv.`,
    image: '/images/attractions/canal.avif',
    reverse: true,
  },
]

export default function ExplorePlovdiv() {
  return (
    <>
      <section className="bg-white">
        <h2 className="text-2xl font-medium text-center py-5 text-black">Explore Plovdiv</h2>
        {places.map((place, index) => (
          <div key={index} className={place.reverse ? 'bg-white' : 'bg-gray-100'}>
            <div className="max-w-3xl mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-center">
                <div className={place.reverse ? 'md:order-2' : ''}>
                  <Image
                    src={place.image}
                    alt={place.title}
                    width={700}
                    height={450}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className={place.reverse ? 'md:order-1' : ''}>
                  <h3 className="text-lg font-semibold mb-4 text-black text-center">
                    {place.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-700 text-center">{place.text}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
      <div className="bg-white py-5"></div>
    </>
  )
}
