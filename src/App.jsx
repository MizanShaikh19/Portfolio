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
  return (
    <main className="min-h-screen bg-black md:cursor-auto">
      <MizanIrisPreloader />
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
    </main>
  )
}

export default App
