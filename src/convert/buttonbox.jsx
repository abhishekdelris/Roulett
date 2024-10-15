import React from 'react';
import BottomContainer from './BottomContainer'; // Assuming you have a similar BottomContainer component

const BottomBoxes = ({ onCanceled, onTake }) => {
  // Accessing the viewport size using window dimensions in React
  const h = window.innerHeight;
  const w = window.innerWidth;

  return (
    <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
      {/* Take Button */}
      <div onClick={onTake} style={{ cursor: 'pointer' }}>
        <BottomContainer text="TAKE" h={h} w={w} />
      </div>
      
      {/* Spacing */}
      <div style={{ width: h * 0.06 }}></div>
      
      {/* Cancel Button */}
      <div onClick={onCanceled} style={{ cursor: 'pointer' }}>
        <BottomContainer text="CANCEL" h={h} w={w} />
      </div>
      
      {/* Extra spacing */}
      <div style={{ width: h * 0.12 }}></div>
    </div>
  );
};

export default BottomBoxes;
