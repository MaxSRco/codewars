// Given: a sequence of different type of values (number, string, boolean).
// You should return an object with a separate properties for each of types presented in input.
// Each property should contain an array of corresponding values.
//
//     keep order of values like in input array
//     if type is not presented in input, no corresponding property are expected
// So, for this input:
//
//     ['a', 1, 2, false, 'b']
// expected output is:
//
// {
//     number: [1, 2],
//     string: ['a', 'b'],
//     boolean: [false]
// }

function separateTypes(input) {
    const result = {};
    input.forEach(elem => {
        let curType = typeof elem;
        !result.hasOwnProperty(curType) ? result[curType] = [elem] : result[curType].push(elem);
        });
    return result;
}

console.log(separateTypes(['a', 1, 2, false, 'b']));