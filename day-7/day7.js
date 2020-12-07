const countBags = (data) => {
  const bagDict = splitData(data);
  const newSet = checkIfIn(bagDict);
  return newSet.size;
};

const countBagsInside = (data) => {
  const bagDict = splitData(data);
  return countAllBags(bagDict);
};

const countAllBags = (bagDict, colour = "shiny gold") => {
  let count = 0;
  const currDict = bagDict[colour];
  for (const [innerColour, innerCount] of Object.entries(currDict)) {
    if (Object.keys(bagDict[innerColour]).length) {
      const bagsInBags = countAllBags(bagDict, innerColour);
      count += bagsInBags * innerCount;
    }
    count += innerCount;
  }
  return count;
};

const splitData = (data) => {
  const lines = data
    .replace(/\./g, "")
    .replace(/ bags*/g, "")
    .split("\n");

  const bagDict = lines.reduce((dict, line) => {
    const [outer, inner] = line.split(" contain ");

    if (inner === "no other") dict[outer] = {};
    else {
      const innerArray = inner.split(", ");

      const innerDict = innerArray.reduce((currDict, bag) => {
        const [num, colour] = bag.split(/\s(.+)/);
        currDict[colour] = Number(num);
        return currDict;
      }, {});
      dict[outer] = innerDict;
    }
    return dict;
  }, {});
  return bagDict;
};

const checkIfIn = (bagDict, colour = "shiny gold") => {
  const bagSet = new Set();
  for (const [outer, dict] of Object.entries(bagDict)) {
    if (dict.hasOwnProperty(colour)) {
      bagSet.add(outer);
    }
  }
  let secondarySet = new Set();
  bagSet.forEach((bag) => {
    const innerSet = checkIfIn(bagDict, bag);
    secondarySet = new Set([...innerSet, ...secondarySet]);
  });

  return new Set([...bagSet, ...secondarySet]);
};

export { countBags, countBagsInside };
