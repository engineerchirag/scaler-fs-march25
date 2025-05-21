// Math Utility files

export const sum = (a, b) => a + b;
export const multiply = (a, b) => a * b;
export const divide = (a, b) => a / b;
export const subtract = (a, b) => a - b;
export const square = (a) => a * a;
export const cube = (a) => a * a * a;
export const power = (a, b) => Math.pow(a, b);
export const sqrt = (a) => Math.sqrt(a);
export const factorial = (n) => {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
};
export const isEven = (n) => n % 2 === 0;
export const isOdd = (n) => n % 2 !== 0;
export const isPrime = (n) => {
    if (n <= 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
};
export const isPalindrome = (str) => {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
};
export const reverseString = (str) => str.split('').reverse().join('');


const capitalizeFirstLetter = (str) => str.charAt(0).toUpperCase() + str.slice(1);

export default capitalizeFirstLetter;