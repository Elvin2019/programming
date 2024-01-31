function twoSum(numbers: number[], target: number): number[] {
    let left = 0;
    let right = numbers.length - 1;

    while (left < right) {
        console.log(numbers[left], numbers[right])
        
        if (numbers[left] + numbers[right] === target) {
            return [left + 1, right + 1];
        } else if (numbers[left] + numbers[right] < target) {
            left++;
        } else {
            right--;
        }
    }

    return [0, 0];
    
};

const two = twoSum([2, 7, 11, 15], 9)
console.log(two)