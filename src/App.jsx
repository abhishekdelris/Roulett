import React from 'react';
import Login from './authentication/Login';
import Navbar from './home/Navbar';
import Footer from './home/Footer';
import RouletteWheel from './games/Roulettewheel';
import './App.css';
import CoinSelect from './games/CoinSelect';
import RouletteGame from './games/RolletGame';

function App() {
  const betTitle = "single"; // Corrected the variable name to camelCase
  const betPosition = 20;

  return (
    <div>
      {/* Uncomment as needed */}
      {/* <RouletteWheel /> */}
      <RouletteGame />
      {/* <CoinSelect betTitle={betTitle} betPosition={betPosition} /> */}
      {/* <Login /> */}
      {/* <Navbar /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
