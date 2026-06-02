import FilmFrame from './FilmFrame'

/**
 * A scroll-revealed film set beside its context: the video lifts into place on
 * one side while explanatory text sits alongside. Pass the prose as children.
 */
export default function ImmersiveVideo({ video, eyebrow, title, showProgress, children }) {
  return (
    <section className="scroll-mt-20 border-t border-line py-20 md:py-28">
      <div className="container grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
        <FilmFrame video={video} showProgress={showProgress} />

        <div>
          {eyebrow && (
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.25em] text-accent">
              {eyebrow}
            </p>
          )}
          <h2 className="font-display text-hero font-black">{title}</h2>
          <div className="mt-6 space-y-4 leading-relaxed text-muted">{children}</div>
        </div>
      </div>
    </section>
  )
}
