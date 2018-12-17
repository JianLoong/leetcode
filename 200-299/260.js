/**
 * Naive solution.
 *
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  let set = new Set();
  nums.forEach(a => {
    if (!set.has(a)) set.add(a);
    else set.delete(a);
  });
  return [...set];
};

const input = [1, 2, 1, 3, 2, 5];

console.log(singleNumber(input));
