console.log(a); // undefined

console.log(this); // window

/////////////////////////////

function sum(a, b) {
    console.log(this);
    total = a + b;
}

sum(1, 2); // window > 3
console.log(total); // 3


//////////////////////////

let cap = {
    name: "Steve Rogers",
    age: 100,
    sayHi: function() {
        console.log(this);
        // console.log(this.name);
    }
}

console.log(cap.sayHi()); // cap object > Steve Rogers

//////////////////////////

let sayHiFn = cap.sayHi;

sayHiFn(); // window

let cap2 = {
    name: 'Simram M'
}

cap2.sayHi = cap.sayHi;

cap2.sayHi();

/////////////////////////////////



let cap3 = {
    firstName : "Steve",
    sayHi : function(){
        console.log("53", this.firstName); // steve
        const iAmInner = function(){
            console.log("55",this.firstName); // undefined
        }
        iAmInner();
    }
}
cap3.sayHi();


//////////////

// Named function
function sum(a, b) {
    total = a + b;
}

// Anonymous function
const sum = function(a, b) {
    total = a + b;
}

// Arrow function
const sum = (a, b) => {
    total = a + b;
}

////////////

let cap4 = {
    firstName : "Steve",
    sayHi : function(){
        console.log("53", this.firstName); // steve
        const iAmInner = () => {
            console.log("55",this.firstName); 
        }
        iAmInner();
    }
}
cap4.sayHi();

//////////

let cap5 = {
    firstName : "Steve",
    sayHi : () => {
        console.log(this);
        console.log("53", this.firstName);
        const iAmInner = () => {
            console.log("55", this.firstName); 
        }
        iAmInner();
    }
}
cap5.sayHi();


//////////////////


let cap6 = {
    firstName : "Steve",
    sayHi : function(){
        console.log("53", this.firstName); // steve
        const subInner = () => {
            console.log("54", this.firstName); // steve
            const iAmInner = ()=> {
                console.log("55", this.firstName); // steve
            }
            iAmInner();
        }
        subInner();
    }
}
cap6.sayHi();

//////////////////////

let ladder = {
    stop:0,
    up(){
        this.stop ++ ;
        return this;
    },
    down(){
        this.stop -- ;
        return this;
    },
    showStep: function(){
        console.log(this.stop);
    }
}
ladder.up();
ladder.up();
ladder.up();
ladder.down();
ladder.showStep();

ladder.up().up().up().down().showStep(); // 2


//////////////////


Array.prototype.myMap = function(cb) {
    let arr = [];
    for(let i = 0; i < this.length; i++) {
        arr.push(cb(this[i], i, this));
    }
    return arr;
}



////////

// call, apply, bind

let cap7 = {
    firstName : "Spandana",
    sayHi : function(prefix){
        console.log(prefix + this.firstName);
    }
}

let cap8 = {
    firstName : "Sachin"
}

cap7.sayHi(); // Spandana

let sayHiFn = cap7.sayHi;
sayHiFn(); // undefined

cap7.sayHi.call(cap8, 'Hello '); // Sachin
sayHiFn.call(cap7, 'Hello '); // Spandana
sayHiFn.call(cap8, 'Hi '); // Sachin


cap7.sayHi.apply(cap8, ['Hello ']); // Sachin
sayHiFn.apply(cap7, ['Hello ']); // Spandana
sayHiFn.apply(cap8, ['Hello ']); // Sachin


let sayHiFn2 = cap7.sayHi.bind(cap8, 'Hello ');
sayHiFn2(); // Sachin
sayHiFn2.call(cap7, 'Hello '); // Sachin

sayHiFn2.bind(cap7, 'Hello '); // Sachin