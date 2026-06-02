import { useEffect, useState } from 'react'

/**
 * Reads/sets the active color theme. The initial .dark class is applied by an
 * inline script in index.html (before paint) to avoid a flash; this hook keeps
 * React state in sync and persists the user's choice to localStorage.
 */
export function useTheme() {
  const [theme, setTheme] = useState(() =>
    document.documentElement.classList.contains('dark') ? 'dark' : 'light',
  )

  useEffect(() => {
    const root = document.documentElement
    root.classList.toggle('dark', theme === 'dark')
    try {
      localStorage.setItem('theme', theme)
    } catch (e) {
      /* ignore storage failures (private mode, etc.) */
    }
  }, [theme])

  const toggle = () => setTheme(t => (t === 'dark' ? 'light' : 'dark'))

  return { theme, toggle }
}
