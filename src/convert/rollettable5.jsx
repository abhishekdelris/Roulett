import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// Styled components for styling similar to Flutter's BoxDecoration
const Container = styled.div`
  border: 1px solid ${({ borderColor }) => borderColor};
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Circle = styled.div`
  border-radius: 50%;
  background-color: ${({ bgColor }) => bgColor};
  border: 1px solid ${({ borderColor }) => borderColor};
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text = styled.span`
  color: ${({ color }) => color};
  font-family: 'digital', sans-serif;
`;

const BetButton = ({ number, winningNumber, selectedBets, onSelect }) => {
  const [timer, setTimer] = useState(null);
  const [isBlinking, setIsBlinking] = useState(false);
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    if (isBlinking) {
      const blinkInterval = setInterval(() => {
        setOpacity(opacity => (opacity === 0 ? 1 : 0)); // Toggle opacity
      }, 500);
      return () => clearInterval(blinkInterval);
    }
  }, [isBlinking]);

  const handleMouseDown = () => {
    onSelect(number);
    const intervalId = setInterval(() => {
      onSelect(number);
    }, 500);
    setTimer(intervalId);
  };

  const handleMouseUp = () => {
    if (timer) {
      clearInterval(timer);
      setTimer(null);
    }
  };

  return (
    <Container
      borderColor="darkgray"
      height="36vh"
      width="5.6vw"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      {winningNumber === number && (
        <div style={{ opacity: isBlinking ? opacity : 0 }}>
          <Container height="10vh" width="5vw" borderColor="lightgray" />
        </div>
      )}
      <Circle bgColor="green" borderColor="darkgray" height="8vh" width="8vh">
        <Text color="darkgray">{number}</Text>
      </Circle>
      {selectedBets.includes(number) && (
        <Circle bgColor="red" borderColor="white" height="6vh" width="2.875vw">
          <Text color="white" style={{ fontSize: '8px' }}>
            {selectedBets[number]}
          </Text>
        </Circle>
      )}
    </Container>
  );
};

// Main App Component
const App = () => {
  const [winningNumber, setWinningNumber] = useState(null);
  const selectedBets = {}; // Example bets object

  const handleSelect = (number) => {
    // Handle selection logic
  };

  return (
    <div>
      {/* Example rendering BetButton for number 0 */}
      <BetButton
        number={0}
        winningNumber={winningNumber}
        selectedBets={selectedBets}
        onSelect={handleSelect}
      />
      {/* Add more BetButtons for other numbers */}
    </div>
  );
};

export default App;
