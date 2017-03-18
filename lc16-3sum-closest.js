/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    let closestSum = null;
    let closestDiff = null;
    let maxIndex = nums.length - 1;
//     let pastTarget = false;
    
    if(nums.length < 3)
        return 0;
    if(nums.length === 3)
        return getSum(nums,0,1,2);

    nums.sort(function(a,b){return a- b;})

    var i = 0;
    closestSum = getSum(nums,0,1,2);
    closestDiff = diff(closestSum, target);
    let iBound = maxIndex - 1;
    while(i < iBound ) {
        let targetComplement = target - nums[i];
        
        

        let j = i + 1, k = maxIndex;
        while(j < k) {
            let sum = nums[j] + nums[k];
            let currentDiff = diff(sum,targetComplement);
            
            if(currentDiff < closestDiff){
                closestDiff = currentDiff;
                closestSum = sum + nums[i];
            }
            if(closestDiff === 0) return closestSum;
            
            if(sum < targetComplement){
                while(j < k && nums[j] === nums[++j]);
            }
            else if (sum > targetComplement){
                while(nums[k] === nums[--k] && j < k);
            }
        }

        while(nums[i] === nums[++i]);
    }

    return closestSum;
};

function diff(a,b){
    return Math.abs(a-b);
}

function getSum(arr, i, j ,k) {
    return arr[i] + arr[j] + arr[k];
}