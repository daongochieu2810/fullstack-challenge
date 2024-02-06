const readline = require('readline');

// Task 1: Simple Summation Function
function simpleSum(n) {
    let result = 0;
    for (let i = 1; i <= n; i++) {
        result += i;
    }
    return result;
}

// Task 2: Recursive Summation Function
function recursiveSum(n) {
    if (n === 0) {
        return 0;
    }
    return n + recursiveSum(n - 1);
}

// Task 3: Mathematical Formula Implementation
function formulaSum(n) {
    return (n * (n + 1)) / 2;
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Prompt user for input
rl.question('Enter a number (n): ', (input) => {
    const n = parseInt(input);

    // Task 1: Simple Summation
    const resultSimple = simpleSum(n);
    console.log(`Task 1: ${resultSimple}`);

    // Task 2: Recursive Summation
    const resultRecursive = recursiveSum(n);
    console.log(`Task 2: ${resultRecursive}`);

    // Task 3: Formula Summation
    const resultFormula = formulaSum(n);
    console.log(`Task 3: ${resultFormula}`);

    rl.close();
});
