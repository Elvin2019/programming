//basic solution

function romanToInt(s: string): number {
  let res = 0;
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (c === "I") {
      if (s[i + 1] === "V") {
        res += 4;
        i++;
      } else if (s[i + 1] === "X") {
        res += 9;
        i++;
      } else {
        res += 1;
      }
    } else if (c === "V") {
      if (s[i + 1] === "L") {
        res += 40;
        i++;
      } else if (s[i + 1] === "C") {
        res += 90;
        i++;
      } else {
        res += 5;
      }
    } else if (c === "X") {
      if (s[i + 1] === "L") {
        res += 40;
        i++;
      } else if (s[i + 1] === "C") {
        res += 90;
        i++;
      } else {
        res += 10;
      }
    } else if (c === "L") {
      if (s[i + 1] === "D") {
        res += 400;
        i++;
      } else {
        res += 50;
      }
    } else if (c === "C") {
      if (s[i + 1] === "M") {
        res += 900;
        i++;
      } else if (s[i + 1] === "D") {
        res += 400;
        i++;
      } else {
        res += 100;
      }
    } else if (c === "D") {
      res += 500;
    } else if (c === "M") {
      res += 1000;
    }
  }
  console.log(res);
  return res;
}

romanToInt("MCMXCIV");
