const solve = (soFar, rest, output) => {
  if (rest.length === 0) {
    output.add(soFar);
  } else {
    solve(soFar.concat(rest.slice(0, 1)), rest.slice(1), output);
    solve(soFar, rest.slice(1), output);
  }
};

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  const output = new Set();
  solve([], nums, output);
  return [...output];
};

console.log(subsets([1, 3, 2]));
