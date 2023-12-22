
import { useEffect, useState } from 'react'
import './App.css'
import { EVENTS } from './public/JS/consts.js'
import HomePage from './Pages/HomePage'
import AboutPage from './Pages/AboutPage'


function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname) 
  
  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname)
    }
    window.addEventListener(EVENTS.PUSHTATE, onLocationChange)
    window.addEventListener(EVENTS.POPSTATE,onLocationChange)
    return () =>{
      window.removeEventListener(EVENTS.PUSHTATE,onLocationChange)
      window.addEventListener(EVENTS.POPSTATE,onLocationChange)
    }
  },[])

  return(
    <main>
      {currentPath == '/' && <HomePage /> }
      {currentPath == '/about' && <AboutPage /> }
    </main>
  )
}

export default App
