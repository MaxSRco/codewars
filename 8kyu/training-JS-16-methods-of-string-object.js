// Coding in function cutIt, function accept 1 parameter:arr. arr is a string array.
//
// The first mission: Traversing arr, find the shortest string length.
//
// The second mission: Traversing arr again, intercept all strings to the shortest string length(Start from index0).
// You can use one of slice() substring() or substr() do it. return the result after finished the work.

function cutIt(arr){
    let minLength = 1e5;
    let resArr = [];
    for (const el of arr) {
        minLength = el.length < minLength ? el.length : minLength;
    }
    for(const element of arr) {
        resArr.push(element.slice(0, minLength));
    }
    return resArr;
}

console.log(cutIt(["codewars","javascript","java"]));