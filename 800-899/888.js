/**
 * Naive solution (604ms)
 *
 * First sum the two arrays.
 *
 * After that iterate them and decrease each of the sum by swapping.
 * If the sum matches, the pairs are found.
 *
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var fairCandySwap = function(A, B) {
  let sumA = A.reduce((a, b) => a + b);
  let sumB = B.reduce((a, b) => a + b);

  for (let x = 0; x < A.length; ++x) {
    for (let y = 0; y < B.length; ++y) {
      let totalA = sumA - A[x] + B[y];
      let totalB = sumB - B[y] + A[x];
      if (totalA === totalB) {
        return [A[x], B[y]];
      }
    }
  }
};

/**
 * The scenario here is that,
 * a) Alice sum is always bigger.
 * b) Because it is bigger, in order for both of them
 *    to have the same sum, the difference needs to be divided by two.
 *
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
const fairCandySwapTwo = (A, B) => {
  let sumA = A.reduce((a, b) => a + b);
  let sumB = B.reduce((a, b) => a + b);
  let diff = (sumB - sumA) / 2;
  let setB = new Set(B);

  for (let x of A) {
    if (setB.has(x + diff)) {
      return [x, x + diff];
    }
  }
};

const A = [1, 2, 5],
  B = [2, 4];

console.log(fairCandySwap(A, B));
console.log(fairCandySwapTwo(A, B));
