//Merge sort

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sort = function (nums) {
  let result = [...nums];
  function merge(l, mid, h) {
    let left = [],
      right = [],
      m = mid - l + 1,
      n = h - mid;

    let i = 0,
      j = 0,
      k = l;

    for (i = 0; i < m; i++) left[i] = result[l + i];
    for (i = 0; i < n; i++) right[i] = result[mid + 1 + i];
    i = 0;

    while (i < m && j < n) {
      if (left[i] <= right[j]) result[k++] = left[i++];
      else result[k++] = right[j++];
    }
   
    while (i < m) result[k++] = left[i++];
    while (j < n) result[k++] = right[j++];
    
  }

  function mergeSort(l, h) {
    // console.log(l,h)
    if (l < h) {
      let mid = Math.floor((l + h) / 2);
      mergeSort(l, mid);
      mergeSort(mid + 1, h);
      merge(l, mid, h);
    }
  }

  mergeSort(0, result.length - 1);
  return result;
};


let testcase1 = [12, 9, 2, 0, 8, 5, 9, 12];
let testcase2 = [17, 7, 1, 0, 67, 3, 5, 9, 12];
let testcase3 = [10, 5, 2];

// console.log(sort(testcase1));
console.log(sort(testcase2));
console.log(sort(testcase3));
