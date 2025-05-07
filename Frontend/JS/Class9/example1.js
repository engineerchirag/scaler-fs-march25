console.log("Start");


function print() {
    console.log('I am a function');
}

print();

console.log("End");

/////////

console.log("Start");


function print() {
    console.log('I am a function');
}

setTimeout(() => {
    print();
}, 1000);

console.log("End");


////////

console.log("Start");


function print(msg) {
    console.log(msg);
}

setTimeout(() => {
    print('A');
}, 3000);

console.log("End");

setTimeout(() => {
    print('B');
}, 1000);


///// 


console.log("Start");

while(true) {
    console.log('I am a function');
}

console.log("End");


///////

console.log("Start");

setTimeout(() => {
    console.log(' Timeout callback')
}, 1000);

while(true) {
    console.log('I am a function');
}

console.log("End");


/////////


setTimeout(() => {
    console.log('A');
});

setTimeout(() => {
    console.log('B');
}, 0);

///

setInterval(() => {
    console.log(new Date());
}, 1000);