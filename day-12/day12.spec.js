import data from "./data/test";
import { journeyManhattanDistance } from "./day12";

describe("journeyManhattanDistance", () => {
  it("should calculate the Manhattan distance of the journey", () => {
    expect(journeyManhattanDistance(data)).toBe(25);
  });
  it("should calculate the Manhattan distance of the journey when operating on the waypoint", () => {
    expect(journeyManhattanDistance(data, true)).toBe(286);
  });
});
