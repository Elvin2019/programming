// arr = [1, 7, 3, 9, 5, 3] -> 7
// arr = [3, 7, 9, 6, 9, 2] -> 9
// find 2nd max

const getMaxIndex = (arr: number[]) => {
  let maxIndex = 0;
  let max = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
      maxIndex = i;
    }
  }
  return maxIndex;
};

const getSecondNumber = (arr:number[]) => {
  let maxIndex = getMaxIndex(arr);
  let newArr = arr.filter((a, i) => i !== maxIndex);
  let secondMaxIndex = getMaxIndex(newArr);
  const secondMaxNumber = arr[secondMaxIndex];
  return secondMaxNumber;
};

