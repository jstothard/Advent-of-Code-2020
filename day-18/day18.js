const doMath = (data) => {
  data = data.replace(/\s/g, "");
  let currNum = "";
  let operator = "+";
  let bracketDepth = 0;
  let bracketEval = "";

  const operators = {
    "+": (x, y) => x + y,
    "*": (x, y) => x * y,
  };

  return [...data].reduce((result, curr, i) => {
    if (curr === "(") {
      if (bracketDepth) bracketEval += curr;
      bracketDepth++;
    } else if (curr === ")") {
      bracketDepth--;
      if (bracketDepth) bracketEval += curr;
      else {
        currNum = doMath(bracketEval);
        bracketEval = "";
      }
    } else if (bracketDepth) {
      bracketEval += curr;
    } else if (Number.isInteger(+curr)) {
      currNum += curr;
    } else {
      result = operators[operator](+currNum, result);
      operator = curr;
      currNum = "";
    }
    if (i === data.length - 1) {
      result = operators[operator](+currNum, result);
    }
    return result;
  }, 0);
};

const doAdvancedMath = (data) => {
  data = parseData(data);
  return operateOnData(data);
};

const operateOnData = (data) => {
  data = evaluateBrackets(data);
  data = doAddition(data);

  data = doMultiplication(data);

  return data[0];
};

const parseData = (data) => {
  return [...data.replace(/\s/g, "")];
};

const doAddition = (data) => {
  for (let i = 0; i < data.length; i++) {
    const curr = data[i];
    if (curr === "+") {
      data.splice(i - 1, 3, +data[i - 1] + +data[i + 1]);
      i -= 3;
    }
  }

  if (data.includes("+")) return doAddition(data);
  return data;
};

const doMultiplication = (data) => {
  for (let i = 0; i < data.length; i++) {
    const curr = data[i];
    if (curr === "*") {
      data.splice(i - 1, 3, +data[i - 1] * +data[i + 1]);
      i -= 3;
    }
  }
  if (data.includes("*")) return doMultiplication(data);
  return data;
};

const evaluateBrackets = (data) => {
  let start = 0;
  let length = 0;
  let depth = 0;
  for (let i = 0; i < data.length; i++) {
    const curr = data[i];
    if (depth) length++;
    if (curr === "(") {
      if (depth === 0) start = i + 1;
      depth++;
    }
    if (curr === ")") {
      depth--;
      if (depth === 0) {
        const bracketEval = operateOnData(
          data.slice(start, start + length - 1)
        );
        data.splice(start - 1, length + 1, bracketEval);
        i -= length;
        start = 0;
        length = 0;
      }
    }
  }

  if (data.includes("(")) return evaluateBrackets(data);
  return data;
};

export { doMath, doAdvancedMath };
