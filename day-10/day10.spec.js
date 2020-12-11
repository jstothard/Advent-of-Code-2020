import data from "./data/test";
import advancedData from "./data/advancedTest";

import { findJoltDifferenceCounts, countArrangements } from "./day10";

describe("findJoltDifferenceCounts", () => {
  it("should find the differences", () => {
    expect(findJoltDifferenceCounts(data)).toMatchObject({ 1: 7, 3: 5 });
    expect(findJoltDifferenceCounts(advancedData)).toMatchObject({
      1: 22,
      3: 10,
    });
  });
});

describe("countArrangements", () => {
  it("should count arrangements", () => {
    expect(countArrangements(data)).toBe(8);
    expect(countArrangements(advancedData)).toBe(19208);
  });
});
