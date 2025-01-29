// Find the maximum product of two distinct elements in an array of integers.
function maxProduct(nums) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length - i - 1; j++) {
            if (nums[j] > nums[j + 1]) {
                let index1 = j;
                let index2 = j + 1;
                let temp = nums[index1];
                nums[index1] = nums[index2];
                nums[index2] = temp;
            }
        }
    }
    return nums.at(-1) * nums.at(-2);
}

console.log(maxProduct([3,4,5,2,6]));