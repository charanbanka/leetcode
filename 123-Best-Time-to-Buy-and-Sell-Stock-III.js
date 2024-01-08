// You are given an array prices where prices[i] is the price of a given stock on the ith day.

const { buyAndSellArray } = require("./Buy-And-Sell-Test-case");

// Find the maximum profit you can achieve. You may complete at most two transactions.

// Note: You may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again).

// Example 1:

// Input: prices = [3,3,5,0,0,3,1,4]
// Output: 6
// Explanation: Buy on day 4 (price = 0) and sell on day 6 (price = 3), profit = 3-0 = 3.
// Then buy on day 7 (price = 1) and sell on day 8 (price = 4), profit = 4-1 = 3.
// Example 2:

// Input: prices = [1,2,3,4,5]
// Output: 4
// Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
// Note that you cannot buy on day 1, buy on day 2 and sell them later, as you are engaging multiple transactions at the same time. You must sell before buying again.
// Example 3:

// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transaction is done, i.e. max profit = 0.

/**
 * @param {number[]} prices
 * @return {number}
 */
// var maxProfit = function (prices) {
//   let profit = 0;
//   let minStock = prices[0] || 0;
//   let firstHighestProfit = 0;
//   let secondHighestProfit = 0;

//   for (let i = 1; i < prices.length; i++) {
//     if (minStock > prices[i]) minStock = prices[i];

//     let curProfit = prices[i] - minStock;
//     if (profit < curProfit) profit = curProfit;

//     if (i == prices.length - 1 || prices[i + 1] <= prices[i]) {
//       if (profit) {
//         secondHighestProfit = firstHighestProfit;
//         firstHighestProfit = profit;
//       }
//       minStock = prices[i + 1] || 0;
//       profit = 0;
//     }
//   }
//   console.log(firstHighestProfit, secondHighestProfit);
//   return firstHighestProfit + secondHighestProfit;
// };

var maxProfit = function (prices) {
  let len = prices.length;
  if (len == 0) return len;

  let left = [],
    right = [];
  let leftMin = prices[0];
  left[0] = 0;
  for (let i = 1; i < len; i++) {
    left[i] = Math.max(left[i - 1], prices[i] - leftMin);
    leftMin = Math.min(leftMin, prices[i]);
  }

  let rightMax = prices[len - 1];
  right[len-1] = 0
  for (let i = len - 2; i >= 0; i--) {
    right[i] = Math.max(right[i + 1], rightMax - prices[i]);
    rightMax = Math.max(rightMax, prices[i]);
  }

  let profit = right[0];
  for (let i = 1; i < len; i++)
    profit = Math.max(profit, left[i - 1] + right[i]);

  return profit;
};
let testcase1 = [3, 3, 5, 0, 0, 3, 1, 4];
let testcase2 = [1, 2, 3, 4, 5];
let testcase3 = [7, 6, 4, 3, 1];
let testcase4 = buyAndSellArray;
let testcase5 = [1, 2, 4, 2, 5, 7, 2, 4, 9, 0];

console.log(maxProfit(testcase1));
console.log(maxProfit(testcase2));
console.log(maxProfit(testcase3));
console.log(maxProfit(testcase4));
console.log(maxProfit(testcase5));
