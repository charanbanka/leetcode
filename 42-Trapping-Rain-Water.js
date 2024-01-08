// 42. Trapping Rain Water
// Hard
// Topics
// Companies
// Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

// Example 1:

// Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
// Output: 6
// Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.
// Example 2:

// Input: height = [4,2,0,3,2,5]
// Output: 9

// Constraints:

// n == height.length
// 1 <= n <= 2 * 104
// 0 <= height[i] <= 105

/**
 * @param {number[]} height
 * @return {number}
 */

//without stack
var trap = function (height) {
  if (height.length < 3) return 0;

  let leftMax = height[0];
  let rightMax = height[height.length - 1];
  let left = 0;
  let right = height.length - 1;

  let weight = 0;
  while (left < right) {
    if (height[left] <= height[right]) {
      weight += Math.max(0, Math.min(leftMax, rightMax) - height[left]);
      left++;
      leftMax = Math.max(leftMax, height[left]);
    } else {
      weight += Math.max(0, Math.min(leftMax, rightMax) - height[right]);
      right--;
      rightMax = Math.max(rightMax, height[right]);
    }
  }

  console.log("weight=>", weight);
  return weight;
};

//with stack
var trap = function (height) {
  if (height.length < 3) return 0;
  let weight = 0;

  let stack = [];

  for (let current = 0; current < height.length; current++) {
    let top = stack.length - 1;
    while (top != -1 && height[current] > height[stack[top]]) {
      let top_value = stack.pop();
      top = stack.length - 1;
      if (top >= 0) {
        let distance = current - stack[top] - 1;
        let bound_height = Math.min(height[current], height[stack[top]]) - height[top_value];
        weight += distance * bound_height;
      }
    }
    stack.push(current);
  }

  console.log("weight=>", weight);
  return weight;
};

trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]);

trap([4, 2, 0, 3, 2, 5]);
