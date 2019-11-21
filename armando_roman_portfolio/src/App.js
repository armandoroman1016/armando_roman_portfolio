import React from 'react';
import LandingPage from './components/LandingPage'
import Projects from './components/Projects'
import Contact from './components/Contact'
import About from './components/About'
import useWindowSize from './hooks/WindowSize'
import Desktop from './routing/Desktop'
import Mobile from './routing/Mobile'

function App() {

  const { height, width } = useWindowSize()
  
  return (
    <div className="App">
      { width > 1400 ?
        <Desktop />
        : <Mobile /> 
      }
    </div>
  );
}

export default App;
