function findPeakElement(nums) {
    let peakElement = nums[0];
    let index = 0;
    for (let i = 1; i < nums.length - 1; i++) {
        if ((nums[i] > peakElement) && (nums[i] > nums[i+1])) {
            peakElement = nums[i];
            index = i;
        } else {
            index = nums.at(-1) > peakElement ? nums.length -1 : index;
        }
    }
    return index;
}

console.log(findPeakElement([2,4,6,7,9]));