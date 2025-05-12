// Make your onw custom promise

const delay = function(time) {
    return new Promise((resolve, reject) => {
        if (time > 10000) {
            reject('Time is too long');
        }
        setTimeout(() => {
            resolve(`Done waiting after ${time} ms`);
        }, time);
    });
}

delay(20000)
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.error('Error:', err);
    })
    .finally(() => {
        console.log('Promise completed');
    });