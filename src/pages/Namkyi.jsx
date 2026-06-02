import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useEffect } from 'react'
import { ArrowDown, ArrowUpRight, Play } from 'lucide-react'
import Reveal from '../components/Reveal'
import namkyiImage from '../assets/namkyi.png'
import { useNavOverlay } from '../components/NavOverlay'

// The centerpiece: her protest, on film.
const protestFilm = {
  id: 'WDyMHiC_WGI',
  title: 'Namkyi — her protest in Tibet',
}

// Her singing — a Facebook video.
const singingHref = 'https://www.facebook.com/watch/?v=4323616807896569'

// The consequences she endured, in sequence.
const ordeal = [
  {
    year: 'Oct 2015',
    title: 'Arrested at fifteen',
    text: 'At the age of 15, Namkyi was arrested by Chinese authorities while protesting against the regime’s oppression of Tibetans.',
  },
  {
    year: '13 months',
    title: 'Held without trial',
    text: 'She was held for thirteen months in a detention centre, where she endured physical and psychological abuse.',
  },
  {
    year: 'Nov 2016',
    title: 'Sentenced as a “separatist”',
    text: 'At trial she was sentenced to three years’ imprisonment on the trumped-up charge of “separatist acts against the nation.”',
  },
  {
    year: 'In prison',
    title: 'Re-education and a labour camp',
    text: 'She was forced through “patriotic education” and Chinese constitutional study despite not speaking Mandarin, then sent to a labour camp where she faced malnutrition, the cold, and discrimination for being Tibetan.',
  },
  {
    year: 'Oct 2018',
    title: 'Released, but not free',
    text: 'After her release, restrictions on her movement continued and her family was harassed by the authorities.',
  },
  {
    year: '2023',
    title: 'Ten days on foot to freedom',
    text: 'Namkyi and her aunt escaped the country by walking continuously for ten days, crossing into Nepal and eventually reaching refuge in Dharamshala, India, where she now studies.',
  },
  {
    year: 'Feb 2025',
    title: 'Bearing witness in Geneva',
    text: 'On 18 February 2025 she stood before the Geneva Summit for Human Rights and Democracy and told the world what she had survived.',
  },
]

