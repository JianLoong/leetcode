/**
 * @param {number[]} A
 * @return {string}
 */
var largestTimeFromDigits = function(A) {
  let permutations = permute(A);

  let result = -1;
  let out = "";
  for (let i = 0; i < permutations.length; i++) {
    let hours = 10 * permutations[i][0] + permutations[i][1];
    let mins = 10 * permutations[i][2] + permutations[i][3];
    let time = 60 * hours + mins;
    if (0 <= hours && hours < 24 && (0 <= mins && mins < 60) && time > result) {
      result = time;
      out =
        permutations[i][0] +
        "" +
        permutations[i][1] +
        ":" +
        permutations[i][2] +
        "" +
        permutations[i][3];
    }
  }

  return result == -1 ? "" : out;
};

function permute(permutation) {
  var length = permutation.length,
    result = [permutation.slice()],
    c = new Array(length).fill(0),
    i = 1,
    k,
    p;

  while (i < length) {
    if (c[i] < i) {
      k = i % 2 && c[i];
      p = permutation[i];
      permutation[i] = permutation[k];
      permutation[k] = p;
      ++c[i];
      i = 1;
      result.push(permutation.slice());
    } else {
      c[i] = 0;
      ++i;
    }
  }
  return result;
}

console.log(largestTimeFromDigits([1, 2, 3, 4]));
