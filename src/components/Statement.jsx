import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

/**
 * A full-bleed defiant statement that drifts and sharpens as it scrolls
 * through the viewport. `kind: 'outline'` renders ghosted stroke text.
 */
export default function Statement({ statement, align = 'left' }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
    layoutEffect: false
  })
  const y = useTransform(scrollYProgress, [0, 1], ['12%', '-12%'])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.2, 1, 1, 0.2])

  const outline = statement.kind === 'outline'

  return (
    <section
      ref={ref}
      className="container flex items-center py-20"
      style={{ minHeight: 'calc(70 * var(--vh))' }}
    >
      <motion.div
        style={{ y, opacity }}
        className={align === 'right' ? 'ml-auto text-right' : ''}
      >
        <h2 className="font-display text-display font-black leading-[0.85]">
          {statement.lines.map((l, i) => (
            <span
              key={i}
              className={`block ${outline ? 'text-outline-accent' : ''} ${i === statement.lines.length - 1 && !outline ? 'text-accent' : ''
                }`}
            >
              {l}
            </span>
          ))}
        </h2>
        {statement.foot && (
          <p className="mt-6 max-w-md font-mono text-xs uppercase tracking-[0.2em] text-muted md:text-sm">
            {statement.foot}
          </p>
        )}
      </motion.div>
    </section>
  )
}
