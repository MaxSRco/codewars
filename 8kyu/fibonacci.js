function fibonacci(n) {
    let fibonacciNum = [];
    fibonacciNum[0] = 0;
    fibonacciNum[1] = 1;

    for (let i = 1; i < n; i++) {
        fibonacciNum[i + 1] = fibonacciNum[i] + fibonacciNum[i-1];


    }
    return fibonacciNum[n];
}

console.log(fibonacci(11));