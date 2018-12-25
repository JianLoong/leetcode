/**
 * DP Solution 168ms
 *
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
  if (n <= 0) return 0;
  let memo = [0];

  while (memo.length <= n) {
    console.log(memo);
    let m = memo.length;
    let cntSquares = Number.MAX_SAFE_INTEGER;
    for (let i = 1; i * i <= m; i++) {
      cntSquares = Math.min(cntSquares, memo[m - i * i] + 1);
    }

    memo.push(cntSquares);
  }

  return memo[n];
};

const input = 12;

console.log(numSquares(input));
