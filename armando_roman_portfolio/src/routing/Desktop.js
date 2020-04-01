import React from 'react';
import LandingPage from '../components/LandingPage'

import Projects from '../components/Projects'
import Contact from '../components/Contact'
import About from '../components/About'
import NavBar from '../components/NavBar'
import resume from '../assests/images/resume.svg'

function Desktop() {
    return (
      <div className="App desktop">
      <NavBar />
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