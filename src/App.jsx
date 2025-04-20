import './App.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

import Home from './components/home/Home';
import Header from './components/header/Header';
import About from './components/about/About';
import Projects from './components/project/Projects';
import Skills from './components/skills/Skills';
import Coding from './components/coding/Coding';
import Contact from './components/contact/Contact';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const headerRef = useRef();
  const homeRef = useRef();
  const aboutRef = useRef();
  const projectsRef = useRef();
  const skillsRef = useRef();
  const codingRef = useRef();
  const contactRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      headerRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1, ease: 'power3.out' }
    );

    const sections = [
      { ref: homeRef, y: 50 },
      { ref: aboutRef, y: 60 },
      { ref: projectsRef, y: 50 },
      { ref: skillsRef, y: 50 },
      { ref: codingRef, y: 60 },
      { ref: contactRef, y: 60 },
    ];

    sections.forEach(({ ref, y }) => {
      gsap.fromTo(
        ref.current,
        { y: y, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: ref.current,
            start: ref === skillsRef ? 'top 95%' : 'top 80%',  // 👈 Trigger Skills earlier
            toggleActions: 'play none none none',
          },
        }
      );
    });
  }, []);

  return (
    <div className="">
      <div ref={headerRef}>
        <Header />
      </div>

      <div id="home" ref={homeRef} className="p-1 lg:p-2 mb-10 bg-gradient-to-r from-gray-950 via-gray-950 to-black">
        <Home />
      </div>

      <div id="about" ref={aboutRef} className="p-1 lg:p-4 mb-10 bg-gradient-to-r from-black via-gray-900 to-gray-950">
        <About />
      </div>

      <div id="projects" ref={projectsRef} className="p-1 lg:p-2 mb-10 from-gray-950 via-gray-900 to-black">
        <Projects />
      </div>

      <div id="skills" ref={skillsRef} className="p-1 lg:p-2 mb-10 bg-gradient-to-r from-black via-gray-900 to-gray-950">
        <Skills />
      </div>

      <div id="coding" ref={codingRef} className="p-1 lg:p-2 mb-10 bg-gradient-to-r from-black via-gray-950 to-gray-950">
        <Coding />
      </div>

      <div id="contact" ref={contactRef} className="mb-3 p-1 lg:p-2 bg-gradient-to-r from-black via-gray-900 to-gray-950">
        <Contact />
      </div>
    </div>
  );
}

export default App;
