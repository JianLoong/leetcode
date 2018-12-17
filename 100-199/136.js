/**
 * Solution using set. If there is no value present, it will be added
 * to the set. If it is present, it will be removed. Since every element
 * would exactly appear twice besides 1.
 *
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
