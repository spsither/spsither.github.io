import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { useTheme } from '../hooks/useTheme'
import { useNavOverlay } from './NavOverlay'

const links = [
  { to: '/', label: 'Home' },
  { to: '/self-immolations', label: 'Self-Immolations' },
  { to: '/namkyi', label: 'Namkyi' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Take Action' },
]

function ThemeToggle({ className = '', light = false }) {
  const { theme, toggle } = useTheme()
  return (
    <button
      onClick={toggle}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      className={`grid place-items-center h-9 w-9 rounded-full transition-colors ${
        light
          ? 'text-white/80 hover:text-white hover:bg-white/10'
          : 'text-muted hover:text-text hover:bg-text/5'
      } ${className}`}
    >
      {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { overDark } = useNavOverlay()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Over a dark hero (and before the backdrop kicks in on scroll), force the
  // light-on-dark treatment regardless of the active theme.
  const light = overDark && !scrolled

  const linkClass = ({ isActive }) =>
    [
      'font-mono text-[0.7rem] uppercase tracking-[0.2em] transition-colors',
      isActive
        ? 'text-accent'
        : light
          ? 'text-white/75 hover:text-white'
          : 'text-muted hover:text-text',
    ].join(' ')

  return (
    <nav
      className={[
        'fixed inset-x-0 top-0 z-50 h-16 transition-colors duration-300',
        scrolled
          ? 'border-b border-border bg-bg/85 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent',
      ].join(' ')}
    >
      <div className="container flex h-full items-center justify-between">
        <NavLink
          to="/"
          className={`font-display text-xl font-extrabold uppercase tracking-tight transition-colors ${
            light ? 'text-white' : ''
          }`}
          onClick={() => setOpen(false)}
        >
          Free Tibet
        </NavLink>

        {/* Desktop */}
        <div className="hidden items-center gap-8 md:flex">
          <ul className="flex items-center gap-8">
            {links
              .filter(l => l.to !== '/')
              .map(l => (
                <li key={l.to}>
                  <NavLink to={l.to} className={linkClass}>
                    {l.label}
                  </NavLink>
                </li>
              ))}
          </ul>
          <ThemeToggle light={light} />
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-1 md:hidden">
          <ThemeToggle light={light} />
          <button
            onClick={() => setOpen(o => !o)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            className={`grid h-9 w-9 place-items-center transition-colors ${
              light ? 'text-white' : 'text-text'
            }`}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-x-0 top-16 flex flex-col gap-5 border-b border-border bg-bg/98 px-6 py-7 backdrop-blur-md md:hidden"
          >
            {links.map(l => (
              <NavLink
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="font-display text-3xl font-extrabold uppercase"
              >
                {l.label}
              </NavLink>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
