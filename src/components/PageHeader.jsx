import { motion } from 'framer-motion'

/** Consistent edgy page header: mono eyebrow, big bold title, optional lede. */
export default function PageHeader({ eyebrow, title, lede }) {
  return (
    <section className="relative overflow-hidden border-b border-line pt-32 pb-14 md:pt-44 md:pb-20">
      <div className="glow pointer-events-none absolute -left-40 top-0 h-[60vmin] w-[60vmin]" />
      <div className="container relative">
        {eyebrow && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-accent"
          >
            {eyebrow}
          </motion.p>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-hero font-black"
        >
          {title}
        </motion.h1>
        {lede && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted"
          >
            {lede}
          </motion.p>
        )}
      </div>
    </section>
  )
}
