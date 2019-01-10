/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var transpose = function(A) {
  var temp = [];
  var res = [];
  for (var a = 0; a < A[0].length; a++) {
    temp = [];
    for (var b = 0; b < A.length; b++) {
      temp.push(A[b][a]);
    }
    res.push(temp);
  }
  return res;
};
