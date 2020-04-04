import React, { useEffect } from 'react';
import useDarkMode from '../hooks/useDarkMode'
import useWindowSize from '../hooks/WindowSize'

import LandingPage from '../components/LandingPage'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import About from '../components/About'
import NavBar from '../components/NavBar'
import MobileNav from '../components/MobileNav'

import resume from '../assests/images/resume.svg'
import sun from '../assests/images/sun.svg'
import moon from '../assests/images/moon.svg'

function Desktop() {

    const [ darkMode, setDarkMode ] = useDarkMode(false)
    
    const { height, width } = useWindowSize()

    useEffect(() => {
      if(darkMode === true){
        document.querySelector('body').classList.add('dark-mode')
      }else if (darkMode === false){
        document.querySelector('body').classList.remove('dark-mode')
      }
    },[darkMode])

    const toggleMode = e => {
      e.preventDefault();
      setDarkMode(!darkMode);
    };
    
    return (
      <div className="App desktop">
          {width > 1400 ? 
            <NavBar />
            : <MobileNav />
          }
          <div 
          onClick={toggleMode}
          className={darkMode ? 'dark off' : 'dark '}
          >
          {!darkMode && <img src = {sun} alt = 'illustration of the sun'/>}
          {darkMode && <img src = {moon} alt = 'illustration of the moon'/>}
          </div>
          <div className = {darkMode ? 'resume off' : 'resume'}>
            <a href = 'https://indd.adobe.com/view/286484cc-e4b6-4a6a-bf8d-f92f731d1ab4'>
              <img src = {resume} alt = 'an icon of a sheet of paper' />
            </a>
          </div>
              <LandingPage />
              <Projects />
              <About />     
              <Contact />
      </div>
    );
  }
  
  export default Desktop;