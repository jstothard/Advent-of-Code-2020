const findSumOfBitmask = (data) => {
  const operations = data.split("\n");

  const { mem } = operations.reduce(
    ({ mem, mask }, curr) => {
      if (curr.includes("mask")) {
        mask = curr.match(/[X01]+/)[0];
      } else {
        mem = applyMask(mask, curr, mem);
      }

      return { mem, mask };
    },
    { mem: [], mask: "" }
  );

  return mem.reduce((sum, curr) => sum + curr);
};

const applyMask = (mask, line, mem) => {
  const { pos, value } = /mem\[(?<pos>\d+)\] \= (?<value>\d+)/.exec(
    line
  ).groups;
  const dec = Number(value)
    .toString(2)
    .padStart(36, "0")
    .split("")
    .reduce((sum, curr, i) => {
      if (mask[i] === "X") return sum + curr * 2 ** (35 - i);
      else return sum + mask[i] * 2 ** (35 - i);
    }, 0);
  mem[pos] = dec;
  return mem;
};

const findSumAddressDecode = (data) => {
  const operations = data.split("\n");

  const { mem } = operations.reduce(
    ({ mem, mask }, curr, i) => {
      if (curr.includes("mask")) {
        mask = curr.match(/[X01]+/)[0];
      } else {
        mem = applyAddressDecode(mask, curr, mem);
      }
      return { mem, mask };
    },
    { mem: {}, mask: "" }
  );

  return Object.values(mem).reduce((sum, curr) => sum + curr);
};

const applyAddressDecode = (mask, line, mem) => {
  const { pos, value } = /mem\[(?<pos>\d+)\] \= (?<value>\d+)/.exec(
    line
  ).groups;
  const positions = Number(pos)
    .toString(2)
    .padStart(36, "0")
    .split("")
    .reduce(
      (arr, curr, i) => {
        if (mask[i] === "X") {
          const newArr = arr.map((val) => val + 2 ** (35 - i));
          return [...arr, ...newArr];
        } else if (mask[i] === "1")
          return arr.map((val) => val + 2 ** (35 - i));
        else return arr.map((val) => val + +curr * 2 ** (35 - i));
      },
      [0]
    );
  positions.forEach((position) => (mem[position] = +value));
  return mem;
};

export { findSumOfBitmask, findSumAddressDecode };
