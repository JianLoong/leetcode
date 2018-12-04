/**
 * @param {number[]} digits
 * @return {number[]}
 */
// Naive solution does not work as it hits the int overflow
var plusOne = function(digits) {
  let value = parseInt(digits.join("")) + 1;

  return (value + "").split("");
};

console.log(plusOne([1, 2, 3]));
