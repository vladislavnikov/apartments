'use client'

export default function HeroVideo() {
  return (
    <video
      src="/images/homePage/heroVideo.mp4"
      autoPlay
      loop
      muted
      playsInline
      className="w-full h-full object-cover"
    />
  )
}
