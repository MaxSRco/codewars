// Given an array/list [] of integers , Find the product of the k maximal numbers.
// Array/list size is at least 3 .
// Array/list's numbers Will be mixture of positives , negatives and zeros
// Repetition of numbers in the array/list could occur.
//
// maxProduct ({4, 3, 5}, 2) ==>  return (20)
// Explanation:
// Since the size (k) equal 2 , then the subsequence of size 2 whose gives product of maxima is 5 * 4 = 20
//
// maxProduct ({8, 10 , 9, 7}, 3) ==>  return (720)
// Explanation:
// Since the size (k) equal 3 , then the subsequence of size 3 whose gives product of maxima is  8 * 9 * 10 = 720
//
// maxProduct ({-4, -27, -15, -6, -1}, 2) ==> return (4)
// Explanation:
//     Since the size (k) equal 2 , then the subsequence of size 2 whose gives product of maxima is  -4 * -1 = 4

function maxProduct(numbers, size){
    return  numbers.sort((a, b) => b - a).slice(0, size).reduce((product, elem) => product *= elem, 1);
}
