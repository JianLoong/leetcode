/**
 * @param {number[][]} A
 * @return {number[][]}
 */
const flipAndInvertImage = A => {
  let result = [];
  for (let arr of A) {
    let row = [];
    let reversed = arr.reverse();
    for (let a of reversed) {
      a === 1 ? row.push(0) : row.push(1);
    }

    result.push(row);
  }
  return result;
};

const input = [[1, 1, 0, 0], [1, 0, 0, 1], [0, 1, 1, 1], [1, 0, 1, 0]];

console.log(flipAndInvertImage(input));
