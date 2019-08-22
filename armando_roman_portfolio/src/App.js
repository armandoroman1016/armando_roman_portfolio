import React from 'react';
import NavBar from './components/NavBar'
import LandingPage from './components/LandingPage'
import Projects from './components/Projects'

function App() {
  return (
    <div className="App">
        <NavBar />
        <LandingPage/>
        <Projects/>
    </div>
  );
}

export default App;
