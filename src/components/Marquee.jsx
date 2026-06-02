/**
 * Infinite scrolling slogan band. Pass an array of words; they repeat across
 * a continuously translating track (paused for reduced-motion users via CSS).
 */
export default function Marquee({ items, className = '' }) {
  const line = [...items, ...items]
  return (
    <div
      className={`flex overflow-hidden border-y border-line py-4 select-none ${className}`}
      aria-hidden="true"
    >
      <div className="flex shrink-0 animate-marquee items-center whitespace-nowrap">
        {line.concat(line).map((word, i) => (
          <span key={i} className="flex items-center">
            <span className="px-6 font-display text-2xl font-extrabold uppercase tracking-tight md:text-4xl">
              {word}
            </span>
            <span className="text-accent">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}
