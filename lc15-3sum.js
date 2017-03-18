/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    var result = [];
        if(nums.length < 3) return result;
        nums.sort(sortNum);
        var i = 0;
       
        nums.sort(sortNum);
    
        
        while(i < nums.length) {
            if(nums[i] > 0) break;
            var j = i + 1;
            var k = nums.length - 1;
            while(j < k) {
                let sum = nums[i] + nums[j] + nums[k];
                if(sum === 0) result.push([nums[i], nums[j], nums[k]]);
                if(sum <= 0) while(nums[j] == nums[++j] && j < k);
                if(sum >= 0) while(nums[k--] == nums[k] && j < k);
            }
            while(nums[i] == nums[++i] && i < nums.length - 2);
        }
        return result;
};

function sortNum(a,b) {
    return a - b;
}