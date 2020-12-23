const findNthNumber = (startingNumbers, length) => {
  // Set length so not always resizing array (array quicker than obj)
  const numbersSaid = Array(length);

  // Initialize the starting numbers into numbers said array
  for (let i = 0; i < startingNumbers.length - 1; i++) {
    const num = startingNumbers[i];
    numbersSaid[num] = i + 1;
  }

  // Set the current number to the last starting number
  let currNum = startingNumbers[startingNumbers.length - 1];

  // Start iteration on last starting number
  for (let turn = startingNumbers.length; turn < length; turn++) {
    // If first time the number spoken
    if (!numbersSaid[currNum]) {
      // set as current turn
      numbersSaid[currNum] = turn;

      // And set curr number to 0
      currNum = 0;
    } else {
      // Get the last time it was spoken
      const previousTurnSaid = numbersSaid[currNum];

      // Update to this turn
      numbersSaid[currNum] = turn;

      // Calculate the next number based on the difference between these two
      currNum = turn - previousTurnSaid;
    }
  }

  return currNum;
};

export { findNthNumber };
