const reverseString = function(str) {
    let result = "";

    for(let i=str.length-1; i>=0; i--){
        result += str.at(i);
    }

    return result;

    // one line
    // return str.split("").reverse().join("");
}

module.exports = reverseString;