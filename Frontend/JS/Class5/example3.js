// Getter & Setter


class ClassName{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}


const person1 = new ClassName("Rasagna", 25);
console.log(person1.name);
person1.name = "Sachin";
console.log(person1.name);


class ClassName{
    constructor(name, age){
        this._name = name;
        this._age = age;
    }

    get age(){
        return Math.round(this._age);
    }

    set age(num){
        if(num < 0){
            console.log("Age cannot be negative");
            return;
        }
        this._age = num;
    }
}


const person1 = new ClassName("Rasagna", 25);
console.log(person1.age);
person1.age = 30;
console.log(person1.age);



// Question:

// Create a Student class which stores
// - firstName & lastName
// - provide way to access fullName & set fullName 

class Student{
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    }

    set fullName(name){
        const [first, last] = name.split(" ");
        this.firstName = first;
        this.lastName = last;
    }
}

const student1 = new Student("Rasagna", "Singamsetty");
console.log(student1.fullName);
student1.fullName = "Sachin Tendulkar";
console.log(student1.fullName);


