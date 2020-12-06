const countYesAnswers = (str) => {
  const groups = str.split("\n");

  let currSet = new Set();
  let count = 0;

  for (const line of groups) {
    if (line === "") {
      count += currSet.size;
      currSet = new Set();
    } else currSet = new Set([...currSet, ...line.split("")]);
  }

  return count;
};

const countUnanimousYesAnswers = (str) => {
  const groups = str.split("\n");

  let currArr = [];
  let count = 0;
  let skip = false;

  for (const line of groups) {
    if (line === "") {
      count += currArr.length;
      currArr = [];
      skip = false;
    } else if (currArr.length === 0 && skip === false) currArr = line.split("");
    else {
      currArr = currArr.filter((lttr) => line.includes(lttr));
      if (!currArr.length) skip = true;
    }
  }

  return count;
};

export { countYesAnswers, countUnanimousYesAnswers };
