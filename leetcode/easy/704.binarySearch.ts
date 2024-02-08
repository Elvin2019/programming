function search(nums: number[], target: number): number {
     let l = 0, r = nums.length - 1;
     while(l<=r){
        console.log(l, r)
        let m = Math.floor((l + r)/2);
        if(nums[m] === target) return m;
        else if(nums[m] < target) l = m + 1;
        else r = m - 1;
     }
     return -1;
};
