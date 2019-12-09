import React from 'react';
import LandingPage from '../components/LandingPage'
import { Route, Switch } from 'react-router-dom'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import About from '../components/About'
import NavBar from '../components/NavBar'
import resume from '../assests/images/resume.svg'

import { CSSTransition,  TransitionGroup } from 'react-transition-group'

function Desktop() {
    return (
      <div className="App desktop">
      <NavBar />
      <div className = 'resume'>
        <a href = 'https://indd.adobe.com/view/286484cc-e4b6-4a6a-bf8d-f92f731d1ab4'>
          <img src = {resume} alt = 'an icon of a sheet of paper' />
        </a>
      </div>
          <div>
            <Route render= {({location}) => (
              <TransitionGroup>
                <CSSTransition 
                timeout = {500} 
                classNames = 'fade'
                key = {location.key}
                >
                  <Switch location = {location}>
                    <Route exact path = '/' component = {LandingPage}/>
                    <Route path = '/projects' component = {Projects}/>
                    <Route path = '/contact' component = {Contact}/>
                    <Route path = '/about' component = {About}/>
                  </Switch> 
                </CSSTransition>
              </TransitionGroup>
                  )}/>
            </div>
      </div>
    );
  }
  
  export default Desktop;