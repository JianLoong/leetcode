/**
 * Naive solution with O(N) space.
 *
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
  const set = new Set();
  const result = [];
  nums.forEach(a => {
    !set.has(a) ? set.add(a) : result.push(a);
  });

  return result;
};

const nums = [1, 2, 3, 3, 4];

console.log(findDuplicates(nums));
