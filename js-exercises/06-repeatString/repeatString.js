// repeats the string a given number of times
const repeatString = function (str, num) {
    if (num < 0) {
        return 'ERROR';
    }

    let result = ""
    for (let i=0; i<num; i++){
        result += str;
    }
    return result;
    
    // one line solution
    // return num < 0 ? 'ERROR' : str.repeat(num);
}


// Do not edit below this line
module.exports = repeatString;