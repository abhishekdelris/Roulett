import React, { useEffect } from 'react';
import './RouletteTable.css'; // You can include your CSS here

const RouletteTable = ({ onChanged }) => {
  const screenWidth = window.innerWidth;  // Get the screen width
  const screenHeight = window.innerHeight; // Get the screen height

  const clearSpecificOrResetBet = async () => {
    // Your logic for clearing or resetting bets
    // Simulating an async operation
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, 500); // Simulate delay
    });
  };

  const getTotalWinningAmount = () => {
    // Your logic for calculating total winnings
  };

  useEffect(() => {
    const resetBet = async () => {
      const value = await clearSpecificOrResetBet();
      if (value) {
        onChanged(true);
      }
    };
    resetBet();
    getTotalWinningAmount();
  }, [onChanged]);

  return (
    <div style={{ width: screenWidth }}>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
        <div style={{ position: 'relative', width: '100%' }}>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <div style={{ width: `${screenWidth * 0.194}px` }}></div>
            {/* Add more components or layout elements here as needed */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RouletteTable;
