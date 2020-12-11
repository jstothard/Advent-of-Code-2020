const findJoltDifferenceCounts = (data) => {
  const jolts = splitLines(data);

  return jolts.reduce(
    (dict, curr, i, arr) => {
      // If this is the first device, the outlet is 0
      const prev = i === 0 ? 0 : arr[i - 1];
      const diff = curr - prev;
      dict[diff] ? dict[diff]++ : (dict[diff] = 1);

      return dict;
    },
    { 3: 1 }
  ); // Last jump is always 3 to the device
};

const splitLines = (data) =>
  data
    .split("\n")
    .map((e) => Number(e))
    .sort((a, b) => a - b);

const countArrangements = (data) => {
  const jolts = data.split("\n");
  const dict = jolts.reduce(
    (dict, curr) => {
      const jolt = Number(curr);
      dict.max = Math.max(dict.max, jolt);
      dict[jolt] = 1;
      return dict;
    },
    { max: 0 }
  );

  let count = [1];

  for (let i = 1; i < dict.max + 4; i++) {
    if (dict[i] || i === dict.max + 3) {
      count.push(
        (count?.[i - 1] || 0) + (count?.[i - 2] || 0) + (count?.[i - 3] || 0)
      );
    } else count.push(0);
  }

  return count[count.length - 1];
};

export { findJoltDifferenceCounts, countArrangements };
