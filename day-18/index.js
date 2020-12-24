import data from "./data/dev";
import { doMath, doAdvancedMath } from "./day18";

// Part 1
const sumOfData = data.split("\n").reduce((sum, curr) => {
  sum += doMath(curr);
  return sum;
}, 0);

console.log(sumOfData);

// Part 2

const advancedSum = data.split("\n").reduce((sum, curr, i) => {
  sum += doAdvancedMath(curr);
  return sum;
}, 0);

console.log(advancedSum);
