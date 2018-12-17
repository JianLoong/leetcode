/**
 * Naive solution
 *
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
  let arr = String(num).split("");
  let result = 0;
  if (arr.length == 1) return num;

  while (arr.length != 1) {
    result = 0;
    for (let i = 0; i < arr.length; i++) {
      result += parseInt(arr[i]);
    }
    arr = String(result).split("");
  }
  return result;
};

/**
 * Based on the digital root concept.
 * https://en.wikipedia.org/wiki/Digital_root#Congruence_formula
 *
 * @param {number} num
 */
const addDigits = num => {
  if (num === 0) return 0;
  return num % 9 === 0 ? 9 : num % 9;
};

const input = 1;

console.log(addDigits(input));
