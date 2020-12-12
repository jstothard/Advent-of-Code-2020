import data from "./data/dev";
import { journeyManhattanDistance } from "./day12";

// Part 1
const manhattanDistance = journeyManhattanDistance(data);
console.log(manhattanDistance);

// Part 2
const manhattanDistanceWaypoint = journeyManhattanDistance(data, true);
console.log(manhattanDistanceWaypoint);
