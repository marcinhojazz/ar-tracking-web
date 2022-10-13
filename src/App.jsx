import { useState } from 'react'
import reactLogo from './assets/react.svg'
import ArTracking from './components/ArTracking'
import Hero from './components/Hero'
import Navbar from './components/Navbar'

const App = () => {
  const ref = useRef();
  const [start, setStart] = useState(false);
  const [marker, setMarker] = useState(false);

  function handlePlayButton() {
    let setDisplay = !start;
    setPlay(setDisplay);
  }

  return (
    <>
    
    </>
  )
}

export default App
