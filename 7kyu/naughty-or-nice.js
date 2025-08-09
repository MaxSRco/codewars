// In this kata, you will write a function that receives an array of string and returns a string
// that is either 'naughty' or 'nice'.
// Strings that start with the letters b, f, or k are naughty.
// Strings that start with the letters g, s, or n are nice.
// Other strings are neither naughty nor nice.
//
// If there is an equal amount of bad and good actions, return 'naughty'
//
// Examples:
//
// bad_actions = ['broke someone\'s window', 'fought over a toaster', 'killed a bug']
// whatListAmIOn(bad_actions)
// #-> 'naughty'
// good_actions = ['got someone a new car', 'saved a man from drowning', 'never got into a fight']
// what_list_am_i_on(good_actions)
// #-> 'nice'
// actions = ['broke a vending machine', 'never got into a fight', 'tied someone\'s shoes']
// what_list_am_i_on(actions)
// #-> 'naughty'

// function whatListAmIOn(actions) {
//     const badLetters = ['b', 'f', 'k']
//     const niceLetters = ['g', 's', 'n']
//
//     let bad = 0
//     let nice = 0
//
//     for (const action of actions) {
//         const firstLetter = action[0].toLowerCase()
//         if (badLetters.includes(firstLetter)) bad++
//         else if (niceLetters.includes(firstLetter)) nice ++
//     }
//     return bad >= nice ? 'naughty' : 'nice'
// }

const  whatListAmIOn = actions => {
    let [naughty,nice] = [0,0]
    actions.forEach(a=>{
        if ( /[bfk]/i.test(a[0]) ) naughty += 1
        if ( /[gsn]/i.test(a[0]) ) nice += 1
    })
    // return nice>naughty ? 'nice' : 'naughty'
    return nice === 0 && naughty === 0 ? "There's no result" : nice > naughty ? "nice" : "naughty"
}

console.log(whatListAmIOn(['Broke someone\'s window', 'Fought over a toaster', 'Killed a bug']))
console.log(whatListAmIOn(['got someone a new car', 'saved a man from drowning', 'never got into a fight']))
console.log(whatListAmIOn(['broke someone\'s window', 'never got into a fight', 'saved a man from drowning']))
