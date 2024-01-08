//pivot element

function partition(l, h, arr) {
  let pivot = arr[l];
  let i = l;
  let j = h;
  while (i < j) {
    do {
      i++;
    } while (arr[i] <= pivot);

    do {
      j--;
    } while (arr[j] > pivot);

    if (i < j) [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  [arr[l], arr[j]] = [arr[j], arr[l]];
  return j;
}

function QuickSort(l, h, arr) {
  if (l < h) {
    let j = partition(l, h, arr);
    QuickSort(l, j, arr);
    QuickSort(j + 1, h, arr);
  }
}

const arrayElements = [19, 23, 45, 2, 3, 10, 56];

QuickSort(0, arrayElements.length, arrayElements);

console.log("after sort=>", arrayElements);
