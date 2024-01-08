// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

// The overall run time complexity should be O(log (m+n)).

// Example 1:

// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.
// Example 2:

// Input: nums1 = [1,2], nums2 = [3,4]
// Output: 2.50000
// Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.

// Constraints:

// nums1.length == m
// nums2.length == n
// 0 <= m <= 1000
// 0 <= n <= 1000
// 1 <= m + n <= 2000
// -106 <= nums1[i], nums2[i] <= 106

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
// var findMedianSortedArrays = function (nums1, nums2) {
//   let l1 = nums1.length;
//   let l2 = nums2.length;
//   let totalLen = l1 + l2;
//   let i = 0,
//     j = 0;
//   k = 0;
//   let final = [];
//   let medianIndex = Math.floor(totalLen / 2);
//   while (i < l1 && j < l2) {
//     if (nums1[i] < nums2[j]) {
//       final[k] = nums1[i];
//       i++;
//     } else {
//       final[k] = nums2[j];
//       j++;
//     }
//     if (k == medianIndex) {
//       if (totalLen % 2 == 0) {
//         return (final[k] + final[k - 1]) / 2;
//       }
//       return final[k];
//     }
//     k++;
//   }
//   while (i < l1) {
//     final[k] = nums1[i];
//     if (k == medianIndex) {
//       if (totalLen % 2 == 0) {
//         return (final[k] + final[k - 1]) / 2;
//       }
//       return final[k];
//     }
//     i++;
//     k++;
//   }
//   while (j < l2) {
//     final[k] = nums2[j];
//     if (k == medianIndex) {
//       if (totalLen % 2 == 0) {
//         return (final[k] + final[k - 1]) / 2;
//       }
//       return final[k];
//     }
//     j++;
//     k++;
//   }
//   return 0.0;
// };

var findMedianSortedArrays = function (nums1, nums2) {
  let l1 = nums1.length;
  let l2 = nums2.length;
  let totalLen = l1 + l2;
  let i = 0,
    j = 0;
  k = 0;
  let total = 0;
  let medianIndex = Math.floor(totalLen / 2);
  while (i < l1 && j < l2) {
    let value = 0;
    if (nums1[i] < nums2[j]) {
      value = nums1[i];
      i++;
    } else {
      value = nums2[j];
      j++;
    }
    if (totalLen % 2 == 0) {
      if (k == medianIndex - 1) {
        total = value;
      } else if (k == medianIndex) return (total + value) / 2;
    } else {
      if (k == medianIndex) return value;
    }
    k++;
  }
  while (i < l1) {
    let value = nums1[i];
    if (totalLen % 2 == 0) {
      if (k == medianIndex - 1) {
        total = value;
      } else if (k == medianIndex) return (total + value) / 2;
    } else {
      if (k == medianIndex) return value;
    }
    i++;
    k++;
  }
  while (j < l2) {
    let value = nums2[j];
    if (totalLen % 2 == 0) {
      if (k == medianIndex - 1) {
        total = value;
      } else if (k == medianIndex) return (total + value) / 2;
    } else {
      if (k == medianIndex) return value;
    }
    j++;
    k++;
  }
  return 0.0;
};

console.log(findMedianSortedArrays([1, 3], [2]));
console.log(findMedianSortedArrays([1, 3], [2, 4]));
console.log(findMedianSortedArrays([1, 7, 100, 123], [6, 56, 66, 67]));
console.log(findMedianSortedArrays([1, 2], [87, 308]));
//4 4/2=> 1,2
//3 3/2 => 1
