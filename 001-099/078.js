/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const subsets = nums => {
  const output = new Set();
  solve([], nums, output);
  return [...output];
};

const solve = (soFar, rest, output) => {
  if (rest.length === 0) {
    output.add(soFar);
  } else {
    solve(soFar.concat(rest.slice(0, 1)), rest.slice(1), output);
    solve(soFar, rest.slice(1), output);
  }
};

// https://leetcode.com/problems/palindrome-partitioning/discuss/182307/Java:-Backtracking-Template-General-Approach
const subsetsMethodTwo = nums => {};

console.log(subsetsMethodTwo([1, 3, 2]));

// P(n,r)
// P(3,3) + P(3,2) + P(3,1)

// Propersubset
// 3! - 1 = 2^3 - 1 = 8 - 1 = 7
// And it self 7 +  1 = 8
