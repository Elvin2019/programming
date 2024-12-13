/**
 Do not return anything, modify nums1 in-place instead.
 */
 function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    const merge1 = nums1.slice(0, m);
    const merge2 = nums2.slice(0, n);
    [...merge1, ...merge2].sort((a, b) => a-b).forEach((n, i)=>{
        nums1[i]=n
    });
 };
 merge([1,2,3,0,0,0], 3, [2,5,6], 3); //[1,2,2,3,5,6]
 merge([1], 1, [], 0)
 