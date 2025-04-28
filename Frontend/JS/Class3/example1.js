/// Example 1;
// const sum = function(a=0, b=0, c=0, d=0) {
//     return a + b + c + d;
// }

// console.log(sum(1,2));
// console.log(sum(1));
// console.log(sum(1,2,3));


/// Example 2;

// const obj1 = {
//     a: 1,
//     b: 2,
//     c: 3,
//     d: {
//         e: 4,
//         f: 5
//     }
// }

// const obj2 = obj1;

// const obj2 = {...obj1};

// obj2.a = 10;

// console.log('obj1 ', obj1.a); 
// console.log('obj2 ', obj2.a); 

// obj2.d.e = 40;
// console.log('obj1 ', obj1.d.e); 
// console.log('obj2 ', obj2.d.e); 

// Example 3;

// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [...arr1];

// arr2.push(6);
// console.log(arr1, arr2);

// Example 4;

// const obj3 = {
//     a: 1,
//     b: 2,
//     c: 3,
// }

// const { b, ...restObj } = obj3;

// console.log(b, restObj);

// Example 5;
// const arr3 = [1, 2, 3, 4, 5];
// const [first, second, ...restArr] = arr3;

// console.log(first, second, restArr);


// Example 6;

// const computeSum = function(...args) {
//     console.log(args);
//     let sum = 0;
//     for (let i = 0; i < args.length; i++) {
//         sum += args[i];
//     }
//     return sum;
// }

// console.log(computeSum(1, 2)); //3
// console.log(computeSum(1,2,3)); //?
// console.log(computeSum(1,2,3,4,5,6)); //?

// Example 7;
const computeSum1 = function(arr) {
    console.log(arr);
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

console.log(computeSum1([1, 2])); //3
console.log(computeSum1([1,2,3])); //?
console.log(computeSum1([1,2,3,4,5,6])); //?




