/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  const heapify = (n, i) => {
    let largest = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;

    if (left < n && nums[left] > nums[largest]) largest = left;
    if (right < n && nums[right] > nums[largest]) largest = right;

    if (largest !== i) {
      [nums[i], nums[largest]] = [nums[largest], nums[i]];
      heapify(n, largest);
    }
  };

  let n = nums.length;

  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) heapify(n, i);

  //extract elements kth largest element
  for (let i = n - 1; i >= n - k; i--) {
    [nums[0], nums[i]] = [nums[i], nums[0]];
    heapify(i, 0);
  }

  console.log(nums)

  return nums[n - k];
};

let nums = [3, 2, 1, 5, 6, 4],
  k = 2;

let resp;
resp = findKthLargest(nums, k);
console.log(resp);

nums = [3,2,3,1,2,4,5,5,6], k = 4

resp = findKthLargest(nums, k);
console.log(resp);
