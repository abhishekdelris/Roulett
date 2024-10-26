// 

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { splitNumbers, findPairsForNumber } from '../managerfiles/split';
import cornorNumber from '../managerfiles/cornor';
import firstRow from '../managerfiles/FirstRow';
import secondRow from '../managerfiles/secondRow';
import thirdRow from '../managerfiles/thirdRow';

function CoinSelect({ betData, betPosition, betTitle }) {
  const [coins, setCoins] = useState([]);
  const [numbers, setNumbers] = useState([]); // Change to an array
  const [positions, setPositions] = useState([]); // Change to an array
  const [amounts, setAmounts] = useState([]); // Change to an array
  const [selectedCoin, setSelectedCoin] = useState(20);
  const [totalAmount, setTotalAmount] = useState(200);
  const winningNumber = 5;
  const [totalWinningAmount, setTotalWinningAmount] = useState(0);

  const receivedCoins = async () => {
    console.log("this is a receivedCoin",betData);
    
    betData.forEach((res) => {
      const position = res.position;
      const number = res.number;
      const amount = res.amount;
      console.log("position.....",position);
      console.log("number.....",number);
      console.log("Amount.....",amount);
      
      // Update state to handle arrays
      setAmounts((prev) => [...prev, amount]);
      setNumbers((prev) => [...prev, number]);
      setPositions((prev) => [...prev, position]);
    });
  };

  const handleCheckBet = () => {
    console.log("this is a bet position handleBet");
    
    positions.forEach((position, index) => {
      const number = numbers[index];
      const amount = amounts[index];

      if (position === 'main' && winningNumber === number) {
        const win = 36 * amount;
        setTotalWinningAmount((prev) => prev + win);
      }

      if (position === 'center' && winningNumber === number) {
        const pairsForFive = findPairsForNumber(number);
        if (pairsForFive) {
          const win = 18 * amount;
          setTotalWinningAmount((prev) => prev + win);
        }
      }

      // Add other position checks similarly
      // Example for 'odd'\
      let presentedNumber = [];
      if(number){
        const selectedNumber = number%2;
        if(selectedNumber){
          presentedNumber.push(number);    
        }
        
      }
      console.log("number presented by.....",presentedNumber);
      
      if (presentedNumber.length > 0  && winningNumber === number) {
        presentedNumber.forEach(element => {
          if(element){
          const win = 2 * amount;
          setTotalWinningAmount((prev) => prev + win);
         }
        });
        // Your logic for odd
      }

      //logies code for even number
     if(number){
      let presentedEvenNumber = [];
      const selectedNumber = number/2;
      if(selectedNumber){
        presentedEvenNumber.push(selectedNumber);
      }

      if(presentedEvenNumber.length > 0 && winningNumber === number){
        const win = 2 * amount;
        setTotalWinningAmount((prev) => prev + win);
      }
     }

    // find the number of color wise
    if(number) {
      //this is a red color
      let presentedRedNumber = [];
      for(const i=1; i<=36; i+2){
        presentedRedNumber.push(i);
      }
      presentedRedNumber.forEach(element => {
         if(element === number){
          const win = 2 * amount;
          setTotalWinningAmount((prev) => prev + win)
         }
      });
     
    }else {
      //this is a black color
      let presentedBlackNumber = [];
      for(const i=2; i<=36; i+2){
       presentedBlackNumber.push(i);
      }
      presentedBlackNumber.forEach(element => {
        if(element === number){
         const win = 2 * amount;
         setTotalWinningAmount((prev) => prev + win)
        }
     });
    }
      if (position === 'middle' && winningNumber === number) {
        const win = 9 * amount;
        setTotalWinningAmount((prev) => prev + win);
      }

      if (position === 'top' && winningNumber === number) {
        const win = 36 * amount;
        setTotalWinningAmount((prev) => prev + win);
      }

      if (position === 'coular' && winningNumber === number) {
        const win = 36 * amount;
        setTotalWinningAmount((prev) => prev + win);
      }
    });
  };

  const handleCoinClick = async () => {
    console.log("hello this...handlecoin click");
    
    handleCheckBet();
    try {
      const response = await fetch('https://delristech-projects.in/roulette_web/index.php/api/Web_api/get_bet_type', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const data = await response.json();
      console.log("this is a data.....",data);
      
      setCoins(data.data);
    } catch (error) {
      console.error('Error fetching bet types:', error);
    }
  };

  const handleSelectCoin = (coin) => {
    console.log("this is a hanldeSelectedCoins");
    
    const winningPercentage = parseFloat(coin.winning_percentage);
    const calculatedAmount = selectedCoin * (winningPercentage / 100);
    setTotalAmount(calculatedAmount);
    setSelectedCoin(coin);
  };

  useEffect(() => {
    console.log("this is a useEffect funcation....");
    
    handleCoinClick();
    receivedCoins(); // Call this to set initial values from betData
  }, [betData]); // Ensure to run when betData changes

  return (
    <div>
      <h2>{betTitle}</h2>
      <div>
        {coins.length > 0 ? (
          coins.map((coin) => (
            <div key={coin.id} onClick={() => handleSelectCoin(coin)}>
              <h3>{coin.bet_title}</h3>
              <p>Winning Percentage: {coin.winning_percentage}%</p>
            </div>
          ))
        ) : (
          <p>Loading coins...</p>
        )}
      </div>
      {totalAmount > 0 && (
        <div>
          <h3>Total Amount: {totalAmount.toFixed(2)}</h3>
        </div>
      )}
    </div>
  );
}

export default CoinSelect;
