console.log("Hello World - NodeJs - Server");


var a = 10;
var a = 11; // Yes
a1 = 12;
var a1;



let b = 20;
let b = 21; // No
b = 22; // Yes

b1 = 23;
let b1; // No


const c = 30;
const c = 31; // No
c = 32; // No

c1 = 33;
const c1; // No

-------------------


console.log('Starting...', i);

i = 10;

console.log('Intermediate...', i);

var i = 20;

console.log('Ending...', i);

-------

var i; // Hoisted

console.log('Starting...', i);

i = 10;

console.log('Intermediate...', i);

i = 20;

console.log('Ending...', i);


---- 

{

console.log('Starting...', i);

i = 10;

console.log('Intermediate...', i);

let i = 20; // Before this line: TDZ

console.log('Ending...', i);

}


---------


function sum () {
    for(var i = 0; i < 10; i++) {
        console.log(i);
    }

    console.log('Outside loop:', i); // 10
}

function sum () {
    for(let i = 0; i < 10; i++) {
        console.log(i);
    }

    console.log('Outside loop:', i); 
}


function outer() {
    var x = 10;

    function inner() {
        console.log(x);
    }

    inner();
}


----------
function real() {
    console.log("I am real. Always run me");
}
function real() {
    console.log("No I am real one ");
}
function real() {
    console.log("You both are wasted");
}

real();


-----------


var real = function() {
    console.log("I am real. Always run me");
}
var real = function() {
    console.log("No I am real one ");
}

real();

var real = function() {
    console.log("You both are wasted");
}


----
var real;

real = 1;
real = 2;

real;

real = 3;


--------------------




let fruits = "apple";
console.log('A', fruits);
{
    console.log('B', fruits);
    let fruits; 
    console.log('C', fruits); 
    fruits = "orange";
    {
        console.log('D', fruits);
    }
    console.log('E', fruits);
}
console.log('F', fruits); 