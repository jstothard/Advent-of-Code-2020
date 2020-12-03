import { countTrees } from "./day3";
import data from "./data/dev";

// Part 1
const treeCount = countTrees(data);
console.log(treeCount);

// Part 2
const angles = [
  [1, 1],
  [3, 1],
  [5, 1],
  [7, 1],
  [1, 2],
];
const counts = angles.map((angle) => countTrees(data, ...angle));
console.log(counts);
const multiplied = counts.reduce((prev, curr) => prev * curr, 1);
console.log(multiplied);
