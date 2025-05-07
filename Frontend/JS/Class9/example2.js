const fs = require('fs');


// console.log('Start');

// const buffer = fs.readFileSync('f1.txt', 'utf-8');
// console.log(buffer.toString());

// console.log('End');


////

console.log('Start');

fs.readFile('f1.txt', function(err, buffer) {
    if (err) {
        console.log(err);
    } else {
        console.log(buffer.toString());
    }
});

fs.readFile('f2.txt', function(err, buffer) {
    if (err) {
        console.log(err);
    } else {
        console.log(buffer.toString());
    }
});

console.log('End');


