const repeatString = function (phrase, number) {

    if (number < 0) return "ERROR";

    let repeatedString = "";

    for (let i = 0; i < number; i++) {
        repeatedString += phrase;
    }

    return repeatedString;

};

// Do not edit below this line
module.exports = repeatString;
