// Create a method each_cons that accepts a list and a number n, and returns cascading subsets of the list of size n, like so:
//
//     each_cons([1,2,3,4], 2)#=> [[1,2], [2,3], [3,4]]
//
// each_cons([1,2,3,4], 3)#=> [[1,2,3],[2,3,4]]
//
// As you can see, the lists are cascading; ie, they overlap, but never out of order.

function eachCons(array, n) {
    let result = [];
    for (let i = 0; i < array.length - n + 1; i++) {
        const elem = array.slice(i, i + n );
        result.push(elem)
    }
    return result;
}

console.log(eachCons([1,2,3,4], 2));