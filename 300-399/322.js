/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
  let max = amount + 1;
  let dp = Array(amount + 1).fill(max);

  dp[0] = 0;
  for (let i = 1; i <= amount; i++) {
    for (let j = 0; j < coins.length; j++) {
      console.log(dp);
      if (coins[j] <= i) {
        dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1);
      }
    }
  }

  console.log(dp);
  return dp[amount] > amount ? -1 : dp[amount];
};

const coins = [1, 2, 5];
const amount = 11;

console.log(coinChange(coins, amount));
