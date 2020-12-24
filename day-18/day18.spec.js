import data from "./data/test";
import advanced from "./data/advanced";
import { doMath, doAdvancedMath } from "./day18";

describe("doMath", () => {
  it("should do math", () => {
    return Promise.all(
      data.map(({ input, result }) => expect(doMath(input)).toBe(result))
    );
  });
});

describe("doAdvancedMath", () => {
  it("should do advanced math", () => {
    return Promise.all(
      advanced.map(({ input, result }) =>
        expect(doAdvancedMath(input)).toBe(result)
      )
    );
  });
});
