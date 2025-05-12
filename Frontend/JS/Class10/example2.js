const fs = require('fs');

// const fileData = fs.readFile('f1.txt', 'utf8', (err, data) => {
//     if (err) {
//         console.error('Error reading file:', err);
//         return;
//     }
//     console.log('File content:', data);
//     console.log('Call me back once done');
//     return data;
// });

// console.log('File content:', fileData);

/// Using Promises

const fileData2 = fs.promises.readFile('f20.txt', 'utf8');
console.log('File content:', fileData2);

// setTimeout(() => {
//     console.log('Promise resolved:', fileData2);
// }, 2000);

fileData2
    .then((data) => {
        console.log('File content within then:', data);
    })
    .catch((err) => {
        console.error('Error reading file:', err);
    });