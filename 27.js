/**
 * Naive solution using splice.
 *
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
let removeElement = function(nums, val) {
  nums.sort();
  let start = nums.indexOf(val);
  let end = nums.lastIndexOf(val);

  if (start != -1 && end != -1) nums.splice(start, end - start + 1);
};

/**
 * Two pointer solution.
 *
 * @param {number[]} nums
 * @param {number} val
 */
let removeElement = function(nums, val) {
  let i = 0;
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] != val) {
      nums[i] = nums[j];
      i++;
    }
  }
  return i;
};

let nums = [2];

removeElement(nums, 3);

console.log(nums);
