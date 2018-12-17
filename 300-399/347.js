/**
 * Naive solution.
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  let map = new Map();
  let result = new Set();

  nums.forEach(a => {
    if (!map.has(a)) {
      map.set(a, 1);
    } else {
      const value = map.get(a);
      map.set(a, value + 1);
    }
  });

  let ans = [...map];

  ans.sort((a, b) => b[1] - a[1]);

  ans = ans.slice(0, k);

  for (let a = 0; a < ans.length; a++) {
    result.add(ans[a][0]);
  }
  return [...result];
};

const nums = [1, 1, 1, 2, 2, 3],
  k = 2;

console.log(topKFrequent(nums, k));
