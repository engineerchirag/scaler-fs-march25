Promise.resolve("Hello")
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.error('Error:', err);
    })
    .finally(() => {
        console.log('Promise completed');
    });

Promise.reject("Error")
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.error('Error:', err);
    })
    .finally(() => {
        console.log('Promise completed');
    });