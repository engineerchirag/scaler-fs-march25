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

// Promise.all([
//     delay(1000),
//     delay(8000),
//     delay(5000)
// ]).then((data) => {
//     console.log(data);
// }).catch((err) => {
//     console.error('Error:', err);   
// });

Promise.all([
    delay(21000),
    delay(11000),
    delay(5000)
]).then((data) => {
    console.log(data);
}).catch((err) => {
    console.error('Error:', err);   
});