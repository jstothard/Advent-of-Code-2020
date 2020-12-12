import data from "./data/test";
import { countOccupiedSeats } from "./day11";

describe("countOccupiedSeats", () => {
  it("should count occupied seats", () => {
    expect(countOccupiedSeats(data)).toBe(37);
  });
  it("should count occupied seats when considering nearest seat", () => {
    expect(countOccupiedSeats(data, true)).toBe(26);
  });
});
