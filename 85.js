/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
  const n = matrix.length;
  if (n === 0) return 0;
  const m = matrix[0].length;

  const h = new Array(n).fill(0);

  let max = 0;
  for (let j = 0; j < m; j++) {
    for (let i = 0; i < n; i++) {
      if (matrix[i][j] === "1") h[i]++;
      else h[i] = 0;
    }

    for (let i = 0; i < n; i++) {
      let k1 = i - 1;
      while (k1 >= 0 && h[i] <= h[k1]) {
        k1--;
      }
      let k2 = i + 1;
      while (k2 < n && h[i] <= h[k2]) {
        k2++;
      }
      max = Math.max(max, h[i] * (k2 - k1 - 1));
      console.log(k2 - k1 - 1);
    }
    console.log();
  }
  return max;
};

const matrix = [
  ["1", "0", "1", "0", "0"],
  ["1", "0", "1", "1", "1"],
  ["1", "1", "1", "1", "1"],
  ["1", "0", "0", "1", "0"]
];

console.log(maximalRectangle(matrix));
