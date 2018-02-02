// Given nums = [1,1,2],

// Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively.
// It doesn't matter what you leave beyond the new length.

var removeDuplicates = function(nums) {
  var current = nums[0]
  for (var i = 1; i < nums.length; i++) {
    if (current === nums[i]){
      nums.splice(i, 1);
      i--;
    } else {
      current = nums[i]
    }
  }
  return nums.length
};

console.log(removeDuplicates([1,1,2]))