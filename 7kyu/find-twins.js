// Agent 47, you have a new task! Among citizens of the city X are hidden 2 dangerous criminal twins.
// Your task is to identify them and eliminate!
//
// Given an array of integers, your task is to find two same numbers and return one of them,
// for example in array [2, 3, 6, 34, 7, 8, 2] answer is 2.
//
// If there are no twins in the city - return None or the equivalent in the language that you are using.

function eliminate(array) {
    if (array.length === 0 || array.length === 1) return `The array is too short`;
    else {
        for (const arrayElement of array) {
            let rez = array.filter(el => el === arrayElement);
            if (rez.length === 2) return `The duplicate element is ${arrayElement}`;
        }
    }
    return `The array doesn't contain duplicate elements`;
}

console.log(eliminate([5,10,34,1,3,22,10,2]));//The duplicate element is 10
console.log(eliminate([]));//The array is too short
console.log(eliminate([5,10,34,1,3,22,2]))//The array doesn't contain duplicate elements
