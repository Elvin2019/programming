function twoSum(nums: number[], target: number): number[] {
    const map = new Map();
    let res: number[] = [];
    nums.forEach((num, i) => {
      const m = map.get(num);
      if (m !== undefined) {
        res = [m.index, i];
      } else {
        map.set(target - num, {
          value: num,
          index: i,
        });
      }
    });
    return res;
  }
  