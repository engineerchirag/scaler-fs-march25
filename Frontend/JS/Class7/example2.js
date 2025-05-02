// Closure

function x() {
    return function() {
        console.log("Hello");
    }
}

var y = x();


function counter() {
    var count = 0;
    debugger;
    return function(){
        debugger;
        count++;
        return count;
    }
}

const incrementCount = counter();

incrementCount();// 1
incrementCount();// 2
incrementCount();// 3
incrementCount();// 4


////////////////////

function createCounter(init, delta) {
    var count = init;
    return function() {
        count += delta;
        return count;
    }
}

const c1 = createCounter(0, 5);
const c2 = createCounter(5, 2);

c1(); // 5
c1(); // 10

c2(); // 7
c2(); // 9
c2(); // 11

// eg: 5,7,9,11,13,15
// eg: 0,5,10,15


// Nested closure

function x() {
    const a=10;
    return function y() {
        const b=20;
        return function z() {
            const c=30;
            console.log(a+b+c);
        }

    }
}

const y1 = x();
const z1 = y1();

z1(); // 60


///// Curry function

function x(a) {
    return function y(b) {
        return function z(c) {
            console.log(a+b+c);
        }
    }
}

// const add = x(10,20,30);

const y1 = x(10);
const z1 = y1(20);

z1(30);



/// Question:

function outer() {
    let arrFn = [];
    for (var i = 0; i < 3; i++) {
        arrFn.push(function fn() {
            console.log(i);
        })
    }
    return arrFn;
}
let arrFn = outer();
arrFn[0]();
arrFn[1]();
arrFn[2]();
