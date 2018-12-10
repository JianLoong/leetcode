/**
 * @param {number[]} nums
 * @return {number}
 */
const findMaxConsecutiveOnes = nums => {
  const result = [];
  let max = 0;
  let count = 0;
  for (let num of nums) {
    if (num === 1) {
      count++;
    } else {
      max = Math.max(max, count);
      count = 0;
    }
  }
  return Math.max(max, count);
};

const input = [1, 1, 0, 1, 1, 1, 0];

console.log(findMaxConsecutiveOnes(input));
