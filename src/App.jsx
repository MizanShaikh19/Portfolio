import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Services from './components/Services'
import Process from './components/Process'
import FAQ from './components/FAQ'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

import Navbar from './components/Navbar'
import BackToTop from './components/BackToTop'

function App() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Services />
      <Process />
      <FAQ />
      <About />
      <Contact />
      <Footer />
      <BackToTop />
    </main>
  )
}

export default App
