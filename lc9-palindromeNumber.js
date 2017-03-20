/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    var result = 0, y = x;
    while(y > 0) {
        var digit = y % 10;
        y = (y - digit)/10;
        result = result*10 + digit;
    }
    
    return result == x;
};
