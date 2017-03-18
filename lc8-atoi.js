/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    var INT_MAX = 2147483647;
    var INT_MIN = -2147483648;
    
    str = str.trim();
    var sign = '';
    if(str[0] && str[0].match(/[\-\+]/)){
        sign = str[0];
        str = str.substring(1);
    }
    
    var result = 0, digit = 0;
    
    for (var x = 0; x < str.length; x++){
        digit = parseInt(str[x]);
        if (isNaN(digit)) {
            break;
        }
        result = (result * 10) + digit;
    }

    if (sign === '-') {
        result = result * -1;
    }
    
    if (result > INT_MAX) {
        return INT_MAX;
    }
    
    if (result < INT_MIN) {
        return INT_MIN;
    }
    return result;
};