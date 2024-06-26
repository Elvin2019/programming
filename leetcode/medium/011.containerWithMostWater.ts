function maxArea(height: number[]): number {
    let max = 0;
    let left = 0;
    let right = height.length - 1;
    while (left < right) {
        const area = Math.min(height[left], height[right]) * (right - left);
        if (area > max) max = area;
        if (height[left] < height[right]) left++;
        else right--;
    }
    return max
};

maxArea([1,8,6,2,5,4,8,3,7])

