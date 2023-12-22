import './App.css'
import Home from './pages/Home/Home'
import MobileNavBar from './components/MobileNavBar/MobileNavBar'
import About from './pages/About/About'
import Projects from './pages/Projects/Projects'
import Skills from './pages/Skills/Skills'
import Contact from './pages/Contact/Contact'

function App() {

  return (
    <div className='h-full absolute w-full'>
      <MobileNavBar />
      <Home />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  )
}

export default App
