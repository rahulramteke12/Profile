import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Certifications from './components/Certifications';
import Experience from './components/Experience';
import PillNav from './components/PillNav';
import Footer from './components/Footer';
import AOS from 'aos';
import Galaxy from './components/Galaxy';
import 'aos/dist/aos.css';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('');
  const [isAnimationEnabled, setIsAnimationEnabled] = useState(false);
  const [isAnimationPaused, setIsAnimationPaused] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });

    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'projects', 'skills', 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 100;

      const currentSection = sections.find(sectionId => {
        const section = document.getElementById(sectionId);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          return scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight;
        }
        return false;
      });

      setActiveSection(currentSection || '');
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        setIsAnimationPaused(true);
      }
    };

    const idleTimeout = 30000;
    let idleTimer;
    const resetIdleTimer = () => {
      if (isAnimationEnabled) {
        setIsAnimationPaused(false);
        clearTimeout(idleTimer);
        idleTimer = setTimeout(() => setIsAnimationPaused(true), idleTimeout);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('mousemove', resetIdleTimer);
    window.addEventListener('keydown', resetIdleTimer);

    resetIdleTimer();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('mousemove', resetIdleTimer);
      window.removeEventListener('keydown', resetIdleTimer);
      clearTimeout(idleTimer);
    };
  }, [isAnimationEnabled]);

  const handleToggleAnimation = () => {
    setIsAnimationEnabled(prevState => !prevState);
  };

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <div className="App">
      <PillNav
        logo={`${process.env.PUBLIC_URL}/logo.jpeg`}
        logoAlt="Rahul Ramteke Logo"
        items={navItems}
        activeHref={`#${activeSection || 'home'}`}
        baseColor="#0A192F"
        pillColor="#112240"
        hoveredPillTextColor="#CCD6F6"
        pillTextColor="#64FFDA"
      />
      <Header />
      <main>
        {isAnimationEnabled && <Galaxy
          disableAnimation={isAnimationPaused}
          density={0.8}
          glowIntensity={0.2}
          saturation={0}
          hueShift={180}
          twinkleIntensity={0.2}
          rotationSpeed={0.05}
          starSpeed={0.2}
        />}
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Certifications />
        <Contact />
      </main>
      <Footer isAnimationOn={isAnimationEnabled} onToggle={handleToggleAnimation} />
    </div>
  );
}

export default App;
