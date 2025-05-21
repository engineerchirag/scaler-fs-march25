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

// function handleDelay() {
//     let data = '';
//     delay(2000).then((result) => {
//         data = result;
//     }).catch((err) => {
//         console.error('Error:', err);
//     });
//     return data;
// }

async function handleDelay() {
    try {
        const data = await delay(2000);
        return data;    
    } catch(err) {
        console.error('Error:', err);
    }
}

// const handleDelay = async () => {
//     const data = await delay(2000);
//     return data;
// }

handleDelay();

