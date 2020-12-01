import data from "./data/dev";
import { findPairs, multiplyArray, findTrio } from "./day1";

// Part 1
const pair = findPairs(data);
console.log(pair);

const product = multiplyArray(pair);
console.log(product);

// Part 2
const trio = findTrio(data);
console.log(trio);

const productTrio = multiplyArray(trio);
console.log(productTrio);
