import data from "./data/test";
import advancedData from "./data/advancedTest";
import { countBags, countBagsInside } from "./day7";

describe("countBags", () => {
  it("should count the number of bags", () => {
    expect(countBags(data)).toBe(4);
  });
});

describe("countBagsInside", () => {
  it("should count the number of bags", () => {
    expect(countBagsInside(data)).toBe(32);
    expect(countBagsInside(advancedData)).toBe(126);
  });
});
