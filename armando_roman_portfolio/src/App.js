import React from 'react';
import LandingPage from './components/LandingPage'
import { Route, Switch } from 'react-router-dom'
import Projects from './components/Projects'
import NavBar from './components/NavBar'
import Contact from './components/Contact'
import About from './components/About'
import { CSSTransition,  TransitionGroup } from 'react-transition-group'


function App() {
  return (
    <div className="App">
        <Route exact path = '/' component = {LandingPage}/>
        <Route render= {({location}) => (
        <TransitionGroup>
          <CSSTransition 
          timeout = {500} 
          classNames = 'fade'
          key = {location.key}
          >
            <Switch location = {location}>
              <Route path = '/projects' component = {Projects}/>
              <Route path = '/contact' component = {Contact}/>
              <Route path = '/about' component = {About}/>
            </Switch>
          </CSSTransition>
        </TransitionGroup>
            )}/>
    </div>
  );
}

export default App;
