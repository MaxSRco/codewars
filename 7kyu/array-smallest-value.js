// Given an array of integers your solution should find the smallest integer.
// You can assume, for the purpose of this kata, that the supplied array will not be empty.

function findSmallestInt(arr) {
    let smallestValue = 10e5;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] <= smallestValue) smallestValue = arr[i];
    }
    return smallestValue;
}