import React, { useEffect } from 'react';
import useDarkMode from '../hooks/useDarkMode'

import LandingPage from '../components/LandingPage'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import About from '../components/About'
import NavBar from '../components/NavBar'
import resume from '../assests/images/resume.svg'

function Desktop() {

    const [ darkMode, setDarkMode ] = useDarkMode(false)
    
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
      <NavBar />
      <div 
      onClick={toggleMode}
      style = {{position: "absolute", right: "0", top: "10%", color: "red", zIndex: "10000"}}
      className={darkMode ? 'toggle toggled' : 'toggle'}
      >  PRESS ME </div>
      <div className = 'resume'>
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