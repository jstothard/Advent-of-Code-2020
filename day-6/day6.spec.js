import { countYesAnswers, countUnanimousYesAnswers } from "./day6";
import data from "./data/test";

describe("countYesAnswers", () => {
  it("should count yes'", () => {
    expect(countYesAnswers(data)).toEqual(11);
  });
});
describe("countUnanimousYesAnswers", () => {
  it("should count yes'", () => {
    expect(countUnanimousYesAnswers(data)).toEqual(6);
  });
});
