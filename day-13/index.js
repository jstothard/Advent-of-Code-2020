import data from "./data/dev";
import { earliestBus, earliestTime } from "./day13";
// Part 1
const { bus, minutes } = earliestBus(data);
console.log("bus", bus);
console.log("minutes", minutes);
console.log("mult", minutes * bus);

// Part 2
const [_, busString] = data.split("\n");
console.log("earliestTime", earliestTime(busString, 100000000000000));
