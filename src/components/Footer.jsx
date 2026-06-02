import { Link } from 'react-router-dom'

const social = [
  { label: 'Email', href: 'mailto:spsither@gmail.com' },
  { label: 'GitHub', href: 'https://github.com/spsither' },
  { label: 'Instagram', href: 'https://instagram.com/spsither' },
]

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="container flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <Link to="/" className="font-display text-lg font-extrabold uppercase tracking-tight">
          Free Tibet · བོད་རང་བཙན
        </Link>

        <ul className="flex flex-wrap gap-6">
          {social.map(s => (
            <li key={s.label}>
              <a
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="font-mono text-xs uppercase tracking-[0.2em] text-muted transition-colors hover:text-text"
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>

        <p className="font-mono text-xs text-muted">
          Truth is our only country · {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  )
}
