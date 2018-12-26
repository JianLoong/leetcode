/**
 * @param {number[]} widths
 * @param {string} S
 * @return {number[]}
 */
var numberOfLines = function(widths, S) {
  let lines = 1;
  let width = 0;
  for (let c of S) {
    let w = widths[c.charCodeAt(0) - 97];
    width += parseInt(w);
    if (width > 100) {
      lines++;
      width = w;
    }
  }

  return [lines, width];
};

const widths = [
  10,
  10,
  10,
  10,
  10,
  10,
  10,
  10,
  10,
  10,
  10,
  10,
  10,
  10,
  10,
  10,
  10,
  10,
  10,
  10,
  10,
  10,
  10,
  10,
  10,
  10
];
const S = "abcdefghijklmnopqrstuvwxyz";

console.log(numberOfLines(widths, S));
