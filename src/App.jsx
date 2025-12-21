import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <main className="min-h-screen bg-black">
      <Hero />
      <Skills />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </main>
  )
}

export default App
