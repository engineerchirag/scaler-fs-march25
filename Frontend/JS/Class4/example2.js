const arr = [1, 2, [3, 4], [5, [6, 7]], 8];

// Output: [1, 2, 3, 4, 5, 6, 7]

const flatten = (arr) => {
    const result = [];

    for(let i = 0; i < arr.length; i++) {
        if (!Array.isArray(arr[i])) {
            result.push(arr[i]);
        } else {
            const flattenedArr = flatten(arr[i]);
            result.push(...flattenedArr);
            // result = [...result, ...flattenedArr];
            // result = result.concat(flattenedArr);
        }
    } 
    return result;
};

console.log(flatten(arr)); // [1, 2, 3, 4, 5, 6, 7]



const obj1 = {
    name: "Arunava",
    address: {
        city: "Kolkata",
        state: "West Bengal",
        country: "India"
    },
    hobbies: ["cricket", "football"]
};

// Write a deep copy function
