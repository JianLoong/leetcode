/**
 * @param {number[]} nums
 * @return {boolean}
 *
 * Set solution (68ms)
 */
var containsDuplicate = function(nums) {
  const set = new Set(nums);

  return set.size === nums.length;
};

console.log(containsDuplicate([1, 2, 3]));
