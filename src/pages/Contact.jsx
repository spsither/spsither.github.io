import { useState } from 'react'
import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'

const channels = [
  { label: 'Email', value: 'spsither@gmail.com', href: 'mailto:spsither@gmail.com' },
  { label: 'GitHub', value: 'github.com/spsither', href: 'https://github.com/spsither' },
  { label: 'Instagram', value: '@spsither', href: 'https://instagram.com/spsither' },
]

const fieldClass =
  'w-full border-b border-line bg-transparent py-3 text-base text-text outline-none transition-colors placeholder:text-muted/60 focus:border-accent'
const labelClass =
  'mb-2 block text-xs uppercase tracking-[0.12em] text-muted'

export default function Contact() {
  const [sent, setSent] = useState(false)

  return (
    <main>
      <PageHeader title="Contact" />

      <section className="container py-16 md:py-24">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-2 md:gap-20">
          <Reveal>
            <p className="mb-10 max-w-sm text-lg leading-relaxed text-muted">
              For art inquiries, commission requests, or engineering work — get in
              touch.
            </p>
            <dl className="space-y-7">
              {channels.map(item => (
                <div key={item.label}>
                  <dt className={labelClass}>{item.label}</dt>
                  <dd>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="font-display text-2xl text-accent transition-opacity hover:opacity-70"
                    >
                      {item.value}
                    </a>
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={0.1}>
            {!sent ? (
              <form
                onSubmit={e => {
                  e.preventDefault()
                  setSent(true)
                }}
                className="flex flex-col gap-6"
              >
                {['Name', 'Email', 'Subject'].map(field => (
                  <div key={field}>
                    <label className={labelClass} htmlFor={field}>
                      {field}
                    </label>
                    <input
                      id={field}
                      type={field === 'Email' ? 'email' : 'text'}
                      required
                      className={fieldClass}
                    />
                  </div>
                ))}
                <div>
                  <label className={labelClass} htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    required
                    className={`${fieldClass} resize-none`}
                  />
                </div>
                <button
                  type="submit"
                  className="self-start bg-accent px-9 py-3.5 text-sm uppercase tracking-[0.08em] text-white transition-opacity hover:opacity-90"
                >
                  Send Message
                </button>
              </form>
            ) : (
              <div className="flex h-full items-center">
                <div>
                  <p className="font-display text-4xl text-accent">Message sent</p>
                  <p className="mt-2 text-muted">
                    Thanks — I'll get back to you soon.
                  </p>
                </div>
              </div>
            )}
          </Reveal>
        </div>
      </section>
    </main>
  )
}
