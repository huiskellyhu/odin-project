const sumAll = function(first, sec) {
    if (first > sec){
        const temp = first;
        first = sec;
        sec = temp;

        // swap: if (first > sec) [first, sec] = [sec, first];
    }

    let sum = 0;
    for (let i=first; i<=sec; i++){
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;