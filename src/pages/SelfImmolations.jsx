import { Flame, ArrowUpRight } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'
import { stats, demands, cases } from '../data/selfImmolations'

const figures = [
  { stat: stats.total, label: 'Tibetans who have self-immolated inside Tibet since 2009' },
  { stat: stats.died, label: 'are known to have died from their protest' },
  { stat: stats.women, label: 'were women' },
  { stat: stats.minors, label: 'were aged 18 or under' },
]

export default function SelfImmolations() {
  return (
    <main>
      <PageHeader
        eyebrow="A record of resistance"
        title="Self-Immolations"
        lede="Since 2009, more than a hundred and fifty Tibetans have set themselves on fire in protest against the occupation — most calling for freedom and the return of the Dalai Lama. This page remembers them."
      />

      {/* ── The figures ────────────────────────────────────────── */}
      <section className="border-b border-line py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {figures.map((f, i) => (
              <Reveal key={i} delay={(i % 4) * 0.06} className="bg-bg">
                <div className="flex h-full flex-col p-7">
                  <p className="font-display text-5xl font-black text-accent md:text-6xl">
                    {f.stat}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-muted">{f.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <p className="mt-6 max-w-3xl text-sm leading-relaxed text-muted">
              Of those who self-immolated, {stats.men} were men and {stats.women}{' '}
              women; {stats.kirti} were monks or former monks of Kirti Monastery
              in Ngaba alone. A further {stats.exile} Tibetans have self-immolated
              in exile. Figures are drawn from the{' '}
              <a
                href={stats.source}
                target="_blank"
                rel="noreferrer"
                className="text-accent underline-offset-2 hover:underline"
              >
                {stats.sourceLabel}
              </a>
              , which maintains the complete record.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Their demands ──────────────────────────────────────── */}
      <section className="border-b border-line py-16 md:py-24">
        <div className="container grid grid-cols-1 gap-10 md:grid-cols-[1fr_1.4fr] md:gap-16">
          <Reveal>
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.25em] text-accent">
              In their own words
            </p>
            <h2 className="font-display text-hero font-black">What they called for</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <ul className="space-y-4">
              {demands.map((d, i) => (
                <li key={i} className="flex items-baseline gap-4 border-b border-line pb-4">
                  <span className="font-mono text-xs text-accent">{String(i + 1).padStart(2, '0')}</span>
                  <span className="text-lg leading-snug">{d}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ── Memorial roll ──────────────────────────────────────── */}
      <section className="py-16 md:py-24">
        <div className="container">
          <Reveal>
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.25em] text-accent">
              We remember
            </p>
            <h2 className="font-display text-hero font-black">Among them</h2>
            <p className="mt-4 max-w-2xl text-muted">
              A partial memorial of documented cases. Behind every name is a
              life, a family, and a refusal to be silent.
            </p>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {cases.map((c, i) => (
              <Reveal key={c.name} delay={(i % 3) * 0.05} className="bg-bg">
                <article className="flex h-full flex-col p-6">
                  <div className="flex items-center justify-between gap-3">
                    <Flame
                      size={18}
                      className={c.outcome === 'died' ? 'text-accent' : 'text-muted'}
                    />
                    <span className="font-mono text-[0.65rem] uppercase tracking-[0.15em] text-muted">
                      {c.outcome === 'died'
                        ? 'Died'
                        : c.outcome === 'survived'
                          ? 'Survived'
                          : 'Fate unknown'}
                    </span>
                  </div>
                  <h3 className="mt-4 font-display text-2xl font-bold uppercase">
                    {c.name}
                  </h3>
                  <p className="mt-1 font-mono text-xs uppercase tracking-[0.12em] text-accent">
                    {c.date}
                    {c.age ? ` · age ${c.age}` : ''}
                  </p>
                  <p className="mt-1 text-sm text-muted">
                    {c.role} · {c.place}
                  </p>
                  {c.note && (
                    <p className="mt-3 text-sm leading-relaxed text-muted">{c.note}</p>
                  )}
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <a
              href={stats.source}
              target="_blank"
              rel="noreferrer"
              className="mt-12 inline-flex items-center gap-2 border border-line px-7 py-3.5 font-mono text-xs uppercase tracking-[0.15em] transition-colors hover:border-text"
            >
              See the full record at ICT <ArrowUpRight size={16} />
            </a>
          </Reveal>
        </div>
      </section>
    </main>
  )
}
