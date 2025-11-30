const fibonacci = function(ind) {
    const fib = [0, 1];

    for (let i=2; i<=ind; i++){
        fib[i] = fib[i-1] + fib[i-2];
    }

    return fib[ind];
};

// Do not edit below this line
module.exports = fibonacci;