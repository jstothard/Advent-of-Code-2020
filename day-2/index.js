import data from "./data/dev";
import { testPassCount, testPassPositionCount } from "./day2";

// Part 1
const count1 = testPassCount(data);
console.log(count1);

// Part 2
const count2 = testPassPositionCount(data);
console.log(count2);
