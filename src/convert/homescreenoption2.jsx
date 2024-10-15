import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // For navigation
import { ImagesPath, colors, SoundSource, Constants, Utils } from './HelperConstants'; // Adjust your imports
import './HomeScreen.css'; // For CSS styling

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
  const [fromTop, setFromTop] = useState(Constants.screen.height * 0.12);
  const [fromLeft, setFromLeft] = useState(Constants.screen.width * 0.66);
  const [activeConnection, setActiveConnection] = useState(false);
  const [seconds, setSeconds] = useState(0);
  let timer = null;

  const changeCoinHeight = () => {
    setCoinHeight(20);
    setCoinWidth(20);
    setFromTop(Constants.screen.height * 0.09);
    setFromLeft(Constants.screen.width * 0.64);
  };

  const changeCoinPosition = () => {
    setCoinWidth(0);
    setCoinHeight(0);
    setExtraFromLeft(40);
    setFromTop(Constants.screen.height * 0.04);
    setFromLeft(Constants.screen.width * 0.15);
  };

  const resetCoinPosition = () => {
    setCoinWidth(0);
    setCoinHeight(0);
    setExtraFromLeft(6);
    setFromTop(Constants.screen.height * 0.12);
    setFromLeft(Constants.screen.width * 0.66);
  };

  const onCoinTap = (value) => {
    setCanceled(false);
    setCanceledSpecificBet(false);
    if (seconds > 10 || seconds < 59) {
      if (selectedCoin === value) {
        setSelectedCoin(null);
        return;
      }
      if (currentUserBalance - value >= 0) {
        setSelectedCoin(value);
        audioController.playSound(SoundSource.coinRemoveSoundPath, 'coin_select');
      } else {
        Utils.mySnackBar({ title: "Your wallet balance is not Sufficient" });
      }
    } else {
      Utils.mySnackBar({ title: "Bet Time Over...", maxWidth: 250 });
    }
  };

  const checkInternetConnection = async () => {
    try {
      const result = await fetch('https://www.google.com');
      if (result.ok) {
        setActiveConnection(true);
      } else {
        setActiveConnection(false);
        Utils.mySnackBar({ msg: "Turn On the data and refresh again" });
      }
    } catch (error) {
      setActiveConnection(false);
      Utils.mySnackBar({ msg: "Turn On the data and refresh again" });
    }
  };

  const startCountdown = () => {
    setBetPlaced(false);
    setCanceled(false);
    setCanceledSpecificBet(false);
    setSeconds(60 - new Date().getSeconds());
    
    timer = setInterval(() => {
      if (!activeConnection) return;
      setSeconds(60 - new Date().getSeconds());
      audioController.playSound(SoundSource.countDownSoundPath, 'count_down');
      
      if (seconds === 60) {
        startRotation();
      }
      if (seconds === 10) {
        audioController.speak("Betting Time Over");
        setCanceled(false);
        setCanceledSpecificBet(false);
      }
      if (seconds === 4) {
        callWinningNumberApi();
      }
    }, 1000);
  };

  const callWinningNumberApi = async () => {
    // Make an API call to get the final number
    getFinalNumberApi();
  };

  useEffect(() => {
    checkInternetConnection();
    return () => {
      if (timer) {
        clearInterval(timer);
      }
    };
  }, []);

  return (
    <div className="home-screen">
      {/* Your JSX layout goes here */}
      <div className="coin-container">
        {/* Render coins and other elements */}
      </div>
    </div>
  );
};

export default HomeScreen;
