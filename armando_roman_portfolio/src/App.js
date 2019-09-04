import React from 'react';
import LandingPage from './components/LandingPage'
import { Route } from 'react-router-dom'
import Projects from './components/Projects'
import NavBar from './components/NavBar'

function App() {
  return (
    <div className="App">
        <Route exact path = '/' component = {LandingPage}/>
        <Route path = '/projects' component = {Projects}/>
    </div>
  );
}

export default App;
