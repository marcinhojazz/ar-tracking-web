import { useState } from 'react'
import reactLogo from './assets/react.svg'
import ArTracking from './components/ArTracking'
import Hero from './components/Hero'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      {/* <Navbar />
      <Hero /> */}
      <ArTracking />
    </div>
  )
}

export default App
