const accumulate = (data) => {
  const program = splitLines(data);

  const { acc } = traverseLines(program);

  return acc;
};

const accumulateCorrect = (data) => {
  const program = splitLines(data);

  let isSearching = true;
  for (let i = 0; isSearching; i++) {
    const line = program[i];
    const check = ["jmp", "nop"];
    const dict = { jmp: "nop", nop: "jmp" };
    if (check.includes(line.opp)) {
      const programClone = [...program];
      const opp = dict[line.opp];
      programClone[i] = { ...line, opp };

      const { acc, loop } = traverseLines(programClone);
      if (!loop) {
        isSearching = false;
        return acc;
      }
    }
  }
};

const traverseLines = (program) => {
  const linesTraversed = [];
  let i = 0;
  let acc = 0;
  while (!linesTraversed.includes(i) && i < program.length) {
    linesTraversed.push(i);
    const currLine = program[i];

    const { i_1, acc_1 } = operate(currLine.opp, currLine.val, acc, i);

    i = i_1;
    acc = acc_1;
  }

  return { acc, loop: i < program.length };
};

const operate = (opp, val, acc, i) => {
  switch (opp) {
    case "acc":
      acc += val;
      i += 1;
      break;
    case "jmp":
      i += val;
      break;
    default:
      i += 1;
      break;
  }

  return { i_1: i, acc_1: acc };
};

const splitLines = (data) =>
  data.split("\n").map((line) => {
    const [opp, valString] = line.split(" ");
    const val = Number(valString);
    return { opp, val };
  });

export { accumulate, accumulateCorrect };
