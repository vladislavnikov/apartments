'use client'

export default function HeroVideo() {
  return (
    <video
      src="/home/homePage/heroVideo.mp4"
      autoPlay
      loop
      muted
      playsInline
      preload="metadata"
      className="h-full w-full object-cover"
    />
  )
}
