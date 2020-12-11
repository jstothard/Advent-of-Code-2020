import data from "./data/dev";
import { findJoltDifferenceCounts, countArrangements } from "./day10";

// Part 1
const dict = findJoltDifferenceCounts(data);
console.log(dict, dict[1] * dict[3]);

// Part 2
const count = countArrangements(data);
console.log(count);
