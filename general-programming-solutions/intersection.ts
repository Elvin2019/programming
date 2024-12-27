function intersection(nums1: number[], nums2: number[]){
    const set1 = new Set(nums1);
    const result = new Set();
    console.log(set1)
    for (let num of nums2) {
      if (set1.has(num)) {
        result.add(num);
      }
    }
    
    return [...result];
  }

  console.log(intersection([1, 2, 2, 1], [2, 2]));
  