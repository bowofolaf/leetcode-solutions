/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if(!digits) return [];
    
    map = [
        null, 
        null, 
        ['a','b', 'c'], //2
        ['d', 'e', 'f'],//3
        ['g', 'h', 'i'],//4
        ['j', 'k', 'l'],//5
        ['m', 'n', 'o'],//6
        ['p','q','r','s'],//7
        ['t','u','v'],//8
        ['w','x','y','z']//9
    ];

    var result = map[digits[0]];

    for(let i =1; i< digits.length; i++){
        let letters = map[digits[i]];
        let workingResult = result;
        result = new Array(workingResult.length * letters.length);

        let w=0;
        let id=0;
        while(w < workingResult.length){
            let l = 0;
            while(l < letters.length){
                result[id] = workingResult[w] + letters[l];
                l++; id++;
            }
            w++;
        }

    }

    return result;
};