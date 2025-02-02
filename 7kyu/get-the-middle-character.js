// You are going to be given a non-empty string. Your job is to return the middle character(s) of the string.
//
//     If the string's length is odd, return the middle character.
// If the string's length is even, return the middle 2 characters.
// Examples:
//     "test" --> "es"
// "testing" --> "t"
// "middle" --> "dd"
// "A" --> "A"

function getMiddle(string) {
    const length = string.length;
    return length % 2 === 0 ? string.charAt(length / 2 - 1) + string.charAt(length / 2) : string.charAt(length / 2);
}

console.log(getMiddle('description')); // i