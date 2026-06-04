import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown, ArrowUpRight, ChevronDown } from 'lucide-react'
import { statements } from '../data/statements'
import { slogans, facts, timeline, gridImages } from '../data/tibet'
import { videos, featuredSong } from '../data/videos'
import Statement from '../components/Statement'
import Marquee from '../components/Marquee'
import VideoEmbed from '../components/VideoEmbed'
import ImmersiveVideo from '../components/ImmersiveVideo'
import Reveal from '../components/Reveal'
import protestImage from '../assets/protest.png'

// ─── Import your images here ──────────────────────────────────────────────────
// import img1950 from '../assets/tibet/1950.jpg'
// import img1959 from '../assets/tibet/1959.jpg'
// ... etc.
// Then pass them into timelineImages and gridImages below.

// Images that appear in the photo grid break between sections.
// Swap placeholder strings for your imports once you have the files.

/* ── Parallax image (unchanged) ─────────────────────────────────────────── */
function ParallaxImage({ src, alt, caption }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['-12%', '12%'])
  return (
    <figure ref={ref} className="relative h-[70vh] overflow-hidden md:h-[85vh]">
      <motion.img style={{ y, scale: 1.2 }} src={src} alt={alt} className="h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/30 to-transparent" />
      {caption && (
        <figcaption className="absolute bottom-8 left-0 w-full">
          <p className="container font-mono text-xs uppercase tracking-[0.2em] text-muted">{caption}</p>
        </figcaption>
      )}
    </figure>
  )
}

