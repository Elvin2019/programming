function search(nums: number[], target: number): number {
     let l = 0, r = nums.length - 1;
     let steps = 0;
     while(l<=r){
        steps++;
        console.log(steps);
        let m = Math.floor((l + r)/2);
        if(nums[m] === target) return m;
        else if(nums[m] < target) l = m + 1;
        else r = m - 1;
     }
     return -1;
};
const my_list = [1, 3, 5, 7, 9, 12, 15, 17, 21, 24, 30, 32,34, 36, 40, 42, 44,];
console.log(search(my_list, 3));