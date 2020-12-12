const countOccupiedSeats = (data, nearest = false) => {
  let seats = parseData(data);
  let iterating = true;

  while (iterating) {
    const seatsClone = JSON.stringify(seats);
    const newSeats = iterateSeats(seats, nearest);
    if (seatsClone === JSON.stringify(newSeats)) iterating = false;
    seats = newSeats;
  }

  return countSeats(seats);
};
const parseData = (data) => {
  const lines = data.split("\n");
  return lines.map((line) => line.split(""));
};

const iterateSeats = (seats, nearest) => {
  return seats.map((row, i) => {
    return row.map((seat, j) => {
      if (seat !== ".") {
        const count = countNeighbors(seats, i, j, nearest);
        if (seat === "L" && count === 0) return "#";
        if (seat === "#" && count >= (nearest ? 5 : 4)) return "L";
      }
      return seat;
    });
  });
};

const countNeighbors = (seats, row, column, nearest) => {
  let count = 0;

  if (!nearest) {
    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        // Don't check the actual seat, only the neighbors
        if (!(i === 0 && j === 0)) {
          const seat = seats[row + i]?.[column + j];
          if (seat === "#") count++;
        }
      }
    }
  } else {
    count = checkNeighbors(seats, row, column);
  }
  return count;
};

const checkNeighbors = (seats, row, column) => {
  let count = 0;
  const combinations = [
    [1, 0],
    [1, 1],
    [1, -1],
    [-1, 0],
    [-1, -1],
    [-1, 1],
    [0, 1],
    [0, -1],
  ];

  for (let [x, y] of combinations) {
    let iterating = true;
    let i = 1;
    while (iterating) {
      const seat = seats[row + i * x]?.[column + i * y];
      if (seat === "#") {
        count++;
        iterating = false;
      }
      // Break out if off the map or empty seat
      if (!seat || seat === "L") iterating = false;
      i++;
    }
  }
  return count;
};

const countSeats = (seats) => {
  return seats.reduce((count, row) => {
    return (
      count +
      row.reduce((count, seat) => {
        if (seat === "#") count++;
        return count;
      }, 0)
    );
  }, 0);
};
export { countOccupiedSeats };
