/**
 * @param {number[][]} triangle
 * @return {number}
 */
const minimumTotal = triangle => {
  //let pathsMemo = [[2]];
  // 2

  // 2 -> 3

  // 2 -> 3 -> 6
  // 2 -> 3 -> 5

  // 2 -> 4

  // 2 -> 4 -> 5
  // 2 -> 4 -> 7

  // for (let i = 1; i < triangle.length; i++) {
  //   let row = triangle[i];
  //   let previousRowMemo = pathsMemo[i - 1].slice();
  //   let result = [];
  //   console.log(pathsMemo);
  //   for (let j = 0; j < row.length; j++) {
  //   }
  //   // pathsMemo.push(result);
  //   console.log();
  // }
  //int[] A = new int[triangle.size()+1];

  // bottom-up
  let n = triangle.length;
  let dp = triangle[n - 1];
  for (let i = n - 2; i > -1; i--) {
    for (let j = 0; j < triangle[i].length; j++) {
      dp[j] = Math.min(dp[j], dp[j + 1]) + triangle[i][j];
    }
  }
  return dp[0];
};

const input = [[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]];

console.log(minimumTotal(input));
