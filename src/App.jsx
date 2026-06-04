import { Routes, Route } from 'react-router-dom'

import ScrollProgress from './components/ScrollProgress'
import ScrollToTop from './components/ScrollToTop'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { NavOverlayProvider } from './components/NavOverlay'
import { lazy, Suspense } from 'react'
import Home from './pages/Home'
import PageSkeleton from './components/PageSkeleton'

const NotFound = lazy(() => import('./pages/NotFound'))
const Art = lazy(() => import('./pages/Art'))
const Engineering = lazy(() => import('./pages/Engineering'))
const About = lazy(() => import('./pages/About'))
const Contact = lazy(() => import('./pages/Contact'))
const WorkDetail = lazy(() => import('./pages/WorkDetail'))
const SelfImmolations = lazy(() => import('./pages/SelfImmolations'))
const Namkyi = lazy(() => import('./pages/Namkyi'))

export default function App() {
  return (
    <NavOverlayProvider>
      <ScrollToTop />
      <ScrollProgress />
      <Navbar />

      <Suspense
        fallback={<PageSkeleton />}
      >

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/self-immolations" element={<SelfImmolations />} />
          <Route path="/namkyi" element={<Namkyi />} />
          <Route path="/art" element={<Art />} />
          <Route path="/engineering" element={<Engineering />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/art/:slug" element={<WorkDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>

      <Footer />
    </NavOverlayProvider>
  )
}