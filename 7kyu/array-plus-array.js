// I'm new to coding, and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.
//
// P.S. Each array includes only integer numbers. Output is a number too.

function arrayPlusArray(arr1, arr2) {
    let sumElements = 0;
    if(arr1.length === arr2.length) {
        for (let i = 0; i < arr1.length; i++) {
            sumElements += arr1[i] + arr2[i];}
    } else {
        for (let i = 0; i < arr1.length; i++) {
            sumElements += arr1[i];
        }
        for (let i = 0; i < arr2.length; i++) {
            sumElements += arr2[i];
        }
    }
    return sumElements;
}

console.log(arrayPlusArray([1, 2, 3], [4, 5, 6, 9]));