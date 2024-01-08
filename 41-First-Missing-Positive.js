// Given an unsorted integer array nums, return the smallest missing positive integer.

const { buyAndSellArray } = require("./Buy-And-Sell-Test-case");

// You must implement an algorithm that runs in O(n) time and uses O(1) auxiliary space.

// Example 1:

// Input: nums = [1,2,0]
// Output: 3
// Explanation: The numbers in the range [1,2] are all in the array.
// Example 2:

// Input: nums = [3,4,-1,1]
// Output: 2
// Explanation: 1 is in the array but 2 is missing.
// Example 3:

// Input: nums = [7,8,9,11,12]
// Output: 1
// Explanation: The smallest positive integer 1 is missing.

// Constraints:

// 1 <= nums.length <= 105
// -231 <= nums[i] <= 231 - 1

/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
  let map = new Map();
  for (let num of nums) {
    map.set(num, 1);
  }

  let i = 1;
  while (true) {
    if (!map.has(i)) {
      return i;
    }
    i++;
  }
};

let testcase1 = [1, 2, 0];
let testcase2 = [3, 4, -1, 1];
let testcase3 = buyAndSellArray;

console.log(firstMissingPositive(testcase1));
console.log(firstMissingPositive(testcase2));
console.log(firstMissingPositive(testcase3));
