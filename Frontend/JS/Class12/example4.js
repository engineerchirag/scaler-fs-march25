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

// Promise.allSettled([
//     delay(7000),
//     delay(3000),
//     delay(5000)
// ]).then((data) => {
//     console.log(data);
// });


Promise.myAllSettled([
    delay(7000),
    delay(3000),
    delay(5000)
]).then((data) => {
    console.log(data);
});

Promise.prototype.myAllSettled = function(promises) {
    // Implementation of myAllSettled

    // 0. Create a new promise
    // 1. Iterate over the array of promises
    // 2. Create an array to store the results
    // 3. Keep adding results to the array (success or failure)
    // 4. return a promise
    return new Promise((resolve, reject) => {
        const results = [];
        let count = 0;
        promises.forEach((promise) => {
            promise.then((data, index) => {
                results[index] = {
                    status: 'fulfilled',
                    value: data
                }
                count++;
                if (count === promises.length) {
                    resolve(results)
                }
            })
            .catch(err => {
                results[index] = {
                    status: 'rejected',
                    reason: err
                }
                count++;
                if (count === promises.length) {
                    resolve(results);
                }
            })
        })
    });

    
}