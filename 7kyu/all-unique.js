// Write a program to determine if a string contains only unique characters. Return true if it does and false otherwise.
//
// The string may contain any of the 128 ASCII characters. Characters are case-sensitive, e.g. 'a' and 'A' are considered different characters.

function hasUniqueChars(str) {
    if (str === '') return true;
    for (let i = 0; i < str.length; i++) {
        let counter = 0;
        for (let j = 0; j < str.length; j++) {
            if (str.charCodeAt(i) === str.charCodeAt(j)) {
                counter++;
            }
        }
        if (counter >= 2) return false;
    }
    return true;
}
