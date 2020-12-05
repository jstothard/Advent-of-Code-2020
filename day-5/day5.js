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
  return data.reduce(
    ({ tickets, sum, minId }, ticket) => {
      const rowId = ticket.substr(0, 7);
      const row = calculateRow(rowId);
      const colId = ticket.substr(7, 9);
      const col = calculateColumn(colId);
      const id = row * 8 + col;
      tickets.push({
        row,
        col,
        id,
      });
      return {
        tickets,
        sum: (sum += id),
        minId: Math.min(id, minId),
      };
    },
    { tickets: [], sum: 0, minId: Infinity }
  );
};

const findMySeat = (data) => {
  const { tickets, sum, minId } = calculateTickets(data);

  const sumBelowMinId = (minId * (minId - 1)) / 2;
  const maxId = minId + tickets.length;
  const sumToMaxId = (maxId * (maxId + 1)) / 2;

  const expectedSum = sumToMaxId - sumBelowMinId;
  return expectedSum - sum;
};

export { calculateSeatId, findMySeat };
