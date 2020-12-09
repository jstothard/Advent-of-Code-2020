import data from "./data/dev";
import { testFail, findEncryptionWeakness } from "./day9";

// Part 1
const failingNum = testFail(data, 25);
console.log(failingNum);

// Part 2
const weakness = findEncryptionWeakness(data, 25);
console.log(weakness);
