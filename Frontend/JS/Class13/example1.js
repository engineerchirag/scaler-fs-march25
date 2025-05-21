// ES6

// 1. let and const

// Example 1:
var a = 10;
var a = 20;

// Example 2:

a = 30;
var a;

// 2. Arrow Functions

// Example 1:

const add = (a, b) => a + b;
const add = (a, b) => {
  return a + b;
};

// 3. String literals


const name = "John";
const age = 30;
const message = `My name is ${name} and I am ${age} years old.`;

// 4. Destructuring

const person = {
  name: "John",
  age: 30,
  address: {
    city: "New York",
    state: "NY"
  }
};

const { name, age } = person;
const { city, state } = person.address;

const numbers = [1, 2, 3, 4, 5];
const [first, second, ...rest] = numbers;

// 5. Default parameters

const add = (a, b = 0) => a + b;

// 6. Spread operator

const numbers1 = [1, 2, 3];
const numbers2 = [4, 5, 6];
const allNumbers = [...numbers1, ...numbers2];


function add(...nums) {
    console.log(nums); // [1, 2, 3, 4, 5]
}

add(1, 2, 3, 4, 5);


// 7. Object shorthand
const name = "John";
const age = 30;
const cityKey = "city";
const cityValue = "New York";
const person = {
    name,
    age,
    [cityKey]: cityValue
}

// 8. Import and Export
import { sum, multiply } from './example2.js';
import capitalizeFirstLetter from './example2.js';

const add2Values = sum(2, 3);

// 9. Symbols

const symbol1 = Symbol("description");
const symbol2 = Symbol("description");

const person = {
  name: "Learner",
  age: 30,
  [symbol1]: "A person"
};

person['name'] // 'Learner'
person['age'] // 30
person[symbol2] //undefined
person[symbol1] //'A person'
symbol1.toString() // 'Symbol(description)'

// 10. Proxy in 

let obj = { eng: 'Hinglish', math: 'Mathematics'};

let handler = {
    get(target, prop) {
        if (prop in target) {
            return target[prop];
        } else {
            throw new Error(`Missing key ${prop}`)
        }
    },

    set(target, prop, value) {
        if (prop in target) {
            target[prop] = value;
        } else {
            throw new Error(`Cannot add new key ${prop}`)
        }
    }
}

let proxyObj = new Proxy(obj, handler);

proxyObj.eng;
proxyObj.hindi;

proxyObj.math = 'MATH';
proxyObj.hindi = 'HINDI';






