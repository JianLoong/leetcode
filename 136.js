/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  const map = new Map();
  for (let i = 0, length = nums.length; i < length; i++) {
    if (!map.has(nums[i])) {
      map.set(nums[i], 1);
    } else {
      map.delete(nums[i]);
    }
  }

  return map.keys().next().value;
};

console.log(singleNumber([2, 2, 1, 3, 3]));
