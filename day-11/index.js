import data from "./data/dev";
import { countOccupiedSeats } from "./day11";

// Part 1
const seatCount = countOccupiedSeats(data);
console.log(seatCount);

// Part 2
const nearestSeatCount = countOccupiedSeats(data, true);
console.log(nearestSeatCount);
