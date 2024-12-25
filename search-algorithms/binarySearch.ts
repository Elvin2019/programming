const binary_search = (list: Array<number> = [], item: number) => {
  let low = 0;
  let high = list.length - 1;
  let steps = 0;
  while (low <= high) {
    steps++;
    console.log(steps);

    let mid = Math.floor((low + high)/2);
    let guess = list[mid];
   

    if (guess === item) {
      return mid;
    }
    if (guess > item) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return null;
};

const my_list = [1, 3, 5, 7, 9, 12, 15, 17, 21, 24, 30, 32,34, 36, 40, 42, 44,];
console.log(binary_search(my_list, 3));
// console.log(binary_search(my_list, -1));

export {};