function rotateArray(nums: number[], k: number): void {
    console.log(nums);
    k = k % nums.length;
    nums.reverse();
    console.log(nums);
    reverse(nums, 0, k - 1);
    console.log(nums);
    reverse(nums, k, nums.length - 1);
    console.log(nums);
  }
  
  function reverse(arr: number[], start: number, end: number) {
    while (start < end) {
      [arr[start], arr[end]] = [arr[end], arr[start]];
      start++;
      end--;
    }
  }
  
  const nums = [1, 2, 3, 4, 5, 6, 7];

  const k = 3;
  rotateArray(nums, k);
  