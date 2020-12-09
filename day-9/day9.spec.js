import data from "./data/test";
import { testFail, findEncryptionWeakness } from "./day9";
describe("Name of the group", () => {
  it("should say which number fails the test", () => {
    expect(testFail(data)).toBe(127);
  });

  it("should find the weakness", () => {
    expect(findEncryptionWeakness(data)).toBe(62);
  });
});
