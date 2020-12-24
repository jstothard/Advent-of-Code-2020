export default [
  { input: "1 + 2 * 3 + 4 * 5 + 6", result: 231 },
  { input: "1 + (2 * 3) + (4 * (5 + 6))", result: 51 },
  { input: "2 * 3 + (4 * 5)", result: 46 },
  { input: "5 + (8 * 3 + 9 + 3 * 4 * 3)", result: 1445 },
  { input: "5 * 9 * (7 * 3 * 3 + 9 * 3 + (8 + 6 * 4))", result: 669060 },
  { input: "((2 + 4 * 9) * (6 + 9 * 8 + 6) + 6) + 2 + 4 * 2", result: 23340 },
];
