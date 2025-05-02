
function memoize(fn) {
    let cache = {};
    return function(a, b){
        const key = `${a},${b}`;
        if (cache[key]) { // How to check if cache is available?
            // How to update cache?
            return cache[key];
        }

        let newValue = fn(a, b);
        cache[key] = newValue; // How to update cache?
        return newValue;
    }
}


function add(a, b) {
    console.log('Calculating...');
    return a + b;
}


const memoizedAdd = memoize(add);
memoizedAdd(1, 2); // 3 Calculating...
memoizedAdd(1, 2); // 3 (cached result)
memoizedAdd(2, 3); // 5 Calculating...
memoizedAdd(2, 3); // 5 (cached result)
memoizedAdd(1, 2); // 3 (cached result)