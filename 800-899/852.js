/**
 * @param {number[]} A
 * @return {number}
 */
var peakIndexInMountainArray = function(A) {
  let i = 0;
  while (A[i] < A[i + 1]) {
    i++;
  }
  return i;
};

const input = [0, 2, 1, 0, 1, 2, 3];

console.log(peakIndexInMountainArray(input));
