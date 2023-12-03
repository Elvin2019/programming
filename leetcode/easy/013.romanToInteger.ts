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

//optimized solution

function romanToIn2t(s: string): number {
  const romanToIntMap: { [key: string]: number } = {
    I: 1,
    IV: 4,
    V: 5,
    IX: 9,
    X: 10,
    XL: 40,
    L: 50,
    XC: 90,
    C: 100,
    CD: 400,
    D: 500,
    CM: 900,
    M: 1000,
  };

  let res = 0;
  for (let i = 0; i < s.length; i++) {
    const currentSymbol = s[i];
    const nextSymbol = s[i + 1];
    const currentValue = romanToIntMap[currentSymbol];
    const nextValue = romanToIntMap[nextSymbol];

    if (nextValue && nextValue > currentValue) {
      res += nextValue - currentValue;
      i++;
    } else {
      res += currentValue;
    }
  }

  return res;
}
