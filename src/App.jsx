import { Routes, Route } from 'react-router-dom'

import ScrollProgress from './components/ScrollProgress'
import ScrollToTop from './components/ScrollToTop'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { NavOverlayProvider } from './components/NavOverlay'
import RedirectHandler from './components/RedirectHandler'

import Home from './pages/Home'
import Art from './pages/Art'
import Engineering from './pages/Engineering'
import About from './pages/About'
import Contact from './pages/Contact'
import WorkDetail from './pages/WorkDetail'
import SelfImmolations from './pages/SelfImmolations'
import Namkyi from './pages/Namkyi'

export default function App() {
  return (
    <>
      {/* Handles GitHub Pages deep-link redirect */}
      <RedirectHandler />

      <NavOverlayProvider>
        <ScrollToTop />
        <ScrollProgress />
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/self-immolations" element={<SelfImmolations />} />
          <Route path="/namkyi" element={<Namkyi />} />
          <Route path="/art" element={<Art />} />
          <Route path="/engineering" element={<Engineering />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/art/:slug" element={<WorkDetail />} />
        </Routes>

        <Footer />
      </NavOverlayProvider>
    </>
  )
}