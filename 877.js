/**
 * Naive solution. Technically, Alex will always be picking the bigger pile
 * and thus, Alex would always win.
 *
 * @param {number[]} piles
 * @return {boolean}
 */
var stoneGame = function(piles) {
  piles.sort((a, b) => b - a);
  let alexSum = 0;
  let sum = 0;

  for (let i = 0; i < piles.length; i++) {
    if (i % 2 === 0) alexSum += piles[i];
    sum += piles[i];
  }

  return sum - alexSum > 0 ? true : false;
};

const input = [5, 3, 4, 5];

console.log(stoneGame(input));
