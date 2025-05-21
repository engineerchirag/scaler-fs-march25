const delay = function(time) {
    return new Promise((resolve, reject) => {
        if (time > 10000) {
            reject(`Time is too long ${time}ms`);
        }
        setTimeout(() => {
            resolve(`Done waiting after ${time} ms`);
        }, time);
    });
}

// Promise.all Method

// Promise.all([
//     delay(21000),
//     delay(11000),
//     delay(5000)
// ]).then((data) => {
//     console.log(data);
// }).catch((err) => {
//     console.error('Error:', err);   
// });

// Promise.allSettled Method

// Promise.allSettled([
//     delay(7000),
//     delay(3000),
//     delay(5000)
// ]).then((data) => {
//     console.log(data);
// });

// Promise.race Method

// Promise.race([
//     delay(11000),
//     delay(3000),
//     delay(5000)
// ]).then((data) => {
//     console.log(data);
// }).catch((err) => {
//     console.error('Error:', err);   
// });

// Promise.any Method

// Promise.any([
//     delay(11000),
//     delay(3000),
//     delay(5000)
// ]).then((data) => {
//     console.log(data);
// }).catch((err) => {
//     console.error('Error:', err);   
// });