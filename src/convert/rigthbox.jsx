import React from 'react';
import './RightBetBoxes.css'; // Assuming you create a CSS file for styling

const RightBetBoxes = () => {
  const width = window.innerWidth;
  const height = window.innerHeight;

  return (
    <div className="right-bet-boxes-column">
      <BetBox text="Make This Bet" w={width} h={height} />
      <div style={{ height: `${height * 0.03}px` }}></div> {/* Spacing */}
      <BetBox text="Cancel\n Specific Bet" w={width} h={height} />
    </div>
  );
};

const BetBox = ({ text, w, h }) => {
  const boxWidth = w * 0.16 > 112 ? w * 0.16 : 112;

  return (
    <div
      className="bet-box"
      style={{
        width: `${boxWidth}px`,
        padding: '6px 8px',
      }}
    >
      <span
        className="bet-box-text"
        style={{
          fontSize: `${w / 1000}px`, // Adjust text scaling factor
        }}
      >
        {text}
      </span>
    </div>
  );
};

export default RightBetBoxes;
