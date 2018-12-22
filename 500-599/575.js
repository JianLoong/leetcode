/**
 * @param {number[]} candies
 * @return {number}
 */
const distributeCandies = candies => {
  let set = new Set(candies);
  return Math.min(set.size, candies.length / 2);
};

const input = [1, 1, 2, 2, 3, 3];

console.log(distributeCandies(input));
