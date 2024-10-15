import React, { useState,useEffect } from "react";
import "./Roulette.css"; // Import your custom styles
import RouletteWheel from "./Roulettewheel";
import Score from "../assets/img/home/score.png";
import Timer from "../assets/img/home/timer.png";
import Winner from "../assets/img/home/Winner.png";
import Ten from "../assets/img/home/10.svg";
import Twenty from "../assets/img/home/20.svg";
import Fifty from "../assets/img/home/50.svg";
import Hundred from "../assets/img/home/100.svg";
import TwoHundred from "../assets/img/home/200.svg";
import FiveHundred from "../assets/img/home/500.svg";
import Thousand from "../assets/img/home/1000.svg";
import RouletteWheelResult from "./RoulettewheelResult";
// import CoinSelect from "./CoinSelect";
// import { Modal, Button } from "react-bootstrap";

const RouletteGame = () => {
  const [selectedCoin, setSelectedCoin] = useState(null); // Coin selection state

  // State to hold bet prices for each row
  const [betPricesRow0, setBetPricesRow0] = useState({
    main: null,
  });
  const [betPricesRow1, setBetPricesRow1] = useState({
    main: null,
    left: null,
    leftTop: null,
    leftButtom: null,
    center: null,
    middle: null,
  });
  const [betPricesRow2, setBetPricesRow2] = useState({
    main: null,
    left: null,
    leftTop: null,
    center: null,
    middle: null,
  });
  
  const [betPricesRow3, setBetPricesRow3] = useState({
    main: null,
    left: null,
    secondary: null,
    center: null,
    middle: null,
  });
  const [betPricesRow4, setBetPricesRow4] = useState({
    main: null,
    secondary: null,
    leftButtom: null,
    center: null,
    middle: null,
  });
  const [betPricesRow5, setBetPricesRow5] = useState({
    main: null,
    secondary: null,
    center: null,
    middle: null,
  });
  const [betPricesRow6, setBetPricesRow6] = useState({
    main: null,
    secondary: null,
    center: null,
    middle: null,
  });
  const [betPricesRow7, setBetPricesRow7] = useState({
    main: null,
    secondary: null,
    leftButtom: null,
    center: null,
    middle: null,
  });
  const [betPricesRow8, setBetPricesRow8] = useState({
    main: null,
    secondary: null,
    center: null,
    middle: null,
  });
  const [betPricesRow9, setBetPricesRow9] = useState({
    main: null,
    secondary: null,
    center: null,
    middle: null,
  });
  const [betPricesRow10, setBetPricesRow10] = useState({
    main: null,
    secondary: null,
    center: null,
    middle: null,
  });
  const [betPricesRow11, setBetPricesRow11] = useState({
    main: null,
    secondary: null,
    center: null,
    middle: null,
  });
  const [betPricesRow12, setBetPricesRow12] = useState({
    main: null,
    secondary: null,
    center: null,
    middle: null,
  });
  const [betPricesRow13, setBetPricesRow13] = useState({
    main: null,
    secondary: null,
    center: null,
    middle: null,
  });
  const [betPricesRow14, setBetPricesRow14] = useState({
    main: null,
    secondary: null,
    center: null,
    middle: null,
  });
  const [betPricesRow15, setBetPricesRow15] = useState({
    main: null,
    secondary: null,
    center: null,
    middle: null,
  });
  const [betPricesRow16, setBetPricesRow16] = useState({
    main: null,
    secondary: null,
    center: null,
    middle: null,
  });
  const [betPricesRow17, setBetPricesRow17] = useState({
    main: null,
    secondary: null,
    center: null,
    middle: null,
  });
  const [betPricesRow18, setBetPricesRow18] = useState({
    main: null,
    secondary: null,
    center: null,
    middle: null,
  });
  const [betPricesRow19, setBetPricesRow19] = useState({
    main: null,
    secondary: null,
    center: null,
    middle: null,
  });
  const [betPricesRow20, setBetPricesRow20] = useState({
    main: null,
    secondary: null,
    center: null,
    middle: null,
  });
  const [betPricesRow21, setBetPricesRow21] = useState({
    main: null,
    secondary: null,
    center: null,
    middle: null,
  });
  const [betPricesRow22, setBetPricesRow22] = useState({
    main: null,
    secondary: null,
    center: null,
    middle: null,
  });
  const [betPricesRow23, setBetPricesRow23] = useState({
    main: null,
    secondary: null,
    center: null,
    middle: null,
  });
  const [betPricesRow24, setBetPricesRow24] = useState({
    main: null,
    secondary: null,
    center: null,
    middle: null,
  });
  const [betPricesRow25, setBetPricesRow25] = useState({
    main: null,
    secondary: null,
    center: null,
    middle: null,
  });
  const [betPricesRow26, setBetPricesRow26] = useState({
    main: null,
    secondary: null,
    center: null,
    middle: null,
  });
  const [betPricesRow27, setBetPricesRow27] = useState({
    main: null,
    secondary: null,
    center: null,
    middle: null,
  });
  const [betPricesRow28, setBetPricesRow28] = useState({
    main: null,
    secondary: null,
    center: null,
    middle: null,
  });
  const [betPricesRow29, setBetPricesRow29] = useState({
    main: null,
    secondary: null,
    center: null,
    middle: null,
  });
  const [betPricesRow30, setBetPricesRow30] = useState({
    main: null,
    secondary: null,
    center: null,
    middle: null,
  });
  const [betPricesRow31, setBetPricesRow31] = useState({
    main: null,
    secondary: null,
    center: null,
    middle: null,
  });
  const [betPricesRow32, setBetPricesRow32] = useState({
    main: null,
    secondary: null,
    center: null,
    middle: null,
  });
  const [betPricesRow33, setBetPricesRow33] = useState({
    main: null,
    secondary: null,
    center: null,
    middle: null,
  });
  const [betPricesRow34, setBetPricesRow34] = useState({
    main: null,
    secondary: null,
    center: null,
    middle: null,
  });
  const [betPricesRow35, setBetPricesRow35] = useState({
    main: null,
    secondary: null,
    center: null,
    middle: null,
  });
  const [betPricesRow36, setBetPricesRow36] = useState({
    main: null,
    secondary: null,
    center: null,
    middle: null,
  });
  const [betPricesRow37, setBetPricesRow37] = useState({
    main: null,
    secondary: null,
    center: null,
    middle: null,
  });
  const [betPricesRow38, setBetPricesRow38] = useState({
    main: null,
    secondary: null,
    center: null,
    middle: null,
  });
  const [betPricesRow39, setBetPricesRow39] = useState({
    main: null,
    secondary: null,
    center: null,
    middle: null,
  });
  const [betPricesRow40, setBetPricesRow40] = useState({
    main: null,
    secondary: null,
    center: null,
    middle: null,
  });
  const [betPricesRow41, setBetPricesRow41] = useState({
    main: null,
    secondary: null,
    center: null,
    middle: null,
  });
  const [betPricesRow42, setBetPricesRow42] = useState({
    main: null,
    secondary: null,
    center: null,
    middle: null,
  });
  const [betPricesRow43, setBetPricesRow43] = useState({
    main: null,
    secondary: null,
    center: null,
    middle: null,
  });
  const [betPricesRow44, setBetPricesRow44] = useState({
    main: null,
    secondary: null,
    center: null,
    middle: null,
  });
  const [betPricesRow45, setBetPricesRow45] = useState({
    main: null,
    secondary: null,
    center: null,
    middle: null,
  });
  const [betPricesRow46, setBetPricesRow46] = useState({
    main: null,
    secondary: null,
    center: null,
    middle: null,
  });
  const [betPricesRow47, setBetPricesRow47] = useState({
    main: null,
    secondary: null,
    center: null,
    middle: null,
  });
  const [betPricesRow48, setBetPricesRow48] = useState({
    main: null,
    secondary: null,
    center: null,
    middle: null,
  });
  const [betPricesRow49, setBetPricesRow49] = useState({
    main: null,
    secondary: null,
    center: null,
    middle: null,
  });

 // Handle coin selection
const handleCoinClick = (coin) => {
  setSelectedCoin(coin);
};

// Handle bet price click for a specific row and position
const handleBetPriceClick = (rowSetter, position) => {
  if (selectedCoin !== null) {
   let count = 0;
   let existing;
    rowSetter((prev) => {
      existing = selectedCoin;
      console.log("position", position);
      if(existing && count) {
        count++;
        const totalAmmount = existing + selectedCoin;
        return {
          ...prev,
          [position] : totalAmmount,
          }
      }
     else {

       return {
       ...prev,
       [position] : selectedCoin,
       }
     }
    });

  }
};

// Handle bet price click for a specific row and position
// const handleBetPriceClick = (rowSetter, position) => {
//   if (selectedCoin !== null) {
//     rowSetter((prev) => {
//       const existingCoin = prev[position];

//       // Check if there is already a coin in that position
//       if (existingCoin && existingCoin.type === selectedCoin) {
//         // If the same coin type exists, increase its count
//         return {
//           ...prev,
//           [position]: {
//             type: selectedCoin,
//             count: existingCoin.count + 1, // Increment the coin count
//           },
//         };
//       } else {
//         // If there is no coin or a different coin, set it with count 1
//         return {
//           ...prev,
//           [position]: {
//             type: selectedCoin,
//             count: 1, // Initialize the count
//           },
//         };
//       }
//     });
//   }
// };

//this is start logic For is open


  const [showModal, setShowModal] = useState(false);
  const initialTime = 10;  // Set your initial time (in seconds)
  const [timeLeft, setTimeLeft] = useState(initialTime);
  useEffect(() => {
    // Set up the timer to count down every second
    const timer = setInterval(() => {
      if (timeLeft > 0) {
        setTimeLeft((prevTime) => prevTime - 1);
      } else {
        // If time runs out, reset it to the initial value (infinite loop)
        setTimeLeft(initialTime);
      }
    }, 1000);

    // Cleanup the interval when the component is unmounted
    return () => clearInterval(timer);
  }, [timeLeft, initialTime]); // Re-run the effect every time `timeLeft` changes
//setShowModel(true)

  // Function to format the time as MM:SS
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };


  return (
    <div className="game-screen bettingBg text-white h-screen p-6">
      <div className="container mx-auto">
        {/* <CoinSelect/> */}
        {/* <div className="flex flex-wrap">
        
          <div className="w-full  px-4 mb-4">
            <header className="flex justify-between items-center mb-4">
              <div className="balance">
                Your Balance: <span className="font-bold">10,000</span>
              </div>
              <div className="bet-amount">
                Bet Amount: <span className="font-bold">600</span>
              </div>
            </header>
          </div>
          </div> */}
        <div className="flex flex-wrap">
          {/* Game Body */}
          <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-4"></div>
          <div className="w-full md:w-1/2 lg:w-3/4 px-4 mb-4">
            {/* Score, Timer, Winner */}
            <div className="grid grid-cols-3 gap-2 mb-4">
              {/* <div className="text-center">
                <img src={Score} alt="score" className="w-20" />
              </div> */}
               <div className="text-center">
      <div className="relative inline-block">
        {/* Timer Image */}
        <img src={Timer} alt="timer" className="w-20" />
        
        {/* Timer Text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-white text-xl pt-6 font-bold">{formatTime(timeLeft)}</span>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className=" rounded-lg p-6 w-96">
            <h2 className="text-xl font-bold mb-4">Time's Up!</h2>
            <p className="mb-4">Your 2-minute countdown has ended.</p>
            <RouletteWheelResult />
            <button
              onClick={() => setShowModal(false)}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  
              <div className="text-center">
                <img src={Winner} alt="winner" className="w-20" />
              </div>
            </div>

            {/* Chips and Betting Options */}
            <div className="chips flex justify-center mb-2 space-x-4">
              <div className={`chip w-10 h-10 rounded-full ${selectedCoin === 10 ? 'selected' : ''}`} onClick={() => handleCoinClick(10)}>
                <img src={Ten} alt="Ten" className="w-10 rounded-full" />
              </div>
              <div className={`chip w-10 h-10 rounded-full ${selectedCoin === 20 ? 'selected' : ''}`} onClick={() => handleCoinClick(20)}>
                <img src={Twenty} alt="Twenty" className="w-10 rounded-full" />
              </div>
              <div className={`chip w-10 h-10 rounded-full ${selectedCoin === 50 ? 'selected' : ''}`} onClick={() => handleCoinClick(50)}>
                <img src={Fifty} alt="Fifty" className="w-10 rounded-full" />
              </div>
              <div className={`chip w-10 h-10 rounded-full ${selectedCoin === 100 ? 'selected' : ''}`} onClick={() => handleCoinClick(100)}>
                <img src={Hundred} alt="Hundred" className="w-10 rounded-full" />
              </div>
              <div className={`chip w-10 h-10 rounded-full ${selectedCoin === 200 ? 'selected' : ''}`} onClick={() => handleCoinClick(200)}>
                <img src={TwoHundred} alt="Two Hundred" className="w-10 rounded-full" />
              </div>
              <div className={`chip w-10 h-10 rounded-full ${selectedCoin === 500 ? 'selected' : ''}`} onClick={() => handleCoinClick(500)}>
                <img src={FiveHundred} alt="Five Hundred" className="w-10 rounded-full" />
              </div>
              <div className={`chip w-10 h-10 rounded-full ${selectedCoin === 1000 ? 'selected' : ''}`} onClick={() => handleCoinClick(1000)}>
                <img src={Thousand} alt="Thousand" className="w-10 rounded-full" />
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-4">
            {/* Roulette Wheel */}
            <div className="roulette-wheel">
              <RouletteWheel />
            </div>
          </div>

          <div className="w-full md:w-1/2 lg:w-3/4  mb-4">
            {/* Betting Grid */}
            <div className="betting-table relative p-4 rounded-lg">
              {/* Betting Table */}
              <table className="table-auto w-full text-center number-table">
                <tbody>
                  <tr>
                    <td rowSpan={4} className="relative">
                      <div className="bet-item-inner bg-red-600">0</div>
                      <div
                      className="bet-price-main"
                      style={{ opacity: betPricesRow0.main ? 1 : 0 }}
                      onClick={() => handleBetPriceClick(setBetPricesRow0, 'main')}
                    >
                      {betPricesRow0.main || "Select a coin and click here"}
                    </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="relative">
                      <div className="bet-item-inner bg-red-600">3</div>
                      {/* Coin on number 3 */}
                      <div
                        className="bet-price-main"
                        style={{ opacity: betPricesRow3.main ? 1 : 0 }}
                        onClick={() => handleBetPriceClick(setBetPricesRow3, 'main')}
                      >
                        {betPricesRow3.main || "Select a coin and click here"}
                      </div>
                      <div
                        className="bet-price-center"
                        style={{ opacity: betPricesRow3.center ? 1 : 0 }}
                        onClick={() => handleBetPriceClick(setBetPricesRow3, 'center')}
                      >
                        {betPricesRow3.center || "Select a coin and click here"}
                      </div>
                      <div
                        className="bet-price-middle"
                        style={{ opacity: betPricesRow3.middle ? 1 : 0 }}
                        onClick={() => handleBetPriceClick(setBetPricesRow3, 'middle')}
                      >
                        {betPricesRow3.middle || "Select a coin and click here"}
                      </div>
                      <div
                        className="bet-price-leftMid"
                        style={{ opacity: betPricesRow3.left ? 1 : 0 }}
                        onClick={() => handleBetPriceClick(setBetPricesRow3, 'left')}
                      >
                        {betPricesRow3.left || "Select a coin and click here"}
                      </div>
                    </td>
                    <td className="relative">
                      <div className="bet-item-inner bg-black">6 </div>
                      <div
                        className="bet-price-main"
                        style={{ opacity: betPricesRow6.main ? 1 : 0 }}
                        onClick={() => handleBetPriceClick(setBetPricesRow6, 'main')}
                      >
                        {betPricesRow6.main || "Select a coin and click here"}
                      </div>
                      <div
                        className="bet-price-center"
                        style={{ opacity: betPricesRow6.center ? 1 : 0 }}
                        onClick={() => handleBetPriceClick(setBetPricesRow6, 'center')}
                      >
                        {betPricesRow6.center || "Select a coin and click here"}
                      </div>
                      <div
                        className="bet-price-middle"
                        style={{ opacity: betPricesRow6.middle ? 1 : 0 }}
                        onClick={() => handleBetPriceClick(setBetPricesRow6, 'middle')}
                      >
                        {betPricesRow6.middle || "Select a coin and click here"}
                      </div>
                    </td>
                    <td className="relative">
                      <div className="bet-item-inner bg-red-600">9</div>
                      <div
                        className="bet-price-main"
                        style={{ opacity: betPricesRow9.main ? 1 : 0 }}
                        onClick={() => handleBetPriceClick(setBetPricesRow9, 'main')}
                      >
                        {betPricesRow9.main || "Select a coin and click here"}
                      </div>
                      <div
                        className="bet-price-center"
                        style={{ opacity: betPricesRow9.center ? 1 : 0 }}
                        onClick={() => handleBetPriceClick(setBetPricesRow9, 'center')}
                      >
                        {betPricesRow9.center || "Select a coin and click here"}
                      </div>
                      <div
                        className="bet-price-middle"
                        style={{ opacity: betPricesRow9.middle ? 1 : 0 }}
                        onClick={() => handleBetPriceClick(setBetPricesRow9, 'middle')}
                      >
                        {betPricesRow9.middle || "Select a coin and click here"}
                      </div>
                    </td>
                    <td className="relative">
                      <div className="bet-item-inner bg-red-600">12</div>
                      <div
                        className="bet-price-main"
                        style={{ opacity: betPricesRow12.main ? 1 : 0 }}
                        onClick={() => handleBetPriceClick(setBetPricesRow12, 'main')}
                      >
                        {betPricesRow12.main || "Select a coin and click here"}
                      </div>
                      <div
                        className="bet-price-center"
                        style={{ opacity: betPricesRow12.center ? 1 : 0 }}
                        onClick={() => handleBetPriceClick(setBetPricesRow12, 'center')}
                      >
                        {betPricesRow12.center || "Select a coin and click here"}
                      </div>
                      <div
                        className="bet-price-middle"
                        style={{ opacity: betPricesRow12.middle ? 1 : 0 }}
                        onClick={() => handleBetPriceClick(setBetPricesRow12, 'middle')}
                      >
                        {betPricesRow12.middle || "Select a coin and click here"}
                      </div>
                    </td>
                    <td className="relative">
                      <div className="bet-item-inner bg-black">15</div>
                      <div
                        className="bet-price-main"
                        style={{ opacity: betPricesRow15.main ? 1 : 0 }}
                        onClick={() => handleBetPriceClick(setBetPricesRow15, 'main')}
                      >
                        {betPricesRow15.main || "Select a coin and click here"}
                      </div>
                      <div
                        className="bet-price-center"
                        style={{ opacity: betPricesRow15.center ? 1 : 0 }}
                        onClick={() => handleBetPriceClick(setBetPricesRow15, 'center')}
                      >
                        {betPricesRow15.center || "Select a coin and click here"}
                      </div>
                      <div
                        className="bet-price-middle"
                        style={{ opacity: betPricesRow15.middle ? 1 : 0 }}
                        onClick={() => handleBetPriceClick(setBetPricesRow15, 'middle')}
                      >
                        {betPricesRow15.middle || "Select a coin and click here"}
                      </div>
                    </td>
                    <td className="relative">
                      <div className="bet-item-inner bg-red-600">18</div>
                      <div
                        className="bet-price-main"
                        style={{ opacity: betPricesRow18.main ? 1 : 0 }}
                        onClick={() => handleBetPriceClick(setBetPricesRow18, 'main')}
                      >
                        {betPricesRow18.main || "Select a coin and click here"}
                      </div>
                      <div
                        className="bet-price-center"
                        style={{ opacity: betPricesRow18.center ? 1 : 0 }}
                        onClick={() => handleBetPriceClick(setBetPricesRow18, 'center')}
                      >
                        {betPricesRow18.center || "Select a coin and click here"}
                      </div>
                      <div
                        className="bet-price-middle"
                        style={{ opacity: betPricesRow18.middle ? 1 : 0 }}
                        onClick={() => handleBetPriceClick(setBetPricesRow18, 'middle')}
                      >
                        {betPricesRow18.middle || "Select a coin and click here"}
                      </div>
                    </td>
                    <td className="relative">
                      <div className="bet-item-inner bg-red-600">21</div>
                      <div
                        className="bet-price-main"
                        style={{ opacity: betPricesRow21.main ? 1 : 0 }}
                        onClick={() => handleBetPriceClick(setBetPricesRow21, 'main')}
                      >
                        {betPricesRow21.main || "Select a coin and click here"}
                      </div>
                      <div
                        className="bet-price-center"
                        style={{ opacity: betPricesRow21.center ? 1 : 0 }}
                        onClick={() => handleBetPriceClick(setBetPricesRow21, 'center')}
                      >
                        {betPricesRow21.center || "Select a coin and click here"}
                      </div>
                      <div
                        className="bet-price-middle"
                        style={{ opacity: betPricesRow21.middle ? 1 : 0 }}
                        onClick={() => handleBetPriceClick(setBetPricesRow21, 'middle')}
                      >
                        {betPricesRow21.middle || "Select a coin and click here"}
                      </div>
                    </td>
                    <td className="relative">
                      <div className="bet-item-inner bg-black">24</div>
                      <div
                        className="bet-price-main"
                        style={{ opacity: betPricesRow24.main ? 1 : 0 }}
                        onClick={() => handleBetPriceClick(setBetPricesRow24, 'main')}
                      >
                        {betPricesRow24.main || "Select a coin and click here"}
                      </div>
                      <div
                        className="bet-price-center"
                        style={{ opacity: betPricesRow24.center ? 1 : 0 }}
                        onClick={() => handleBetPriceClick(setBetPricesRow24, 'center')}
                      >
                        {betPricesRow24.center || "Select a coin and click here"}
                      </div>
                      <div
                        className="bet-price-middle"
                        style={{ opacity: betPricesRow24.middle ? 1 : 0 }}
                        onClick={() => handleBetPriceClick(setBetPricesRow24, 'middle')}
                      >
                        {betPricesRow24.middle || "Select a coin and click here"}
                      </div>
                    </td>
                    <td className="relative">
                      <div className="bet-item-inner bg-red-600">27</div>
                      <div
                        className="bet-price-main"
                        style={{ opacity: betPricesRow27.main ? 1 : 0 }}
                        onClick={() => handleBetPriceClick(setBetPricesRow27, 'main')}
                      >
                        {betPricesRow27.main || "Select a coin and click here"}
                      </div>
                      <div
                        className="bet-price-center"
                        style={{ opacity: betPricesRow27.center ? 1 : 0 }}
                        onClick={() => handleBetPriceClick(setBetPricesRow27, 'center')}
                      >
                        {betPricesRow27.center || "Select a coin and click here"}
                      </div>
                      <div
                        className="bet-price-middle"
                        style={{ opacity: betPricesRow27.middle ? 1 : 0 }}
                        onClick={() => handleBetPriceClick(setBetPricesRow27, 'middle')}
                      >
                        {betPricesRow27.middle || "Select a coin and click here"}
                      </div>
                    </td>
                    <td className="relative">
                      <div className="bet-item-inner bg-red-600">30</div>
                      <div
                        className="bet-price-main"
                        style={{ opacity: betPricesRow30.main ? 1 : 0 }}
                        onClick={() => handleBetPriceClick(setBetPricesRow30, 'main')}
                      >
                        {betPricesRow30.main || "Select a coin and click here"}
                      </div>
                      <div
                        className="bet-price-center"
                        style={{ opacity: betPricesRow30.center ? 1 : 0 }}
                        onClick={() => handleBetPriceClick(setBetPricesRow30, 'center')}
                      >
                        {betPricesRow30.center || "Select a coin and click here"}
                      </div>
                      <div
                        className="bet-price-middle"
                        style={{ opacity: betPricesRow30.middle ? 1 : 0 }}
                        onClick={() => handleBetPriceClick(setBetPricesRow30, 'middle')}
                      >
                        {betPricesRow30.middle || "Select a coin and click here"}
                      </div>
                    </td>
                    <td className="relative">
                      <div className="bet-item-inner bg-black">33</div>
                      <div
                        className="bet-price-main"
                        style={{ opacity: betPricesRow33.main ? 1 : 0 }}
                        onClick={() => handleBetPriceClick(setBetPricesRow33, 'main')}
                      >
                        {betPricesRow33.main || "Select a coin and click here"}
                      </div>
                      <div
                        className="bet-price-center"
                        style={{ opacity: betPricesRow33.center ? 1 : 0 }}
                        onClick={() => handleBetPriceClick(setBetPricesRow33, 'center')}
                      >
                        {betPricesRow33.center || "Select a coin and click here"}
                      </div>
                      <div
                        className="bet-price-middle"
                        style={{ opacity: betPricesRow33.middle ? 1 : 0 }}
                        onClick={() => handleBetPriceClick(setBetPricesRow33, 'middle')}
                      >
                        {betPricesRow33.middle || "Select a coin and click here"}
                      </div>
                    </td>
                    <td className="relative">
                      <div className="bet-item-inner bg-red-600">36</div>
                      <div
                        className="bet-price-main"
                        style={{ opacity: betPricesRow36.main ? 1 : 0 }}
                        onClick={() => handleBetPriceClick(setBetPricesRow36, 'main')}
                      >
                        {betPricesRow36.main || "Select a coin and click here"}
                      </div>
                      <div
                      className="bet-price-center"
                      style={{ opacity: betPricesRow36.center ? 1 : 0 }}
                      onClick={() => handleBetPriceClick(setBetPricesRow36, 'center')}
                    >
                        {betPricesRow36.center || "Select a coin and click here"}
                      </div>
                      <div
                        className="bet-price-middle"
                        style={{ opacity: betPricesRow36.middle ? 1 : 0 }}
                        onClick={() => handleBetPriceClick(setBetPricesRow36, 'middle')}
                      >
                        {betPricesRow36.middle || "Select a coin and click here"}
                      </div>
                    </td>
                    <td className="relative">
                      <div className="bet-item-inner text-warning">72</div>
                      <div
                        className="bet-price-main"
                        style={{ opacity: betPricesRow37.main ? 1 : 0 }}
                        onClick={() => handleBetPriceClick(setBetPricesRow37, 'main')}
                      >
                        {betPricesRow37.main || "Select a coin and click here"}
                      </div>
                    </td>
                  </tr>
                  <tr>
                  <td className="relative">
                    <div className="bet-item-inner bg-black">2</div>
                    <div
                      className="bet-price-main"
                      style={{ opacity: betPricesRow2.main ? 1 : 0 }}
                      onClick={() => handleBetPriceClick(setBetPricesRow2, 'main')}
                    >
                      {betPricesRow2.main || "Select a coin and click here"}
                    </div>
                    <div
                      className="bet-price"
                      style={{ opacity: betPricesRow2.secondary ? 1 : 0 }}
                      onClick={() => handleBetPriceClick(setBetPricesRow2, 'secondary')}
                    >
                      {betPricesRow2.secondary || "Select a coin and click here"}
                    </div>
                    <div
                      className="bet-price-center"
                      style={{ opacity: betPricesRow2.center ? 1 : 0 }}
                      onClick={() => handleBetPriceClick(setBetPricesRow2, 'center')}
                    >
                      {betPricesRow2.center || "Select a coin and click here"}
                    </div>
                    <div
                      className="bet-price-middle"
                      style={{ opacity: betPricesRow2.middle ? 1 : 0 }}
                      onClick={() => handleBetPriceClick(setBetPricesRow2, 'middle')}
                    >
                      {betPricesRow2.middle || "Select a coin and click here"}
                    </div>
                    <div
                        className="bet-price-leftMid"
                        style={{ opacity: betPricesRow2.left ? 1 : 0 }}
                        onClick={() => handleBetPriceClick(setBetPricesRow2, 'left')}
                      >
                        {betPricesRow2.left || "Select a coin and click here"}
                      </div>
                      <div
                        className="bet-price-leftTop"
                        style={{ opacity: betPricesRow2.leftTop ? 1 : 0 }}
                        onClick={() => handleBetPriceClick(setBetPricesRow2, 'leftTop')}
                      >
                        {betPricesRow2.leftTop || "Select a coin and click here"}
                      </div>
                  </td>
                  <td className="relative">
                    <div className="bet-item-inner bg-red-600">5</div>
                    <div
                      className="bet-price-main"
                      style={{ opacity: betPricesRow5.main ? 1 : 0 }}
                      onClick={() => handleBetPriceClick(setBetPricesRow5, 'main')}
                    >
                      {betPricesRow5.main || "Select a coin and click here"}
                    </div>
                    <div
                      className="bet-price"
                      style={{ opacity: betPricesRow5.secondary ? 1 : 0 }}
                      onClick={() => handleBetPriceClick(setBetPricesRow5, 'secondary')}
                    >
                      {betPricesRow5.secondary || "Select a coin and click here"}
                    </div>
                    <div
                      className="bet-price-center"
                      style={{ opacity: betPricesRow5.center ? 1 : 0 }}
                      onClick={() => handleBetPriceClick(setBetPricesRow5, 'center')}
                    >
                      {betPricesRow5.center || "Select a coin and click here"}
                    </div>
                    <div
                      className="bet-price-middle"
                      style={{ opacity: betPricesRow5.middle ? 1 : 0 }}
                      onClick={() => handleBetPriceClick(setBetPricesRow5, 'middle')}
                    >
                      {betPricesRow5.middle || "Select a coin and click here"}
                    </div>
                  </td>
                    <td className="relative">
                      <div className="bet-item-inner bg-black">8</div>
                      <div
                      className="bet-price-main"
                      style={{ opacity: betPricesRow8.main ? 1 : 0 }}
                      onClick={() => handleBetPriceClick(setBetPricesRow8, 'main')}
                    >
                      {betPricesRow8.main || "Select a coin and click here"}
                    </div>
                    <div
                      className="bet-price"
                      style={{ opacity: betPricesRow8.secondary ? 1 : 0 }}
                      onClick={() => handleBetPriceClick(setBetPricesRow8, 'secondary')}
                    >
                      {betPricesRow8.secondary || "Select a coin and click here"}
                    </div>
                    <div
                      className="bet-price-center"
                      style={{ opacity: betPricesRow8.center ? 1 : 0 }}
                      onClick={() => handleBetPriceClick(setBetPricesRow8, 'center')}
                    >
                      {betPricesRow8.center || "Select a coin and click here"}
                    </div>
                    <div
                      className="bet-price-middle"
                      style={{ opacity: betPricesRow8.middle ? 1 : 0 }}
                      onClick={() => handleBetPriceClick(setBetPricesRow8, 'middle')}
                    >
                      {betPricesRow8.middle || "Select a coin and click here"}
                    </div>
                    </td>
                    <td className="relative">
                      <div className="bet-item-inner bg-black">11</div>
                      <div
                        className="bet-price-main"
                        style={{ opacity: betPricesRow11.main ? 1 : 0 }}
                        onClick={() => handleBetPriceClick(setBetPricesRow11, 'main')}
                      >
                        {betPricesRow11.main || "Select a coin and click here"}
                      </div>
                      <div
                        className="bet-price"
                        style={{ opacity: betPricesRow11.secondary ? 1 : 0 }}
                        onClick={() => handleBetPriceClick(setBetPricesRow11, 'secondary')}
                      >
                        {betPricesRow11.secondary || "Select a coin and click here"}
                      </div>
                      <div
                        className="bet-price-center"
                        style={{ opacity: betPricesRow11.center ? 1 : 0 }}
                        onClick={() => handleBetPriceClick(setBetPricesRow11, 'center')}
                      >
                        {betPricesRow11.center || "Select a coin and click here"}
                      </div>
                      <div
                        className="bet-price-middle"
                        style={{ opacity: betPricesRow11.middle ? 1 : 0 }}
                        onClick={() => handleBetPriceClick(setBetPricesRow11, 'middle')}
                      >
                        {betPricesRow11.middle || "Select a coin and click here"}
                      </div>
                    </td>
                    <td className="relative">
                      <div className="bet-item-inner bg-red-600">14</div>
                      <div
                        className="bet-price-main"
                        style={{ opacity: betPricesRow14.main ? 1 : 0 }}
                        onClick={() => handleBetPriceClick(setBetPricesRow14, 'main')}
                      >
                        {betPricesRow14.main || "Select a coin and click here"}
                      </div>
                      <div
                        className="bet-price"
                        style={{ opacity: betPricesRow14.secondary ? 1 : 0 }}
                        onClick={() => handleBetPriceClick(setBetPricesRow14, 'secondary')}
                      >
                        {betPricesRow14.secondary || "Select a coin and click here"}
                      </div>
                      <div
                        className="bet-price-center"
                        style={{ opacity: betPricesRow14.center ? 1 : 0 }}
                        onClick={() => handleBetPriceClick(setBetPricesRow14, 'center')}
                      >
                        {betPricesRow14.center || "Select a coin and click here"}
                      </div>
                      <div
                        className="bet-price-middle"
                        style={{ opacity: betPricesRow14.middle ? 1 : 0 }}
                        onClick={() => handleBetPriceClick(setBetPricesRow14, 'middle')}
                      >
                        {betPricesRow14.middle || "Select a coin and click here"}
                      </div>
                    </td>
                    <td className="relative">
                      <div className="bet-item-inner bg-black">17</div>
                      <div
                      className="bet-price-main"
                      style={{ opacity: betPricesRow17.main ? 1 : 0 }}
                      onClick={() => handleBetPriceClick(setBetPricesRow17, 'main')}
                    >
                      {betPricesRow17.main || "Select a coin and click here"}
                    </div>
                    <div
                      className="bet-price"
                      style={{ opacity: betPricesRow17.secondary ? 1 : 0 }}
                      onClick={() => handleBetPriceClick(setBetPricesRow17, 'secondary')}
                    >
                      {betPricesRow17.secondary || "Select a coin and click here"}
                    </div>
                    <div
                      className="bet-price-center"
                      style={{ opacity: betPricesRow17.center ? 1 : 0 }}
                      onClick={() => handleBetPriceClick(setBetPricesRow17, 'center')}
                    >
                      {betPricesRow17.center || "Select a coin and click here"}
                    </div>
                    <div
                      className="bet-price-middle"
                      style={{ opacity: betPricesRow17.middle ? 1 : 0 }}
                      onClick={() => handleBetPriceClick(setBetPricesRow17, 'middle')}
                    >
                      {betPricesRow17.middle || "Select a coin and click here"}
                    </div>
                      
                    </td>
                    <td className="relative">
                      <div className="bet-item-inner bg-black">20</div>
                      <div
                        className="bet-price-main"
                        style={{ opacity: betPricesRow20.main ? 1 : 0 }}
                        onClick={() => handleBetPriceClick(setBetPricesRow20, 'main')}
                      >
                        {betPricesRow20.main || "Select a coin and click here"}
                      </div>
                      <div
                        className="bet-price"
                        style={{ opacity: betPricesRow20.secondary ? 1 : 0 }}
                        onClick={() => handleBetPriceClick(setBetPricesRow20, 'secondary')}
                      >
                        {betPricesRow20.secondary || "Select a coin and click here"}
                      </div>
                      <div
                        className="bet-price-center"
                        style={{ opacity: betPricesRow20.center ? 1 : 0 }}
                        onClick={() => handleBetPriceClick(setBetPricesRow20, 'center')}
                      >
                        {betPricesRow20.center || "Select a coin and click here"}
                      </div>
                      <div
                        className="bet-price-middle"
                        style={{ opacity: betPricesRow20.middle ? 1 : 0 }}
                        onClick={() => handleBetPriceClick(setBetPricesRow20, 'middle')}
                      >
                        {betPricesRow20.middle || "Select a coin and click here"}
                      </div>
                     
                    </td>
                    <td className="relative">
                      <div className="bet-item-inner bg-red-600">23</div>
                      <div
                      className="bet-price-main"
                      style={{ opacity: betPricesRow23.main ? 1 : 0 }}
                      onClick={() => handleBetPriceClick(setBetPricesRow23, 'main')}
                    >
                      {betPricesRow23.main || "Select a coin and click here"}
                    </div>
                    <div
                      className="bet-price"
                      style={{ opacity: betPricesRow23.secondary ? 1 : 0 }}
                      onClick={() => handleBetPriceClick(setBetPricesRow23, 'secondary')}
                    >
                      {betPricesRow23.secondary || "Select a coin and click here"}
                    </div>
                    <div
                      className="bet-price-center"
                      style={{ opacity: betPricesRow23.center ? 1 : 0 }}
                      onClick={() => handleBetPriceClick(setBetPricesRow23, 'center')}
                    >
                      {betPricesRow23.center || "Select a coin and click here"}
                    </div>
                    <div
                      className="bet-price-middle"
                      style={{ opacity: betPricesRow23.middle ? 1 : 0 }}
                      onClick={() => handleBetPriceClick(setBetPricesRow23, 'middle')}
                    >
                      {betPricesRow23.middle || "Select a coin and click here"}
                    </div>
                    </td>
                    <td className="relative">
                      <div className="bet-item-inner bg-black">26</div>
                      <div
                      className="bet-price-main"
                      style={{ opacity: betPricesRow26.main ? 1 : 0 }}
                      onClick={() => handleBetPriceClick(setBetPricesRow26, 'main')}
                    >
                      {betPricesRow26.main || "Select a coin and click here"}
                    </div>
                    <div
                      className="bet-price"
                      style={{ opacity: betPricesRow26.secondary ? 1 : 0 }}
                      onClick={() => handleBetPriceClick(setBetPricesRow26, 'secondary')}
                    >
                      {betPricesRow26.secondary || "Select a coin and click here"}
                    </div>
                    <div
                      className="bet-price-center"
                      style={{ opacity: betPricesRow26.center ? 1 : 0 }}
                      onClick={() => handleBetPriceClick(setBetPricesRow26, 'center')}
                    >
                      {betPricesRow26.center || "Select a coin and click here"}
                    </div>
                    <div
                      className="bet-price-middle"
                      style={{ opacity: betPricesRow26.middle ? 1 : 0 }}
                      onClick={() => handleBetPriceClick(setBetPricesRow26, 'middle')}
                    >
                      {betPricesRow26.middle || "Select a coin and click here"}
                    </div>
                    </td>
                    <td className="relative">
                      <div className="bet-item-inner bg-black">29</div>
                      <div
                      className="bet-price-main"
                      style={{ opacity: betPricesRow29.main ? 1 : 0 }}
                      onClick={() => handleBetPriceClick(setBetPricesRow29, 'main')}
                    >
                      {betPricesRow29.main || "Select a coin and click here"}
                    </div>
                    <div
                      className="bet-price"
                      style={{ opacity: betPricesRow29.secondary ? 1 : 0 }}
                      onClick={() => handleBetPriceClick(setBetPricesRow29, 'secondary')}
                    >
                      {betPricesRow29.secondary || "Select a coin and click here"}
                    </div>
                    <div
                      className="bet-price-center"
                      style={{ opacity: betPricesRow29.center ? 1 : 0 }}
                      onClick={() => handleBetPriceClick(setBetPricesRow29, 'center')}
                    >
                      {betPricesRow29.center || "Select a coin and click here"}
                    </div>
                    <div
                      className="bet-price-middle"
                      style={{ opacity: betPricesRow29.middle ? 1 : 0 }}
                      onClick={() => handleBetPriceClick(setBetPricesRow29, 'middle')}
                    >
                      {betPricesRow29.middle || "Select a coin and click here"}
                    </div>
                    </td>
                    <td className="relative">
                      <div className="bet-item-inner bg-red-600">32</div>
                      <div
                      className="bet-price-main"
                      style={{ opacity: betPricesRow32.main ? 1 : 0 }}
                      onClick={() => handleBetPriceClick(setBetPricesRow32, 'main')}
                    >
                      {betPricesRow32.main || "Select a coin and click here"}
                    </div>
                    <div
                      className="bet-price"
                      style={{ opacity: betPricesRow32.secondary ? 1 : 0 }}
                      onClick={() => handleBetPriceClick(setBetPricesRow32, 'secondary')}
                    >
                      {betPricesRow32.secondary || "Select a coin and click here"}
                    </div>
                    <div
                      className="bet-price-center"
                      style={{ opacity: betPricesRow32.center ? 1 : 0 }}
                      onClick={() => handleBetPriceClick(setBetPricesRow32, 'center')}
                    >
                      {betPricesRow32.center || "Select a coin and click here"}
                    </div>
                    <div
                      className="bet-price-middle"
                      style={{ opacity: betPricesRow32.middle ? 1 : 0 }}
                      onClick={() => handleBetPriceClick(setBetPricesRow32, 'middle')}
                    >
                      {betPricesRow32.middle || "Select a coin and click here"}
                    </div>
                    </td>
                    <td className="relative">
                      <div className="bet-item-inner bg-black">35</div>
                      <div
                      className="bet-price-main"
                      style={{ opacity: betPricesRow35.main ? 1 : 0 }}
                      onClick={() => handleBetPriceClick(setBetPricesRow35, 'main')}
                    >
                      {betPricesRow35.main || "Select a coin and click here"}
                    </div>
                    <div
                      className="bet-price"
                      style={{ opacity: betPricesRow35.secondary ? 1 : 0 }}
                      onClick={() => handleBetPriceClick(setBetPricesRow35, 'secondary')}
                    >
                      {betPricesRow35.secondary || "Select a coin and click here"}
                    </div>
                    <div
                      className="bet-price-center"
                      style={{ opacity: betPricesRow35.center ? 1 : 0 }}
                      onClick={() => handleBetPriceClick(setBetPricesRow35, 'center')}
                    >
                      {betPricesRow35.center || "Select a coin and click here"}
                    </div>
                    <div
                      className="bet-price-middle"
                      style={{ opacity: betPricesRow35.middle ? 1 : 0 }}
                      onClick={() => handleBetPriceClick(setBetPricesRow35, 'middle')}
                    >
                      {betPricesRow35.middle || "Select a coin and click here"}
                    </div>
                    </td>
                    <td className="relative">
                      <div className="bet-item-inner text-warning">72</div>
                      <div
                        className="bet-price-main"
                        style={{ opacity: betPricesRow38.main ? 1 : 0 }}
                        onClick={() => handleBetPriceClick(setBetPricesRow38, 'main')}
                      >
                        {betPricesRow38.main || "Select a coin and click here"}
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="relative">
                      <div className="bet-item-inner bg-red-600">1</div>
                      <div
                      className="bet-price-main"
                      style={{ opacity: betPricesRow1.main ? 1 : 0 }}
                      onClick={() => handleBetPriceClick(setBetPricesRow1, 'main')}
                    >
                      {betPricesRow1.main || "Select a coin and click here"}
                    </div>
                    <div
                      className="bet-price"
                      style={{ opacity: betPricesRow1.secondary ? 1 : 0 }}
                      onClick={() => handleBetPriceClick(setBetPricesRow1, 'secondary')}
                    >
                      {betPricesRow1.secondary || "Select a coin and click here"}
                    </div>
                    <div
                      className="bet-price-center"
                      style={{ opacity: betPricesRow1.center ? 1 : 0 }}
                      onClick={() => handleBetPriceClick(setBetPricesRow1, 'center')}
                    >
                      {betPricesRow1.center || "Select a coin and click here"}
                    </div>
                    <div
                      className="bet-price-middle"
                      style={{ opacity: betPricesRow1.middle ? 1 : 0 }}
                      onClick={() => handleBetPriceClick(setBetPricesRow1, 'middle')}
                    >
                      {betPricesRow1.middle || "Select a coin and click here"}
                    </div>
                    <div
                        className="bet-price-leftMid"
                        style={{ opacity: betPricesRow1.left ? 1 : 0 }}
                        onClick={() => handleBetPriceClick(setBetPricesRow1, 'left')}
                      >
                        {betPricesRow1.left || "Select a coin and click here"}
                      </div>
                      <div
                        className="bet-price-leftTop"
                        style={{ opacity: betPricesRow1.leftTop ? 1 : 0 }}
                        onClick={() => handleBetPriceClick(setBetPricesRow1, 'leftTop')}
                      >
                        {betPricesRow1.leftTop || "Select a coin and click here"}
                      </div>
                      {/* <div
                        className="bet-price-leftButtom"
                        style={{ opacity: betPricesRow1.leftButtom ? 1 : 0 }}
                        onClick={() => handleBetPriceClick(setBetPricesRow1, 'leftButtom')}
                      >
                        {betPricesRow1.leftButtom || "Select a coin and click here"}
                      </div> */}
                    </td>
                    <td className="relative">
                      <div className="bet-item-inner bg-black">4</div>
                      <div
                      className="bet-price-main"
                      style={{ opacity: betPricesRow4.main ? 1 : 0 }}
                      onClick={() => handleBetPriceClick(setBetPricesRow4, 'main')}
                    >
                      {betPricesRow4.main || "Select a coin and click here"}
                    </div>
                    <div
                      className="bet-price"
                      style={{ opacity: betPricesRow4.secondary ? 1 : 0 }}
                      onClick={() => handleBetPriceClick(setBetPricesRow4, 'secondary')}
                    >
                      {betPricesRow4.secondary || "Select a coin and click here"}
                    </div>
                    <div
                      className="bet-price-center"
                      style={{ opacity: betPricesRow4.center ? 1 : 0 }}
                      onClick={() => handleBetPriceClick(setBetPricesRow4, 'center')}
                    >
                      {betPricesRow4.center || "Select a coin and click here"}
                    </div>
                    <div
                      className="bet-price-middle"
                      style={{ opacity: betPricesRow4.middle ? 1 : 0 }}
                      onClick={() => handleBetPriceClick(setBetPricesRow4, 'middle')}
                    >
                      {betPricesRow4.middle || "Select a coin and click here"}
                    </div>
                   <div
                        className="bet-price-leftButtom"
                        style={{ opacity: betPricesRow4.leftButtom ? 1 : 0 }}
                        onClick={() => handleBetPriceClick(setBetPricesRow4, 'leftButtom')}
                      >
                        {betPricesRow4.leftButtom || "Select a coin and click here"}
                      </div>
                    </td>
                    <td className="relative">
                      <div className="bet-item-inner bg-red-600">7</div>
                      <div
                      className="bet-price-main"
                      style={{ opacity: betPricesRow7.main ? 1 : 0 }}
                      onClick={() => handleBetPriceClick(setBetPricesRow7, 'main')}
                    >
                      {betPricesRow7.main || "Select a coin and click here"}
                    </div>
                    <div
                      className="bet-price"
                      style={{ opacity: betPricesRow7.secondary ? 1 : 0 }}
                      onClick={() => handleBetPriceClick(setBetPricesRow7, 'secondary')}
                    >
                      {betPricesRow7.secondary || "Select a coin and click here"}
                    </div>
                    <div
                      className="bet-price-center"
                      style={{ opacity: betPricesRow7.center ? 1 : 0 }}
                      onClick={() => handleBetPriceClick(setBetPricesRow7, 'center')}
                    >
                      {betPricesRow7.center || "Select a coin and click here"}
                    </div>
                    <div
                      className="bet-price-middle"
                      style={{ opacity: betPricesRow7.middle ? 1 : 0 }}
                      onClick={() => handleBetPriceClick(setBetPricesRow7, 'middle')}
                    >
                      {betPricesRow7.middle || "Select a coin and click here"}
                    </div>
                    <div
                        className="bet-price-leftButtom"
                        style={{ opacity: betPricesRow7.leftButtom ? 1 : 0 }}
                        onClick={() => handleBetPriceClick(setBetPricesRow7, 'leftButtom')}
                      >
                        {betPricesRow7.leftButtom || "Select a coin and click here"}
                      </div>
                    </td>
                    <td className="relative">
                      <div className="bet-item-inner bg-black">10</div>
                      <div
                      className="bet-price-main"
                      style={{ opacity: betPricesRow10.main ? 1 : 0 }}
                      onClick={() => handleBetPriceClick(setBetPricesRow10, 'main')}
                    >
                      {betPricesRow10.main || "Select a coin and click here"}
                    </div>
                    <div
                      className="bet-price"
                      style={{ opacity: betPricesRow10.secondary ? 1 : 0 }}
                      onClick={() => handleBetPriceClick(setBetPricesRow10, 'secondary')}
                    >
                      {betPricesRow10.secondary || "Select a coin and click here"}
                    </div>
                    <div
                      className="bet-price-center"
                      style={{ opacity: betPricesRow10.center ? 1 : 0 }}
                      onClick={() => handleBetPriceClick(setBetPricesRow10, 'center')}
                    >
                      {betPricesRow10.center || "Select a coin and click here"}
                    </div>
                    <div
                      className="bet-price-middle"
                      style={{ opacity: betPricesRow10.middle ? 1 : 0 }}
                      onClick={() => handleBetPriceClick(setBetPricesRow10, 'middle')}
                    >
                      {betPricesRow10.middle || "Select a coin and click here"}
                    </div>
                    </td>
                    <td className="relative">
                      <div className="bet-item-inner bg-black">13</div>
                      <div
                      className="bet-price-main"
                      style={{ opacity: betPricesRow13.main ? 1 : 0 }}
                      onClick={() => handleBetPriceClick(setBetPricesRow13, 'main')}
                    >
                      {betPricesRow13.main || "Select a coin and click here"}
                    </div>
                    <div
                      className="bet-price"
                      style={{ opacity: betPricesRow13.secondary ? 1 : 0 }}
                      onClick={() => handleBetPriceClick(setBetPricesRow13, 'secondary')}
                    >
                      {betPricesRow13.secondary || "Select a coin and click here"}
                    </div>
                    <div
                      className="bet-price-center"
                      style={{ opacity: betPricesRow13.center ? 1 : 0 }}
                      onClick={() => handleBetPriceClick(setBetPricesRow13, 'center')}
                    >
                      {betPricesRow13.center || "Select a coin and click here"}
                    </div>
                    <div
                      className="bet-price-middle"
                      style={{ opacity: betPricesRow13.middle ? 1 : 0 }}
                      onClick={() => handleBetPriceClick(setBetPricesRow13, 'middle')}
                    >
                      {betPricesRow13.middle || "Select a coin and click here"}
                    </div>
                    </td>
                    <td className="relative">
                      <div className="bet-item-inner bg-red-600">16</div>
                      <div
                      className="bet-price-main"
                      style={{ opacity: betPricesRow16.main ? 1 : 0 }}
                      onClick={() => handleBetPriceClick(setBetPricesRow16, 'main')}
                    >
                      {betPricesRow16.main || "Select a coin and click here"}
                    </div>
                    <div
                      className="bet-price"
                      style={{ opacity: betPricesRow16.secondary ? 1 : 0 }}
                      onClick={() => handleBetPriceClick(setBetPricesRow16, 'secondary')}
                    >
                      {betPricesRow16.secondary || "Select a coin and click here"}
                    </div>
                    <div
                      className="bet-price-center"
                      style={{ opacity: betPricesRow16.center ? 1 : 0 }}
                      onClick={() => handleBetPriceClick(setBetPricesRow16, 'center')}
                    >
                      {betPricesRow16.center || "Select a coin and click here"}
                    </div>
                    <div
                      className="bet-price-middle"
                      style={{ opacity: betPricesRow16.middle ? 1 : 0 }}
                      onClick={() => handleBetPriceClick(setBetPricesRow16, 'middle')}
                    >
                      {betPricesRow16.middle || "Select a coin and click here"}
                    </div>
                    </td>
                    <td className="relative">
                      <div className="bet-item-inner bg-red-600">19</div>
                      <div
                      className="bet-price-main"
                      style={{ opacity: betPricesRow19.main ? 1 : 0 }}
                      onClick={() => handleBetPriceClick(setBetPricesRow19, 'main')}
                    >
                      {betPricesRow19.main || "Select a coin and click here"}
                    </div>
                    <div
                      className="bet-price"
                      style={{ opacity: betPricesRow19.secondary ? 1 : 0 }}
                      onClick={() => handleBetPriceClick(setBetPricesRow19, 'secondary')}
                    >
                      {betPricesRow19.secondary || "Select a coin and click here"}
                    </div>
                    <div
                      className="bet-price-center"
                      style={{ opacity: betPricesRow19.center ? 1 : 0 }}
                      onClick={() => handleBetPriceClick(setBetPricesRow19, 'center')}
                    >
                      {betPricesRow19.center || "Select a coin and click here"}
                    </div>
                    <div
                      className="bet-price-middle"
                      style={{ opacity: betPricesRow19.middle ? 1 : 0 }}
                      onClick={() => handleBetPriceClick(setBetPricesRow19, 'middle')}
                    >
                      {betPricesRow19.middle || "Select a coin and click here"}
                    </div>
                    </td>
                    <td className="relative">
                      <div className="bet-item-inner bg-black">22</div>
                      <div
                      className="bet-price-main"
                      style={{ opacity: betPricesRow22.main ? 1 : 0 }}
                      onClick={() => handleBetPriceClick(setBetPricesRow22, 'main')}
                    >
                      {betPricesRow22.main || "Select a coin and click here"}
                    </div>
                    <div
                      className="bet-price"
                      style={{ opacity: betPricesRow22.secondary ? 1 : 0 }}
                      onClick={() => handleBetPriceClick(setBetPricesRow22, 'secondary')}
                    >
                      {betPricesRow22.secondary || "Select a coin and click here"}
                    </div>
                    <div
                      className="bet-price-center"
                      style={{ opacity: betPricesRow22.center ? 1 : 0 }}
                      onClick={() => handleBetPriceClick(setBetPricesRow22, 'center')}
                    >
                      {betPricesRow22.center || "Select a coin and click here"}
                    </div>
                    <div
                      className="bet-price-middle"
                      style={{ opacity: betPricesRow22.middle ? 1 : 0 }}
                      onClick={() => handleBetPriceClick(setBetPricesRow22, 'middle')}
                    >
                      {betPricesRow22.middle || "Select a coin and click here"}
                    </div>
                    </td>
                    <td className="relative">
                      <div className="bet-item-inner bg-red-600">25</div>
                      <div
                      className="bet-price-main"
                      style={{ opacity: betPricesRow25.main ? 1 : 0 }}
                      onClick={() => handleBetPriceClick(setBetPricesRow25, 'main')}
                    >
                      {betPricesRow25.main || "Select a coin and click here"}
                    </div>
                    <div
                      className="bet-price"
                      style={{ opacity: betPricesRow25.secondary ? 1 : 0 }}
                      onClick={() => handleBetPriceClick(setBetPricesRow25, 'secondary')}
                    >
                      {betPricesRow25.secondary || "Select a coin and click here"}
                    </div>
                    <div
                      className="bet-price-center"
                      style={{ opacity: betPricesRow25.center ? 1 : 0 }}
                      onClick={() => handleBetPriceClick(setBetPricesRow25, 'center')}
                    >
                      {betPricesRow25.center || "Select a coin and click here"}
                    </div>
                    <div
                      className="bet-price-middle"
                      style={{ opacity: betPricesRow25.middle ? 1 : 0 }}
                      onClick={() => handleBetPriceClick(setBetPricesRow25, 'middle')}
                    >
                      {betPricesRow25.middle || "Select a coin and click here"}
                    </div>
                    </td>
                    <td className="relative">
                      <div className="bet-item-inner bg-black">28</div>
                      <div
                      className="bet-price-main"
                      style={{ opacity: betPricesRow28.main ? 1 : 0 }}
                      onClick={() => handleBetPriceClick(setBetPricesRow28, 'main')}
                    >
                      {betPricesRow28.main || "Select a coin and click here"}
                    </div>
                    <div
                      className="bet-price"
                      style={{ opacity: betPricesRow28.secondary ? 1 : 0 }}
                      onClick={() => handleBetPriceClick(setBetPricesRow28, 'secondary')}
                    >
                      {betPricesRow28.secondary || "Select a coin and click here"}
                    </div>
                    <div
                      className="bet-price-center"
                      style={{ opacity: betPricesRow28.center ? 1 : 0 }}
                      onClick={() => handleBetPriceClick(setBetPricesRow28, 'center')}
                    >
                      {betPricesRow28.center || "Select a coin and click here"}
                    </div>
                    <div
                      className="bet-price-middle"
                      style={{ opacity: betPricesRow28.middle ? 1 : 0 }}
                      onClick={() => handleBetPriceClick(setBetPricesRow28, 'middle')}
                    >
                      {betPricesRow28.middle || "Select a coin and click here"}
                    </div>
                    </td>
                    <td className="relative">
                      <div className="bet-item-inner bg-black">31</div>
                      <div
                      className="bet-price-main"
                      style={{ opacity: betPricesRow31.main ? 1 : 0 }}
                      onClick={() => handleBetPriceClick(setBetPricesRow31, 'main')}
                    >
                      {betPricesRow31.main || "Select a coin and click here"}
                    </div>
                    <div
                      className="bet-price"
                      style={{ opacity: betPricesRow31.secondary ? 1 : 0 }}
                      onClick={() => handleBetPriceClick(setBetPricesRow31, 'secondary')}
                    >
                      {betPricesRow31.secondary || "Select a coin and click here"}
                    </div>
                    <div
                      className="bet-price-center"
                      style={{ opacity: betPricesRow31.center ? 1 : 0 }}
                      onClick={() => handleBetPriceClick(setBetPricesRow31, 'center')}
                    >
                      {betPricesRow31.center || "Select a coin and click here"}
                    </div>
                    <div
                      className="bet-price-middle"
                      style={{ opacity: betPricesRow31.middle ? 1 : 0 }}
                      onClick={() => handleBetPriceClick(setBetPricesRow31, 'middle')}
                    >
                      {betPricesRow31.middle || "Select a coin and click here"}
                    </div>
                    </td>
                    <td className="relative">
                      <div className="bet-item-inner bg-red-600">34</div>
                      <div
                      className="bet-price-main"
                      style={{ opacity: betPricesRow34.main ? 1 : 0 }}
                      onClick={() => handleBetPriceClick(setBetPricesRow34, 'main')}
                    >
                      {betPricesRow34.main || "Select a coin and click here"}
                    </div>
                    <div
                      className="bet-price"
                      style={{ opacity: betPricesRow34.secondary ? 1 : 0 }}
                      onClick={() => handleBetPriceClick(setBetPricesRow34, 'secondary')}
                    >
                      {betPricesRow34.secondary || "Select a coin and click here"}
                    </div>
                    <div
                      className="bet-price-center"
                      style={{ opacity: betPricesRow34.center ? 1 : 0 }}
                      onClick={() => handleBetPriceClick(setBetPricesRow34, 'center')}
                    >
                      {betPricesRow34.center || "Select a coin and click here"}
                    </div>
                    <div
                      className="bet-price-middle"
                      style={{ opacity: betPricesRow34.middle ? 1 : 0 }}
                      onClick={() => handleBetPriceClick(setBetPricesRow34, 'middle')}
                    >
                      {betPricesRow34.middle || "Select a coin and click here"}
                    </div>
                    </td>
                    <td className="relative">
                      <div className="bet-item-inner text-warning">72</div>
                      <div
                        className="bet-price-main"
                        style={{ opacity: betPricesRow39.main ? 1 : 0 }}
                        onClick={() => handleBetPriceClick(setBetPricesRow39, 'main')}
                      >
                        {betPricesRow39.main || "Select a coin and click here"}
                      </div>
                    </td>
                  </tr>
                  <tr className="table-bottom">
                    <td className="border-0"></td>
                    <td colSpan={4} className="relative z-40">
                      <div className="">1 TO 18</div>
                      <div
                        className="bet-price-main z-50"
                        style={{ opacity: betPricesRow40.main ? 1 : 0 }}
                        onClick={() => handleBetPriceClick(setBetPricesRow40, 'main')}
                      >
                        {betPricesRow40.main || "Select a coin and click here"}
                      </div>
                    </td>
                    <td colSpan={4} className="relative z-40">
                      <div className="">19 TO 36</div>
                      <div
                        className="bet-price-main z-50"
                        style={{ opacity: betPricesRow41.main ? 1 : 0 }}
                        onClick={() => handleBetPriceClick(setBetPricesRow41, 'main')}
                      >
                        {betPricesRow41.main || "Select a coin and click here"}
                      </div>
                    </td>
                    <td colSpan={4} className="relative overflow-hidden z-40">
                      <div className="">EVEN/ODD</div>
                      <div
                        className="bet-price-main z-50"
                        style={{ opacity: betPricesRow42.main ? 1 : 0 }}
                        onClick={() => handleBetPriceClick(setBetPricesRow42, 'main')}
                      >
                        {betPricesRow42.main || "Select a coin and click here"}
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>

             
            </div>
            <div className="flex flex-wrap w-full px-4">
                <div className="border rounded-full bg-blue-500 text-white m-2 p-2 flex-1 text-center relative">
                  1 to 18
                  <div
                    className="bet-price-main z-50"
                    style={{ opacity: betPricesRow43.main ? 1 : 0 }}
                    onClick={() => handleBetPriceClick(setBetPricesRow43, 'main')}
                  >
                    {betPricesRow43.main || "Select a coin and click here"}
                  </div>
                </div>
                <div className="border rounded-full bg-blue-500 text-white m-2 p-2 flex-1 text-center relative">
                  Even
                  <div
                    className="bet-price-main z-50"
                    style={{ opacity: betPricesRow44.main ? 1 : 0 }}
                    onClick={() => handleBetPriceClick(setBetPricesRow44, 'main')}
                  >
                    {betPricesRow44.main || "Select a coin and click here"}
                  </div>
                </div>
                <div className="border rounded-full bg-blue-500 text-white m-2 p-2 flex-1 text-center relative">
                  Red
                  <div
                    className="bet-price-main z-50"
                    style={{ opacity: betPricesRow45.main ? 1 : 0 }}
                    onClick={() => handleBetPriceClick(setBetPricesRow45, 'main')}
                  >
                    {betPricesRow45.main || "Select a coin and click here"}
                  </div>
                </div>
                <div className="border rounded-full bg-blue-500 text-white m-2 p-2 flex-1 text-center relative">
                  Black
                  <div
                    className="bet-price-main z-50"
                    style={{ opacity: betPricesRow46.main ? 1 : 0 }}
                    onClick={() => handleBetPriceClick(setBetPricesRow46, 'main')}
                  >
                    {betPricesRow46.main || "Select a coin and click here"}
                  </div>
                </div>
                <div className="border rounded-full bg-blue-500 text-white m-2 p-2 flex-1 text-center relative">
                  ODD
                  <div
                    className="bet-price-main z-50"
                    style={{ opacity: betPricesRow47.main ? 1 : 0 }}
                    onClick={() => handleBetPriceClick(setBetPricesRow47, 'main')}
                  >
                    {betPricesRow47.main || "Select a coin and click here"}
                  </div>
                </div>
                <div className="border rounded-full bg-blue-500 text-white m-2 p-2 flex-1 text-center relative">
                  19 TO 36
                  <div
                    className="bet-price-main z-50"
                    style={{ opacity: betPricesRow48.main ? 1 : 0 }}
                    onClick={() => handleBetPriceClick(setBetPricesRow48, 'main')}
                  >
                    {betPricesRow48.main || "Select a coin and click here"}
                  </div>
                </div>
              </div>
            <div className="flex justify-end">
              <div className="border rounded bg-blue-500 text-white m-2 p-2 text-center">
                Take
              </div>
              <div className="border rounded bg-blue-500 text-white m-2 p-2 text-center">
                Cancel
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RouletteGame;
