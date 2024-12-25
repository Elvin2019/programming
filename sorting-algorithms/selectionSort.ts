const findSmallest = (arr: number[]) => {
    let smallest = arr[0];
    let smallestIndex = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i];
            smallestIndex = i;
        }
    }
    return smallestIndex;
};

const selectionSort = (arr: number[]) => {
    const newArr = [];
    const arrLength = arr.length;
    for (let i = 0; i < arrLength; i++) {
        const smallest = findSmallest(arr);
        const smallestNumber = arr.splice(smallest, 1)[0];
        newArr.push(smallestNumber);
    }
    return newArr;
};
console.log(selectionSort([64, 34, 25, 12, 22, 11, 90]));