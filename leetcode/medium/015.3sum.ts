function threeSum(nums: number[]): number[][] {
    


    // 

    let left = 0;
    let right = 0;
    nums.sort((a, b) => a - b);
    const result: number[][] = [];

    for (let i = 0; i < nums.length - 2; i++) {

        if (i > 0 && nums[i] === nums[i - 1]) continue;

        left = i + 1;
        right = nums.length - 1;

        while (left < right) {
            
            if (nums[i] + nums[left] + nums[right] === 0) {
                result.push([nums[i], nums[left], nums[right]]);
                left++;
                right--;
                while (left < right && nums[left] === nums[left - 1]) left++;
                while (left < right && nums[right] === nums[right + 1]) right--;
            } else if (nums[i] + nums[left] + nums[right] > 0) {
                right--;
            } else {
                left++;
            }
        }
    }

    console.log(result)
    return result

    
};


threeSum([-1, 0, 1, 2, -1, -4])
