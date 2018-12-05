/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  const set = new Set();
  for (let i = 0, length = nums.length; i < length; i++) {
    if (!set.has(nums[i])) {
      set.add(nums[i], 1);
    } else {
      set.delete(nums[i]);
    }
  }

  return set.values().next().value;
};

console.log(singleNumber([2, 2, 3, , 1, 1]));
