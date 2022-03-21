const reverseString = function (phrase) {

    let reversedString = "";

    for (let i = phrase.length - 1; i >= 0; i--) {
        reversedString += phrase.charAt(i);
    }

    return reversedString;

};

// Do not edit below this line
module.exports = reverseString;