export default function Namkyi() {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.12])
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '40%'])
  const textOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  // Tell the navbar it's over a dark image while the hero is in view, so it
  // renders light-on-dark even in light mode.
  const { setOverDark } = useNavOverlay()
  useEffect(() => {
    const el = heroRef.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => setOverDark(entry.isIntersecting),
      { threshold: 0.15 },
    )
    io.observe(el)
    return () => {
      io.disconnect()
      setOverDark(false)
    }
  }, [setOverDark])

  return (
    <main>
      {/* ── Portrait hero — meet her face first ────────────────── */}
      <section ref={heroRef} className="relative h-[100svh] overflow-hidden bg-black">
        <motion.img
          style={{ scale: imgScale }}
          src={namkyiImage}
          alt="Namkyi, in profile against a window"
          className="absolute inset-0 h-full w-full object-cover object-[30%_center]"
        />
        {/* Gradients: darken edges, lift text off the image */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />
        {/* Top scrim so the navbar stays legible over the image */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/85 to-transparent" />

        <motion.div
          style={{ y: textY, opacity: textOpacity }}
          className="absolute inset-x-0 bottom-0"
        >
          <div className="container pb-16 md:pb-24">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mb-5 font-mono text-xs uppercase tracking-[0.3em] text-accent-2 md:text-sm"
            >
              She was fifteen
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-mega font-black text-white"
            >
              Namkyi
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-6 max-w-xl text-lg leading-relaxed text-white/80 md:text-xl"
            >
              A girl from occupied Tibet who walked into the street, called for
              freedom, and lost three years of her childhood for it. This is her
              face. This is her story.
            </motion.p>
          </div>
        </motion.div>

        <div className="pointer-events-none absolute bottom-6 right-5 hidden items-center gap-2 font-mono text-[0.7rem] uppercase tracking-[0.3em] text-white/60 md:flex">
          Scroll <ArrowDown size={14} />
        </div>
      </section>

      {/* ── A few words to sit with ────────────────────────────── */}
      <section className="border-b border-line py-20 md:py-28">
        <div className="container max-w-3xl">
          <Reveal>
            <p className="font-display text-3xl font-black leading-tight md:text-5xl">
              Imagine being fifteen, and deciding the truth is worth your
              freedom.
            </p>
            <p className="mt-8 leading-relaxed text-muted">
              Namkyi is not a statistic or a slogan. She is a young woman who
              grew up under occupation, who loved to sing, and who could not stay
              silent while her people were stripped of their language, their
              faith, and their land. When she protested, the state took
              everything it could from her — and still it could not take her
              voice.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── CENTERPIECE: her protest, on film ──────────────────── */}
      <section className="border-b border-line py-20 md:py-28">
        <div className="container">
          <Reveal className="mb-10 text-center">
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-accent">
              The protest
            </p>
            <h2 className="mx-auto max-w-3xl font-display text-display font-black">
              The day she would not be silent.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-muted">
              In her own words — the protest in Tibet that changed her life, and
              the courage it took to speak.
            </p>
          </Reveal>

          <Reveal className="mx-auto max-w-5xl">
            <a
              href={`https://www.youtube.com/watch?v=${protestFilm.id}`}
              target="_blank"
              rel="noreferrer"
              className="group relative block aspect-video overflow-hidden rounded-xl border border-line bg-black shadow-2xl"
            >
              {/* Thumbnail, dimmed + blurred behind the advisory */}
              <img
                src={`https://i.ytimg.com/vi/${protestFilm.id}/hqdefault.jpg`}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 h-full w-full scale-110 object-cover opacity-30 blur-sm transition-opacity duration-500 group-hover:opacity-40"
              />
              <div className="absolute inset-0 grid place-items-center px-6 text-center">
                <div className="max-w-md">
                  <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent-2">
                    Viewer discretion advised
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-white/80">
                    This testimony touches on suicide and self-harm. YouTube
                    restricts it from playing here, so it opens on YouTube.
                  </p>
                  <span className="mt-7 inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 font-mono text-xs uppercase tracking-[0.15em] text-white transition-opacity group-hover:opacity-90">
                    <Play size={16} className="translate-x-0.5" />
                    Watch on YouTube
                  </span>
                </div>
              </div>
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── The ordeal ─────────────────────────────────────────── */}
      <section className="border-b border-line py-16 md:py-24">
        <div className="container">
          <Reveal>
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.25em] text-accent">
              What she suffered
            </p>
            <h2 className="font-display text-hero font-black">The price of one protest</h2>
          </Reveal>

          <div className="mt-12">
            {ordeal.map((o, i) => (
              <Reveal key={i} delay={(i % 3) * 0.05}>
                <div className="grid grid-cols-1 gap-2 border-t border-line py-8 md:grid-cols-[180px_1fr] md:gap-10">
                  <p className="font-mono text-sm uppercase tracking-[0.15em] text-accent">
                    {o.year}
                  </p>
                  <div>
                    <h3 className="font-display text-2xl font-bold uppercase md:text-3xl">
                      {o.title}
                    </h3>
                    <p className="mt-2 max-w-2xl leading-relaxed text-muted">{o.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Her voice — singing ────────────────────────────────── */}
      <section className="border-b border-line py-20 md:py-28">
        <div className="container grid grid-cols-1 items-center gap-10 md:grid-cols-[1fr_auto] md:gap-16">
          {/* Text, beside the video */}
          <Reveal>
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.25em] text-accent">
              Her voice
            </p>
            <h2 className="font-display text-hero font-black">A song they couldn’t silence</h2>
            <p className="mt-6 max-w-md leading-relaxed text-muted">
              Before the prison, before the protest, there was a girl who loved
              to sing. To hear Namkyi sing is to understand what the occupation
              tried to take — and what survives, in exile, unbroken.
            </p>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted/80">
              This recording has no English subtitles — it doesn’t need them.
            </p>
          </Reveal>

          {/* Portrait video */}
          <Reveal delay={0.1} className="mx-auto w-full max-w-[340px]">
            <div className="relative aspect-[9/16] w-full overflow-hidden rounded-xl border border-line bg-surface shadow-2xl">
              <iframe
                className="absolute inset-0 h-full w-full"
                src={`https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(singingHref)}&show_text=false&autoplay=false`}
                title="Namkyi singing"
                loading="lazy"
                style={{ border: 'none', overflow: 'hidden' }}
                scrolling="no"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <p className="mt-3 text-center font-mono text-[0.7rem] uppercase tracking-[0.15em] text-muted">
              If the video doesn’t load,{' '}
              <a
                href={singingHref}
                target="_blank"
                rel="noreferrer"
                className="text-accent hover:underline"
              >
                watch it on Facebook ↗
              </a>
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Why it matters + CTA ───────────────────────────────── */}
      <section className="py-16 md:py-24">
        <div className="container max-w-3xl">
          <Reveal>
            <p className="text-xl leading-relaxed md:text-2xl">
              Namkyi is one of thousands of Tibetans imprisoned for acts as small
              as holding a portrait or speaking a name. Her story is not the
              exception — it is the rule of life under occupation.
            </p>
            <p className="mt-6 leading-relaxed text-muted">
              To know her name, to see her face, to hear her sing — that is how a
              person becomes impossible to erase. Refuse the silence the
              authorities demand.
            </p>
            <a
              href="https://genevasummit.org/speaker/namkyi/"
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2 border border-line px-7 py-3.5 font-mono text-xs uppercase tracking-[0.15em] transition-colors hover:border-text"
            >
              Her profile at the Geneva Summit <ArrowUpRight size={16} />
            </a>
          </Reveal>
        </div>
      </section>
    </main>
  )
}
