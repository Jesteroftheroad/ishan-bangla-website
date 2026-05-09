import { useEffect, useRef } from 'react'
import Hls from 'hls.js'

const HLS_SRC =
  'https://stream.mux.com/BuGGTsiXq1T00WUb8qfURrHkTCbhrkfFLSv4uAOZzdhw.m3u8'

interface Props {
  className?: string
  overlayClass?: string
}

/**
 * Plays the Ishan Bangla MUX HLS stream as a silent looping background video.
 * Falls back to native HLS on Safari; uses hls.js on all other browsers.
 */
export default function VideoPlayer({ className = '', overlayClass = '' }: Props) {
  const ref = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = ref.current
    if (!video) return

    // Safari supports HLS natively
    if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = HLS_SRC
      return
    }

    if (!Hls.isSupported()) return

    const hls = new Hls({ startLevel: -1, autoStartLoad: true })
    hls.loadSource(HLS_SRC)
    hls.attachMedia(video)
    hls.on(Hls.Events.MANIFEST_PARSED, () => video.play().catch(() => {}))

    return () => hls.destroy()
  }, [])

  return (
    <div className={`relative overflow-hidden bg-[#0D0D0D] ${className}`}>
      <video
        ref={ref}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Overlay */}
      <div className={`absolute inset-0 ${overlayClass || 'bg-[#0D0D0D]/60'}`} />
    </div>
  )
}
