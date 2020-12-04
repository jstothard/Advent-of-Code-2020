const splitPassports = (str) => {
  const lines = str.split("\n");
  const passports = [];
  let currPassport = {};
  for (const line of lines) {
    if (line) currPassport = { ...currPassport, ...splitLine(line) };
    else {
      passports.push(currPassport);
      currPassport = {};
    }
  }
  return passports;
};

const splitLine = (line) => {
  const items = line.split(" ");
  return items.reduce((dict, item) => {
    const [key, value] = item.split(":");
    dict[key] = value;
    return dict;
  }, {});
};

const countPassports = (data, advanced = false) => {
  const passports = splitPassports(data);

  const rules = {
    byr: (byr) => 1920 <= Number(byr) && Number(byr) <= 2002,
    iyr: (iyr) => 2010 <= Number(iyr) && Number(iyr) <= 2020,
    eyr: (eyr) => 2020 <= Number(eyr) && Number(eyr) <= 2030,
    hgt: (hgt) => {
      const [height, unit] = hgt.match(/[0-9]+|[cmin]{2}/g);
      if (unit === "cm") return 150 <= Number(height) && Number(height) <= 193;
      if (unit === "in") return 59 <= Number(height) && Number(height) <= 76;
      return false;
    },
    hcl: (hcl) => /^\#[a-f0-9]{6}$/.test(hcl),
    ecl: (ecl) =>
      ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"].includes(ecl),
    pid: (pid) => /^[0-9]{9}$/.test(pid),
  };
  return passports.reduce((count, pass) => {
    if (pass.cid) delete pass.cid;
    const passFields = Object.keys(pass);
    const fields = Object.keys(rules);
    const fieldsInPass = fields.every((rule) => passFields.includes(rule));
    if (!advanced) {
      if (fieldsInPass) count += 1;
    } else {
      if (fieldsInPass) {
        let isValid = true;
        for (const [field, value] of Object.entries(pass)) {
          if (!rules[field](value)) isValid = false;
        }
        if (isValid) count += 1;
      }
    }
    return count;
  }, 0);
};

export { countPassports };
