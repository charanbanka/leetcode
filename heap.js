//heapify -> to create heap tree

// Heapify a subtree rooted at index i
function heapify(arr, n, i) {
  let largest = i; // Initialize largest as root
  const left = 2 * i + 1; // Left child
  const right = 2 * i + 2; // Right child

  // If left child is larger than root
  if (left < n && arr[left] > arr[largest]) {
    largest = left;
  }

  // If right child is larger than largest so far
  if (right < n && arr[right] > arr[largest]) {
    largest = right;
  }

  // If largest is not the root
  if (largest !== i) {
    // Swap arr[i] and arr[largest]
    [arr[i], arr[largest]] = [arr[largest], arr[i]];

    // Recursively heapify the affected sub-tree
    heapify(arr, n, largest);
  }
}

// Main function to perform heap sort
function heapSort(arr) {
  const n = arr.length;

  // Build a max heap
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(arr, n, i);
  }

  // Extract elements one by one from the heap
  for (let i = n - 1; i > 0; i--) {
    // Move the current root to the end
    [arr[0], arr[i]] = [arr[i], arr[0]];

    // Call max heapify on the reduced heap
    heapify(arr, i, 0);
  }
}

// Example usage:

const arrayToSort = [12, 11, 13, 5, 6, 7];
console.log("Original Array:", arrayToSort);

heapSort(arrayToSort);

console.log("Sorted Array:", arrayToSort, Math.floor(3467/10));

