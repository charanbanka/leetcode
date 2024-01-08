/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  let len = nums.length;
  if (len == 1) return nums[0];

  let max = nums[0];
  for (let i = 1; i < k; i++) {
    max = Math.max(max, nums[i]);
  }
  let result = [max];
  for (let i = k; i < len; i++) {
    max = Math.max(max, nums[i]);
    result.push(max);
  }
  console.log(typeof result)
  return result;
};

let nums = [1, 3, -1, -3, 5, 3, 6, 7],
  k = 3;

let resp = maxSlidingWindow(nums, k);

console.log("resp=>", resp);

 nums = [1, 3, -1, -3, 5, 3, 6, 7],
  k = 3;

 resp = maxSlidingWindow(nums, k);

console.log("resp=>", resp);
