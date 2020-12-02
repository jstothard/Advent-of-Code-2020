const testPassCount = (arr) => {
  return arr.reduce((count, str) => {
    // Split the string into required components
    const [rule, pass] = str.split(":");
    const [range, letter] = rule.split(" ");
    const [low, high] = range.split("-");

    // Remove non important letters from string
    const filteredPass = pass
      .split("")
      .filter((currLetter) => currLetter === letter);

    // Return occurrences of the letter
    const letterCount = filteredPass.length;
    // Test and update the count
    if (letterCount >= low && letterCount <= high) count++;
    return count;
  }, 0);
};

const testPassPositionCount = (arr) => {
  return arr.reduce((count, str) => {
    // Split the string into required components
    const [rule, pass] = str.split(":");
    const [pos, letter] = rule.split(" ");
    const [pos1, pos2] = pos.split("-");

    // Check positions for letter
    let letterCount = 0;
    if (pass[pos1] === letter) letterCount++;
    if (pass[pos2] === letter) letterCount++;

    // Passes if count is exactly 1
    if (letterCount === 1) count++;
    return count;
  }, 0);
};

export { testPassCount, testPassPositionCount };
