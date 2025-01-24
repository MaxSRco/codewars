// Let's consider a table consisting of n rows and n columns. The cell located at the intersection of the i-th row ' +
// 'and the j-th column contains number [i х j]. The rows and columns are numbered starting from 1.
//
// You are given a positive integer x. Your task is to count the number of cells in a table that contain number x.

function countNumber(n, x) {
    let count = 0;
    if((n >= 1 && n <= 10e5) && (x >= 1 && x <= 10e9)) {
        for (let i = 1; i <= n; i++) {
            for (let j = 1; j <= n; j++) {
                if (i * j === x) {
                    count++;
                }
            }
        }
    }
    return count;
}

console.log(countNumber(12, 28));