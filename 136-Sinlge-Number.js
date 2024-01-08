// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.
// Example 1:

// Input: nums = [2,2,1]
// Output: 1
// Example 2:

// Input: nums = [4,1,2,1,2]
// Output: 4
// Example 3:

// Input: nums = [1]
// Output: 1

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let single = {};
  for (let num of nums) {
    single[num] = (single[num] || 0) + 1;
    if (single[num] == 2) delete single[num];
  }
  console.log(single)
  for (let x in single) return x;
};

let testcase1 = [2, 2, 1];
let testcase2 = [4, 1, 2, 1, 2];
let testcase3 = [1];

console.log(singleNumber(testcase1));
console.log(singleNumber(testcase2));
console.log(singleNumber(testcase3));
