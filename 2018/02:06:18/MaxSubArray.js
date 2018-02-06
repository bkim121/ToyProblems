var maxSubArray = function(nums) {
    var array = [];
    var max = nums[0];
    var first = 0;
    var last = 0;
    for (var i = 0; i < nums.length; i++){
        var number = nums[i]
        if (nums[i] > max){
            max = nums[i]
        }
        for (var x = i + 1; x < nums.length; x++){
            number = number + nums[x];
            if (max < number) {
                max = number
            }
        }
    }
    return max
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))