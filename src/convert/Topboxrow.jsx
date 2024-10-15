import React, { useEffect, useState } from 'react';
import './TopBoxesRow.css'; // Import the CSS for styling
import { ImagesPath, colors } from './HelperConstants'; // Import your constants for image paths and colors

const TopBoxesRow = ({ w, h, secondS, primaryWalletAmount }) => {
  const [blink, setBlink] = useState(false);

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setBlink((prev) => !prev);
    }, 500); // Blink every 500ms

    return () => clearInterval(blinkInterval); // Cleanup on component unmount
  }, []);

  return (
    <div className="top-boxes-row" style={{ width: `${w}px`, height: `${h}px` }}>
      <img src={ImagesPath.scoreImage} alt="Score" width={w * 0.11} height={h * 0.17} />
      <div style={{ width: w * 0.06 }}></div>
      <div className="timer-container">
        <img src={ImagesPath.timerImage} alt="Timer" width={w * 0.11} height={h * 0.17} />
        <div className="timer-text" style={{ color: secondS <= 10 ? colors.borderColorLight : colors.borderColorDark }}>
          {secondS <= 10 && blink ? (
            <span className="blink">{secondS}</span>
          ) : (
            <span>{secondS}</span>
          )}
        </div>
      </div>
      <div style={{ width: w * 0.06 }}></div>
      <div className="winner-container">
        <img src={ImagesPath.winnerImage} alt="Winner" width={w * 0.11} height={h * 0.17} />
        <div className="winner-text">₹{primaryWalletAmount}</div>
      </div>
    </div>
  );
};

export default TopBoxesRow;
