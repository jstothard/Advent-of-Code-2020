const findPairs = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 2020) return [arr[i], arr[j]];
    }
  }
  return [];
};
const findTrio = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        if (arr[i] + arr[j] + arr[k] === 2020) return [arr[i], arr[j], arr[k]];
      }
    }
  }
  return [];
};

const multiplyArray = (arr) => {
  return arr.reduce((result, curr) => {
    return curr * result;
  }, 1);
};

export { findPairs, findTrio, multiplyArray };
