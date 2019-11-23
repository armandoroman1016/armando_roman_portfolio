import React from 'react';
import useWindowSize from './hooks/WindowSize'
import Desktop from './routing/Desktop'
import Mobile from './routing/Mobile'
import Footer from './components/Footer.js'

function App() {

  const { height, width } = useWindowSize()
  
  return (
    <div className="App">
      { width > 1400 ?
        <Desktop />
        : <Mobile /> 
      }
      {/* <Footer/> */}
    </div>
  );
}

export default App;
