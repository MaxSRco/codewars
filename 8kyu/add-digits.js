function addDigits(num) {
    let sum = 0;
    let digit = String(num).split('');
    for (let i = 0; i < digit.length; i++) {
        sum += +digit[i];
    }
    while (sum >= 10) {
        sum = addDigits(sum);
    }
    return sum;
}

console.log(addDigits(18957462486953214568)); // 3
// console.log(addDigits(23452346)); // 2