//implement binary search
// A = [6,15,25,33,45,56,67]
//array should be sorting order
// let mid = low+high/2;

function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] == target) return mid;
    else if (arr[mid] < target) start = mid + 1;
    else end = mid - 1;
  }
  return -1;
}

let A = [6, 15, 25, 33, 45, 56, 67];

console.log(binarySearch(A, 45));
