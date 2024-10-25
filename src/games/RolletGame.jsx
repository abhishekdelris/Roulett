import React, { useState,useEffect,useRef } from "react";
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
import BackgroundSound from "./BackgroundSound";
import Sound from '../assets/background_music/the_jazz_trio.ogg';

// import CoinSelect from "./CoinSelect";
// import { Modal, Button } from "react-bootstrap";

const RouletteGame = () => {

  const [selectedCoin, setSelectedCoin] = useState(null); // Coin selection state
  const [totalBalance, setTotalBalance] = useState(500); // Total balance state
  const [totalBetAmount, setTotalBetAmount] = useState(0); // State to track total bet amount
  const [bet, setBet] = useState(0); // Current bet amount
  const [previousBet, setPreviousBet] = useState(0); // Previous bet state
  const [count, setCount] = useState(0); // Bet count state
  const [showModal, setShowModal] = useState(false); // Modal visibility state
  const initialTime = 60; // Set your initial time (in seconds)
  const [timeLeft, setTimeLeft] = useState(initialTime); // Timer state
  const [isActive, setIsActive] = useState(false);

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

  const [profileData, setProfileData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const formdata = new FormData();
    formdata.append("user_id", "1");

    const requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow"
    };

    fetch("https://delristech-projects.in/roulette_web/index.php/api/Web_api/get_profile", requestOptions)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.text();
      })
      .then((result) => setProfileData(result))
      .catch((error) => setError(error.message));
  }, []);

console.log("this is a data for get profile....",profileData);
// console.log("this is a data for get profile....",profileData.wallet);

// Handle coin selection
const handleCoinClick = (coin) => {
  setSelectedCoin(coin);
};

 // Remove bet when isRemove is true
const handleRemoveBet = (rowSetter, position) => {
// Adjust the bet amount for the given position
rowSetter((prev) => {
  const currentValue = prev[position] || 0;
  
  if (currentValue > 0) {
    
    // Update the row with 0 bet amount for that position
    const updatedRow = {
      ...prev,
      [position]: 0,
    };

    // Update userBalance by adding back the removed bet amount
    const newBalance = totalBalance + currentValue;
    setTotalBalance(newBalance);

    // Remove the selection from userSelect
    setUserSelect((prevSelections) => 
      prevSelections.filter((item) => item.position !== position)
    );

    // Update total bet amount
    setBet(0); // Reset bet to 0 when all bets are removed or adjusted

    return updatedRow;
  } else {
    console.warn("No bet to remove at this position.");
    return prev;  // If no bet, do nothing
  }
});
};

const [userSelect, setUserSelect] = useState([]);
const [numbers, setNumbers] = useState([]);
const [isRemove, setIsRemove] = useState(false);

// Handle bet price click for a specific row and position
const handleBetPriceClick = async(rowSetter, position, number) => {

  setIsActive(true);
  setNumbers(number);
  console.log("number", number);

  
  
  if (selectedCoin !== null && totalBalance >= bet) {
    rowSetter((prev) => {
      const currentValue = prev[position] || 0; // Use 0 if no existing value
      const newBetAmount = currentValue + selectedCoin; // Calculate new bet amount for this position

      if(isRemove === true) {
        rowSetter((prev) => {
        handleRemoveBet(rowSetter,position);
        
        const oldBetAmount = newBetAmount - selectedCoin; // Calculate new bet amount for this position
        const updatedRow = {
          ...prev,
          [position]: oldBetAmount,
        };
        return updatedRow;
      })
      }
      // Calculate the new total bet amount by summing all positions' bet amounts
      const updatedRow = {
        ...prev,
        [position]: newBetAmount,
      };

      setBet(newBetAmount); // Update the total bet amount
      const userBalance = totalBalance - selectedCoin;
      setTotalBalance(userBalance);

      // Update userSelect to ensure unique position-number combinations
      setUserSelect((prevSelections) => {
        // Check if the combination of position and number already exists
        const existingEntry = prevSelections.find(
          (item) => item.position === position && item.number === number
        );

        if (existingEntry) {
          // If exists, update the existing entry with the new bet amount
          return prevSelections.map((item) =>
            item.position === position && item.number === number
              ? { ...item, amount: newBetAmount }
              : item
          );
        } else {
          // If no entry exists, add a new one
          return [
            ...prevSelections, // Spread the previous array elements
            {
              position: position,
              number: number,
              amount: newBetAmount,
            },
          ];
        }
      });

      return updatedRow;
    });
  } else {
    console.warn("Insufficient balance or no coin selected.");
    alert("Insufficient balance or no coin selected.");
  }
};



console.log('privious bet.....',previousBet);
console.log("total balance.....", totalBalance);
console.log("total bet Amount....", totalBetAmount);
console.log("select bet...",bet);
console.log("use selected bet...",userSelect);
console.log("numbewrs.....", numbers);
const handleBetRemovePosition = () => {
  isRemove(true)
}
const handleCheckWinning = () => {
  const win = 23;

  const winningData = userSelect.find((data) => data.number === win);
const betBalance = postionConvert.data
  if (winningData) {
    console.log("you won");
  }
};

const handleClickOutside = (event) => {
  // Check if the click is outside the active area
  if (!isActive) return;
  // Logic to handle the click outside (e.g., closing a menu)
  console.log('Clicked outside the bet price area');
  setIsActive(false);
};

useEffect(() => {
  // Attach event listener for clicks
  document.addEventListener('mousedown', handleClickOutside);
  return () => {
    document.removeEventListener('mousedown', handleClickOutside);
  };
}, [isActive]); // Dependency on isActive to re-attach listener when it changes

// Timer effect
useEffect(() => {
  const timer = setInterval(() => {
    if (timeLeft > 0) {
      setTimeLeft((prevTime) => prevTime - 1);
    } else {
      // Reset to initial time or handle end of timer logic
      setTimeLeft(initialTime);
      // Optionally show a modal or execute some action here
      setShowModal(true);
    }
  }, 1000);

  // Cleanup the interval when the component is unmounted
  return () => clearInterval(timer);
}, [timeLeft, initialTime]); // Re-run the effect every time `timeLeft` changes

