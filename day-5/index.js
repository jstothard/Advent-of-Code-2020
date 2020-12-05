import { calculateSeatId, findMySeat } from "./day5";
import data from "./data/dev";

// Part 1
const seatIds = calculateSeatId(data);
console.log(Math.max(...seatIds));

// Part 2
const mySeat = findMySeat(data);
console.log(mySeat);
