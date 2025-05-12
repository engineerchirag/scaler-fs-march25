// Callback

// Call me back once done

const fs = require('fs');

// fs.readFile('f1.txt', 'utf8', (err, data) => {
//     if (err) {
//         console.error('Error reading file:', err);
//         return;
//     }
//     console.log('File content:', data);
//     console.log('Call me back once done');
//     fs.readFile('f2.txt', 'utf8', (err, data) => {
//         if (err) {
//             console.error('Error reading file:', err);
//             return;
//         }
//         console.log('File content:', data);
//         console.log('Call me back once done');
//         fs.readFile('f3.txt', 'utf8', (err, data) => {
//             if (err) {
//                 console.error('Error reading file:', err);
//                 return;
//             }
//             console.log('File content:', data);
//             console.log('Call me back once done');
//             fs.readFile('f4.txt', 'utf8', (err, data) => {
//                 if (err) {
//                     console.error('Error reading file:', err);
//                     return;
//                 }
//                 console.log('File content:', data);
//                 console.log('Call me back once done');
//                 fs.readFile('f5.txt', 'utf8', (err, data) => {
//                     if (err) {
//                         console.error('Error reading file:', err);
//                         return;
//                     }
//                     console.log('File content:', data);
//                     console.log('Call me back once done');
//                     fs.readFile('f6.txt', 'utf8', (err, data) => {
//                         if (err) {
//                             console.error('Error reading file:', err);
//                             return;
//                         }
//                         console.log('File content:', data);
//                         console.log('Call me back once done');
//                     });
//                 });
//             });
//         });
//     });
// });


const p1 = fs.promises.readFile('f1.txt', 'utf8');

p1
    .then((data) => {
        console.log('File content: 1', data);
        const p2 = fs.promises.readFile('f2.txt', 'utf8');
        return p2;
    })
    .then((data) => {
        console.log('File content: 2', data);
        const p3 = fs.promises.readFile('f3.txt', 'utf8');
        return p3;
    })
    .then((data) => {
        console.log('File content: 3', data);
        const p4 = fs.promises.readFile('f4.txt', 'utf8');
        return p4;
    })
    .then((data) => {
        console.log('File content: 4', data);
        const p5 = fs.promises.readFile('f5.txt', 'utf8');
        return p5;
    })
    .then((data) => {
        console.log('File content: 5 (final)', data);
    })
    .catch((err) => {
        console.error('Error reading file:', err);
    });