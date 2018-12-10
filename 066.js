/**
 * Naive solution does not work as it hits the int overflow
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = digits => {
  let value = parseInt(digits.join("")) + 1;

  return (value + "").split("");
};

/**
 * Solution using manual array addition. The carry will be kept.
 * If towards the end, the carry is 1, an element will be placed in front.
 *
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = digits => {
  let carry = 0;
  for (let i = digits.length - 1; i >= 0; i--) {
    let add = 0;
    if (i == digits.length - 1) {
      add = digits[i] + 1;
    } else {
      add = digits[i] + carry;
    }

    if (add >= 10) {
      digits[i] = 0;
      carry = 1;
    } else {
      digits[i] = add;
      carry = 0;
    }
  }

  if (carry == 1) digits.unshift(1);

  return digits;
};

console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]));
