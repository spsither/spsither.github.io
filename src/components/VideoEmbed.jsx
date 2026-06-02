import { useState } from 'react'
import { Play } from 'lucide-react'

/**
 * Lazy YouTube embed: shows a poster + play button until clicked, then loads
 * the iframe (keeps the page fast, avoids YouTube's heavy script up front).
 * A `PLACEHOLDER` id renders an obvious, styled stand-in instead of an embed.
 */
export default function VideoEmbed({ video }) {
  const [playing, setPlaying] = useState(false)
  const isPlaceholder = !video.id || video.id === 'PLACEHOLDER'

  return (
    <figure className="group">
      <div className="relative aspect-video overflow-hidden border border-line bg-surface">
        {isPlaceholder ? (
          <div className="grid h-full place-items-center px-6 text-center">
            <div>
              <Play className="mx-auto mb-3 text-accent" size={32} />
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
                Add your YouTube ID
              </p>
              <p className="mt-1 font-mono text-[0.7rem] text-muted/70">
                src/data/videos.js
              </p>
            </div>
          </div>
        ) : playing ? (
          <iframe
            className="absolute inset-0 h-full w-full"
            src={`https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1&rel=0`}
            title={video.title}
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <button
            onClick={() => setPlaying(true)}
            aria-label={`Play ${video.title}`}
            className="absolute inset-0 h-full w-full"
          >
            <img
              src={`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`}
              alt={video.title}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <span className="absolute inset-0 grid place-items-center bg-black/40 transition-colors group-hover:bg-black/20">
              <span className="grid h-16 w-16 place-items-center rounded-full bg-accent text-white">
                <Play size={26} className="translate-x-0.5" />
              </span>
            </span>
          </button>
        )}
      </div>
      <figcaption className="mt-3">
        <p className="font-display text-lg font-bold uppercase tracking-tight">
          {video.title}
        </p>
        {video.caption && (
          <p className="mt-1 text-sm text-muted">{video.caption}</p>
        )}
      </figcaption>
    </figure>
  )
}
