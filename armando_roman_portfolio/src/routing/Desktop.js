import React from 'react';
import LandingPage from '../components/LandingPage'
import { Route, Switch } from 'react-router-dom'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import About from '../components/About'
import NavBar from '../components/NavBar'

import { CSSTransition,  TransitionGroup } from 'react-transition-group'

function Desktop() {
    return (
      <div className="App">
      <NavBar />
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