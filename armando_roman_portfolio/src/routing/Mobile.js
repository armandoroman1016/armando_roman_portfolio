import React from 'react';
import LandingPage from '../components/LandingPage'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import About from '../components/About'
import MobileNav from '../components/MobileNav'

function Mobile() {

    return (
      <>
        <MobileNav />
        <LandingPage />
        <Projects />
        <About />
        <Contact/>
      </>
    );
  }
  
  export default Mobile;