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

export { findPairs };
