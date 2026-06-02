import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'
import { Link } from 'react-router-dom'

const experience = [
  { role: 'Software Consultant', company: 'Studio Nyandak', location: 'NYC', period: 'Apr 2024–Present' },
  { role: 'Machine Learning Engineer', company: 'Monlam AI', location: 'Dharamsala', period: 'Apr 2023–Jun 2024' },
  { role: 'Software Engineer', company: 'Central Tibetan Administration', location: 'Dharamsala', period: 'Nov 2021–Apr 2023' },
  { role: 'Graduate Research Assistant', company: 'University of Missouri', location: 'USA', period: 'Jan–Jun 2021' },
  { role: 'Software Developer', company: 'Tibetan Review', location: 'New Delhi', period: 'Sep 2017–Oct 2019' },
]

const facts = [
  { label: 'Based in', value: 'New York City' },
  { label: 'Education', value: 'MS Computer Science — University of Missouri (GPA 3.94)' },
  { label: 'Scholarship', value: 'Fulbright Scholar, U.S. Department of State, 2019' },
]

const socials = [
  { href: 'mailto:spsither@gmail.com', text: 'spsither@gmail.com' },
  { href: 'https://github.com/spsither', text: 'github.com/spsither' },
]

export default function About() {
  return (
    <main>
      <PageHeader title="About" />

      {/* Bio */}
      <section className="border-b border-line py-16 md:py-24">
        <div className="container grid grid-cols-1 gap-12 md:grid-cols-[1.4fr_1fr] md:gap-20">
          <Reveal>
            <p className="text-xl leading-relaxed md:text-2xl">
              I'm Sonam Phuntsog — a visual artist and software engineer based in
              New York City.
            </p>
            <p className="mt-6 leading-relaxed text-muted">
              I build web applications, AI tools, and data pipelines — with a
              particular focus on language, cultural preservation, and making
              complex information accessible. My engineering work has spanned
              satellite imaging platforms, Tibetan language AI models, and
              museum-scale image archives.
            </p>

            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                to="/art"
                className="inline-flex items-center px-7 py-3.5 font-mono text-xs uppercase tracking-[0.15em] border border-line transition-colors hover:border-text">
                Art
              </Link>

              <Link
                to="/engineering"
                className="inline-flex items-center px-7 py-3.5 font-mono text-xs uppercase tracking-[0.15em] border border-line transition-colors hover:border-text"
              >
                Engineering
              </Link>

            </div>
            <p className="mt-4 leading-relaxed text-muted">
              Alongside engineering, I create original paintings, working
              primarily in oil and acrylic on canvas.
            </p>
            <div className="mt-8 flex flex-wrap gap-6">
              {socials.map(l => (
                <a
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm tracking-[0.04em] text-accent transition-opacity hover:opacity-70"
                >
                  {l.text} ↗
                </a>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <dl>
              {facts.map(item => (
                <div key={item.label} className="border-b border-line py-5 first:pt-0">
                  <dt className="mb-1 text-xs uppercase tracking-[0.15em] text-muted">
                    {item.label}
                  </dt>
                  <dd className="leading-snug">{item.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* Experience */}
      <section className="container py-16 md:py-24">
        <Reveal>
          <h2 className="mb-10 font-display text-3xl md:text-4xl">Experience</h2>
        </Reveal>
        <div>
          {experience.map((job, i) => (
            <Reveal key={i} delay={(i % 5) * 0.05}>
              <div className="grid grid-cols-[1fr_auto] items-center gap-4 border-b border-line py-6">
                <div>
                  <p className="font-display text-xl md:text-2xl">{job.role}</p>
                  <p className="mt-1 text-sm text-muted">
                    {job.company} · {job.location}
                  </p>
                </div>
                <p className="whitespace-nowrap text-right text-xs text-muted">
                  {job.period}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  )
}
