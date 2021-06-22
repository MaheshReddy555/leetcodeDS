/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 * 
 * You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

Return the fewest number of coins that you need to make up that amount. 
If that amount of money cannot be made up by any combination of the coins, return -1.

You may assume that you have an infinite number of each kind of coin.

Example 1:
Input: coins = [1,2,5], amount = 11
Output: 3
Explanation: 11 = 5 + 5 + 1

Example 2:
Input: coins = [2], amount = 3
Output: -1

Example 3:
Input: coins = [1], amount = 0
Output: 0

Example 4:
Input: coins = [1], amount = 1
Output: 1

Example 5:
Input: coins = [1], amount = 2
Output: 2
 */
var coinChange = function (coins, amount) {
  let out = new Array(amount);
  out[0] = 0;

  for (let i = 1; i < amount + 1; i++) {
    let min = Infinity;
    for (let j = 0; j < coins.length; j++) {
      if (i - coins[j] < 0) continue;
      min = Math.min(out[i - coins[j]], min);
    }
    out[i] = min + 1;
  }

  return out[amount] === Infinity ? -1 : out[amount];
};
