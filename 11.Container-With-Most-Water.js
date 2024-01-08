
//11. Container-With-Most-Water
// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

const { containerArray } = require("./Container-tescase");

// Find two lines that together with the x-axis form a container, such that the container contains the most water.

// Return the maximum amount of water a container can store.

// Notice that you may not slant the container.

// Example 1:

// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
// Example 2:

// Input: height = [1,1]
// Output: 1

// Constraints:

// n == height.length
// 2 <= n <= 105
// 0 <= height[i] <= 104

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let max_area = 0;
  let len = height.length;

  for (let i = 0; i < len - 1; i++) {
    for (let j = i + 1; j < len; j++) {
      let minValue = Math.min(height[i], height[j]);
      let area = minValue * (j - i);
      if (area > max_area) max_area = area;
    }
  }
  return max_area;
};

let testcase1 = [1, 8, 6, 2, 5, 4, 8, 3, 7];
let testcase2 = [1, 1];
let testcase3 = containerArray;

console.log(maxArea(testcase1));
console.log(maxArea(testcase2));
console.log(maxArea(testcase3));
