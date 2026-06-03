export default function PageSkeleton() {
  return (
    <main className="min-h-screen animate-pulse">
      <section className="relative flex min-h-screen items-center">
        <div className="container">
          {/* Eyebrow */}
          <div className="mb-6 h-3 w-48 rounded bg-text/10" />

          {/* FREE */}
          <div className="h-24 w-64 rounded bg-text/10 md:h-32 md:w-80" />

          {/* TIBET */}
          <div className="mt-4 h-24 w-72 rounded bg-text/10 md:h-32 md:w-96" />

          {/* Description */}
          <div className="mt-10 max-w-xl space-y-3">
            <div className="h-4 w-full rounded bg-text/10" />
            <div className="h-4 w-11/12 rounded bg-text/10" />
            <div className="h-4 w-4/5 rounded bg-text/10" />
          </div>

          {/* Buttons */}
          <div className="mt-10 flex gap-4">
            <div className="h-12 w-40 rounded bg-text/10" />
            <div className="h-12 w-36 rounded bg-text/10" />
          </div>
        </div>
      </section>
    </main>
  )
}