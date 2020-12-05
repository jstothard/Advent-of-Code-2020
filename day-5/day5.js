const calculateSeatId = (data) => {
  return data.map((ticket) => {
    const rowId = ticket.substr(0, 7);
    const row = calculateRow(rowId);
    const colId = ticket.substr(7, 9);
    const col = calculateColumn(colId);
    return row * 8 + col;
  });
};

const calculateRow = (str) => {
  let low = 0;
  let high = 127;
  for (const lttr of str) {
    const half = (high - low + 1) / 2;
    if (lttr === "F") high -= half;
    else low += half;
  }
  return low;
};

const calculateColumn = (str) => {
  let low = 0;
  let high = 7;
  for (const lttr of str) {
    const half = (high - low + 1) / 2;
    if (lttr === "L") high -= half;
    else low += half;
  }
  return low;
};

const calculateTickets = (data) => {
  return data.map((ticket) => {
    const rowId = ticket.substr(0, 7);
    const row = calculateRow(rowId);
    const colId = ticket.substr(7, 9);
    const col = calculateColumn(colId);
    const id = row * 8 + col;

    return {
      row,
      col,
      id,
    };
  });
};

const findMySeat = (data) => {
  const tickets = calculateTickets(data);

  const { minRow, maxRow } = tickets.reduce(
    (curr, row) => ({
      minRow: Math.min(row, curr.minRow),
      maxRow: Math.max(row, curr.maxRow),
    }),
    { minRow: Infinity, maxRow: 0 }
  );

  const noFrontOrBack = tickets
    .filter(({ row }) => row !== minRow && row !== maxRow)
    .sort(({ id: id1 }, { id: id2 }) => id1 - id2);

  const minId = noFrontOrBack[0].id - 1;

  const sumToMinId = (minId * (minId + 1)) / 2;
  const maxId = minId + noFrontOrBack.length + 1;
  const sumToMaxId = (maxId * (maxId + 1)) / 2;

  const expectedSum = sumToMaxId - sumToMinId;
  const sum = noFrontOrBack.reduce((sum, { id }) => (sum += id), 0);
  return expectedSum - sum;
};

export { calculateSeatId, findMySeat };
