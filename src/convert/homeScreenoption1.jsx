import React, { useState, useEffect } from 'react';
import { ImagesPath, colors, SoundSource } from './HelperConstants'; // Import image paths, sounds, etc.
import Utils from './utils'; // Import your utility functions for SnackBars
import './HomeScreen.css'; // Import CSS for styles

const HomeScreen = ({ audioController }) => {
  const [selectedCoin, setSelectedCoin] = useState(null);
  const [selectedCoins, setSelectedCoins] = useState([]);
  const [betAmount, setBetAmount] = useState(0);
  const [canceled, setCanceled] = useState(false);
  const [canceledSpecificBet, setCanceledSpecificBet] = useState(false);
  const [betPlaced, setBetPlaced] = useState(false);
  const [waiting, setWaiting] = useState(false);
  const [selectedNumbers, setSelectedNumbers] = useState([]);
  const [totalSelectedNumbers, setTotalSelectedNumbers] = useState([]);
  const [coinWidth, setCoinWidth] = useState(0);
  const [coinHeight, setCoinHeight] = useState(0);
  const [extraFromLeft, setExtraFromLeft] = useState(6);
  const [fromTop, setFromTop] = useState(window.innerHeight * 0.12);
  const [fromLeft, setFromLeft] = useState(window.innerWidth * 0.66);
  const [seconds, setSeconds] = useState(0);
  const [timer, setTimer] = useState(null);
  const [activeConnection, setActiveConnection] = useState(navigator.onLine);

  // Change coin dimensions
  const changeCoinHeight = () => {
    setCoinHeight(20);
    setCoinWidth(20);
    setFromTop(window.innerHeight * 0.09);
    setFromLeft(window.innerWidth * 0.64);
  };

  const changeCoinPosition = () => {
    setCoinWidth(0);
    setCoinHeight(0);
    setExtraFromLeft(40);
    setFromTop(window.innerHeight * 0.04);
    setFromLeft(window.innerWidth * 0.15);
  };

  const resetCoinPosition = () => {
    setCoinWidth(0);
    setCoinHeight(0);
    setExtraFromLeft(6);
    setFromTop(window.innerHeight * 0.12);
    setFromLeft(window.innerWidth * 0.66);
  };

  // Handle coin selection
  const onCoinTap = (value) => {
    setCanceled(false);
    setCanceledSpecificBet(false);
    if (seconds > 10 && seconds < 59) {
      if (selectedCoin === value) {
        setSelectedCoin(null);
      } else if (currentUserBalance - value >= 0) {
        setSelectedCoin(value);
        audioController.playSound(SoundSource.coinRemoveSoundPath, 'coin_select');
      } else {
        Utils.mySnackBar({ title: "Your wallet balance is not Sufficient" });
      }
    } else {
      Utils.mySnackBar({ title: "Bet Time Over...", maxWidth: 250 });
    }
  };

  // Connectivity check
  useEffect(() => {
    const handleConnectivityChange = () => {
      setActiveConnection(navigator.onLine);
      if (!navigator.onLine) {
        Utils.mySnackBar({ msg: "Turn On the data and repress again" });
      }
    };
    
    window.addEventListener('online', handleConnectivityChange);
    window.addEventListener('offline', handleConnectivityChange);

    return () => {
      window.removeEventListener('online', handleConnectivityChange);
      window.removeEventListener('offline', handleConnectivityChange);
    };
  }, []);

  // Start countdown timer
  useEffect(() => {
    const startCountdown = () => {
      setBetPlaced(false);
      setCanceled(false);
      setCanceledSpecificBet(false);
      setSeconds(60 - new Date().getSeconds());

      const interval = setInterval(() => {
        if (!activeConnection) return;

        setSeconds(60 - new Date().getSeconds());
        audioController.playSound(SoundSource.countDownSoundPath, 'count_down');

        if (seconds === 60) {
          // Start rotation logic here
        }

        if (seconds === 10) {
          audioController.speak("Betting Time Over");
          setCanceled(false);
          setCanceledSpecificBet(false);
        }

        if (seconds === 4) {
          // Call API for winning number
          callWinningNumberApi();
        }
      }, 1000);

      setTimer(interval);
    };

    startCountdown();

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [seconds, activeConnection]);

  const callWinningNumberApi = () => {
    // API call logic
    console.log("Calling Winning Number API...");
  };

  useEffect(() => {
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [timer]);

  return (
    <div className="home-screen">
      {/* Add your component UI here */}
      <div>
        <p>Seconds left: {seconds}</p>
        {/* Add your roulette table, coin boxes, etc., here */}
      </div>
    </div>
  );
};

export default HomeScreen;
