import data from "./data/dev";
import { findErrorScanningRate, translateTicket } from "./day16";

// Part 1
const errorScanningRate = findErrorScanningRate(data);
console.log(errorScanningRate);

// Part 2
const ticket = translateTicket(data);
const departuresMult = Object.entries(ticket).reduce((mult, [key, value]) => {
  if (key.includes("departure")) mult = mult * value;
  return mult;
}, 1);
console.log(departuresMult);
