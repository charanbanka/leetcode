/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  if (nums.length == 0) return 0;
  if (nums.length == 1) {
    if (target === nums[0]) return 1;
    return 0;
  }
  let start = 0;
  let end = 1;
  let sum = 0;
  let result = nums.length + 1;
  let flag = "both";
  while (end < nums.length) {
    console.log("start", start, end, sum, result, flag);
    if (start == 0 && end == 1) sum += nums[start] + nums[end];
    else if (flag == "both") {
      sum += nums[end] - nums[start - 1];
    } else if (flag == "start") {
      sum -= nums[start - 1];
    } else if (flag == "end") {
      sum += nums[end];
    }

    if (sum >= target) {
      if (result > end - start + 1) result = end - start + 1;
    }
    if (sum == target) {
      start++;
      end++;
      flag = "both";
    } else if (sum > target) {
      start++;
      flag = "start";
    } else if (sum < target) {
      end++;
      flag = "end";
    }
  }

  return result > nums.length ? 0 : result;
};

let res = minSubArrayLen(11, [1, 2, 3, 4, 5]);

console.log("and", res);
