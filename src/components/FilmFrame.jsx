import { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import { Volume2, VolumeX } from 'lucide-react'

const fmtTime = s => {
  if (!s || !isFinite(s)) return '0:00'
  const m = Math.floor(s / 60)
  const sec = Math.floor(s % 60)
  return `${m}:${String(sec).padStart(2, '0')}`
}

/**
 * A YouTube film that *reveals on scroll* — the frame lifts, sharpens, and
 * scales into place as it enters the viewport. It auto-plays muted and loops;
 * the sound toggle drives the YouTube JS API over postMessage, so muting and
 * unmuting never reloads or restarts the video. The iframe only mounts once in
 * view, keeping the page light.
 *
 * `showProgress` adds a playback progress bar + time readout, driven by the
 * YouTube IFrame API's `infoDelivery` events (useful for long films).
 */
export default function FilmFrame({ video, className = '', showProgress = false }) {
  const frameRef = useRef(null)
  const iframeRef = useRef(null)
  const inView = useInView(frameRef, { once: true, margin: '0px 0px -15% 0px' })
  const [muted, setMuted] = useState(true)
  const [time, setTime] = useState({ current: 0, duration: 0 })

  const { scrollYProgress } = useScroll({
    target: frameRef,
    offset: ['start end', 'center center'],
  })
  const scale = useTransform(scrollYProgress, [0, 1], [0.92, 1])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [0, 1])
  const y = useTransform(scrollYProgress, [0, 1], [50, 0])

  const post = func =>
    iframeRef.current?.contentWindow?.postMessage(
      JSON.stringify({ event: 'command', func, args: [] }),
      '*',
    )

  const toggleSound = () => {
    const next = !muted
    setMuted(next)
    post(next ? 'mute' : 'unMute')
  }

  // Subscribe to the player's progress events.
  useEffect(() => {
    if (!showProgress) return
    const onMessage = e => {
      if (typeof e.data !== 'string' || !e.data.includes('infoDelivery')) return
      let data
      try {
        data = JSON.parse(e.data)
      } catch {
        return
      }
      const info = data?.info
      if (info && typeof info.duration === 'number') {
        setTime({ current: info.currentTime || 0, duration: info.duration })
      }
    }
    window.addEventListener('message', onMessage)
    return () => window.removeEventListener('message', onMessage)
  }, [showProgress])

  // Once the iframe loads, ask the player to start sending us events.
  const startListening = () => {
    iframeRef.current?.contentWindow?.postMessage(
      JSON.stringify({ event: 'listening', id: video.id }),
      '*',
    )
  }

  const pct = time.duration ? (time.current / time.duration) * 100 : 0

  const src =
    `https://www.youtube-nocookie.com/embed/${video.id}` +
    `?autoplay=1&mute=1&loop=1&playlist=${video.id}` +
    `&controls=0&playsinline=1&modestbranding=1&rel=0&iv_load_policy=3&enablejsapi=1`

  return (
    <motion.figure
      ref={frameRef}
      style={{ scale, opacity, y }}
      className={`relative aspect-video overflow-hidden rounded-xl border border-line bg-black shadow-2xl ${className}`}
    >
      {inView && (
        <iframe
          ref={iframeRef}
          onLoad={showProgress ? startListening : undefined}
          className="absolute inset-0 h-full w-full"
          src={src}
          title={video.title}
          loading="lazy"
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
        />
      )}

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

      {/* Label / time readout */}
      <div className="pointer-events-none absolute bottom-5 left-4">
        {video.title && (
          <p className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-white/70">
            {video.title}
          </p>
        )}
        {showProgress && (
          <p className="mt-1 font-mono text-[0.7rem] tabular-nums text-white/60">
            {fmtTime(time.current)} / {fmtTime(time.duration)}
          </p>
        )}
      </div>

      <button
        onClick={toggleSound}
        aria-label={muted ? 'Unmute film' : 'Mute film'}
        className="absolute bottom-5 right-4 flex items-center gap-2 rounded-full border border-white/20 bg-black/50 px-4 py-2.5 font-mono text-[0.7rem] uppercase tracking-[0.15em] text-white backdrop-blur transition-colors hover:border-white/60"
      >
        {muted ? <VolumeX size={15} /> : <Volume2 size={15} />}
        {muted ? 'Sound off' : 'Sound on'}
      </button>

      {/* Progress bar pinned to the bottom edge */}
      {showProgress && (
        <div className="absolute inset-x-0 bottom-0 h-1 bg-white/15">
          <div
            className="h-full bg-accent transition-[width] duration-300 ease-linear"
            style={{ width: `${pct}%` }}
          />
        </div>
      )}
    </motion.figure>
  )
}
