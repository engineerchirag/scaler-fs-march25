function Person(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function() {
        console.log("Hello, my name is " + this.name);
    };
}

Person.prototype.introduce = function() {
    console.log("I am " + this.age + " years old.");
}

const person1 = new Person("Rasagna", 25);
const person2 = new Person("Sachin", 30);

////////////////

class Person{
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.greet = function() {
            console.log("Hello, my name is " + this.name);
        }
    }

    introduce() {
        console.log("I am " + this.age + " years old.");
    }
}

const person1 = new Person("Rasagna", 25);
const person2 = new Person("Sachin", 30);