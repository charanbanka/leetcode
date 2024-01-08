// You are given an array prices where prices[i] is the price of a given stock on the ith day.
// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
// Example 1:
// Input: prices = [7,1,5,3,6,4,7]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
// Example 2:
// Input: prices = [7,6,4,3,1] --> Output: 0

const { buyAndSellArray } = require("./Buy-And-Sell-Test-case");

/**
 * @param {number[]} prices
 * @return {number}
 */

//Greedy algorithm

var maxProfit = function (prices) {
  let minStock = prices[0] || 0;
  let profit = 0;
  for (let price of prices) {
    if (price < minStock) minStock = price;

    let curProfit = price - minStock;
    if (curProfit > profit) profit = curProfit;
  }
  return profit;
};

let testcase1 = [7, 1, 4, 3, 6]
let testcase2 = [1,2,3,4,5]
let testcase3 = [7,6,4,3,1]
let testcase4 = buyAndSellArray

console.log(maxProfit(testcase1));
console.log(maxProfit(testcase2));
console.log(maxProfit(testcase3));
console.log(maxProfit(testcase4));
