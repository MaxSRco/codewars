// You're in ancient Greece and giving Philoctetes a hand in preparing a training exercise for Hercules! You've filled a pit with two different ferocious mythical creatures for Hercules to battle!
//
//     The formidable "Orthus" is a 2 headed dog with 1 tail. The mighty "Hydra" has 5 heads and 1 tail.//
//     Before Hercules goes in, he asks you "How many of each beast am I up against!?".//
//     You know the total number of heads and the total number of tails, that's the dangerous parts, right? But you didn't consider how many of each beast.
//
//     Task
//     Given the number of heads and the number of tails, work out the number of each mythical beast!//
//     The data is given as two parameters. Your answer should be returned as an array://
//     VALID ->      [24 , 15]           INVALID ->  "No solutions"
//     [Orthus, Hydra]
// If there aren't any cases for the given amount of heads and tails - return "No solutions"

function beasts (heads, tails) {
    let hydra = Math.floor((heads - 2 * tails) / 3);
    let orthus = tails - hydra;
    return ((2 * orthus + 5 * hydra !== heads) || hydra < 0 || orthus < 0) ? 'No solution' : [orthus, hydra];
}

console.log(beasts(371, 88));
