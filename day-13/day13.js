const earliestBus = (data) => {
  const { start, busses } = parseData(data);
  return getTimeUntilArrival(start, busses);
};

const parseData = (data) => {
  const [start, busString] = data.split("\n");
  const busses = busString.split(",").reduce((arr, curr) => {
    if (curr !== "x") arr.push(Number(curr));
    return arr;
  }, []);
  return { start, busses };
};

const getTimeUntilArrival = (start, busses) =>
  busses.reduce(
    (earliest, bus) => {
      const minutes = bus - (start % bus);
      if (minutes < earliest.minutes) return { minutes, bus };
      return earliest;
    },
    { minutes: Infinity }
  );

const earliestTime = (busString, startTime = 1) => {
  const busses = busString.replace(/x/g, "1").split(",");
  // Assume bus every minute for x i.e. non solutions
  const firstBus = busses.shift();

  //Gets the first the bus arrives after startTime
  const firstTime = Math.ceil(startTime / firstBus) * firstBus;

  return busses.reduce(
    // For each bus, find the first time that the bus arrives immediately after last
    ([last, multiplier], curr, i) => {
      // console.log(last, multiplier);
      for (let check = +last; ; check += +multiplier) {
        // Check if following value is multiple of curr bus
        if ((check + i + 1) % curr === 0) {
          // This pattern repeats on the lowest common multiple of all prev busses
          return [check, multiplier * curr];
        }
      }
    },
    [firstTime, firstBus]
  )[0];
};

export { earliestBus, earliestTime };
