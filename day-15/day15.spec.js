import data from "./data/test";
import { findNthNumber } from "./day15";

describe("findNthNumber", () => {
  it("should find the 2020th number spoken", () => {
    expect(findNthNumber([0, 3, 6], 2020)).toBe(436);
    expect(findNthNumber([1, 3, 2], 2020)).toBe(1);
    expect(findNthNumber([2, 1, 3], 2020)).toBe(10);
    expect(findNthNumber([1, 2, 3], 2020)).toBe(27);
    expect(findNthNumber([2, 3, 1], 2020)).toBe(78);
    expect(findNthNumber([3, 2, 1], 2020)).toBe(438);
    expect(findNthNumber([3, 1, 2], 2020)).toBe(1836);
  });
  it("should find the 30000000th number spoken", () => {
    expect(findNthNumber([0, 3, 6], 30000000)).toBe(175594);
    expect(findNthNumber([1, 3, 2], 30000000)).toBe(2578);
    expect(findNthNumber([2, 1, 3], 30000000)).toBe(3544142);
    expect(findNthNumber([1, 2, 3], 30000000)).toBe(261214);
    expect(findNthNumber([2, 3, 1], 30000000)).toBe(6895259);
    expect(findNthNumber([3, 2, 1], 30000000)).toBe(18);
    expect(findNthNumber([3, 1, 2], 30000000)).toBe(362);
  });
});
