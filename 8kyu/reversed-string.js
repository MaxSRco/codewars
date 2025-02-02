// Complete the solution so that it reverses the string passed into it.

// function solution(str){
//     let reversed = '';
//     for (let i = str.length - 1; i >= 0; i--) {
//         reversed += str[i];
//     }
//     return reversed;
// }

function solution(str) {
    let reversedString = String(str).split('').reverse().join('');
    // if (typeof str === 'number') {
    //     reversedString = +reversedString;
    // }
    reversedString *= str;
    console.log(typeof str);
    console.log(typeof reversedString);
    return reversedString;
}
console.log(solution(12345));