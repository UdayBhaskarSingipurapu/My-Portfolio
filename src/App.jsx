import './App.css'
import { gsap } from 'gsap'
import Home from './components/home/Home'
import Header from './components/header/Header'
import { useEffect, useRef } from 'react'
import About from './components/about/About'
import Projects from './components/project/Projects'
import Skills from './components/skills/Skills'
import Coding from './components/coding/Coding'
import Contact from './components/contact/Contact'

function App() {
  const headingRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      headingRef.current,
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: 'power3.out',
        delay: 0.2,
      }
    );
  }, []);
  

  return (
    <div className=''>
      <div className='' ref={headingRef}>
        <Header />
      </div>

      <div id="home" className='p-1 lg:p-2  bg-gradient-to-r from-gray-950 via-gray-950 to-black'>
        <Home />
      </div>

      <div id="about" className='p-1 lg:p-2  bg-gradient-to-r from-black via-gray-900 to-gray-950'>
        <About />
      </div>

      <div id="projects" className='p-1 lg:p-2 from-gray-950 via-gray-900 to-black'>
        <Projects />
      </div>

      <div id="skills" className='p-1 lg:p-2  bg-gradient-to-r from-black via-gray-900 to-gray-950'>
        <Skills />
      </div>

      <div id="coding" className='p-1 lg:p-2  bg-gradient-to-r from-black via-gray-950 to-gray-950'>
        <Coding />
      </div>

      <div id="contact" className='mb-3 p-1  lg:p-2 bg-gradient-to-r from-black via-gray-900 to-gray-950'>
        <Contact />
      </div>

    </div>
  )
}

export default App
