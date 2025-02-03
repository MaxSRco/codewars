// Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares
// of each element in a is strictly greater than the sum of the cubes of each element in b.

function arrayMadness(a, b) {
    let sumA = 0;
    let sumB = 0;
    a.map(item => {sumA += item ** 2});
    b.map(item => {sumB += item ** 3});
    return sumA > sumB;
}

console.log(arrayMadness([1,2,3,4,5],[2,2,2,2,2,2,1,1,1])); //true