/**
 * Naive solution for Counting Bits (220ms)
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

const input = 10000;

console.log(countBits(input));
