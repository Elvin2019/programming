function isAnagram(s: string, t: string): boolean {
  let res = new Map();

  for (const c of s) {
    res.set(c, (res.get(c) || 0) + 1);
  }
  for (const c of t) {
    res.set(c, (res.get(c) || 0) - 1);
  }

  return [...res.values()].every((x) => x === 0);
}
