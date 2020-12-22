import data from "./data/test";
import advanced from "./data/advanced";
import { findSumOfBitmask, findSumAddressDecode } from "./day14";

describe("findSumOfBitmask", () => {
  it("should find the sum of the array once bitmask applied", () => {
    expect(findSumOfBitmask(data)).toBe(165);
  });
});

describe("findSumAddressDecode", () => {
  it("should find the sum of the array once address decoded", () => {
    expect(findSumAddressDecode(advanced)).toBe(208);
  });
});
