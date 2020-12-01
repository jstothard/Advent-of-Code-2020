const findPairs = ([first, ...arr], target = 2020) => {
  // Add first value to avoid unnecessary operation in the loop
  const dict = { [first]: 1 };

  for (let i = 0; i < arr.length; i++) {
    const val = arr[i];

    const check = target - val;

    if (dict[check]) return [val, check];
    else dict[val] ? dict[val]++ : (dict[val] = 1);
  }
  return [];
};
const findTrio = ([first, ...arr], target = 2020) => {
  // Add first value to avoid unnecessary operation in the loop
  const dict = { [first]: 1 };
  for (let i = 0; i < arr.length; i++) {
    const valI = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      const valJ = arr[j];
      const check = target - valI - valJ;
      if (dict[check]) return [valI, valJ, check];
    }
    dict[valI] ? dict[valI]++ : (dict[valI] = 1);
  }
  return [];
};

const multiplyArray = (arr) => {
  return arr.reduce((result, curr) => {
    return curr * result;
  }, 1);
};

export { findPairs, findTrio, multiplyArray };
