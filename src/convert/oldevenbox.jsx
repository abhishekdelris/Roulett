import React from 'react';
import './OddEvenBoxes.css'; // CSS file for styling

const OddEvenBoxes = () => {
  // Accessing the window size (equivalent to MediaQuery in Flutter)
  const width = window.innerWidth;
  const height = window.innerHeight;

  return (
    <div className="odd-even-boxes-row">
      <OddEvenBox color="darkpink" text="EVEN" width={width} height={height} />
      <div style={{ width: `${width * 0.02}px` }}></div> {/* Spacing */}
      <OddEvenBox color="lightgray" text="ODD" width={width} height={height} />
    </div>
  );
};

const OddEvenBox = ({ text, color, width, height }) => {
  const textScaleFactor = width / 1000; // Mimicking ScaleSize.textScaleFactor

  return (
    <div
      className="odd-even-box"
      style={{
        height: `${height * 0.067}px`,
        width: `${width * 0.098}px`,
        boxShadow: `0px 3px 10px rgba(0,0,0,0.2)`,
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '0 8px',
        }}
      >
        <span
          className="odd-even-text"
          style={{
            fontSize: `${textScaleFactor * 16}px`, // Adjust text scaling factor
          }}
        >
          {text}
        </span>
        <div
          className="color-indicator"
          style={{
            backgroundColor: color,
            width: `${width * 0.022}px`,
            height: `${height * 0.028}px`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default OddEvenBoxes;
