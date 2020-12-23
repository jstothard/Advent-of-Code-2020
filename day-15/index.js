import data from "./data/dev";
import { findNthNumber } from "./day15";

// Part 1
const number2020 = findNthNumber([9, 3, 1, 0, 8, 4], 2020);
console.log(number2020);

// Part 2
const number30000000 = findNthNumber([9, 3, 1, 0, 8, 4], 30000000);
console.log(number30000000);
