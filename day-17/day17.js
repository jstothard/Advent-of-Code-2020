const iterate6CycleBoot = (data, fourth = false) => {
  let dimension = parseInput(data, fourth);
  for (let i = 0; i < 6; i++) {
    dimension = cycleBoot(dimension, fourth);
  }
  return countActive(dimension);
};

const parseInput = (data, fourth) => {
  const arr = data.split("\n");
  const z = 0;
  const w = 0;
  return arr.reduce((dict, line, y) => {
    line.split("").forEach((cube, x) => {
      if (fourth) dict[`${x},${y},${z},${w}`] = cube;
      else dict[`${x},${y},${z}`] = cube;
    });
    return dict;
  }, {});
};

const countActive = (dimension) => {
  return Object.values(dimension).reduce((sum, curr) => {
    sum += curr === "#";
    return sum;
  }, 0);
};

const cycleBoot = (dimension, fourth) => {
  const newDimension = { ...dimension };
  const coords = Object.keys(dimension)
    .map((cube) => cube.split(",").map((e) => +e))
    .flat();

  const newMin = Math.min(...coords) - 1;
  const newMax = Math.max(...coords) + 1;

  for (let i = newMin; i <= newMax; i++) {
    for (let j = newMin; j <= newMax; j++) {
      for (let k = newMin; k <= newMax; k++) {
        if (fourth) {
          for (let l = newMin; l <= newMax; l++) {
            const index = `${i},${j},${k},${l}`;
            const count = countActiveNeighbors([i, j, k, l], dimension, fourth);
            if (dimension[index] === "#") {
              if (count !== 2 && count !== 3) newDimension[index] = ".";
            } else if (count === 3) newDimension[index] = "#";
          }
        } else {
          const index = `${i},${j},${k}`;
          const count = countActiveNeighbors([i, j, k], dimension);
          if (dimension[index] === "#") {
            if (count !== 2 && count !== 3) newDimension[index] = ".";
          } else if (count === 3) newDimension[index] = "#";
        }
      }
    }
  }

  return newDimension;
};

const countActiveNeighbors = ([x, y, z, w], dimension, fourth) => {
  let count = 0;

  for (let i = x - 1; i <= x + 1; i++) {
    for (let j = y - 1; j <= y + 1; j++) {
      for (let k = z - 1; k <= z + 1; k++) {
        if (fourth) {
          for (let l = w - 1; l <= w + 1; l++) {
            if (!(x === i && y === j && z === k && w === l)) {
              const index = `${i},${j},${k},${l}`;
              if (dimension[index] === "#") count++;
            }
          }
        } else if (!(x === i && y === j && z === k)) {
          const index = `${i},${j},${k}`;
          if (dimension[index] === "#") count++;
        }
      }
    }
  }

  return count;
};

export { iterate6CycleBoot };
