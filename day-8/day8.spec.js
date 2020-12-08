import data from "./data/test";
import { accumulate, accumulateCorrect } from "./day8";

describe("accumulate", () => {
  it("should accumulate", () => {
    expect(accumulate(data)).toBe(5);
  });
  it("should accumulate correct", () => {
    expect(accumulateCorrect(data)).toBe(8);
  });
});
