/**
 * Naive solution. (68ms)
 *
 * The number is casted into a String so that it can be splitted into an array
 * easily. After that each of them are checked with the modulo operator.
 *
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
const selfDividingNumbers = (left, right) => {
  let result = [];
  for (let start = left; start <= right; start++) {
    let arr = String(start).split("");
    let flag = true;
    for (let value of arr) {
      if (start % value !== 0) {
        flag = false;
        break;
      }
    }

    if (flag) result.push(start);
  }

  return result;
};

const left = 1;
const right = 22;

console.log(selfDividingNumbersTwo(left, right));
