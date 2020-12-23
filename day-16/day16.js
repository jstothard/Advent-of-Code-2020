const findErrorScanningRate = (data) => {
  const { rules, myTicket, nearbyTickets } = splitData(data);

  return nearbyTickets.flat().reduce((sum, curr) => {
    if (
      !rules.some(
        ({ low1, low2, high1, high2 }) =>
          (low1 <= curr && curr <= high1) || (low2 <= curr && curr <= high2)
      )
    )
      sum += curr;
    return sum;
  }, 0);
};

const splitData = (data) => {
  const arr = data.split("\n\n");

  const rules = arr[0].split("\n").map((line) => {
    const regex = /(?<rule>[\w\s]+): (?<low1>\d+)-(?<high1>\d+) or (?<low2>\d+)-(?<high2>\d+)/;

    const obj = regex.exec(line).groups;

    for (const key in obj) {
      if (Object.hasOwnProperty.call(obj, key)) {
        const element = +obj[key];
        if (key !== "rule") obj[key] = element;
      }
    }
    return obj;
  });

  const myTicket = arr[1]
    .split("\n")[1]
    .split(",")
    .map((e) => +e);

  const nearbyTickets = arr[2]
    .split("\n")
    .slice(1)
    .map((line) => line.split(",").map((e) => +e));

  return { rules, myTicket, nearbyTickets };
};

const translateTicket = (data) => {
  const { rules, myTicket, nearbyTickets } = splitData(data);

  const validTickets = removeErroringTickets(nearbyTickets, rules);

  const fields = identifyTicketFields([myTicket, ...validTickets], rules);

  return fields.reduce((dict, curr, i) => {
    dict[curr] = myTicket[i];
    return dict;
  }, {});
};

const removeErroringTickets = (tickets, rules) => {
  return tickets.filter((arr) =>
    arr.every((curr) =>
      rules.some(
        ({ low1, low2, high1, high2 }) =>
          (low1 <= curr && curr <= high1) || (low2 <= curr && curr <= high2)
      )
    )
  );
};

const identifyTicketFields = (tickets, rules) => {
  let potentialFields = tickets[0].map((_, j) => {
    return rules.reduce((fields, { low1, low2, high1, high2, rule }) => {
      if (
        tickets.every((ticket) => {
          const currField = ticket[j];
          return (
            (currField >= low1 && currField <= high1) ||
            (currField >= low2 && currField <= high2)
          );
        })
      ) {
        fields.push(rule);
      }
      return fields;
    }, []);
  });

  let fields = Array(rules.length);
  do {
    potentialFields = potentialFields.map((curr, i) => {
      if (curr.length === 1) {
        fields[i] = curr[0];
        return curr;
      } else {
        const filtered = curr.filter((e) => !fields.includes(e));
        if (filtered.length === 1) fields[i] = filtered[0];
        return filtered;
      }
    });
  } while (fields.includes(undefined));

  return fields;
};

export { findErrorScanningRate, translateTicket };
