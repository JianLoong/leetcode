/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
  let set = new Set();
  let result = 0;
  nums.forEach(a => {
    if (!set.has(a)) set.add(a);
    else set.delete(a);
  });

  return set.values().next().value;
};

const input = [3, 3, 7, 7, 10, 11, 11];

console.log(singleNonDuplicate(input));
