// Your task is to write a function that takes two or more objects
// and returns a new object which combines all the input objects.
//
// All input object properties will have only numeric values. Objects are combined
// so that the values of matching keys are added together.
//
// An example:
//
// const objA = { a: 10, b: 20, c: 30 }
// const objB = { a: 3, c: 6, d: 3 }
// combine(objA, objB) // Returns { a: 13, b: 20, c: 36, d: 3 }

function combine(...objects) {
    const resultObj = {};

    objects.forEach((obj) => {
        for (const objKey in obj) {
            if (resultObj.hasOwnProperty(objKey)) {
                resultObj[objKey] += obj[objKey];
            } else {
                resultObj[objKey] = obj[objKey];
            }
        }
        console.log(resultObj);
    })
    return resultObj;
}

const objA = { a: 10, b: 20, c: 30 };
const objB = { a: 3, c: 6, d: 3 };
const objC = { a: 5, d: 11, e: 8 };
const objD = { c: 3 };



console.log(combine(objB, objA, objC, objD));
