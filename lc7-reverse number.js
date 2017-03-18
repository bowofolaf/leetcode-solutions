/**
 * @param {number} x
 * @return {number}
 */
// var reverse = function(x) {
//     x = x.toString();
//     result = x[0] === '-' ? '-' : '';

//     x = x.split('').reverse().join('');
//     result += x;

//     result = parseInt(result);
    
//     var max_safe_int = Math.pow(2, 31) - 1;
//     var min_safe_int = max_safe_int * -1;
    
//     if (result > max_safe_int || result < min_safe_int) {
//         return 0;
//     }

//     return result;

// };

var reverse = function(x) {
    var negative = false;
    if(x < 0) negative = true;
    
    x = Math.abs(x), unitMulti = 1;
    var result = 0;
    while(x != 0){
        let unit = Math.pow(10,Math.floor(Math.log10(x)));
        let remainder = x % unit;
        let digit = Math.floor(x/unit);
        console.log(digit);
        result = result + (digit * unitMulti);
        unitMulti = unitMulti * 10;
        x = remainder;
    }

    if(negative) return -result;

    return result;
    
};