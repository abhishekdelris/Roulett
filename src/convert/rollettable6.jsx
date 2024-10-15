import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// Styled components for styling
const Row = styled.div`
  display: flex;
  justify-content: center;
  margin: 0.5rem 0;
`;

const Container = styled.div`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border: 1px solid darkgray; // Border color similar to colors.borderColorDark
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const Circle = styled.div`
  background-color: ${({ bgColor }) => bgColor};
  border-radius: 50%;
  border: 1px solid ${({ borderColor }) => borderColor};
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Text = styled.span`
  color: ${({ color }) => color};
  font-family: 'digital', sans-serif;
`;

const BetButton = ({ label, value, selectedBets, onSelect, calculateAmount }) => {
  const [timer, setTimer] = useState(null);

  const handleMouseDown = () => {
    onSelect(value);
    const intervalId = setInterval(() => {
      onSelect(value);
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
    <Container width="15vw" height="10vh" onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} onMouseLeave={handleMouseUp}>
      <Text color="darkgray">{label}</Text>
      {selectedBets.includes(value) && (
        <Circle bgColor="red" borderColor="white" height="3rem" width="3rem">
          <Text color="white">{calculateAmount(value)}</Text>
        </Circle>
      )}
    </Container>
  );
};

const App = () => {
  const [selectedBets, setSelectedBets] = useState([]);
  
  const calculateSpecificOutsideBetAmount = (bet) => {
    // Implement your specific calculation logic here
    return 0; // Example placeholder
  };

  const handleSelect = (outSideBet) => {
    // Update the selected bets logic
    setSelectedBets(prev => [...prev, outSideBet]); // Example logic
  };

  return (
    <div>
      <Row>
        <div style={{ width: '19%' }}></div>
        <div style={{ width: '69%' }}>
          <Row>
            <BetButton label="1st 12" value="1st_dozen" selectedBets={selectedBets} onSelect={handleSelect} calculateAmount={calculateSpecificOutsideBetAmount} />
            <BetButton label="2nd 12" value="2nd_dozen" selectedBets={selectedBets} onSelect={handleSelect} calculateAmount={calculateSpecificOutsideBetAmount} />
            <BetButton label="3rd 12" value="3rd_dozen" selectedBets={selectedBets} onSelect={handleSelect} calculateAmount={calculateSpecificOutsideBetAmount} />
          </Row>
        </div>
      </Row>
      <Row>
        <div style={{ width: '20%' }}></div>
        <BetButton label="1 To 18" value="low" selectedBets={selectedBets} onSelect={handleSelect} calculateAmount={calculateSpecificOutsideBetAmount} />
        <BetButton label="EVEN" value="even" selectedBets={selectedBets} onSelect={handleSelect} calculateAmount={calculateSpecificOutsideBetAmount} />
        <BetButton label="RED" value="red" selectedBets={selectedBets} onSelect={handleSelect} calculateAmount={calculateSpecificOutsideBetAmount} />
        <BetButton label="BLACK" value="black" selectedBets={selectedBets} onSelect={handleSelect} calculateAmount={calculateSpecificOutsideBetAmount} />
        <BetButton label="ODD" value="odd" selectedBets={selectedBets} onSelect={handleSelect} calculateAmount={calculateSpecificOutsideBetAmount} />
        <BetButton label="19 To 36" value="high" selectedBets={selectedBets} onSelect={handleSelect} calculateAmount={calculateSpecificOutsideBetAmount} />
      </Row>
    </div>
  );
};

export default App;
