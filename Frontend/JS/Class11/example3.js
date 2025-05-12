// Question 1:
// Promise.resolve("Initial value")
//     .then((data) => {
//         console.log("Data:", data);
//         throw new Error("Error from then");
//     })
//     .catch((err) => {
//         console.log("Caught:", err.message);
//     });


// Question 2:
// Promise.resolve("Initial value")
//     .then(() => {
//         console.log('A');
//     })
//     .then(() => {
//         console.log("B");
//         throw new Error("Error from then");
//     })
//     .then(() => {
//         console.log('C');
//     })
//     .catch(() => {
//         console.log("Error");
//     });

// Question 3:
// Promise.resolve("Initial value")
//     .catch(() => {
//         console.log("Error");
//     })
//     .then(() => {
//         console.log('A');
//     })
//     .then(() => {
//         console.log("B");
//         throw new Error("Error from then");
//     })
//     .then(() => {
//         console.log('C');
//     });

// Question 4:

// Promise.reject("Initial value")
//     .then(() => {
//         console.log("B");
//         throw new Error("Custom Error");
//     })
//     .catch(() => {
//         console.log('C');
//     })
//     .catch(() => {
//         console.log("D");
//     });


// Question 5:

// Promise.reject("Initial value")
//     .then(() => {
//         console.log("B");
//         throw new Error("Custom Error");
//     })
//     .catch(() => {
//         console.log('C');
//     })
//     .then(() => {
//         console.log("D");
//     });


// Question 5:

Promise.reject("Initial value")
    .finally(() => {
        console.log("A");
    })
    .then(() => {
        console.log("B");
        throw new Error("Custom Error");
    })
    .catch(() => {
        console.log('C');
    })
    .then(() => {
        console.log("D");
    });



