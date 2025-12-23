import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Services from './components/Services'
import Process from './components/Process'
import FAQ from './components/FAQ'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <main className="min-h-screen bg-black">
      <Hero />
      <Skills />
      <Projects />
      <Services />
      <Process />
      <FAQ />
      <About />
      <Contact />
      <Footer />
    </main>
  )
}

export default App
