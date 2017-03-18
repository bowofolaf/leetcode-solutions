var convert = function(s, numRows){
    //var numbers = generateNumbers(s.length);
    var result = "";
    
    var verticalIncrement = (numRows - 1) * 2;
    
    if(s.length <= numRows || numRows == 1){
        return s;
    }

    //first row
    for(i = 0; i < s.length; i+= verticalIncrement) {
        result += s[i];
    }

    //middle rows
    if(numRows > 2)
    {
        for(r = 1; r < numRows-1; r++){
            var zigIncrement = (numRows - r - 1) * 2;
            for(i = r; i < s.length; i+= verticalIncrement){
                result += s[i];
                var j = i + zigIncrement;
                if(j < s.length){
                    result += s[j];
                }

            }
        }
    }

    //last rows
    if(numRows > 1)
    {
        for(i = numRows - 1; i < s.length; i+= verticalIncrement){
            result += s[i];
        }
    }

    return result;
}