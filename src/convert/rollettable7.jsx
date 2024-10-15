import React, { useState } from 'react';

// Utility function to show snackbars (replace with your implementation)
const showSnackBar = (title) => {
  console.log(title); // Placeholder for your snackbar logic
};

// Main betting component
const BettingComponent = ({ selectedCoin, isBetTimeOverAndBetPlaced, onChanged, selectedBetNumbers, idChanged }) => {
  const [selectedBets, setSelectedBets] = useState({});
  const [selectedCoins, setSelectedCoins] = useState({});
  const [currentSelectedTypes, setCurrentSelectedTypes] = useState(new Set());
  const [isZero, setIsZero] = useState(false);
  const numberSeries = Array.from({ length: 37 }, (_, i) => i); // Numbers 0-36
  const numberColors = [...Array(37).fill('red').fill('black', 2, 36)]; // Placeholder colors

  // Function to add coins to the selected coins map
  const addCoins = (type) => {
    setSelectedCoins((prev) => {
      const coins = prev[type] ? [...prev[type], selectedCoin] : [selectedCoin];
      return { ...prev, [type]: coins };
    });
  };

  // Function to handle bet selection
  const onSelect = ({
    number,
    outSideBet,
    insideBet,
    selectedNumbers = new Set(),
    isZeroBet = false,
  }) => {
    if (!isBetTimeOverAndBetPlaced) {
      if (selectedCoin !== 0) {
        onChanged(true);
        if (isZeroBet) {
          selectedBetNumbers(([0], selectedCoin));
          setIsZero(true);
          updateSelectedBets("straight_up", 0);
          idChanged(1);
        }

        if (number !== undefined) {
          selectedBetNumbers(([number], selectedCoin));
          updateSelectedBets("straight_up", number);
          idChanged(1);
        }

        if (outSideBet !== undefined) {
          handleOutsideBet(outSideBet);
        }

        if (insideBet !== undefined) {
          handleInsideBet(insideBet, selectedNumbers);
        }

        console.log("selected bets ===> ", selectedBets);
        console.log("selected types ===> ", Array.from(currentSelectedTypes));
        console.log("selected coins ===> ", selectedCoins);
      } else {
        showSnackBar('Please Select A Coin');
      }
    } else {
      showSnackBar('⚠ Bet Time Over, Please wait...');
    }
  };

  const updateSelectedBets = (type, number) => {
    setSelectedBets((prev) => {
      const bets = prev[type] ? [...prev[type], number] : [number];
      return { ...prev, [type]: bets };
    });
    addCoins(type);
    currentSelectedTypes.add(type);
  };

  const handleOutsideBet = (bet) => {
    const selectedNumbers = new Set();
    let id;

    switch (bet) {
      case 'first_row':
        for (let i = 0; i < 12; i++) selectedNumbers.add(numberSeries[i]);
        id = 7;
        break;
      // Add other cases similar to the above case
      // ...
      default:
        break;
    }

    selectedBetNumbers((Array.from(selectedNumbers), selectedCoin));
    idChanged(id || 0);
  };

  const handleInsideBet = (bet, selectedNumbers) => {
    const ids = {
      split: 2,
      street: 3,
      corner: 4,
      double_street: 5,
      top_line: 6,
      trio: 12,
    };

    updateSelectedBets(bet, Array.from(selectedNumbers));
    idChanged(ids[bet]);
  };

  return (
    <div>
      {/* UI components go here */}
      <BottomTableContainer
        h={100}
        w={100}
        onTap={() => console.log('Tapped')}
        onLongPressStart={() => console.log('Long Press Started')}
        onLongPressEnd={() => console.log('Long Press Ended')}
      >
        {/* Child components */}
      </BottomTableContainer>

      <InsideBetGestures
        h={100}
        w={100}
        selectedCoin={selectedCoin}
        indexTap={(rowIndex, index) => console.log(rowIndex, index)}
        spaced={false}
        rowIndexAndIndexList={[]}
        secondRowIndexAndIndexList={[]}
        onLongPressStarted={(isStarted, rowIndex, index) => console.log(isStarted, rowIndex, index)}
      />
    </div>
  );
};

// BottomTableContainer Component
const BottomTableContainer = ({ h, w, children, onTap, onLongPressStart, onLongPressEnd }) => (
  <div
    style={{
      height: `${h * 0.067}px`,
      width: `${w * 0.1}px`,
      padding: '0 8px',
      backgroundColor: '#1E1E1E', // replace with your color
      borderRadius: '12px',
      border: '1px solid #ccc', // replace with your border color
      boxShadow: '0 5px 5px rgba(0, 0, 0, 0.5)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
    onClick={onTap}
    onMouseDown={onLongPressStart}
    onMouseUp={onLongPressEnd}
  >
    {children}
  </div>
);

// InsideBetGestures Component
const InsideBetGestures = ({
  h,
  w,
  selectedCoin,
  indexTap,
  spaced,
  rowIndexAndIndexList,
  secondRowIndexAndIndexList,
  onLongPressStarted,
}) => (
  spaced ? (
    <div>
      {Array.from({ length: 6 }).map((_, rowIndex) => (
        <div key={rowIndex}>
          {rowIndex % 2 === 0 && <div style={{ height: `${h * 0.06}px` }} />}
          {rowIndex % 2 !== 0 && (
            <div style={{ display: 'flex' }}>
              {Array.from({ length: 12 }).map((_, index) => {
                const selectedIndex = secondRowIndexAndIndexList.find(
                  (element) => element[1] === rowIndex && element[2] === index
                ) || [-1, -1, -1];
                return (
                  <div key={index} style={{ marginRight: `${w * 0.02875}px` }}>
                    <div
                      style={{
                        height: `${h * 0.06}px`,
                        width: `${w * 0.02875}px`,
                        backgroundColor: selectedIndex[0] === rowIndex && selectedIndex[1] === index
                          ? 'red'
                          : 'transparent',
                        borderRadius: '50%',
                        border: '1px solid white',
                      }}
                      onClick={() => indexTap(rowIndex, index)}
                      onMouseDown={() => onLongPressStarted(true, rowIndex, index)}
                      onMouseUp={() => onLongPressStarted(false, rowIndex, index)}
                    >
                      {selectedIndex[2] > -1 && (
                        <span style={{ color: 'white', fontSize: '8px', fontWeight: 'bold' }}>
                          {selectedIndex[2]}
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      ))}
    </div>
  ) : (
    <div>
      {Array.from({ length: 6 }).map((_, rowIndex) => (
        <div key={rowIndex} style={{ display: 'flex' }}>
          {Array.from({ length: 12 }).map((_, index) => {
            const selectedIndex = rowIndexAndIndexList.find(
              (element) => element[1] === rowIndex && element[2] === index
            ) || [-1, -1, -1];
            return (
              <div key={index} style={{ marginRight: `${w * 0.02875}px` }}>
                <div
                  style={{
                    height: `${h * 0.06}px`,
                    width: `${w * 0.02875}px`,
                    backgroundColor: selectedIndex[0] === rowIndex && selectedIndex[1] === index
                      ? 'red'
                      : 'transparent',
                    borderRadius: '50%',
                    border: '1px solid white',
                  }}
                  onClick={() => indexTap(rowIndex, index)}
                  onMouseDown={() => onLongPressStarted(true, rowIndex, index)}
                  onMouseUp={() => onLongPressStarted(false, rowIndex, index)}
                >
                  {selectedIndex[2] > -1 && (
                    <span style={{ color: 'white', fontSize: '8px', fontWeight: 'bold' }}>
                      {selectedIndex[2]}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  )
);

export default BettingComponent;
