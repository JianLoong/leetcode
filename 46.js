/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// Using heap method.
// https://stackoverflow.com/questions/9960908/permutations-in-javascript/37580979#37580979
var permute = function(permutation) {
  let length = permutation.length,
    result = [permutation.slice()],
    c = new Array(length).fill(0),
    i = 1,
    k,
    p;

  while (i < length) {
    if (c[i] < i) {
      k = i % 2 && c[i];
      p = permutation[i];
      permutation[i] = permutation[k];
      permutation[k] = p;
      ++c[i];
      i = 1;
      result.push(permutation.slice());
    } else {
      c[i] = 0;
      ++i;
    }
  }
  return result;
};

console.log(permute([1, 2, 3]));
