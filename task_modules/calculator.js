// task_modules/calculator.js

export function add(i, j) {
    return i + j;
}

export function subtract(i, j) {
    return i - j;
}

export function multiply(i, j) {
    return i * j;
}

export function divide(i, j) {
    if (j === 0) {
        throw new Error("Division by zero is not allowed");
    }
    return i / j;
}

export function square(n) {
    return n * n;
}

export function squareRoot(n) {
    if (n < 0) {
        throw new Error("Square root of negative number is not allowed");
    }
    return Math.sqrt(n);
}

export function modulus(i, j) {
    return i % j;
}