import { createContext, useContext, useState } from 'react'

/**
 * Lets a page tell the (global) Navbar that it's currently sitting over a dark
 * hero, so the nav should render light text regardless of the active theme.
 * The Namkyi page sets this while its portrait hero is in view.
 */
const NavOverlayContext = createContext(null)

export function NavOverlayProvider({ children }) {
  const [overDark, setOverDark] = useState(false)
  return (
    <NavOverlayContext.Provider value={{ overDark, setOverDark }}>
      {children}
    </NavOverlayContext.Provider>
  )
}

export function useNavOverlay() {
  return useContext(NavOverlayContext) ?? { overDark: false, setOverDark: () => {} }
}
