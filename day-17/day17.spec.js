import data from "./data/test";
import { iterate6CycleBoot } from "./day17";
describe("iterate6CycleBoot", () => {
  it("should iterate 6 cycles", () => {
    expect(iterate6CycleBoot(data)).toBe(112);
  });
  it("should iterate 6 cycles in 4 dimensions", () => {
    expect(iterate6CycleBoot(data, true)).toBe(848);
  });
});
