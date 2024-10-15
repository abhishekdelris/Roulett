import React from 'react'
import Login from './authentication/Login'
import Navbar from './home/Navbar'
import Footer from './home/Footer'
import RouletteGame from './games/RolletGame'
import RouletteWheel from './games/Roulettewheel'
import './App.css'

function App() {
  return (
    <div>
      {/* <RouletteWhee l /> */}
      <RouletteGame />
      {/* <Login /> */}
      {/* <Navbar /> */}
      {/* <Footer /> */}
    </div>
  )
}

export default App