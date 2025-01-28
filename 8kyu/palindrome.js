// Write a function isPalindrome that determines if a given string is a palindrome.
// A string is considered a palindrome if it reads the same forward and backward, ignoring cases, spaces, and punctuation.

function isPalindrome(string) {
    let reversedString = string.split('').reverse().join('');
    return string === reversedString;
}