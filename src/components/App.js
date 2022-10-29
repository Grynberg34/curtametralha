import Home from './Home';
import ReactGA from "react-ga";
import {useEffect } from 'react';

const TRACKING_ID = "G-PVWM04C4C7";
ReactGA.initialize(TRACKING_ID);


function App() {

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <div>
      <Home></Home>
    </div>
  )
  
}

export default App
