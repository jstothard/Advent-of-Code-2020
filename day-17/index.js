import data from "./data/dev";
import { iterate6CycleBoot } from "./day17";

// Part 1
const count = iterate6CycleBoot(data);
console.log(count);

// Part 2
const countIn4D = iterate6CycleBoot(data, true);
console.log(countIn4D);
