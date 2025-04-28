// Named Function
function sum() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}

sum.count = 10;

// Anonymous function
const sum = function() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}

// Arrow function
const sum = () => {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}

// Higher Order Function

const compute = (fn, a, b) => {
    return fn(a, b);
}

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

const result1 = compute(add, 10, 5); // 15
const result2 = compute(subtract, 10, 5); // 5
const result3 = compute(multiply, 10, 5); // 50
const result4 = compute(divide, 10, 5); // 2


function x(a) {
    return function y(b) {
        return a + b;
    }
}


const arr1 = [1, 2, 3];

for (let i = 0; i < arr1.length; i++) {
    console.log(arr1[i]);
}

arr1.forEach((item, index) => {
    console.log(item, index);
});