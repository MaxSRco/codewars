// Consider an array of integers a. Let min(a) be its minimal element, and let avg(a) be its mean.
// Define the center of the array a as array b such that:
//
// - b is formed from a by erasing some of its elements.
// - For each i, |b[i] - avg(a)| < min(a).
// - b has the maximum number of elements among all the arrays
// satisfying the above requirements.
//     Given an array of integers, return its center.
//
// Input/Output
// [input] integer array a, unsorted non-empty array of integers.
// 2 ≤ a.length ≤ 50, 1 ≤ a[i] ≤ 350.
//
// [output] an integer array
//
// Example
// For a = [8, 3, 4, 5, 2, 8], the output should be [4, 5]. Here min(a) = 2, avg(a) = 5.
// For a = [1, 3, 2, 1], the output should be [1, 2, 1]. Here min(a) = 1, avg(a) = 1.75.

function arrayCenter(a) {
    let res = [];
    let avg = a.reduce((acc, item) => acc += item, 0) / a.length;
    let min = Math.min(...a);
    a.filter(item => {
        if (Math.abs(item - avg) < min) {
            res.push(item);
        }
    })
    return res;
}

console.log(arrayCenter([8, 3, 4, 5, 2, 8])); // [4, 5]