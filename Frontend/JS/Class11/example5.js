// Create Custom PolyFill for Promise.all

Promise.prototype.myPromiseAll = function(promises) {
    return new Promise((resolve, reject) => {
        const result = [];
        const successCount = 0;
        promises.forEach((promise, index) => {
            promise.then((data) => {
                result[index] = data;
                successCount++;
                if (successCount === promises.length) {
                    resolve(result);
                }
            }).catch((err) => {
                reject(err);
            });
        })

    });
}

// 1.Iterate over the list of promises 
// and return a new promise

// 2.Finally a result array to store all success results 
// by index

// 3.Return > a. If you get error, 
// b. Even all promises get resolved

