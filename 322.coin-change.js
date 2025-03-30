


// You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

// Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

// You may assume that you have an infinite number of each kind of coin.

 

// Example 1:

// Input: coins = [1,2,5], amount = 11
// Output: 3
// Explanation: 11 = 5 + 5 + 1
// Example 2:

// Input: coins = [2], amount = 3
// Output: -1
// Example 3:

// Input: coins = [1], amount = 0
// Output: 0
 

// Constraints:

// 1 <= coins.length <= 12
// 1 <= coins[i] <= 231 - 1
// 0 <= amount <= 104

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  //edge case
  if (amount < 1) return 0;

  //create dp array
  let minCoinsDp = Array(amount + 1).fill(Infinity);

  minCoinsDp[0] = 0; //if the amount is zero then we dont need to select any coin to make it

  let track = Array(amount + 1).fill(-1);

  for (let i = 1; i <= amount; i++) {
    for (let coin of coins) {
      // console.log(`Outside i =>${i} and coin => ${coin}`, minCoinsDp[i])
      if (coin <= i && minCoinsDp[i - coin] !== Infinity) {
        minCoinsDp[i] = Math.min(minCoinsDp[i], 1 + minCoinsDp[i - coin]);
        // console.log(`Inside i =>${i} and coin => ${coin}`, minCoinsDp[i])
        track[i] = coin;
      }
    }
  }

  console.log(minCoinsDp);
  console.log(track);

  let result = minCoinsDp[amount] === Infinity ? -1 : minCoinsDp[amount];

  let sol = [];
  if (result != -1) {
    let current = amount;
    while (current > 0) {
      sol.push(track[current]);
      current = current - track[current];
    }
  }

  console.log(sol); // we can sort

  return result;

  // if (amount === 0) return 0; // No coins needed for amount 0

  // // Initialize a DP array with "Infinity" to represent unreachable amounts
  // const dp = Array(amount + 1).fill(Infinity);
  // dp[0] = 0; // Base case: 0 coins are needed to make amount 0

  // // Fill the DP array
  // for (let coin of coins) {
  //     for (let j = coin; j <= amount; j++) {
  //         dp[j] = Math.min(dp[j], 1 + dp[j - coin]); // Include current coin
  //     }
  // }

  // // If dp[amount] is still Infinity, the amount is not reachable
  // return dp[amount] === Infinity ? -1 : dp[amount];
};

console.log(coinChange([5, 7, 9], 25));

//for minimum no of coins it will give correct answer if even coins not is ascending order
// but the coins would change so you need to sort before solve problem
