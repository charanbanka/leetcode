// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

// Merge nums1 and nums2 into a single array sorted in non-decreasing order.

// The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

// Example 1:

// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]
// Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
// The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
// Example 2:

// Input: nums1 = [1], m = 1, nums2 = [], n = 0
// Output: [1]
// Explanation: The arrays we are merging are [1] and [].
// The result of the merge is [1].
// Example 3:

// Input: nums1 = [0], m = 0, nums2 = [1], n = 1
// Output: [1]
// Explanation: The arrays we are merging are [] and [1].
// The result of the merge is [1].
// Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.

// Constraints:

// nums1.length == m + n
// nums2.length == n
// 0 <= m, n <= 200
// 1 <= m + n <= 200
// -109 <= nums1[i], nums2[j] <= 109

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  function merging(l, mid, h) {
    let left_len = mid - l + 1;
    let right_len = h - mid;
    let i = 0;
    let left = [];
    let right = [];
    for (i = 0; i < left_len; i++) left[i] = nums1[l + i];
    for (i = 0; i < right_len; i++) right[i] = nums1[mid + 1 + i];

    let j = 0;
    let k = l;
    i=0;
    while (i < left_len && j < right_len) {
      if (left[i] <= right[j]) nums1[k++] = left[i++];
      else nums1[k++] = right[j++];
    }

    while (i < left_len) nums1[k++] = left[i++];
    while (j < right_len) nums1[k++] = right[j++];
  }

  function mergeSort(l, h) {
    if (l < h) {
      let mid = Math.floor((l + h) / 2);
      mergeSort(l, mid);
      mergeSort(mid + 1, h);
      merging(l, mid, h);
    }
  }

  if (n == 0) return;
  let j = m;
  for (let i = 0; i < n; i++) {
    nums1[j++] = nums2[i];
  }
  if (m == 0) return;
  mergeSort(0, m + n - 1);
  return;
};

let testcase1 = [1, 2, 3, 0, 0, 0];
let testcase2 = [2, 5, 6];
let testcase3 = [1];

console.log(merge(testcase1, 3, testcase2, 3));
console.log(merge([1], 1, [], 0));
console.log(merge([0], 0, [1], 1));
//merge all values into nums1
