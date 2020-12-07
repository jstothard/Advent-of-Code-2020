import data from "./data/dev";
import { countBags, countBagsInside } from "./day7";

// Part 1
const bags = countBags(data);
console.log(bags);

// Part 2
const bagsInside = countBagsInside(data);
console.log(bagsInside);
