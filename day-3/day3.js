const countTrees = (arr, right = 3, down = 1) => {
  const width = arr[0].length;

  let count = 0;
  for (let i = down; i < arr.length; i += down) {
    const current = arr[i];

    // The %width ensures that it loops back round
    let j = ((i / down) * right) % width;

    if (current[j] === "#") count++;
  }

  return count;
};

export { countTrees };
