import { findPairs, multiplyArray, findTrio } from "./day1.js";

import data from "./data/test";

describe("findPairs", () => {
  it("should find a pair", () => {
    expect(findPairs(data)).toEqual(expect.arrayContaining([1721, 299]));
  });
});
describe("findTrio", () => {
  it("should find a trio", () => {
    expect(findTrio(data)).toEqual(expect.arrayContaining([979, 366, 675]));
  });
});

describe("multiplyArray", () => {
  it("should multiplies ", () => {
    const tt = [1721, 299];
    expect(multiplyArray(tt)).toEqual(514579);
  });
});
