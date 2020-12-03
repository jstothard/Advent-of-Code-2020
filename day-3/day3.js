const countTrees = (arr, right = 3, down = 1) => {
  const width = arr[0].length;

  let count = 0;
  // The %width ensures that it loops back round
  for (
    let i = down, j = right;
    i < arr.length;
    i += down, j = ((i / down) * right) % width
  ) {
    if (arr[i][j] === "#") count++;
  }

  return count;
};

export { countTrees };
