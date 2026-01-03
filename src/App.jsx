import React, { useState } from 'react'
import { AnimatePresence } from 'framer-motion'

import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'

import Navbar from './components/Navbar'
import BackToTop from './components/BackToTop'

// Advanced UI Components
import ScrollProgress from './components/ui/ScrollProgress'
import MizanIrisPreloader from './components/ui/MizanIrisPreloader'

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <main className="min-h-screen bg-black md:cursor-auto">
      <AnimatePresence mode="wait">
        {loading && (
          <MizanIrisPreloader onComplete={() => setLoading(false)} />
        )}
      </AnimatePresence>

      <div className={`${loading ? 'fixed inset-0 overflow-hidden pointer-events-none' : ''}`}>
        <ScrollProgress />
        <Navbar />
        <Hero />
        <Skills />
        <Projects />
        <Pricing />
        <FAQ />
        <Contact />
        <Footer />
        <BackToTop />
      </div>
    </main>
  )
}

export default App
