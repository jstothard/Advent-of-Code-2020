import { countYesAnswers, countUnanimousYesAnswers } from "./day6";
import data from "./data/dev";

// Part 1
const uniqueTotal = countYesAnswers(data);
console.log(uniqueTotal);

// Part 2
const unanimousTotal = countUnanimousYesAnswers(data);
console.log(unanimousTotal);
