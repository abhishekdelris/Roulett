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
  
    if (winningData) {
      console.log("you won");
    }
  };
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
    <div className="game-screen bettingBg text-white h-full w-full p-6">
      
      <button className="btn btn-success" onClick={handleBetRemovePosition}>Undo</button>
      <div className="container mx-auto">
        {/* <CoinSelect/> */}
        <div className="flex flex-wrap">
        
          <div className="w-full  px-4 mb-4">
            <header className="flex justify-between items-center mb-4">
              <div className="balance">
                Your Balance: <span className="font-bold">{totalBalance}</span>
                {/* Bet Amount: <span className="font-bold">600</span> */}
              </div> 
              <div className="bet-amount flex">
              <BackgroundSound soundFile={Sound} />
              <div className="bet-amount"><svg width="18" height="18" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.9756 3.5586C7.96042 3.43761 7.88542 3.33268 7.77604 3.27911L7.26529 3.02417C7.1818 2.98086 7.11751 2.90854 7.08493 2.82059C7.0635 2.76478 7.04028 2.70941 7.01573 2.65495C6.97599 2.56923 6.97019 2.47189 6.99876 2.38216L7.17957 1.84014C7.21931 1.72495 7.19832 1.5977 7.12332 1.50127C6.93893 1.27044 6.72955 1.06104 6.49874 0.876657C6.40275 0.802096 6.27552 0.780666 6.16033 0.820401L5.6179 1.00122C5.52816 1.03024 5.43084 1.02443 5.34512 0.9847C5.29065 0.960144 5.23529 0.936927 5.17949 0.915496C5.09154 0.882457 5.01922 0.818165 4.97591 0.735124L4.72054 0.224353H4.72098C4.66741 0.114521 4.5625 0.0395119 4.44151 0.024779C4.14819 -0.00825968 3.85174 -0.00825968 3.55842 0.024779C3.43743 0.0395131 3.33252 0.114521 3.27939 0.224353L3.02402 0.734667C2.98071 0.818157 2.90839 0.882453 2.82045 0.915039C2.76464 0.93647 2.70928 0.959687 2.65481 0.984242C2.5691 1.02398 2.47176 1.02978 2.38203 1.00121L1.84004 0.820391C1.72486 0.780654 1.59762 0.801639 1.50119 0.876647C1.27083 1.06104 1.06099 1.27043 0.876613 1.50126C0.802056 1.59725 0.780626 1.72449 0.82036 1.83968L1.00117 2.38214C1.03019 2.47189 1.02438 2.56921 0.98465 2.65494C0.960096 2.70941 0.93688 2.76477 0.91545 2.82058C0.882413 2.90853 0.818124 2.9813 0.735087 3.02416L0.224342 3.27955C0.114515 3.33268 0.0395099 3.4376 0.0247778 3.55859C-0.00825926 3.85192 -0.00825926 4.14839 0.0247778 4.44172C0.0395111 4.56272 0.114515 4.66764 0.224342 4.72121L0.735087 4.9766V4.97615C0.818126 5.01946 0.88242 5.09178 0.91545 5.17974C0.93688 5.23554 0.960094 5.29091 0.98465 5.34538C1.02438 5.4311 1.03019 5.52843 1.00117 5.61817L0.82036 6.16019C0.780625 6.27538 0.801609 6.40262 0.876613 6.49861C1.061 6.72943 1.27038 6.93928 1.50119 7.12368C1.59718 7.19824 1.72486 7.21967 1.8396 7.17993L2.38203 6.99912H2.38248C2.47222 6.97009 2.56954 6.9759 2.65481 7.01564C2.70928 7.04019 2.76464 7.06341 2.82045 7.08484H2.82089C2.90884 7.11743 2.98116 7.18172 3.02402 7.26521L3.27939 7.77598C3.33252 7.88537 3.43788 7.96082 3.55843 7.97556C3.85219 8.00815 4.14819 8.00815 4.44195 7.97556C4.5625 7.96082 4.66742 7.88537 4.72099 7.77598L4.97636 7.26521C5.01922 7.18172 5.09154 7.11742 5.17949 7.08484C5.23529 7.06341 5.29065 7.04019 5.34512 7.01564H5.34557C5.43084 6.9759 5.52817 6.97009 5.6179 6.99912L6.15989 7.17993C6.27507 7.21967 6.40231 7.19868 6.4983 7.12368C6.72911 6.93928 6.93895 6.72989 7.12333 6.49907C7.19789 6.40308 7.21932 6.27583 7.17958 6.16064L6.99878 5.61818C6.96976 5.52844 6.97556 5.43111 7.0153 5.34539C7.03985 5.29092 7.06307 5.23555 7.08449 5.17975C7.11709 5.09179 7.18138 5.01947 7.26486 4.97616L7.7756 4.72078V4.72122C7.88498 4.66765 7.96043 4.56273 7.97517 4.44173C8.0082 4.1484 8.00819 3.85194 7.9756 3.5586ZM3.99998 5.82889C3.51513 5.82889 3.04993 5.63601 2.70711 5.29312C2.3643 4.95023 2.17137 4.485 2.17137 4.00019C2.17137 3.51538 2.36424 3.0501 2.70711 2.70726C3.04999 2.36443 3.51519 2.17149 3.99998 2.17149C4.48477 2.17149 4.95002 2.36437 5.29284 2.70726C5.63566 3.05015 5.82858 3.51538 5.82858 4.00019C5.82858 4.485 5.63571 4.95028 5.29284 5.29312C4.94997 5.63595 4.48477 5.82889 3.99998 5.82889Z" fill="white"/>
</svg>
</div>
              </div>
            
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
          
            <RouletteWheelResult betData={userSelect}/>
            <button
              onClick={() => setShowModal(false)}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
            >
              Close
            </button>
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
                        onClick={() => handleBetPriceClick(setBetPricesRow39, 'main')}
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
                        onClick={() => handleBetPriceClick(setBetPricesRow40, 'main')}
                      >
                        {betPricesRow40.main || "Select a coin and click here"}
                      </div>
                    </td>
                    <td colSpan={4} className="relative z-40">
                      <div className="">2 ND 12</div>
                      <div
                        className="bet-price-main z-50"
                        style={{ opacity: betPricesRow41.main ? 1 : 0 }}
                        onClick={() => handleBetPriceClick(setBetPricesRow41, 'main')}
                      >
                        {betPricesRow41.main || "Select a coin and click here"}
                      </div>
                    </td>
                    <td colSpan={4} className="relative overflow-hidden z-40">
                      <div className="">3 RD 12</div>
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
