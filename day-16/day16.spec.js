import data from "./data/test";
import advanced from "./data/advanced";
import { findErrorScanningRate, translateTicket } from "./day16";

describe("findErrorScanningRate", () => {
  it("should find error scanning rate", () => {
    expect(findErrorScanningRate(data)).toBe(71);
  });
});

describe("translateTicket", () => {
  it("should find ticket fields", () => {
    expect(translateTicket(advanced)).toMatchObject({
      class: 12,
      row: 11,
      seat: 13,
    });
  });
});
