var maxArea = function(height) {
    var l = 0, r = height.length - 1;
    var max = 0;
    while(l < r)
    {
        var area = (r-l)*(height[l] < height[r]? height[l++] : height[r--]);
        max = max > area? max : area;
    }
    return max;
};