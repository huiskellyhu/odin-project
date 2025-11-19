const leapYears = function(year) {
    //  divisible by 4
    // not if divisible by 100
    // unless divisible by 400

    const isYearDivisibleByFour = year % 4 === 0;
    const isCentury = year % 100 === 0;
    const isYearDivisibleByFourHundred = year % 400 === 0;

    if (isYearDivisibleByFour &&
        (!isCentury || isYearDivisibleByFourHundred)
    ) {
        return true;
    } else {
        return false;
    }

    // one-line answer
    return year%400 === 0 ? true : (year%100 === 0 ? false : (year % 4 === 0 ? true : false));
};

// Do not edit below this line
module.exports = leapYears;