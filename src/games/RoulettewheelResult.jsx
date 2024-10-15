import React, { useState } from 'react';
import './Roulette.css'; // Add your custom CSS for styling
import wheelImg from '../assets/img/game/roulette_center.png' // Import your wheel image
import Wheel from '../assets/img/game/wheel.gif';
import BgWheel from '../assets/img/game/bgwheel.gif';

const RouletteWheelResult = () => {
  const [rotation, setRotation] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);
 
  const spin = () => {
    if (!isSpinning) {
      const degrees = Math.floor(Math.random() * 360) + 720; // Random rotation with extra spins
      setRotation(degrees);
      setIsSpinning(true);

      // Stop spinning after animation
      setTimeout(() => {
        setIsSpinning(false);
      }, 8000); // Match with animation duration
    }
  };

  return (
    <div className="w-64 flex flex-col items-center justify-center ">
      <div className="relative">
      <img src={BgWheel} alt="Background Wheel" className="bg-wheel w-64 h-64 transition-transform duration-[4s] ease-out " />
            {/* <img src={Wheel} alt="Wheel" className="overlay-wheel" /> */}
           
         <img
          src={wheelImg}
          alt="Roulette Wheel"
          className={`transition-transform overlay-wheel duration-[4s] ease-out ${isSpinning ? 'rotate' : ''}`}
          style={{ transform: `rotate(${rotation}deg)` }}
        /> 
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2" style={{top: '44px'}}>
          {/* Add any pointer/indicator here */}
          <div className="w-4 h-4"><svg width="25" height="25" viewBox="0 0 66 96" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M56.8591 10.1015C50.5075 3.76174 42.0501 0.273441 33.0311 0.273441C23.9999 0.269534 15.5392 3.76174 9.19915 10.1015C-10.7698 30.0785 9.42962 60.9885 24.1792 83.5585C26.6597 87.3476 28.9995 90.9296 30.8784 94.0705C31.3276 94.8205 32.1478 95.2893 33.0267 95.2893C33.9056 95.2893 34.7259 94.8206 35.1751 94.0705C37.054 90.9299 39.3939 87.3517 41.8743 83.5585C56.6283 60.9885 76.8281 30.0785 56.8591 10.1015ZM47.1287 33.9295C47.1287 41.7107 40.8005 48.0315 33.0266 48.0315C25.2454 48.0315 18.9247 41.7112 18.9247 33.9295C18.9247 26.1478 25.2449 19.8275 33.0266 19.8275C40.8 19.8275 47.1287 26.1478 47.1287 33.9295Z" fill="#FBBC05"/>
</svg>
</div>
        </div>
      </div>
       <button
        onClick={spin}
        className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-lg"
        disabled={isSpinning}
      >
        Spin
      </button> 
      {/* <button className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-lg" >Exit</button>  */}
    </div>
  );
};

export default RouletteWheelResult;
