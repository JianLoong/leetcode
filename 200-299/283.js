/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  if (nums == null || nums.length == 0) return;

  let insertPos = 0;
  for (let num of nums) {
    if (num != 0) {
      nums[insertPos++] = num;
    }
  }

  while (insertPos < nums.length) {
    nums[insertPos++] = 0;
  }

  return nums;
};

const input = [-1, 2, 3, 0, 1, 1, 0];
console.log(moveZeroes(input));
