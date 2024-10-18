import React, { useEffect, useState } from 'react';
import axios from 'axios';

function CoinSelect({ betPosition, betTitle }) {
  const [coins, setCoins] = useState([]);
  const [selectedCoin, setSelectedCoin] = useState(20);
  const [totalAmount, setTotalAmount] = useState(200);

  const handleCoinClick = async () => {
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
      console.log('Bet types:', data.data); // Log the received bet types
      setCoins(data.data); // Set coins state to the received bet types
    } catch (error) {
      console.error('Error fetching bet types:', error);
    }
  };

  const handleSelectCoin = (coin) => {
    const winningPercentage = parseFloat(coin.winning_percentage);
    const calculatedAmount = selectedCoin * (winningPercentage / 100); // Calculate based on the winning percentage
    setTotalAmount(calculatedAmount);
    setSelectedCoin(coin); // Set the selected coin
  };

  useEffect(() => {
    handleCoinClick(); // Fetch bet types on component mount
  }, []);

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
