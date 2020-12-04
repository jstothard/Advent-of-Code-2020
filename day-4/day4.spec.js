import { countPassports } from "./day4";
import data from "./data/test";
import advancedData from "./data/advancedTest";

describe("countPassports", () => {
  it("should count passports", () => {
    expect(countPassports(data)).toBe(2);
  });
});

describe("advancedCountPassports", () => {
  it("should count passports", () => {
    expect(countPassports(advancedData, true)).toBe(4);
  });
});
