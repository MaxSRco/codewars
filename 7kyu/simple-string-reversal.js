// In this Kata, we are going to reverse a string while maintaining the spaces (if any) in their original place.
//
//     For example:
//
//     "our code" => "edo cruo"
// -- Normal reversal without spaces is "edocruo".
// -- However, there is a space at index 3, so the string becomes "edo cruo"
//
// "your code rocks" => "skco redo cruoy".
// "codewars" => "srawedoc"
// More examples in the test cases. All input will be lower case letters and in some cases spaces.

function solve(str) {
    let arr = filterBlanks(str).split('').reverse();
    for (let i = 0; i < str.length; i++) {
        if (str.at(i) === ' ') {
            arr.splice(i, 0,' ');
        }
    }
    return arr.join('');
}

function filterBlanks(item) {
    let filteredStr = '';
    for (let char of item) {
        if (char !== ' ') {
            filteredStr += char;
        }
    }
    return filteredStr;
}
const str = 'i love codewars';
console.log(str);
console.log(solve(str));//s rawe docevoli