// Function to format the time as MM:SS
const formatTime = (time) => {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
};
 
  
  return (
    <div className="game-screen bettingBg text-white h-screen ">
      
      {/* <button onClick={handleRemoveBet}>Undo</button> */}
      <div className="container mx-auto">
        {/* <CoinSelect/> */}
        <div className="flex flex-wrap">
        
          <div className="w-full  px-4 mb-4">
            <header className="flex justify-between items-center mb-4">
              <div className="balance">
                Your Balance: <span className="font-bold">{totalBalance}</span>
              </div>
              <div className="bet-amount">
                Bet Amount: <span className="font-bold">600</span>
              </div>
                <BackgroundSound soundFile={Sound} />
            </header>
          </div>
          </div>
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
            <RouletteWheelResult betData={userSelect} />
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
          <div className="w-1/4">
            {/* Roulette Wheel */}
            <div className="roulette-wheel">
              <RouletteWheel />
            </div>
          </div>

          <div className="w-3/4 ">
            {/* Betting Grid */}
            <div className="betting-table relative p-4 rounded-lg">
              {/* Betting Table */}
              <table className="table-auto w-full text-center number-table digit-font">
                <tbody>
                  <tr>
                    <td rowSpan={4} className="relative digit-font">
                      <div className="bet-item-inner bg-red-600">0</div>
                      <div
                      className="bet-price-main"
                      style={{ opacity: betPricesRow0.main ? 1 : 0 }}
                      onClick={() => handleBetPriceClick(setBetPricesRow0, 'main',0)}
                    >
                      {betPricesRow0.main || "Select a coin and click here"}
                    </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="relative digit-font">
                      <div className="bet-item-inner bg-red-600 digit-font">3</div>
                      {/* Coin on number 3 */}
                      <div
                        className="bet-price-main"
                        style={{ opacity: betPricesRow3.main ? 1 : 0 }}
                        onClick={() => handleBetPriceClick(setBetPricesRow3, 'main',3)}
                      >
                        {betPricesRow3.main || "Select a coin and click here"}
                      </div>
                      <div
                        className="bet-price-center"
                        style={{ opacity: betPricesRow3.center ? 1 : 0 }}
                        onClick={() => handleBetPriceClick(setBetPricesRow3, 'center',3)}
                      >
                        {betPricesRow3.center || "Select a coin and click here"}
                      </div>
                      <div
                        className="bet-price-middle"
                        style={{ opacity: betPricesRow3.middle ? 1 : 0 }}
                        onClick={() => handleBetPriceClick(setBetPricesRow3, 'middle',3)}
                      >
                        {betPricesRow3.middle || "Select a coin and click here"}
                      </div>
                      <div
                        className="bet-price-leftMid"
                        style={{ opacity: betPricesRow3.left ? 1 : 0 }}
                        onClick={() => handleBetPriceClick(setBetPricesRow3, 'left',3)}
                      >
                        {betPricesRow3.left || "Select a coin and click here"}
                      </div>
                    </td>
                    <td className="relative">
                      <div className="bet-item-inner bg-black">6 </div>
                      <div
                        className="bet-price-main"
                        style={{ opacity: betPricesRow6.main ? 1 : 0 }}
                        onClick={() => handleBetPriceClick(setBetPricesRow6, 'main',6)}
                      >
                        {betPricesRow6.main || "Select a coin and click here"}
                      </div>
                      <div
                        className="bet-price-center"
                        style={{ opacity: betPricesRow6.center ? 1 : 0 }}
                        onClick={() => handleBetPriceClick(setBetPricesRow6, 'center',6)}
                      >
                        {betPricesRow6.center || "Select a coin and click here"}
                      </div>
                      <div
                        className="bet-price-middle"
                        style={{ opacity: betPricesRow6.middle ? 1 : 0 }}
                        onClick={() => handleBetPriceClick(setBetPricesRow6, 'middle',6)}
                      >
                        {betPricesRow6.middle || "Select a coin and click here"}
                      </div>
                    </td>
                    <td className="relative">
                      <div className="bet-item-inner bg-red-600">9</div>
                      <div
                        className="bet-price-main"
                        style={{ opacity: betPricesRow9.main ? 1 : 0 }}
                        onClick={() => handleBetPriceClick(setBetPricesRow9, 'main',9)}
                      >
                        {betPricesRow9.main || "Select a coin and click here"}
                      </div>
                      <div
                        className="bet-price-center"
                        style={{ opacity: betPricesRow9.center ? 1 : 0 }}
                        onClick={() => handleBetPriceClick(setBetPricesRow9, 'center',9)}
                      >
                        {betPricesRow9.center || "Select a coin and click here"}
                      </div>
                      <div
                        className="bet-price-middle"
                        style={{ opacity: betPricesRow9.middle ? 1 : 0 }}
                        onClick={() => handleBetPriceClick(setBetPricesRow9, 'middle',9)}
                      >
                        {betPricesRow9.middle || "Select a coin and click here"}
                      </div>
                    </td>
                    <td className="relative">
                      <div className="bet-item-inner bg-red-600">12</div>
                      <div
                        className="bet-price-main"
                        style={{ opacity: betPricesRow12.main ? 1 : 0 }}
                        onClick={() => handleBetPriceClick(setBetPricesRow12, 'main',12)}
                      >
                        {betPricesRow12.main || "Select a coin and click here"}
                      </div>
                      <div
                        className="bet-price-center"
                        style={{ opacity: betPricesRow12.center ? 1 : 0 }}
                        onClick={() => handleBetPriceClick(setBetPricesRow12, 'center',12)}
                      >
                        {betPricesRow12.center || "Select a coin and click here"}
                      </div>
                      <div
                        className="bet-price-middle"
                        style={{ opacity: betPricesRow12.middle ? 1 : 0 }}
                        onClick={() => handleBetPriceClick(setBetPricesRow12, 'middle',12)}
                      >
                        {betPricesRow12.middle || "Select a coin and click here"}
                      </div>
                    </td>
                    <td className="relative">
                      <div className="bet-item-inner bg-black">15</div>
                      <div
                        className="bet-price-main"
                        style={{ opacity: betPricesRow15.main ? 1 : 0 }}
                        onClick={() => handleBetPriceClick(setBetPricesRow15, 'main',15)}
                      >
                        {betPricesRow15.main || "Select a coin and click here"}
                      </div>
                      <div
                        className="bet-price-center"
                        style={{ opacity: betPricesRow15.center ? 1 : 0 }}
                        onClick={() => handleBetPriceClick(setBetPricesRow15, 'center',15)}
                      >
                        {betPricesRow15.center || "Select a coin and click here"}
                      </div>
                      <div
                        className="bet-price-middle"
                        style={{ opacity: betPricesRow15.middle ? 1 : 0 }}
                        onClick={() => handleBetPriceClick(setBetPricesRow15, 'middle',15)}
                      >
                        {betPricesRow15.middle || "Select a coin and click here"}
                      </div>
                    </td>
                    <td className="relative">
                      <div className="bet-item-inner bg-red-600">18</div>
                      <div
                        className="bet-price-main"
                        style={{ opacity: betPricesRow18.main ? 1 : 0 }}
                        onClick={() => handleBetPriceClick(setBetPricesRow18, 'main',18)}
                      >
                        {betPricesRow18.main || "Select a coin and click here"}
                      </div>
                      <div
                        className="bet-price-center"
                        style={{ opacity: betPricesRow18.center ? 1 : 0 }}
                        onClick={() => handleBetPriceClick(setBetPricesRow18, 'center',18)}
                      >
                        {betPricesRow18.center || "Select a coin and click here"}
                      </div>
                      <div
                        className="bet-price-middle"
                        style={{ opacity: betPricesRow18.middle ? 1 : 0 }}
                        onClick={() => handleBetPriceClick(setBetPricesRow18, 'middle',18)}
                      >
                        {betPricesRow18.middle || "Select a coin and click here"}
                      </div>
                    </td>
                    <td className="relative">
                      <div className="bet-item-inner bg-red-600">21</div>
                      <div
                        className="bet-price-main"
                        style={{ opacity: betPricesRow21.main ? 1 : 0 }}
                        onClick={() => handleBetPriceClick(setBetPricesRow21, 'main',21)}
                      >
                        {betPricesRow21.main || "Select a coin and click here"}
                      </div>
                      <div
                        className="bet-price-center"
                        style={{ opacity: betPricesRow21.center ? 1 : 0 }}
                        onClick={() => handleBetPriceClick(setBetPricesRow21, 'center',21)}
                      >
                        {betPricesRow21.center || "Select a coin and click here"}
                      </div>
                      <div
                        className="bet-price-middle"
                        style={{ opacity: betPricesRow21.middle ? 1 : 0 }}
                        onClick={() => handleBetPriceClick(setBetPricesRow21, 'middle',21)}
                      >
                        {betPricesRow21.middle || "Select a coin and click here"}
                      </div>
                    </td>
                    <td className="relative">
                      <div className="bet-item-inner bg-black">24</div>
                      <div
                        className="bet-price-main"
                        style={{ opacity: betPricesRow24.main ? 1 : 0 }}
                        onClick={() => handleBetPriceClick(setBetPricesRow24, 'main',24)}
                      >
                        {betPricesRow24.main || "Select a coin and click here"}
                      </div>
                      <div
                        className="bet-price-center"
                        style={{ opacity: betPricesRow24.center ? 1 : 0 }}
                        onClick={() => handleBetPriceClick(setBetPricesRow24, 'center',24)}
                      >
                        {betPricesRow24.center || "Select a coin and click here"}
                      </div>
                      <div
                        className="bet-price-middle"
                        style={{ opacity: betPricesRow24.middle ? 1 : 0 }}
                        onClick={() => handleBetPriceClick(setBetPricesRow24, 'middle',24)}
                      >
                        {betPricesRow24.middle || "Select a coin and click here"}
                      </div>
                    </td>
                    <td className="relative">
                      <div className="bet-item-inner bg-red-600">27</div>
                      <div
                        className="bet-price-main"
                        style={{ opacity: betPricesRow27.main ? 1 : 0 }}
                        onClick={() => handleBetPriceClick(setBetPricesRow27, 'main',27)}
                      >
                        {betPricesRow27.main || "Select a coin and click here"}
                      </div>
                      <div
                        className="bet-price-center"
                        style={{ opacity: betPricesRow27.center ? 1 : 0 }}
                        onClick={() => handleBetPriceClick(setBetPricesRow27, 'center',27)}
                      >
                        {betPricesRow27.center || "Select a coin and click here"}
                      </div>
                      <div
                        className="bet-price-middle"
                        style={{ opacity: betPricesRow27.middle ? 1 : 0 }}
                        onClick={() => handleBetPriceClick(setBetPricesRow27, 'middle',27)}
                      >
                        {betPricesRow27.middle || "Select a coin and click here"}
                      </div>
                    </td>
                    <td className="relative">
                      <div className="bet-item-inner bg-red-600">30</div>
                      <div
                        className="bet-price-main"
                        style={{ opacity: betPricesRow30.main ? 1 : 0 }}
                        onClick={() => handleBetPriceClick(setBetPricesRow30, 'main',30)}
                      >
                        {betPricesRow30.main || "Select a coin and click here"}
                      </div>
                      <div
                        className="bet-price-center"
                        style={{ opacity: betPricesRow30.center ? 1 : 0 }}
                        onClick={() => handleBetPriceClick(setBetPricesRow30, 'center',30)}
                      >
                        {betPricesRow30.center || "Select a coin and click here"}
                      </div>
                      <div
                        className="bet-price-middle"
                        style={{ opacity: betPricesRow30.middle ? 1 : 0 }}
                        onClick={() => handleBetPriceClick(setBetPricesRow30, 'middle',30)}
                      >
                        {betPricesRow30.middle || "Select a coin and click here"}
                      </div>
                    </td>
                    <td className="relative">
                      <div className="bet-item-inner bg-black">33</div>
                      <div
                        className="bet-price-main"
                        style={{ opacity: betPricesRow33.main ? 1 : 0 }}
                        onClick={() => handleBetPriceClick(setBetPricesRow33, 'main',33)}
                      >
                        {betPricesRow33.main || "Select a coin and click here"}
                      </div>
                      <div
                        className="bet-price-center"
                        style={{ opacity: betPricesRow33.center ? 1 : 0 }}
                        onClick={() => handleBetPriceClick(setBetPricesRow33, 'center',33)}
                      >
                        {betPricesRow33.center || "Select a coin and click here"}
                      </div>
                      <div
                        className="bet-price-middle"
                        style={{ opacity: betPricesRow33.middle ? 1 : 0 }}
                        onClick={() => handleBetPriceClick(setBetPricesRow33, 'middle',33)}
                      >
                        {betPricesRow33.middle || "Select a coin and click here"}
                      </div>
                    </td>
                    <td className="relative">
                      <div className="bet-item-inner bg-red-600">36</div>
                      <div
                        className="bet-price-main"
                        style={{ opacity: betPricesRow36.main ? 1 : 0 }}
                        onClick={() => handleBetPriceClick(setBetPricesRow36, 'main',36)}
                      >
                        {betPricesRow36.main || "Select a coin and click here"}
                      </div>
                      <div
                      className="bet-price-center"
                      style={{ opacity: betPricesRow36.center ? 1 : 0 }}
                      onClick={() => handleBetPriceClick(setBetPricesRow36, 'center',36)}
                    >
                        {betPricesRow36.center || "Select a coin and click here"}
                      </div>
                      <div
                        className="bet-price-middle"
                        style={{ opacity: betPricesRow36.middle ? 1 : 0 }}
                        onClick={() => handleBetPriceClick(setBetPricesRow36, 'middle',36)}
                      >
                        {betPricesRow36.middle || "Select a coin and click here"}
                      </div>
                    </td>
                    <td className="relative">
                      <div className=" text-warning">2 <br/> To <br/> 1</div>
                      <div
                        className="bet-price-main"
                        style={{ opacity: betPricesRow37.main ? 1 : 0 }}
                        onClick={() => handleBetPriceClick(setBetPricesRow37, 'main',37)}
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
                      onClick={() => handleBetPriceClick(setBetPricesRow2, 'main',2)}
                    >
                      {betPricesRow2.main || "Select a coin and click here"}
                    </div>
                    <div
                      className="bet-price"
                      style={{ opacity: betPricesRow2.secondary ? 1 : 0 }}
                      onClick={() => handleBetPriceClick(setBetPricesRow2, 'secondary',2)}
                    >
                      {betPricesRow2.secondary || "Select a coin and click here"}
                    </div>
                    <div
                      className="bet-price-center"
                      style={{ opacity: betPricesRow2.center ? 1 : 0 }}
                      onClick={() => handleBetPriceClick(setBetPricesRow2, 'center',2)}
                    >
                      {betPricesRow2.center || "Select a coin and click here"}
                    </div>
                    <div
                      className="bet-price-middle"
                      style={{ opacity: betPricesRow2.middle ? 1 : 0 }}
                      onClick={() => handleBetPriceClick(setBetPricesRow2, 'middle',2)}
                    >
                      {betPricesRow2.middle || "Select a coin and click here"}
                    </div>
                    <div
                        className="bet-price-leftMid"
                        style={{ opacity: betPricesRow2.left ? 1 : 0 }}
                        onClick={() => handleBetPriceClick(setBetPricesRow2, 'left',2)}
                      >
                        {betPricesRow2.left || "Select a coin and click here"}
                      </div>
                      <div
                        className="bet-price-leftTop"
                        style={{ opacity: betPricesRow2.leftTop ? 1 : 0 }}
                        onClick={() => handleBetPriceClick(setBetPricesRow2, 'leftTop',2)}
                      >
                        {betPricesRow2.leftTop || "Select a coin and click here"}
                      </div>
                  </td>
                  <td className="relative">
                    <div className="bet-item-inner bg-red-600">5</div>
                    <div
                      className="bet-price-main"
                      style={{ opacity: betPricesRow5.main ? 1 : 0 }}
                      onClick={() => handleBetPriceClick(setBetPricesRow5, 'main',5)}
                    >
                      {betPricesRow5.main || "Select a coin and click here"}
                    </div>
                    <div
                      className="bet-price"
                      style={{ opacity: betPricesRow5.secondary ? 1 : 0 }}
                      onClick={() => handleBetPriceClick(setBetPricesRow5, 'secondary',5)}
                    >
                      {betPricesRow5.secondary || "Select a coin and click here"}
                    </div>
                    <div
                      className="bet-price-center"
                      style={{ opacity: betPricesRow5.center ? 1 : 0 }}
                      onClick={() => handleBetPriceClick(setBetPricesRow5, 'center',5)}
                    >
                      {betPricesRow5.center || "Select a coin and click here"}
                    </div>
                    <div
                      className="bet-price-middle"
                      style={{ opacity: betPricesRow5.middle ? 1 : 0 }}
                      onClick={() => handleBetPriceClick(setBetPricesRow5, 'middle',5)}
                    >
                      {betPricesRow5.middle || "Select a coin and click here"}
                    </div>
                  </td>
                    <td className="relative">
                      <div className="bet-item-inner bg-black">8</div>
                      <div
                      className="bet-price-main"
                      style={{ opacity: betPricesRow8.main ? 1 : 0 }}
                      onClick={() => handleBetPriceClick(setBetPricesRow8, 'main',8)}
                    >
                      {betPricesRow8.main || "Select a coin and click here"}
                    </div>
                    <div
                      className="bet-price"
                      style={{ opacity: betPricesRow8.secondary ? 1 : 0 }}
                      onClick={() => handleBetPriceClick(setBetPricesRow8, 'secondary',8)}
                    >
                      {betPricesRow8.secondary || "Select a coin and click here"}
                    </div>
                    <div
                      className="bet-price-center"
                      style={{ opacity: betPricesRow8.center ? 1 : 0 }}
                      onClick={() => handleBetPriceClick(setBetPricesRow8, 'center',8)}
                    >
                      {betPricesRow8.center || "Select a coin and click here"}
                    </div>
                    <div
                      className="bet-price-middle"
                      style={{ opacity: betPricesRow8.middle ? 1 : 0 }}
                      onClick={() => handleBetPriceClick(setBetPricesRow8, 'middle',8)}
                    >
                      {betPricesRow8.middle || "Select a coin and click here"}
                    </div>
                    </td>
                    <td className="relative">
                      <div className="bet-item-inner bg-black">11</div>
                      <div
                        className="bet-price-main"
                        style={{ opacity: betPricesRow11.main ? 1 : 0 }}
                        onClick={() => handleBetPriceClick(setBetPricesRow11, 'main',11)}
                      >
                        {betPricesRow11.main || "Select a coin and click here"}
                      </div>
                      <div
                        className="bet-price"
                        style={{ opacity: betPricesRow11.secondary ? 1 : 0 }}
                        onClick={() => handleBetPriceClick(setBetPricesRow11, 'secondary',11)}
                      >
                        {betPricesRow11.secondary || "Select a coin and click here"}
                      </div>
                      <div
                        className="bet-price-center"
                        style={{ opacity: betPricesRow11.center ? 1 : 0 }}
                        onClick={() => handleBetPriceClick(setBetPricesRow11, 'center',11)}
                      >
                        {betPricesRow11.center || "Select a coin and click here"}
                      </div>
                      <div
                        className="bet-price-middle"
                        style={{ opacity: betPricesRow11.middle ? 1 : 0 }}
                        onClick={() => handleBetPriceClick(setBetPricesRow11, 'middle',11)}
                      >
                        {betPricesRow11.middle || "Select a coin and click here"}
                      </div>
                    </td>
                    <td className="relative">
                      <div className="bet-item-inner bg-red-600">14</div>
                      <div
                        className="bet-price-main"
                        style={{ opacity: betPricesRow14.main ? 1 : 0 }}
                        onClick={() => handleBetPriceClick(setBetPricesRow14, 'main',14)}
                      >
                        {betPricesRow14.main || "Select a coin and click here"}
                      </div>
                      <div
                        className="bet-price"
                        style={{ opacity: betPricesRow14.secondary ? 1 : 0 }}
                        onClick={() => handleBetPriceClick(setBetPricesRow14, 'secondary',14)}
                      >
                        {betPricesRow14.secondary || "Select a coin and click here"}
                      </div>
                      <div
                        className="bet-price-center"
                        style={{ opacity: betPricesRow14.center ? 1 : 0 }}
                        onClick={() => handleBetPriceClick(setBetPricesRow14, 'center',14)}
                      >
                        {betPricesRow14.center || "Select a coin and click here"}
                      </div>
                      <div
                        className="bet-price-middle"
                        style={{ opacity: betPricesRow14.middle ? 1 : 0 }}
                        onClick={() => handleBetPriceClick(setBetPricesRow14, 'middle',14)}
                      >
                        {betPricesRow14.middle || "Select a coin and click here"}
                      </div>
                    </td>
                    <td className="relative">
                      <div className="bet-item-inner bg-black">17</div>
                      <div
                      className="bet-price-main"
                      style={{ opacity: betPricesRow17.main ? 1 : 0 }}
                      onClick={() => handleBetPriceClick(setBetPricesRow17, 'main',17)}
                    >
                      {betPricesRow17.main || "Select a coin and click here"}
                    </div>
                    <div
                      className="bet-price"
                      style={{ opacity: betPricesRow17.secondary ? 1 : 0 }}
                      onClick={() => handleBetPriceClick(setBetPricesRow17, 'secondary',17)}
                    >
                      {betPricesRow17.secondary || "Select a coin and click here"}
                    </div>
                    <div
                      className="bet-price-center"
                      style={{ opacity: betPricesRow17.center ? 1 : 0 }}
                      onClick={() => handleBetPriceClick(setBetPricesRow17, 'center',17)}
                    >
                      {betPricesRow17.center || "Select a coin and click here"}
                    </div>
                    <div
                      className="bet-price-middle"
                      style={{ opacity: betPricesRow17.middle ? 1 : 0 }}
                      onClick={() => handleBetPriceClick(setBetPricesRow17, 'middle',17)}
                    >
                      {betPricesRow17.middle || "Select a coin and click here"}
                    </div>
                      
                    </td>
                    <td className="relative">
                      <div className="bet-item-inner bg-black">20</div>
                      <div
                        className="bet-price-main"
                        style={{ opacity: betPricesRow20.main ? 1 : 0 }}
                        onClick={() => handleBetPriceClick(setBetPricesRow20, 'main',20)}
                      >
                        {betPricesRow20.main || "Select a coin and click here"}
                      </div>
                      <div
                        className="bet-price"
                        style={{ opacity: betPricesRow20.secondary ? 1 : 0 }}
                        onClick={() => handleBetPriceClick(setBetPricesRow20, 'secondary',20)}
                      >
                        {betPricesRow20.secondary || "Select a coin and click here"}
                      </div>
                      <div
                        className="bet-price-center"
                        style={{ opacity: betPricesRow20.center ? 1 : 0 }}
                        onClick={() => handleBetPriceClick(setBetPricesRow20, 'center',20)}
                      >
                        {betPricesRow20.center || "Select a coin and click here"}
                      </div>
                      <div
                        className="bet-price-middle"
                        style={{ opacity: betPricesRow20.middle ? 1 : 0 }}
                        onClick={() => handleBetPriceClick(setBetPricesRow20, 'middle',20)}
                      >
                        {betPricesRow20.middle || "Select a coin and click here"}
                      </div>
                     
                    </td>
                    <td className="relative">
                      <div className="bet-item-inner bg-red-600">23</div>
                      <div
                      className="bet-price-main"
                      style={{ opacity: betPricesRow23.main ? 1 : 0 }}
                      onClick={() => handleBetPriceClick(setBetPricesRow23, 'main',23)}
                    >
                      {betPricesRow23.main || "Select a coin and click here"}
                    </div>
                    <div
                      className="bet-price"
                      style={{ opacity: betPricesRow23.secondary ? 1 : 0 }}
                      onClick={() => handleBetPriceClick(setBetPricesRow23, 'secondary',23)}
                    >
                      {betPricesRow23.secondary || "Select a coin and click here"}
                    </div>
                    <div
                      className="bet-price-center"
                      style={{ opacity: betPricesRow23.center ? 1 : 0 }}
                      onClick={() => handleBetPriceClick(setBetPricesRow23, 'center',23)}
                    >
                      {betPricesRow23.center || "Select a coin and click here"}
                    </div>
                    <div
                      className="bet-price-middle"
                      style={{ opacity: betPricesRow23.middle ? 1 : 0 }}
                      onClick={() => handleBetPriceClick(setBetPricesRow23, 'middle',23)}
                    >
                      {betPricesRow23.middle || "Select a coin and click here"}
                    </div>
                    </td>
                    <td className="relative">
                      <div className="bet-item-inner bg-black">26</div>
                      <div
                      className="bet-price-main"
                      style={{ opacity: betPricesRow26.main ? 1 : 0 }}
                      onClick={() => handleBetPriceClick(setBetPricesRow26, 'main',26)}
                    >
                      {betPricesRow26.main || "Select a coin and click here"}
                    </div>
                    <div
                      className="bet-price"
                      style={{ opacity: betPricesRow26.secondary ? 1 : 0 }}
                      onClick={() => handleBetPriceClick(setBetPricesRow26, 'secondary',26)}
                    >
                      {betPricesRow26.secondary || "Select a coin and click here"}
                    </div>
                    <div
                      className="bet-price-center"
                      style={{ opacity: betPricesRow26.center ? 1 : 0 }}
                      onClick={() => handleBetPriceClick(setBetPricesRow26, 'center',26)}
                    >
                      {betPricesRow26.center || "Select a coin and click here"}
                    </div>
                    <div
                      className="bet-price-middle"
                      style={{ opacity: betPricesRow26.middle ? 1 : 0 }}
                      onClick={() => handleBetPriceClick(setBetPricesRow26, 'middle',26)}
                    >
                      {betPricesRow26.middle || "Select a coin and click here"}
                    </div>
                    </td>
                    <td className="relative">
                      <div className="bet-item-inner bg-black">29</div>
                      <div
                      className="bet-price-main"
                      style={{ opacity: betPricesRow29.main ? 1 : 0 }}
                      onClick={() => handleBetPriceClick(setBetPricesRow29, 'main',29)}
                    >
                      {betPricesRow29.main || "Select a coin and click here"}
                    </div>
                    <div
                      className="bet-price"
                      style={{ opacity: betPricesRow29.secondary ? 1 : 0 }}
                      onClick={() => handleBetPriceClick(setBetPricesRow29, 'secondary',29)}
                    >
                      {betPricesRow29.secondary || "Select a coin and click here"}
                    </div>
                    <div
                      className="bet-price-center"
                      style={{ opacity: betPricesRow29.center ? 1 : 0 }}
                      onClick={() => handleBetPriceClick(setBetPricesRow29, 'center',29)}
                    >
                      {betPricesRow29.center || "Select a coin and click here"}
                    </div>
                    <div
                      className="bet-price-middle"
                      style={{ opacity: betPricesRow29.middle ? 1 : 0 }}
                      onClick={() => handleBetPriceClick(setBetPricesRow29, 'middle',29)}
                    >
                      {betPricesRow29.middle || "Select a coin and click here"}
                    </div>
                    </td>
                    <td className="relative">
                      <div className="bet-item-inner bg-red-600">32</div>
                      <div
                      className="bet-price-main"
                      style={{ opacity: betPricesRow32.main ? 1 : 0 }}
                      onClick={() => handleBetPriceClick(setBetPricesRow32, 'main',32)}
                    >
                      {betPricesRow32.main || "Select a coin and click here"}
                    </div>
                    <div
                      className="bet-price"
                      style={{ opacity: betPricesRow32.secondary ? 1 : 0 }}
                      onClick={() => handleBetPriceClick(setBetPricesRow32, 'secondary',32)}
                    >
                      {betPricesRow32.secondary || "Select a coin and click here"}
                    </div>
                    <div
                      className="bet-price-center"
                      style={{ opacity: betPricesRow32.center ? 1 : 0 }}
                      onClick={() => handleBetPriceClick(setBetPricesRow32, 'center',32)}
                    >
                      {betPricesRow32.center || "Select a coin and click here"}
                    </div>
                    <div
                      className="bet-price-middle"
                      style={{ opacity: betPricesRow32.middle ? 1 : 0 }}
                      onClick={() => handleBetPriceClick(setBetPricesRow32, 'middle',32)}
                    >
                      {betPricesRow32.middle || "Select a coin and click here"}
                    </div>
                    </td>
                    <td className="relative">
                      <div className="bet-item-inner bg-black">35</div>
                      <div
                      className="bet-price-main"
                      style={{ opacity: betPricesRow35.main ? 1 : 0 }}
                      onClick={() => handleBetPriceClick(setBetPricesRow35, 'main',35)}
                    >
                      {betPricesRow35.main || "Select a coin and click here"}
                    </div>
                    <div
                      className="bet-price"
                      style={{ opacity: betPricesRow35.secondary ? 1 : 0 }}
                      onClick={() => handleBetPriceClick(setBetPricesRow35, 'secondary',35)}
                    >
                      {betPricesRow35.secondary || "Select a coin and click here"}
                    </div>
                    <div
                      className="bet-price-center"
                      style={{ opacity: betPricesRow35.center ? 1 : 0 }}
                      onClick={() => handleBetPriceClick(setBetPricesRow35, 'center',35)}
                    >
                      {betPricesRow35.center || "Select a coin and click here"}
                    </div>
                    <div
                      className="bet-price-middle"
                      style={{ opacity: betPricesRow35.middle ? 1 : 0 }}
                      onClick={() => handleBetPriceClick(setBetPricesRow35, 'middle',35)}
                    >
                      {betPricesRow35.middle || "Select a coin and click here"}
                    </div>
                    </td>
                    <td className="relative">
                      <div className=" text-warning">2 <br/> To <br/> 1</div>
                      <div
                        className="bet-price-main"
                        style={{ opacity: betPricesRow38.main ? 1 : 0 }}
                        onClick={() => handleBetPriceClick(setBetPricesRow38, 'main',38)}
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
                      onClick={() => handleBetPriceClick(setBetPricesRow1, 'main',1)}
                    >
                      {betPricesRow1.main || "Select a coin and click here"}
                    </div>
                    <div
                      className="bet-price"
                      style={{ opacity: betPricesRow1.secondary ? 1 : 0 }}
                      onClick={() => handleBetPriceClick(setBetPricesRow1, 'secondary',1)}
                    >
                      {betPricesRow1.secondary || "Select a coin and click here"}
                    </div>
                    <div
                      className="bet-price-center"
                      style={{ opacity: betPricesRow1.center ? 1 : 0 }}
                      onClick={() => handleBetPriceClick(setBetPricesRow1, 'center',1)}
                    >
                      {betPricesRow1.center || "Select a coin and click here"}
                    </div>
                    <div
                      className="bet-price-middle"
                      style={{ opacity: betPricesRow1.middle ? 1 : 0 }}
                      onClick={() => handleBetPriceClick(setBetPricesRow1, 'middle',1)}
                    >
                      {betPricesRow1.middle || "Select a coin and click here"}
                    </div>
                    <div
                        className="bet-price-leftMid"
                        style={{ opacity: betPricesRow1.left ? 1 : 0 }}
                        onClick={() => handleBetPriceClick(setBetPricesRow1, 'left',1)}
                      >
                        {betPricesRow1.left || "Select a coin and click here"}
                      </div>
                      <div
                        className="bet-price-leftTop"
                        style={{ opacity: betPricesRow1.leftTop ? 1 : 0 }}
                        onClick={() => handleBetPriceClick(setBetPricesRow1, 'leftTop',1)}
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
                      onClick={() => handleBetPriceClick(setBetPricesRow4, 'main',4)}
                    >
                      {betPricesRow4.main || "Select a coin and click here"}
                    </div>
                    <div
                      className="bet-price"
                      style={{ opacity: betPricesRow4.secondary ? 1 : 0 }}
                      onClick={() => handleBetPriceClick(setBetPricesRow4, 'secondary',4)}
                    >
                      {betPricesRow4.secondary || "Select a coin and click here"}
                    </div>
                    <div
                      className="bet-price-center"
                      style={{ opacity: betPricesRow4.center ? 1 : 0 }}
                      onClick={() => handleBetPriceClick(setBetPricesRow4, 'center',4)}
                    >
                      {betPricesRow4.center || "Select a coin and click here"}
                    </div>
                    <div
                      className="bet-price-middle"
                      style={{ opacity: betPricesRow4.middle ? 1 : 0 }}
                      onClick={() => handleBetPriceClick(setBetPricesRow4, 'middle',4)}
                    >
                      {betPricesRow4.middle || "Select a coin and click here"}
                    </div>
                   <div
                        className="bet-price-leftButtom"
                        style={{ opacity: betPricesRow4.leftButtom ? 1 : 0 }}
                        onClick={() => handleBetPriceClick(setBetPricesRow4, 'leftButtom',4)}
                      >
                        {betPricesRow4.leftButtom || "Select a coin and click here"}
                      </div>
                    </td>
                    <td className="relative">
                      <div className="bet-item-inner bg-red-600">7</div>
                      <div
                      className="bet-price-main"
                      style={{ opacity: betPricesRow7.main ? 1 : 0 }}
                      onClick={() => handleBetPriceClick(setBetPricesRow7, 'main',7)}
                    >
                      {betPricesRow7.main || "Select a coin and click here"}
                    </div>
                    <div
                      className="bet-price"
                      style={{ opacity: betPricesRow7.secondary ? 1 : 0 }}
                      onClick={() => handleBetPriceClick(setBetPricesRow7, 'secondary',7)}
                    >
                      {betPricesRow7.secondary || "Select a coin and click here"}
                    </div>
                    <div
                      className="bet-price-center"
                      style={{ opacity: betPricesRow7.center ? 1 : 0 }}
                      onClick={() => handleBetPriceClick(setBetPricesRow7, 'center',7)}
                    >
                      {betPricesRow7.center || "Select a coin and click here"}
                    </div>
                    <div
                      className="bet-price-middle"
                      style={{ opacity: betPricesRow7.middle ? 1 : 0 }}
                      onClick={() => handleBetPriceClick(setBetPricesRow7, 'middle',7)}
                    >
                      {betPricesRow7.middle || "Select a coin and click here"}
                    </div>
                    <div
                        className="bet-price-leftButtom"
                        style={{ opacity: betPricesRow7.leftButtom ? 1 : 0 }}
                        onClick={() => handleBetPriceClick(setBetPricesRow7, 'leftButtom',7)}
                      >
                        {betPricesRow7.leftButtom || "Select a coin and click here"}
                      </div>
                    </td>
                    <td className="relative">
                      <div className="bet-item-inner bg-black">10</div>
                      <div
                      className="bet-price-main"
                      style={{ opacity: betPricesRow10.main ? 1 : 0 }}
                      onClick={() => handleBetPriceClick(setBetPricesRow10, 'main',10)}
                    >
                      {betPricesRow10.main || "Select a coin and click here"}
                    </div>
                    <div
                      className="bet-price"
                      style={{ opacity: betPricesRow10.secondary ? 1 : 0 }}
                      onClick={() => handleBetPriceClick(setBetPricesRow10, 'secondary',10)}
                    >
                      {betPricesRow10.secondary || "Select a coin and click here"}
                    </div>
                    <div
                      className="bet-price-center"
                      style={{ opacity: betPricesRow10.center ? 1 : 0 }}
                      onClick={() => handleBetPriceClick(setBetPricesRow10, 'center',10)}
                    >
                      {betPricesRow10.center || "Select a coin and click here"}
                    </div>
                    <div
                      className="bet-price-middle"
                      style={{ opacity: betPricesRow10.middle ? 1 : 0 }}
                      onClick={() => handleBetPriceClick(setBetPricesRow10, 'middle',10)}
                    >
                      {betPricesRow10.middle || "Select a coin and click here"}
                    </div>
                    </td>
                    <td className="relative">
                      <div className="bet-item-inner bg-black">13</div>
                      <div
                      className="bet-price-main"
                      style={{ opacity: betPricesRow13.main ? 1 : 0 }}
                      onClick={() => handleBetPriceClick(setBetPricesRow13, 'main',13)}
                    >
                      {betPricesRow13.main || "Select a coin and click here"}
                    </div>
                    <div
                      className="bet-price"
                      style={{ opacity: betPricesRow13.secondary ? 1 : 0 }}
                      onClick={() => handleBetPriceClick(setBetPricesRow13, 'secondary',13)}
                    >
                      {betPricesRow13.secondary || "Select a coin and click here"}
                    </div>
                    <div
                      className="bet-price-center"
                      style={{ opacity: betPricesRow13.center ? 1 : 0 }}
                      onClick={() => handleBetPriceClick(setBetPricesRow13, 'center',13)}
                    >
                      {betPricesRow13.center || "Select a coin and click here"}
                    </div>
                    <div
                      className="bet-price-middle"
                      style={{ opacity: betPricesRow13.middle ? 1 : 0 }}
                      onClick={() => handleBetPriceClick(setBetPricesRow13, 'middle',13)}
                    >
                      {betPricesRow13.middle || "Select a coin and click here"}
                    </div>
                    </td>
                    <td className="relative">
                      <div className="bet-item-inner bg-red-600">16</div>
                      <div
                      className="bet-price-main"
                      style={{ opacity: betPricesRow16.main ? 1 : 0 }}
                      onClick={() => handleBetPriceClick(setBetPricesRow16, 'main',16)}
                    >
                      {betPricesRow16.main || "Select a coin and click here"}
                    </div>
                    <div
                      className="bet-price"
                      style={{ opacity: betPricesRow16.secondary ? 1 : 0 }}
                      onClick={() => handleBetPriceClick(setBetPricesRow16, 'secondary',16)}
                    >
                      {betPricesRow16.secondary || "Select a coin and click here"}
                    </div>
                    <div
                      className="bet-price-center"
                      style={{ opacity: betPricesRow16.center ? 1 : 0 }}
                      onClick={() => handleBetPriceClick(setBetPricesRow16, 'center',16)}
                    >
                      {betPricesRow16.center || "Select a coin and click here"}
                    </div>
                    <div
                      className="bet-price-middle"
                      style={{ opacity: betPricesRow16.middle ? 1 : 0 }}
                      onClick={() => handleBetPriceClick(setBetPricesRow16, 'middle',16)}
                    >
                      {betPricesRow16.middle || "Select a coin and click here"}
                    </div>
                    </td>
                    <td className="relative">
                      <div className="bet-item-inner bg-red-600">19</div>
                      <div
                      className="bet-price-main"
                      style={{ opacity: betPricesRow19.main ? 1 : 0 }}
                      onClick={() => handleBetPriceClick(setBetPricesRow19, 'main',19)}
                    >
                      {betPricesRow19.main || "Select a coin and click here"}
                    </div>
                    <div
                      className="bet-price"
                      style={{ opacity: betPricesRow19.secondary ? 1 : 0 }}
                      onClick={() => handleBetPriceClick(setBetPricesRow19, 'secondary',19)}
                    >
                      {betPricesRow19.secondary || "Select a coin and click here"}
                    </div>
                    <div
                      className="bet-price-center"
                      style={{ opacity: betPricesRow19.center ? 1 : 0 }}
                      onClick={() => handleBetPriceClick(setBetPricesRow19, 'center',19)}
                    >
                      {betPricesRow19.center || "Select a coin and click here"}
                    </div>
                    <div
                      className="bet-price-middle"
                      style={{ opacity: betPricesRow19.middle ? 1 : 0 }}
                      onClick={() => handleBetPriceClick(setBetPricesRow19, 'middle',19)}
                    >
                      {betPricesRow19.middle || "Select a coin and click here"}
                    </div>
                    </td>
                    <td className="relative">
                      <div className="bet-item-inner bg-black">22</div>
                      <div
                      className="bet-price-main"
                      style={{ opacity: betPricesRow22.main ? 1 : 0 }}
                      onClick={() => handleBetPriceClick(setBetPricesRow22, 'main',22)}
                    >
                      {betPricesRow22.main || "Select a coin and click here"}
                    </div>
                    <div
                      className="bet-price"
                      style={{ opacity: betPricesRow22.secondary ? 1 : 0 }}
                      onClick={() => handleBetPriceClick(setBetPricesRow22, 'secondary',22)}
                    >
                      {betPricesRow22.secondary || "Select a coin and click here"}
                    </div>
                    <div
                      className="bet-price-center"
                      style={{ opacity: betPricesRow22.center ? 1 : 0 }}
                      onClick={() => handleBetPriceClick(setBetPricesRow22, 'center',22)}
                    >
                      {betPricesRow22.center || "Select a coin and click here"}
                    </div>
                    <div
                      className="bet-price-middle"
                      style={{ opacity: betPricesRow22.middle ? 1 : 0 }}
                      onClick={() => handleBetPriceClick(setBetPricesRow22, 'middle',22)}
                    >
                      {betPricesRow22.middle || "Select a coin and click here"}
                    </div>
                    </td>
                    <td className="relative">
                      <div className="bet-item-inner bg-red-600">25</div>
                      <div
                      className="bet-price-main"
                      style={{ opacity: betPricesRow25.main ? 1 : 0 }}
                      onClick={() => handleBetPriceClick(setBetPricesRow25, 'main',25)}
                    >
                      {betPricesRow25.main || "Select a coin and click here"}
                    </div>
                    <div
                      className="bet-price"
                      style={{ opacity: betPricesRow25.secondary ? 1 : 0 }}
                      onClick={() => handleBetPriceClick(setBetPricesRow25, 'secondary',25)}
                    >
                      {betPricesRow25.secondary || "Select a coin and click here"}
                    </div>
                    <div
                      className="bet-price-center"
                      style={{ opacity: betPricesRow25.center ? 1 : 0 }}
                      onClick={() => handleBetPriceClick(setBetPricesRow25, 'center',25)}
                    >
                      {betPricesRow25.center || "Select a coin and click here"}
                    </div>
                    <div
                      className="bet-price-middle"
                      style={{ opacity: betPricesRow25.middle ? 1 : 0 }}
                      onClick={() => handleBetPriceClick(setBetPricesRow25, 'middle',25)}
                    >
                      {betPricesRow25.middle || "Select a coin and click here"}
                    </div>
                    </td>
                    <td className="relative">
                      <div className="bet-item-inner bg-black">28</div>
                      <div
                      className="bet-price-main"
                      style={{ opacity: betPricesRow28.main ? 1 : 0 }}
                      onClick={() => handleBetPriceClick(setBetPricesRow28, 'main',28)}
                    >
                      {betPricesRow28.main || "Select a coin and click here"}
                    </div>
                    <div
                      className="bet-price"
                      style={{ opacity: betPricesRow28.secondary ? 1 : 0 }}
                      onClick={() => handleBetPriceClick(setBetPricesRow28, 'secondary',28)}
                    >
                      {betPricesRow28.secondary || "Select a coin and click here"}
                    </div>
                    <div
                      className="bet-price-center"
                      style={{ opacity: betPricesRow28.center ? 1 : 0 }}
                      onClick={() => handleBetPriceClick(setBetPricesRow28, 'center',28)}
                    >
                      {betPricesRow28.center || "Select a coin and click here"}
                    </div>
                    <div
                      className="bet-price-middle"
                      style={{ opacity: betPricesRow28.middle ? 1 : 0 }}
                      onClick={() => handleBetPriceClick(setBetPricesRow28, 'middle',28)}
                    >
                      {betPricesRow28.middle || "Select a coin and click here"}
                    </div>
                    </td>
                    <td className="relative">
                      <div className="bet-item-inner bg-black">31</div>
                      <div
                      className="bet-price-main"
                      style={{ opacity: betPricesRow31.main ? 1 : 0 }}
                      onClick={() => handleBetPriceClick(setBetPricesRow31, 'main',31)}
                    >
                      {betPricesRow31.main || "Select a coin and click here"}
                    </div>
                    <div
                      className="bet-price"
                      style={{ opacity: betPricesRow31.secondary ? 1 : 0 }}
                      onClick={() => handleBetPriceClick(setBetPricesRow31, 'secondary',31)}
                    >
                      {betPricesRow31.secondary || "Select a coin and click here"}
                    </div>
                    <div
                      className="bet-price-center"
                      style={{ opacity: betPricesRow31.center ? 1 : 0 }}
                      onClick={() => handleBetPriceClick(setBetPricesRow31, 'center',31)}
                    >
                      {betPricesRow31.center || "Select a coin and click here"}
                    </div>
                    <div
                      className="bet-price-middle"
                      style={{ opacity: betPricesRow31.middle ? 1 : 0 }}
                      onClick={() => handleBetPriceClick(setBetPricesRow31, 'middle',31)}
                    >
                      {betPricesRow31.middle || "Select a coin and click here"}
                    </div>
                    </td>
                    <td className="relative">
                      <div className="bet-item-inner bg-red-600">34</div>
                      <div
                      className="bet-price-main"
                      style={{ opacity: betPricesRow34.main ? 1 : 0 }}
                      onClick={() => handleBetPriceClick(setBetPricesRow34, 'main',34)}
                    >
                      {betPricesRow34.main || "Select a coin and click here"}
                    </div>
                    <div
                      className="bet-price"
                      style={{ opacity: betPricesRow34.secondary ? 1 : 0 }}
                      onClick={() => handleBetPriceClick(setBetPricesRow34, 'secondary',34)}
                    >
                      {betPricesRow34.secondary || "Select a coin and click here"}
                    </div>
                    <div
                      className="bet-price-center"
                      style={{ opacity: betPricesRow34.center ? 1 : 0 }}
                      onClick={() => handleBetPriceClick(setBetPricesRow34, 'center',34)}
                    >
                      {betPricesRow34.center || "Select a coin and click here"}
                    </div>
                    <div
                      className="bet-price-middle"
                      style={{ opacity: betPricesRow34.middle ? 1 : 0 }}
                      onClick={() => handleBetPriceClick(setBetPricesRow34, 'middle',34)}
                    >
                      {betPricesRow34.middle || "Select a coin and click here"}
                    </div>
                    </td>
                    <td className="relative">
                      <div className="text-warning">2 <br/> To <br/> 1</div>
                      <div
                        className="bet-price-main"
                        style={{ opacity: betPricesRow39.main ? 1 : 0 }}
                        onClick={() => handleBetPriceClick(setBetPricesRow39, 'main',39)}
                      >
                        {betPricesRow39.main || "Select a coin and click here"}
                      </div>
                    </td>
                  </tr>
                  <tr className="table-bottom">
                    <td className="border-0"></td>
                    <td colSpan={4} className="relative z-40">
                      <div className="">1 ST 12</div>
                      <div
                        className="bet-price-main z-50"
                        style={{ opacity: betPricesRow40.main ? 1 : 0 }}
                        onClick={() => handleBetPriceClick(setBetPricesRow40, 'main',40)}
                      >
                        {betPricesRow40.main || "Select a coin and click here"}
                      </div>
                    </td>
                    <td colSpan={4} className="relative z-40">
                      <div className="">2 ND 12</div>
                      <div
                        className="bet-price-main z-50"
                        style={{ opacity: betPricesRow41.main ? 1 : 0 }}
                        onClick={() => handleBetPriceClick(setBetPricesRow41, 'main',41)}
                      >
                        {betPricesRow41.main || "Select a coin and click here"}
                      </div>
                    </td>
                    <td colSpan={4} className="relative overflow-hidden z-40">
                      <div className="">3 RD 12</div>
                      <div
                        className="bet-price-main z-50"
                        style={{ opacity: betPricesRow42.main ? 1 : 0 }}
                        onClick={() => handleBetPriceClick(setBetPricesRow42, 'main',42)}
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
                    onClick={() => handleBetPriceClick(setBetPricesRow43, 'main',43)}
                  >
                    {betPricesRow43.main || "Select a coin and click here"}
                  </div>
                </div>
                <div className="border rounded-full bg-blue-500 text-white m-2 p-2 flex-1 text-center relative">
                  Even
                  <div
                    className="bet-price-main z-50"
                    style={{ opacity: betPricesRow44.main ? 1 : 0 }}
                    onClick={() => handleBetPriceClick(setBetPricesRow44, 'main',44)}
                  >
                    {betPricesRow44.main || "Select a coin and click here"}
                  </div>
                </div>
                <div className="border rounded-full bg-blue-500 text-white m-2 p-2 flex-1 text-center relative">
                  Red
                  <div
                    className="bet-price-main z-50"
                    style={{ opacity: betPricesRow45.main ? 1 : 0 }}
                    onClick={() => handleBetPriceClick(setBetPricesRow45, 'main',45)}
                  >
                    {betPricesRow45.main || "Select a coin and click here"}
                  </div>
                </div>
                <div className="border rounded-full bg-blue-500 text-white m-2 p-2 flex-1 text-center relative">
                  Black
                  <div
                    className="bet-price-main z-50"
                    style={{ opacity: betPricesRow46.main ? 1 : 0 }}
                    onClick={() => handleBetPriceClick(setBetPricesRow46, 'main',46)}
                  >
                    {betPricesRow46.main || "Select a coin and click here"}
                  </div>
                </div>
                <div className="border rounded-full bg-blue-500 text-white m-2 p-2 flex-1 text-center relative">
                  ODD
                  <div
                    className="bet-price-main z-50"
                    style={{ opacity: betPricesRow47.main ? 1 : 0 }}
                    onClick={() => handleBetPriceClick(setBetPricesRow47, 'main',47)}
                  >
                    {betPricesRow47.main || "Select a coin and click here"}
                  </div>
                </div>
                <div className="border rounded-full bg-blue-500 text-white m-2 p-2 flex-1 text-center relative">
                  19 TO 36
                  <div
                    className="bet-price-main z-50"
                    style={{ opacity: betPricesRow48.main ? 1 : 0 }}
                    onClick={() => handleBetPriceClick(setBetPricesRow48, 'main',48)}
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
