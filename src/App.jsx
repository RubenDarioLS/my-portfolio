import './App.css'
import Home from './pages/Home/Home'
import NavBar from './components/NavBar/NavBar'

import MobileNavBar from './components/MobileNavBar/MobileNavBar'
import About from './pages/About/About'
import Projects from './pages/Projects/Projects'
import Skills from './pages/Skills/Skills'
import Contact from './pages/Contact/Contact'
import Footer from './pages/Footer/Footer'


function App() {

  return (
    <div className='h-full absolute w-full'>

      <NavBar />
      <MobileNavBar />
      <Home />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
