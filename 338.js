/**
 * Naive solution for Counting Bits (220ms)
 *
 * in the naive solution, the number is coverted to the
 * binary representation and then the number of 1 inside
 * of it is counted.
 *
 * @param {number} num
 * @return {number[]}
 */
const countBits = num => {
  const result = [];
  for (let i = 0; i <= num; i++) {
    const binary = i.toString(2);
    result.push(count(binary));
  }
  return result;
};

const count = num => {
  const arr = num.split("");
  let count = 0;
  for (let i of arr) {
    if (i == 1) count++;
  }
  return count;
};

/**
 *
 * @param {number} num
 * @return {number []}
 */
const countBitsMethodTwo = num => {
  let result = [0];
  let offset = 1;
  for (let index = 1; index <= num; ++index) {
    if (offset * 2 == index) {
      offset *= 2;
    }
    result.push(result[index - offset] + 1);
  }
  return result;
};

const input = 5;

console.log(countBits(input));
console.log(countBitsMethodTwo(input));
