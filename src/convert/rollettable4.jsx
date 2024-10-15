import React, { useEffect, useState, useRef } from 'react';
import './RouletteTable.css'; // Include your CSS for styles

const RouletteTable = ({ onSelect, winningNumber, selectedBets, numberSeries, calculateSpecificBetAmount }) => {
  const [timer, setTimer] = useState(null);
  const [blinkAnimation, setBlinkAnimation] = useState(0);
  const [opacity, setOpacity] = useState(0);
  const timerRef = useRef(null);
  const w = window.innerWidth;  // Screen width
  const h = window.innerHeight; // Screen height
  
  const handleLongPressStart = (number) => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    timerRef.current = setInterval(() => {
      onSelect(number);
    }, 500);
    setTimer(timerRef.current);
  };

  const handleLongPressEnd = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    setTimer(null);
  };

  const handleTap = (number) => {
    onSelect(number);
  };

  useEffect(() => {
    if (winningNumber === 0) {
      setOpacity(1);
      const blinkInterval = setInterval(() => {
        setBlinkAnimation((prev) => (prev === 1 ? 0 : 1));
      }, 500);

      const opacityTimeout = setTimeout(() => {
        clearInterval(blinkInterval);
        setOpacity(0);
      }, 3000);

      return () => {
        clearInterval(blinkInterval);
        clearTimeout(opacityTimeout);
      };
    }
  }, [winningNumber]);

  return (
    <div style={{ display: 'flex', flexDirection: 'row', width: w }}>
      <div
        onMouseDown={() => handleLongPressStart(0)}
        onMouseUp={handleLongPressEnd}
        onMouseLeave={handleLongPressEnd}
        onClick={() => handleTap(0)}
        style={{
          height: h * 0.36,
          width: w * 0.056,
          border: '1px solid darkgrey',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
        }}
      >
        {winningNumber === 0 && (
          <div
            style={{
              height: 0.1 * h,
              width: 0.05 * w,
              backgroundColor: 'lightgrey',
              opacity: opacity * blinkAnimation,
              position: 'absolute',
              top: 0,
              left: 0,
            }}
          />
        )}
        <div style={{
          backgroundColor: 'darkgreen',
          borderRadius: '50%',
          border: '1px solid darkgrey',
          padding: '8px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <span style={{ color: 'darkgrey', fontFamily: 'digital' }}>0</span>
        </div>
        {selectedBets.straight_up?.includes(0) && (
          <div
            style={{
              height: h * 0.06,
              width: w * 0.02875,
              backgroundColor: 'red',
              borderRadius: '50%',
              border: '0.5px solid white',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'absolute',
            }}
          >
            <span style={{ color: 'white', fontSize: '8px' }}>
              {calculateSpecificBetAmount(0, 'straight_up')}
            </span>
          </div>
        )}
      </div>

      <div style={{ width: w * 0.69 }}>
        <table style={{ borderCollapse: 'collapse', width: '100%' }}>
          <tbody>
            {[...Array(3)].map((_, rowIndex) => (
              <tr key={rowIndex}>
                {numberSeries.slice(rowIndex * 12, rowIndex * 12 + 12).map((number) => (
                  <td key={number}>
                    <div
                      onMouseDown={() => handleLongPressStart(number)}
                      onMouseUp={handleLongPressEnd}
                      onMouseLeave={handleLongPressEnd}
                      onClick={() => handleTap(number)}
                      style={{
                        position: 'relative',
                        width: '100%',
                        padding: '10px',
                        textAlign: 'center',
                      }}
                    >
                      {winningNumber === number && (
                        <div
                          style={{
                            height: 0.1 * h,
                            width: 0.05 * w,
                            backgroundColor: 'lightgrey',
                            opacity: opacity * blinkAnimation,
                            position: 'absolute',
                            top: 0,
                            left: 0,
                          }}
                        />
                      )}
                      <div
                        style={{
                          height: h * 0.08,
                          margin: `${h * 0.02}px 0`,
                          borderRadius: '50%',
                          backgroundColor: 'lightblue', // Replace with your number colors
                          border: '1px solid darkgrey',
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}
                      >
                        <span style={{ color: 'darkgrey', fontFamily: 'digital' }}>{number}</span>
                      </div>
                      {selectedBets.straight_up?.includes(number) && (
                        <div
                          style={{
                            height: h * 0.06,
                            width: w * 0.02875,
                            backgroundColor: 'red',
                            borderRadius: '50%',
                            border: '0.5px solid white',
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}
                        >
                          <span style={{ color: 'white', fontSize: '8px' }}>
                            {calculateSpecificBetAmount(number, 'straight_up')}
                          </span>
                        </div>
                      )}
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RouletteTable;
