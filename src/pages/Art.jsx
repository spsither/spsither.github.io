import { artworks } from '../data/art'
import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'
import { Link } from 'react-router-dom'

export default function Art() {
  return (
    <main>
      <PageHeader
        eyebrow="spsither"
        title="Art Portfolio"
        lede="Original paintings — primarily oil and acrylic on canvas."
      />

      <section className="container py-16 md:py-24">
        <div className="grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {artworks.map((work, i) => (
            <Reveal key={work.id} delay={(i % 3) * 0.08}>
              <Link to={`/art/${work.slug}`} className="block group">
              <figure className="group">
                <div className="aspect-[3/4] overflow-hidden bg-surface">
                  {work.thumb ? (
                    <img
                    src={work.thumb}
                    alt={work.title}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    />
                  ) : (
                    <div className="grid h-full place-items-center text-xs uppercase tracking-[0.15em] text-muted">
                      No image yet
                    </div>
                  )}
                </div>
                <figcaption className="mt-4 flex items-start justify-between gap-4">
                  <div>
                    <p className="font-display text-2xl">{work.title}</p>
                    <p className="mt-1 text-sm text-muted">
                      {work.year} · {work.medium}
                    </p>
                    <p className="text-sm text-muted">{work.dimensions}</p>
                  </div>
                  <span
                    className={[
                      'mt-1 whitespace-nowrap border px-3 py-1 text-[0.7rem] uppercase tracking-[0.1em]',
                      work.available
                        ? 'border-accent text-accent'
                        : 'border-line text-muted',
                    ].join(' ')}
                  >
                    {work.available ? 'Available' : 'Sold'}
                  </span>
                </figcaption>
              </figure>
                  </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  )
}
