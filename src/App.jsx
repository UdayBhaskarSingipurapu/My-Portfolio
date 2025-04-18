import './App.css'
import { gsap } from 'gsap'
import Home from './components/home/Home'
import Header from './components/header/Header'
import { useEffect, useRef } from 'react'


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

      <div className='p-1 lg:p-2'>
        <Home />
      </div>
    </div>
  )
}

export default App
