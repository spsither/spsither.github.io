import { projects, skills } from '../data/engineering'
import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'

export default function Engineering() {
  return (
    <main>
      <PageHeader
        eyebrow="Software · AI · Data"
        title="Engineering"
        lede="3+ years building web applications, AI models, and automation tools with Python, AWS, and React — focused on scalable, high-performance solutions to complex problems."
      />

      {/* Projects */}
      <section className="container">
        {projects.map((p, i) => (
          <Reveal key={p.id}>
            <article className="grid grid-cols-[2.5rem_1fr] gap-5 border-b border-line py-10 md:grid-cols-[4rem_1fr] md:gap-8">
              <span className="pt-1 font-display text-3xl font-black text-outline-accent md:text-4xl">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div>
                <div className="mb-2 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="font-display text-2xl md:text-3xl">{p.title}</h3>
                  <span className="text-xs text-muted">
                    {p.company} · {p.year}
                  </span>
                </div>
                <p className="mb-5 max-w-2xl leading-relaxed text-muted">
                  {p.description}
                </p>
                <div className="flex flex-wrap items-center gap-2">
                  {p.tags.map(tag => (
                    <span
                      key={tag}
                      className="border border-line px-3 py-1 text-xs tracking-[0.04em] text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      className="ml-auto text-xs text-muted transition-colors hover:text-text"
                    >
                      GitHub ↗
                    </a>
                  )}
                  {p.link && (
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noreferrer"
                      className={`text-xs text-accent transition-opacity hover:opacity-70 ${
                        p.github ? '' : 'ml-auto'
                      }`}
                    >
                      Live ↗
                    </a>
                  )}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </section>

      {/* Skills */}
      <section className="container py-16 md:py-24">
        <Reveal>
          <h2 className="mb-10 font-display text-3xl md:text-4xl">
            Technical Skills
          </h2>
        </Reveal>
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {Object.entries(skills).map(([category, items], i) => (
            <Reveal key={category} delay={(i % 4) * 0.08}>
              <p className="mb-4 text-xs uppercase tracking-[0.15em] text-muted">
                {category}
              </p>
              <ul className="flex flex-col gap-2">
                {items.map(item => (
                  <li key={item} className="text-sm">
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  )
}
