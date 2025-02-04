// In this Kata, you will be given an integer array and your task is to return the sum of elements occupying prime-numbered indices.
//
// The first element of the array is at index 0.

function total(arr) {
    return arr.filter((element, index) => isPrime(index)).reduce((acc, element) => acc += element, 0);
}

function isPrime(n) {
    for (let i = 2; i < n; i++) {
        if (n % i === 0) return false;
    }
    return n > 1;
}

// console.log(isPrime(101));
console.log(total([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]));