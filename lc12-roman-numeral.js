/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    if(num == 0) return arguments [2] || "";

    numerals = arguments[1] || getNumerals();
    romanNumber = arguments[2] || '';

    if(num > 4999) return;
    
    romanDigit = digitToRoman(num % 10, numerals)
    
    return intToRoman(Math.floor(num/10), numerals.tens, romanDigit + romanNumber);

};

var getNumerals = function() {
    return {
        ones: "I",
        fives: "V",
        tens: {
            ones: "X",
            fives: "L",
            tens: {
                ones: "C",
                fives: "D",
                tens: {
                    ones: "M",
                    fives: null
                }
            }
        }
    };
};

var digitToRoman = function(digit, numeral) {
    var roman = "";
    if(digit == 0){
        return "";
    }
    if(digit <= 3) {
        while(digit > 0){
            roman+= numeral.ones;
            digit--;
        }
        return roman;
    }

    if(digit == 4) {
       return numeral.ones + numeral.fives
    }

    if(digit == 5) {
        return numeral.fives;
    }

    if(digit == 9) {
        return numeral.ones + numeral.tens.ones;
    }

    if(digit > 5) {
        roman = numeral.fives;
        digit -= 5;
        while(digit > 0){
            roman+= numeral.ones;
            digit--;
        }
        return roman;
    }
};
