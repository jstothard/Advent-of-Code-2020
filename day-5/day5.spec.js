import { calculateSeatId } from "./day5";
import data from "./data/test";

describe("calculateSeatId", () => {
  it("should calculate ids", () => {
    expect(calculateSeatId(data)).toEqual([567, 119, 820]);
  });
});