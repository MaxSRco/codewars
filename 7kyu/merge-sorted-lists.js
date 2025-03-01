// Write a function mergeSortedLists that takes two sorted linked lists and merges them into one sorted list.
function mergeSortedLists(l1, l2) {
    return l1.concat(l2).sort((a, b) => a - b);
}

console.log(mergeSortedLists([1, 2, 4], [1, 3, 4]));//[ 1, 1, 2, 3, 4, 4 ]
