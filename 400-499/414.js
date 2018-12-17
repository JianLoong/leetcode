/**
 * Naive solution (76ms)
 *
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
  let set = new Set(nums);
  nums = [...set];
  nums.sort((a, b) => b - a);
  return nums.length >= 3 ? nums[2] : nums[0];
};

const input = [1, 2, 3];

console.log(thirdMax(input));
