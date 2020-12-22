import data from "./data/dev";
import { findSumOfBitmask, findSumAddressDecode } from "./day14";

// Part 1
const sum = findSumOfBitmask(data);
console.log(sum);

// Part 2
const sumAddressDecode = findSumAddressDecode(data);
console.log(sumAddressDecode);
