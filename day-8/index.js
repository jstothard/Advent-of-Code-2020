import data from "./data/dev";
import { accumulate, accumulateCorrect } from "./day8";

// Part 1
const acc = accumulate(data);
console.log(acc);

// Part 2
const accCorrect = accumulateCorrect(data);
console.log(accCorrect);
