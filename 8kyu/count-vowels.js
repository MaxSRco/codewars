// Write a function countVowels that takes a string and returns the number of vowels in it.
function countVowels(str) {
    str = str.split('');

    let counter = 0;
    const vowels = ['a', 'e', 'i', 'o', 'u', 'y'];

    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            counter++;
        }
    }
    return counter;
}

