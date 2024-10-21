import React, { useEffect, useState } from 'react';
import './Roulette.css'; // Add your custom CSS for styling
import wheelImg from '../assets/img/game/roulette_center.png' // Import your wheel image
import Wheel from '../assets/img/game/wheel.gif';
import BgWheel from '../assets/img/game/bgwheel.gif';
import calculateDegree from '../managerfiles/calculateDegree';

const RouletteWheelResult = ({betData}) => {
  const [rotation, setRotation] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);
// Function to handle the spinning

const [number, setNumber] = useState('');
  const [degree, setDegree] = useState(null);

  // Function to get the degree based on input number
  const findDegree = (num) => {
    if (calculateDegree[num]) {
      setDegree(calculateDegree[num]);  // Set the degree based on number
    } else {
      setDegree('No degree found for this number'); // Handle case where number is not in the map
    }
  };

  
const spin = () => {
  
  findDegree(30);
  console.log("degree......",degree);
  if (!isSpinning) {
    // Add random rotation but ensure it ends at 90 degrees
    const randomSpins = Math.floor(Math.random() * 360) + 720; // Random spins (add 720 for extra spins)
    const finalAngle = 100; // Ensure it stops at 90 degrees
    const degrees = randomSpins + (finalAngle - (randomSpins % 360)); // Ensure it ends at 90 degrees
    setRotation(degrees);
    setIsSpinning(true);

    // Stop spinning after animation
    setTimeout(() => {
      setIsSpinning(false);
    }, 2000); // Match with animation duration (2 seconds in this case)
  }
};


// Automatically call spin when component mounts
useEffect(() => {
  spin(); // Call the spin function when the component mounts
}, []); // Empty dependency array ensures it runs once when the component mounts

const getBalancesByNumber = (targetNumber) => {
  // Get all objects where the number matches
  const matchedObjects = betData.filter(item => item.number === targetNumber);
  
  // Return the amounts from all matched objects
  return matchedObjects.map(item => item.amount);
};

// Example usage:
const balances = getBalancesByNumber(15);

console.log("this is a balance...",balances); // Output: [80] (if there are multiple, you'll get an array of amounts)


  return (
<>
<div className=" rounded-lg p-6 w-96">
            <h2 className="text-xl font-bold mb-4">You Win</h2>
            <p className="mb-4">Your Winning Number is 9</p>
    <div className="position-relative">
        <img
          src={BgWheel}
          alt="Background Wheel"
          className="wheel-spin-img bg-wheel transition-transform duration-[4s] ease-out "
        />
        {/* <img src={Wheel} alt="Wheel" className="overlay-wheel" /> */}

        <img
          src={wheelImg}
          alt="Roulette Wheel"
          className={`wheel-result-img transition-transform overlay-wheel duration-[4s] ease-out ${
            isSpinning ? "rotate" : ""
          }`}
          style={{ transform: `rotate(${rotation}deg)` }}
        />
        {/* Add any pointer/indicator here */}
        <div className="svg-auro-img">
            <svg
              width="30"
              height="30"
              viewBox="0 0 66 96"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M56.8591 10.1015C50.5075 3.76174 42.0501 0.273441 33.0311 0.273441C23.9999 0.269534 15.5392 3.76174 9.19915 10.1015C-10.7698 30.0785 9.42962 60.9885 24.1792 83.5585C26.6597 87.3476 28.9995 90.9296 30.8784 94.0705C31.3276 94.8205 32.1478 95.2893 33.0267 95.2893C33.9056 95.2893 34.7259 94.8206 35.1751 94.0705C37.054 90.9299 39.3939 87.3517 41.8743 83.5585C56.6283 60.9885 76.8281 30.0785 56.8591 10.1015ZM47.1287 33.9295C47.1287 41.7107 40.8005 48.0315 33.0266 48.0315C25.2454 48.0315 18.9247 41.7112 18.9247 33.9295C18.9247 26.1478 25.2449 19.8275 33.0266 19.8275C40.8 19.8275 47.1287 26.1478 47.1287 33.9295Z"
                fill="#FBBC05"
              />
            </svg>
          </div>
        </div>
        
          
      
      {/* <button className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-lg" >Exit</button>  */}
      </div>
    </>
  );
};

export default RouletteWheelResult;
