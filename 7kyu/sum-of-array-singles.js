// In this Kata, you will be given an array of numbers in which two numbers occur once and the rest occur only twice.
// Your task will be to return the sum of the numbers that occur only once.
//
// For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15. 
// Every other number occurs twice.

function repeats(arr) {
    // let counter = 0;
    let resultArray = [];
    arr.map(item => {
        let counter = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === item) {
                counter++;
            }
        }
        if (counter === 1) {
            resultArray.push(item);
        }
    })
    return resultArray.reduce((acc, val) => acc += val, 0);
}

console.log(repeats([4,5,7,5,4,8])); // 7 + 8 = 15