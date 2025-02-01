// Consider an array/list of sheep where some sheep may be missing from their place.
// We need a function that counts the number of sheep present in the array (true means present).
// Hint: Don't forget to check for bad values like null/undefined

function countSheep(sheep) {
    let counter = 0;
    sheep.map(item => {
        if (item) {
            counter++;
        }
    })
    return counter;
}

console.log(countSheep([undefined,null,false,true,true,false,null,undefined])); // 2