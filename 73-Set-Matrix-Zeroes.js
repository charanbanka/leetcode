// 73. Set Matrix Zeroes
// Medium
// Topics
// Companies
// Hint
// Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.

// You must do it in place.

// Example 1:

// Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
// Output: [[1,0,1],[0,0,0],[1,0,1]]
// Example 2:

// Input: matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
// Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]

// Constraints:

// m == matrix.length
// n == matrix[0].length
// 1 <= m, n <= 200
// -231 <= matrix[i][j] <= 231 - 1

// Follow up:

// A straightforward solution using O(mn) space is probably a bad idea.
// A simple improvement uses O(m + n) space, but still not the best solution.
// Could you devise a constant space solution?

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  let m = matrix.length;
  let n = matrix[0].length;

  let zerosPos = new Map();

  for (let row = 0; row < m; row++) {
    for (let col = 0; col < n; col++) {
      if (matrix[row][col] == 0) {
        let rowMap = zerosPos.get("row") || new Map();
        let colMap = zerosPos.get("col") || new Map();

        rowMap.set(row, true);
        colMap.set(col, true);
        zerosPos.set("row", rowMap);
        zerosPos.set("col", colMap);
      } else {
        if (zerosPos.get("row")?.get(row) || zerosPos.get("col")?.get(col)) {
          matrix[row][col] = 0;
        }
      }
    }
  }

  let rowMap = zerosPos.get("row") || new Map();

  let colMap = zerosPos.get("col") || new Map();

  for (let key of rowMap.keys()) {
    for (let j = 0; j < n; j++) {
      matrix[key][j] = 0;
    }
  }

  for (let key of colMap.keys()) {
    for (let i = 0; i < m; i++) {
      matrix[i][key] = 0;
    }
  }

  return matrix;
};

let res = setZeroes([
  [0, 1, 2, 0],
  [3, 4, 5, 2],
  [1, 3, 1, 5],
]);
console.log(res);
res = setZeroes([[1,2,3,4],[5,0,5,2],[8,9,2,0],[5,7,2,1]]);

console.log(res);
