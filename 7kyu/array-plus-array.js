// I'm new to coding, and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.
//
// P.S. Each array includes only integer numbers. Output is a number too.

console.log(arrayPlusArray([1, 2, 3], [4, 15, 6, 9]));


function arrayPlusArray(arr1, arr2) {
    return getArraySum(arr1) + getArraySum(arr2);
}

function getArraySum(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}
