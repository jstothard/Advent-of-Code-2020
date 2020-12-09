import { findPairs } from "../utils";

const testFail = (data, preambleLength = 5) => {
  const list = splitData(data);

  return findFailingNumber(list, preambleLength);
};

const findEncryptionWeakness = (data, preambleLength = 5) => {
  const list = splitData(data);
  const failingNumber = findFailingNumber(list, preambleLength);
  const sumList = findListSum(list, failingNumber);
  const min = Math.min(...sumList);
  const max = Math.max(...sumList);
  return min + max;
};

const findListSum = (list, target) => {
  let arr = [];
  let found = false;
  for (let i = 0; i < list.length && !found; i++) {
    const arrSum = sum(arr);
    if (arrSum > target) {
      arr = arraySumBelow(arr, target);
      arrSum = sum(arr);
    }
    if (arrSum === target) found = true;
    else arr.push(list[i]);
  }
  return arr;
};

const sum = (arr) => arr.reduce((sum, curr) => sum + curr, 0);

const arraySumBelow = (arr, target) => {
  if (sum(arr) > target) {
    arr.shift();
    return arraySumBelow(arr, target);
  }
  return arr;
};

const splitData = (data) => data.split("\n").map((e) => Number(e));

const findFailingNumber = (list, preambleLength) => {
  const arr = [];

  let fail;

  for (let i = 0; i < list.length && !fail; i++) {
    if (i < preambleLength) {
      arr.push(list[i]);
    } else {
      if (!checkCorrectValue(list[i], arr)) fail = list[i];
      else arr.shift();
      arr.push(list[i]);
    }
  }

  return fail;
};

const checkCorrectValue = (value, arr) => {
  const pair = findPairs(arr, value);
  return Boolean(pair.length);
};

export { testFail, findEncryptionWeakness };
