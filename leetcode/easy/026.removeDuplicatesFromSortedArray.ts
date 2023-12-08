function removeDuplicates(nums: number[]): number {
    const unique = [...new Set(nums)];
    Object.assign(nums, unique)
    return unique.length
};
