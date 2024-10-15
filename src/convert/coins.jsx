import React, { useState } from 'react';
import { useSpring, animated, config } from 'react-spring';
import './CoinAnimation.css'; // You can add any required styles here

const FlyCoinAnimation = () => {
  const [animationSwitch, setAnimationSwitch] = useState(false);
  
  // Define the width and height similar to Flutter's MediaQuery
  const width = window.innerWidth;
  const height = window.innerHeight;

  const coinAnimationStyle1 = useSpring({
    transform: animationSwitch
      ? `translate(${width}px, 0px)`
      : `translate(0px, 0px)`,
    config: config.wobbly,
  });

  const coinAnimationStyle2 = useSpring({
    transform: animationSwitch
      ? `translate(${width}px, ${height}px)`
      : `translate(0px, 0px)`,
    config: config.wobbly,
  });

  return (
    <div className="coin-animation-container">
      {/* Stack-like structure */}
      <animated.div style={coinAnimationStyle1} className="coin-icon">
        <i className="material-icons" style={{ fontSize: '48px' }}>attach_money</i>
      </animated.div>

      <animated.div style={coinAnimationStyle2} className="coin-icon">
        <i className="material-icons" style={{ fontSize: '48px' }}>attach_money</i>
      </animated.div>

      {/* Floating Action Button */}
      <button
        className="floating-action-button"
        onClick={() => setAnimationSwitch(!animationSwitch)}
      >
        <img
          src="/path/to/your/coin-image.png" // Use the correct path to your coin image
          alt="Coin"
          className="coin-image"
        />
      </button>
    </div>
  );
};

export default FlyCoinAnimation;
