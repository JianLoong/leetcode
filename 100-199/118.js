/**
 * DP Solution (52ms)
 *
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  if (numRows === 0) return [];
  if (numRows === 1) return [[1]];
  if (numRows === 2) return [[1], [1, 1]];
  let result = [[1], [1, 1]];
  let current = 3;

  while (current <= numRows) {
    let previousRow = result[result.length - 1];
    let currentRow = [];
    currentRow.push(1);
    let i = 0;
    while (i < current - 2) {
      currentRow.push(previousRow[i] + previousRow[i + 1]);
      i++;
    }
    currentRow.push(1);
    result.push(currentRow);
    current++;
  }

  return result;
};

const input = 5;

console.log(generate(input));
