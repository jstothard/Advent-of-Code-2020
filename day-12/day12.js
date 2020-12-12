const journeyManhattanDistance = (data, waypoint = false) => {
  const instructions = splitInstructions(data);

  const { x, y } = travelJourney(instructions, waypoint);
  return Math.abs(x) + Math.abs(y);
};

const travelJourney = (instructions, waypoint) => {
  let x = 0;
  let y = 0;
  let direction = 0;

  let waypointX = 10;
  let waypointY = 1;

  const directions = {
    0: "E",
    90: "S",
    180: "W",
    270: "N",
  };

  const waypointDirections = {
    90: () => {
      const oldX = waypointX;
      waypointX = waypointY;
      waypointY = -oldX;
    },
    180: () => {
      waypointX = -waypointX;
      waypointY = -waypointY;
    },
    270: () => {
      const oldX = waypointX;
      waypointX = -waypointY;
      waypointY = oldX;
    },
  };

  const operations = {
    N: (value) => (y += value),
    S: (value) => (y -= value),
    E: (value) => (x += value),
    W: (value) => (x -= value),
    L: (value) => {
      direction -= value;
      if (direction < 0) direction += 360;
    },
    R: (value) => {
      direction += value;
      if (direction >= 360) direction -= 360;
    },
    F: (value) => operations[directions[direction]](value),
  };

  const waypointOperations = {
    N: (value) => (waypointY += value),
    S: (value) => (waypointY -= value),
    E: (value) => (waypointX += value),
    W: (value) => (waypointX -= value),
    L: (value) => waypointDirections[360 - value](),
    R: (value) => waypointDirections[value](),
    F: (value) => {
      x += value * waypointX;
      y += value * waypointY;
    },
  };
  for (const { action, value } of instructions) {
    if (!waypoint) operations[action](value);
    else waypointOperations[action](value);
  }
  return { x, y };
};

const splitInstructions = (data) => {
  return data.split("\n").map((row) => {
    const { groups } = row.match(/(?<action>[NSEWLRF])(?<value>\d+)/);
    groups.value = Number(groups.value);
    return groups;
  });
};

export { journeyManhattanDistance };
