import { countPassports } from "./day4";
import data from "./data/dev";

// Part 1
const countFields = countPassports(data);
console.log(countFields);

// Part 1
const advancedCountFields = countPassports(data, true);
console.log(advancedCountFields);
