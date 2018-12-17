/**
 * Solution using sorting.
 *
 * @param {number[]} nums
 * @return {number}
 */
let majorityElement = function(nums) {
  return nums.sort()[Math.floor(nums.length / 2)];
};
