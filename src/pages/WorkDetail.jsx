import { Link, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { findWork, artworks } from '../data/art'
import Reveal from '../components/Reveal'

export default function WorkDetail() {
  const { slug } = useParams()
  const work = findWork(slug)

  if (!work) {
    return (
      <main className="container flex min-h-screen flex-col items-start justify-center gap-6">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
          404
        </p>
        <h1 className="font-display text-hero font-black">Work not found</h1>
        <Link
          to="/"
          className="font-mono text-sm uppercase tracking-[0.15em] text-muted hover:text-text"
        >
          ← Back home
        </Link>
      </main>
    )
  }

  const others = artworks.filter(w => w.slug !== work.slug)

  return (
    <main className="pt-28 md:pt-36">
      {/* Header */}
      <section className="container">
        <Link
          to="/art"
          className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-muted transition-colors hover:text-text"
        >
          <ArrowLeft size={14} /> All works
        </Link>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-8 font-mono text-xs uppercase tracking-[0.25em] text-accent"
        >
          {work.category} · {work.year}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          className="mt-3 font-display text-display font-black"
        >
          {work.title}
        </motion.h1>

        {work.statement && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-8 max-w-2xl text-xl leading-relaxed text-text md:text-2xl"
          >
            {work.statement}
          </motion.p>
        )}
      </section>

      {/* Meta strip */}
      <section className="container mt-12">
        <dl className="grid grid-cols-2 gap-px border border-line bg-line sm:grid-cols-4">
          {[
            ['Category', work.category],
            ['Year', work.year],
            ['Medium', work.medium],
            ['Detail', work.dimensions],
          ].map(([k, v]) => (
            <div key={k} className="bg-bg p-5">
              <dt className="font-mono text-[0.7rem] uppercase tracking-[0.15em] text-muted">
                {k}
              </dt>
              <dd className="mt-1.5 text-sm">{v}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Images + body */}
      <section className="container mt-16 space-y-16 md:mt-24">
        {work.images?.map((src, i) => (
          <Reveal key={src}>
            <img
              src={src}
              alt={`${work.title} — ${i + 1}`}
              className="w-full border border-line object-cover"
            />
            {work.body?.[i] && (
              <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-muted">
                {work.body[i]}
              </p>
            )}
          </Reveal>
        ))}

        {/* Any remaining body paragraphs beyond the image count */}
        {work.body?.slice(work.images?.length || 0).map((para, i) => (
          <Reveal key={`b-${i}`}>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted">
              {para}
            </p>
          </Reveal>
        ))}

        {work.link && (
          <Reveal>
            <a
              href={work.link}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border border-text px-7 py-3.5 font-mono text-xs uppercase tracking-[0.15em] transition-colors hover:bg-text hover:text-bg"
            >
              View project <ArrowUpRight size={16} />
            </a>
          </Reveal>
        )}
      </section>

      {/* More works */}
      <section className="container mt-28 border-t border-line py-16">
        <h2 className="mb-10 font-display text-2xl font-extrabold">More works</h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {others.map(o => (
            <Link key={o.slug} to={`/art/${o.slug}`} className="group block">
              <div className="aspect-[16/10] overflow-hidden border border-line">
                <img
                  src={o.thumb}
                  alt={o.title}
                  className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                />
              </div>
              <p className="mt-3 font-mono text-[0.7rem] uppercase tracking-[0.2em] text-accent">
                {o.category}
              </p>
              <p className="font-display text-xl font-bold uppercase">{o.title}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
