function counter(args) {
    let count = 0;
    count++;
    if (args === 0) {
        return count;
    }
    return function inner(args) {
        count++;
        if (args === 0) {
            return count;
        }

        return inner;
    }
}


console.log(counter(0)); // Output :  1
console.log(counter()(0)); // Output : 2
console.log(counter()()()()(0)); // Output : 5 