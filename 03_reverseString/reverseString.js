const reverseString = function(stringToReverse) {
    let charList = [...stringToReverse];
    let reversedCharList = [];

    for (char of charList) {
        reversedCharList.unshift(char);
    };

    return reversedCharList.join('');
};

// Do not edit below this line
module.exports = reverseString;
