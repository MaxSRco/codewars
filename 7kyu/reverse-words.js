// Complete the function that accepts a string parameter, and reverses each word in the string.
// All spaces in the string should be retained.
//
//     Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

// 1. Простой легко читаемый вариант решения, однако, он не учитывает количество пробелов
// или работает корректно в простых случаях
// function reverseWords(str) {
//     let initArray = str.split(' ')
//     let result = []
//     for (let i = 0; i < initArray.length; i++) {
//         let reversedWord = initArray[i].split('').reverse().join('')
//         result.push(reversedWord)
//     }
//     console.log(result.join(' '))
//     return result.join(' ')
// }
//
// reverseWords("This is an example!")

// 2. Более сложный вариант с regex, который учитывает любые разделители слов во фразе
function reverseWords(str) {
    const words = str.split(/(\s+)/)
    const res = words.map(word => {
        if (/\S/) {
            return word.split('').reverse().join('')
        }
        return word
    })
    console.log(res.join(''))
    return res.join('')
}

reverseWords("This is an example!")
