import { testPassCount, testPassPositionCount } from "./day2";
import data from "./data/test";

describe("testPassCount", () => {
  it("should count number of passes", () => {
    expect(testPassCount(data)).toEqual(2);
  });
});

describe("testPassPositionCount", () => {
  it("should count number of passes", () => {
    expect(testPassPositionCount(data)).toEqual(1);
  });
});
