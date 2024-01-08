function numberOfBeams(bank: string[]): number {
  let current = 0;
  let prev = 0;
  let res = 0;

  for (const row of bank) {
    if (current) {
      prev = current;
    }
    current = 0;
    for (const char of row) {
      if (char === "1") {
        current++;
      }
    }

    if (prev && current) {
      res += prev * current;
    }
  }
  return res;
}

numberOfBeams(["011001", "000000", "010100", "001000"]);