/* ── Photo grid ─────────────────────────────────────────────────────────── */
function PhotoGrid({ images, eyebrow }) {
  return (
    <section className="border-t border-line py-20 md:py-28">
      <div className="container">
        {eyebrow && (
          <Reveal>
            <p className="mb-10 font-mono text-xs uppercase tracking-[0.25em] text-accent">{eyebrow}</p>
          </Reveal>
        )}
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
          {images.map((img, i) => (
            <Reveal
              key={i}
              delay={(i % 3) * 0.07}
              // Tall images span two rows for visual rhythm
              className={i === 1 || i === 4 ? 'row-span-2' : ''}
            >
              <figure className="group relative h-full min-h-[200px] overflow-hidden">
                <img
                  src={img.image}
                  alt={img.alt}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                {/* Caption slides up on hover */}
                <figcaption className="absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-black/80 to-transparent px-4 pb-4 pt-8 font-mono text-[0.65rem] uppercase tracking-[0.15em] text-white/80 transition-transform duration-300 group-hover:translate-y-0">
                  {img.caption}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── Timeline row — now with optional inline image ──────────────────────── */
function TimelineRow({ t, delay = 0 }) {
  return (
    <Reveal delay={delay}>
      <div className="border-t border-line py-8">
        <div className="grid grid-cols-1 gap-2 md:grid-cols-[180px_1fr] md:gap-10">
          <p className="font-mono text-sm uppercase tracking-[0.15em] text-accent">{t.year}</p>
          <div>
            <h3 className="font-display text-2xl font-bold uppercase md:text-3xl">{t.title}</h3>
            <p className="mt-2 max-w-2xl leading-relaxed text-muted">{t.text}</p>
          </div>
        </div>
        {t.image && (
          <Reveal delay={0.1} className="md:ml-[calc(180px+2.5rem)]">
            <figure className="group relative mt-6 overflow-hidden">
              <img
                src={t.image.src}
                alt={t.image.alt}
                className="h-[45vh] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02] md:h-[55vh]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg/60 to-transparent" />
              {t.image.caption && (
                <figcaption className="absolute bottom-4 left-4 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-white/70">
                  {t.image.caption}
                </figcaption>
              )}
            </figure>
          </Reveal>
        )}
      </div>
    </Reveal>
  )
}

export default function Home() {
  const heroRef = useRef(null)
  const timelineRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const glowY = useTransform(scrollYProgress, [0, 1], ['0%', '40%'])
  const titleY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const titleOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  const [showAllHistory, setShowAllHistory] = useState(false)
  const HISTORY_PREVIEW = 3
  const previewTimeline = timeline.slice(0, HISTORY_PREVIEW)
  const restTimeline = timeline.slice(HISTORY_PREVIEW)

  const toggleHistory = () => {
    if (showAllHistory) {
      setShowAllHistory(false)

      setTimeout(() => {
        timelineRef.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })
      }, 50)
    } else {
      setShowAllHistory(true)
    }
  }

  useEffect(() => {
    const lockHeight = () => {
      document.documentElement.style.setProperty('--hero-h', `${window.innerHeight}px`);
    };
    lockHeight();
    // Don't re-run on resize — that's the whole point
  }, []);
  return (
    <main>
      {/* ── Hero ──────────────────────────────────────────────── */}
      <section
        ref={heroRef}
        className="relative flex items-center overflow-hidden"
        style={{ minHeight: "var(--hero-h)" }}
      >
        {/* Glow — no parallax, position stays locked */}
        <div className="glow pointer-events-none absolute left-1/2 top-1/2 h-[90vmin] w-[90vmin] -translate-x-1/2 -translate-y-1/2" />

        {/* Content — no parallax on the hero itself */}
        <div className="container relative">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 font-mono text-xs uppercase tracking-[0.3em] text-accent md:text-sm"
          >
            Occupied since 1950 · The struggle continues
          </motion.p>

          <h1 className="font-display text-mega font-black">
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="block"
            >
              Free
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="block text-outline-accent"
            >
              Tibet
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-8 max-w-xl text-lg leading-relaxed text-muted md:text-xl"
          >
            For more than seventy years, a people has refused to disappear. This is the story of
            Tibet — its occupation, its exile, and a freedom struggle carried in language, faith,
            and memory.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href="#film"
              className="group inline-flex items-center gap-2 bg-accent px-7 py-3.5 font-mono text-xs uppercase tracking-[0.15em] text-white transition-opacity hover:opacity-90"
            >
              Watch the film
              <ArrowDown size={16} className="transition-transform group-hover:translate-y-0.5" />
            </a>

            <a
              href="#timeline"
              className="inline-flex items-center border border-line px-7 py-3.5 font-mono text-xs uppercase tracking-[0.15em] transition-colors hover:border-text"
            >
              The history
            </a>
          </motion.div>
        </div>

        <div className="absolute bottom-8 left-0 w-full">
          <p className="container font-mono text-[0.7rem] uppercase tracking-[0.3em] text-muted">↓ Scroll</p>
        </div>
      </section >

      <Marquee items={slogans} />

      {/* ── The cause ─────────────────────────────────────────── */}
      <section className="border-t border-line py-20 md:py-28">
        <div className="container">
          <Reveal>
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.25em] text-accent">The cause</p>
            <h2 className="max-w-3xl font-display text-hero font-black">
              An occupation the world learned to look away from.
            </h2>
          </Reveal>
          <div className="mt-14 grid grid-cols-1 gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {facts.map((f, i) => (
              <Reveal key={i} delay={(i % 4) * 0.06} className="bg-bg">
                <div className="flex h-full flex-col p-7">
                  <p className="font-display text-5xl font-black text-accent md:text-6xl">{f.stat}</p>
                  <p className="mt-4 text-sm leading-relaxed text-muted">{f.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Photo grid break #1 — the land and the people ─────── */}
      <PhotoGrid images={gridImages} eyebrow="The land & the people" />

      {/* ── Featured song ─────────────────────────────────────── */}
      <section className="border-t border-line py-20 md:py-28">
        <div className="container">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.25em] text-accent">Start here · 1 song</p>
            <h2 className="font-display text-hero font-black">If you watch one thing</h2>
            <p className="mx-auto mt-5 max-w-xl text-muted">{featuredSong.caption}</p>
          </Reveal>
          <Reveal delay={0.1} className="mx-auto mt-12 max-w-3xl">
            <VideoEmbed video={{ id: featuredSong.id, title: featuredSong.title }} />
            <p className="mt-4 text-center font-mono text-[0.7rem] uppercase tracking-[0.15em] text-accent">
              {featuredSong.artist}
            </p>
          </Reveal>
        </div>
      </section>

      <Statement statement={statements[0]} />

      {/* ── Film ──────────────────────────────────────────────── */}
      <div id="film">
        <ImmersiveVideo
          video={videos[0]}
          eyebrow="The film · ~30 min"
          title="Bear witness."
          showProgress
        >
          <p>
            In March 1959, tens of thousands of Tibetans surrounded the Norbulingka palace in
            Lhasa to shield the 14th Dalai Lama from Chinese forces. The uprising was crushed;
            he fled across the Himalayas into exile in India, where he remains.
          </p>
          <p>
            Sixty-five years on, the struggle has not ended. This feature-length film follows a
            nation that lives in two places at once — scattered in exile, and holding on inside an
            occupied homeland — refusing to let its language, faith, and freedom be erased.
          </p>
          <p className="font-mono text-xs uppercase tracking-[0.15em] text-accent">
            Press "Sound on" to listen · the bar tracks your progress.
          </p>
        </ImmersiveVideo>
      </div>

      <ParallaxImage
        src={protestImage}
        alt="Light through the dark of the plateau"
        caption="Fig. 01 — Jampa Tenzin during a major demonstration in Lhasa on October 1, 1987."
      />

      <Statement statement={statements[1]} align="right" />

      {/* ── Timeline ──────────────────────────────────────────── */}
      <section
        id="timeline"
        ref={timelineRef}
        className="scroll-mt-20 border-t border-line py-20 md:py-28"
      >
        <div className="container">
          <Reveal>
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.25em] text-accent">A history</p>
            <h2 className="font-display text-hero font-black">Seven decades of resistance</h2>
          </Reveal>
          <div className="mt-14">
            {previewTimeline.map((t, i) => (
              <TimelineRow
                key={i.id}
                t={t}
                delay={(i % 3) * 0.05}
              />
            ))}
            <AnimatePresence initial={false}>
              {showAllHistory && (
                <motion.div
                  key="rest"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {restTimeline.map((t) => (
                    <TimelineRow
                      key={t.id}
                      t={t}
                    />
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
            {restTimeline.length > 0 && (
              <button
                onClick={toggleHistory}
                className="mt-8 inline-flex items-center gap-2 border border-line px-7 py-3.5 font-mono text-xs uppercase tracking-[0.15em] transition-colors hover:border-text"
              >
                {showAllHistory ? 'Show less' : `Show all ${timeline.length} chapters`}
                <ChevronDown size={16} className={`transition-transform ${showAllHistory ? 'rotate-180' : ''}`} />
              </button>
            )}
          </div>
        </div>
      </section>

      {/* ── Videos ────────────────────────────────────────────── */}
      <section className="border-t border-line py-20 md:py-28">
        <div className="container">
          <Reveal>
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.25em] text-accent">Watch & witness</p>
            <h2 className="font-display text-hero font-black">Voices of the struggle</h2>
          </Reveal>
          <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-2">
            {videos.slice(1).map((v, i) => (
              <Reveal key={i} delay={(i % 2) * 0.08}>
                <VideoEmbed video={v} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Statement statement={statements[2]} />

      {/* ── CTA ───────────────────────────────────────────────── */}
      <section className="relative overflow-hidden border-t border-line py-28 text-center md:py-40">
        <div className="glow pointer-events-none absolute left-1/2 top-1/2 h-[70vmin] w-[70vmin] -translate-x-1/2 -translate-y-1/2" />
        <Reveal className="container relative">
          <h2 className="mx-auto max-w-3xl font-display text-display font-black">
            Stand with <span className="text-accent">Tibet</span>.
          </h2>
          <p className="mx-auto mt-6 max-w-md text-muted">
            Learn the history. Share the story. Refuse the silence. Solidarity is the freedom
            struggle's longest road home.
          </p>
          <Link
            to="/contact"
            className="mt-10 group inline-flex items-center gap-2 bg-accent px-9 py-4 font-mono text-xs uppercase tracking-[0.15em] text-white transition-opacity hover:opacity-90"
          >
            Take action <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </Reveal>
      </section>
    </main >
  )
}