import { countTrees } from "./day3";
import data from "./data/test";

describe("countTrees", () => {
  it("should count number of trees", () => {
    expect(countTrees(data)).toEqual(7);
  });

  it("should count trees for different angles", () => {
    expect(countTrees(data, 1)).toEqual(2);
    expect(countTrees(data, 5)).toEqual(3);
    expect(countTrees(data, 7)).toEqual(4);
    expect(countTrees(data, 1, 2)).toEqual(2);
  });
});
