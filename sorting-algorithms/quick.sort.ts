function quickSort(arr: number[]): number[] {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[Math.floor(arr.length / 2)];

  const left = arr.filter((element) => element < pivot);
  const middle = arr.filter((element) => element === pivot);
  const right = arr.filter((element) => element > pivot);

  return [...quickSort(left), ...middle, ...quickSort(right)];
}

// Example usage:
const unsortedArray: number[] = [64, 34, 25, 12, 22, 11, 90];
const sortedArray: number[] = quickSort([...unsortedArray]); // Create a copy to avoid modifying the original array
console.log("Unsorted Array:", unsortedArray);
console.log("Sorted Array:", sortedArray);
