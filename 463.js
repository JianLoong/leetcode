/**
 * @param {number[][]} grid
 * @return {number}
 */
const islandPerimeter = grid => {
  let diameter = 0;
  if (!grid || grid.length == 0) {
    return 0;
  }
  let length = grid.length;
  for (let r = 0; r < length; r++) {
    let rowLength = grid[r].length;
    for (let c = 0; c < rowLength; c++) {
      if (grid[r][c] == 1) {
        let left = c - 1 < 0 ? 0 : grid[r][c - 1];
        let right = c + 1 >= rowLength ? 0 : grid[r][c + 1];
        let top = r - 1 < 0 ? 0 : grid[r - 1][c];
        let down = r + 1 >= length ? 0 : grid[r + 1][c];
        let numOfAdj = right + left + top + down;
        diameter += 4 - numOfAdj;
      }
    }
  }
  return diameter;
};
const input = [[0, 1, 0, 0], [1, 1, 1, 0], [0, 1, 0, 0], [1, 1, 0, 0]];

console.log(islandPerimeter(input));
