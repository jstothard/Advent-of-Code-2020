import data from "./data/test";
import advanced from "./data/advancedTest";
import { earliestBus, earliestTime } from "./day13";

describe("earliestBus", () => {
  it("should find the earliest bus and number of minutes", () => {
    expect(earliestBus(data)).toMatchObject({ bus: 59, minutes: 5 });
  });
});
describe("earliestTime", () => {
  it("should find the earliest time busses are in sequence", () => {
    const busses = advanced.split("\n");
    const results = [1068781, 3417, 754018, 779210, 1261476, 1202161486];
    return Promise.all(
      busses.map((bus, i) => expect(earliestTime(bus)).toBe(results[i]))
    );
  });
});
