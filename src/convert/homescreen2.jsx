import React, { useState, useEffect, useRef } from 'react';
import { Alert } from 'react-native'; // Replace with appropriate alert method in your UI framework

const rouletteValues = [
  0, 26, 3, 35, 12, 28, 7, 29, 18, 22,
  9, 31, 14, 20, 1, 33, 16, 24, 5, 10,
  23, 8, 30, 11, 36, 13, 27, 6, 34, 17,
  25, 2, 21, 4, 19, 15, 32,
];

const HomeScreen = ({ audioController }) => {
  const [selectedCoins, setSelectedCoins] = useState([]);
  const [betAmount, setBetAmount] = useState(0);
  const [betPlaced, setBetPlaced] = useState(false);
  const [winningNumber, setWinningNumber] = useState(null);
  const [rotationAngle, setRotationAngle] = useState(0);
  const [rotationTimer, setRotationTimer] = useState(null);
  const [finalNumber, setFinalNumber] = useState(null);
  const [currentUserBalance, setCurrentUserBalance] = useState(0);
  const rotationDuration = 12000; // milliseconds

  // Initialize the component
  useEffect(() => {
    // Function to reset roulette position
    const resetRoulettePosition = () => {
      // Reset any necessary state or styles for the roulette
    };

    resetRoulettePosition();

    return () => {
      // Clean up the timer if it exists
      if (rotationTimer) {
        clearInterval(rotationTimer);
      }
    };
  }, []);

  const startRotation = () => {
    setBetPlaced(false);
    let round = 0;
    let angleIncrement = 360 / 37;

    const timer = setInterval(() => {
      setRotationAngle((prev) => (prev + angleIncrement) % 360);
      round++;

      if (round >= 60 && round <= 120) {
        // Logic for stopping and determining winning number
        const r = finalNumber ?? 0;
        const a = rouletteValues.indexOf(r) - 2;
        // Update the winning number based on the angle
        const winningNum = calculateRouletteNumber(rotationAngle);
        setWinningNumber(winningNum);
        clearInterval(timer);
        showWinOrLossDialog();
      }
    }, 100);

    setRotationTimer(timer);
  };

  const calculateRouletteNumber = (angle) => {
    const section = 360 / 37;
    const halfSection = section / 2;
    const getDegree = angle + halfSection;
    let rouletteValue = null;

    for (let i = 0; i <= 37; i++) {
      if (getDegree >= i * section && getDegree <= (i + 1) * section) {
        rouletteValue = i !== 37 ? rouletteValues[i] : 0;
      }
    }
    return rouletteValue;
  };

  const showWinOrLossDialog = () => {
    const win = selectedCoins.includes(winningNumber);
    const message = win
      ? `Congratulations! You Win🎉\n ₹${betAmount}`
      : 'You Lost😞';
    Alert.alert("Result", message, [{ text: "OK", onPress: () => resetGame() }]);
  };

  const resetGame = () => {
    setBetPlaced(false);
    setWinningNumber(null);
    setSelectedCoins([]);
    setBetAmount(0);
  };

  return (
    <div>
      {/* Your UI components go here */}
      <button onClick={startRotation}>Start Roulette</button>
      <p>Current Angle: {rotationAngle}</p>
      <p>Winning Number: {winningNumber}</p>
    </div>
  );
};

export default HomeScreen;
