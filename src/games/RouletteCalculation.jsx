import React, { useState } from "react";
const RouletteCalculator = () => {
  const [selectedBets, setSelectedBets] = useState({});
  const [winningNumber, setWinningNumber] = useState(null);
  const firstRowNumbers = [3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36];
  const secondRowNumbers = [2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35];
  const thirdRowNumbers = [1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31, 34];
  const calculateSpecificBetAmount = (number, betType) => {
    // Implement the logic for specific bet amounts here
    return selectedBets[betType]?.amount || 0;
  };
  const calculateSpecificOutsideBetAmount = (betType) => {
    // Implement the logic for specific outside bet amounts here
    return selectedBets[betType]?.amount || 0;
  };
  const calculateWinningAmount = () => {
    let winningAmount = 0;
    if (selectedBets.straight_up && selectedBets.straight_up.includes(winningNumber)) {
      winningAmount += 36 * calculateSpecificBetAmount(winningNumber, "straight_up");
    }
    if (selectedBets.corner) {
      const numberOfTimesPlaced = selectedBets.corner.filter(element =>
        element.includes(winningNumber)
      );
      if (numberOfTimesPlaced.length > 0) {
        numberOfTimesPlaced.forEach(element => {
          winningAmount += 9 * calculateSpecificBetAmount(element, "corner");
        });
      }
    }
    if (selectedBets.split) {
      const numberOfTimesPlaced = selectedBets.split.filter(element =>
        element.includes(winningNumber)
      );
      if (numberOfTimesPlaced.length > 0) {
        numberOfTimesPlaced.forEach(element => {
          winningAmount += 18 * calculateSpecificBetAmount(element, "split");
        });
      }
    }
    if (selectedBets.double_street) {
      const numberOfTimesPlaced = selectedBets.double_street.filter(element =>
        element.includes(winningNumber)
      );
      if (numberOfTimesPlaced.length > 0) {
        numberOfTimesPlaced.forEach(element => {
          winningAmount += 6 * calculateSpecificBetAmount(element, "double_street");
        });
      }
    }
    if (selectedBets.street) {
      const numberOfTimesPlaced = selectedBets.street.filter(element =>
        element.includes(winningNumber)
      );
      if (numberOfTimesPlaced.length > 0) {
        numberOfTimesPlaced.forEach(element => {
          winningAmount += 12 * calculateSpecificBetAmount(element, "street");
        });
      }
    }
    if (selectedBets.trio) {
      const numberOfTimesPlaced = selectedBets.trio.filter(element =>
        element.includes(winningNumber)
      );
      if (numberOfTimesPlaced.length > 0) {
        numberOfTimesPlaced.forEach(element => {
          winningAmount += 12 * calculateSpecificBetAmount(element, "trio");
        });
      }
    }
    if (selectedBets.top_line) {
      const numberOfTimesPlaced = selectedBets.top_line.filter(element =>
        element.includes(winningNumber)
      );
      if (numberOfTimesPlaced.length > 0) {
        numberOfTimesPlaced.forEach(element => {
          winningAmount += 9 * calculateSpecificBetAmount(element, "top_line");
        });
      }
    }
    if (selectedBets.first_row && firstRowNumbers.includes(winningNumber)) {
      winningAmount += 3 * calculateSpecificOutsideBetAmount("first_row");
    }
    if (selectedBets.second_row && secondRowNumbers.includes(winningNumber)) {
      winningAmount += 3 * calculateSpecificOutsideBetAmount("second_row");
    }
    if (selectedBets.third_row && thirdRowNumbers.includes(winningNumber)) {
      winningAmount += 3 * calculateSpecificOutsideBetAmount("third_row");
    }
    if (selectedBets["3rd_dozen"] && winningNumber > 24 && winningNumber <= 36) {
      winningAmount += 3 * calculateSpecificOutsideBetAmount("3rd_dozen");
    }
    if (selectedBets["2nd_dozen"] && winningNumber > 12 && winningNumber <= 24) {
      winningAmount += 3 * calculateSpecificOutsideBetAmount("2nd_dozen");
    }
    if (selectedBets["1st_dozen"] && winningNumber > 0 && winningNumber <= 12) {
      winningAmount += 3 * calculateSpecificOutsideBetAmount("1st_dozen");
    }
    if (selectedBets.even && winningNumber !== 0 && winningNumber % 2 === 0) {
      winningAmount += 2 * calculateSpecificOutsideBetAmount("even");
    }
    if (selectedBets.odd && winningNumber % 2 !== 0) {
      winningAmount += 2 * calculateSpecificOutsideBetAmount("odd");
    }
    if (selectedBets.low && winningNumber !== 0 && winningNumber <= 18) {
      winningAmount += 2 * calculateSpecificOutsideBetAmount("low");
    }
    if (selectedBets.high && winningNumber > 18) {
      winningAmount += 2 * calculateSpecificOutsideBetAmount("high");
    }
    if (selectedBets.red && redNumbers.includes(winningNumber)) {
      winningAmount += 2 * calculateSpecificOutsideBetAmount("red");
    }
    if (selectedBets.black && !redNumbers.includes(winningNumber)) {
      winningAmount += 2 * calculateSpecificOutsideBetAmount("black");
    }
    console.log("winning amount --->", winningAmount);
    return winningAmount;
  };
  return (
    <div>
      <h1>Winning Amount: {calculateWinningAmount()}</h1>
    </div>
  );
};
export default RouletteCalculator;