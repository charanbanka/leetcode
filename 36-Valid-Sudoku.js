// 36. Valid Sudoku
// Medium
// Topics
// Companies
// Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

// Each row must contain the digits 1-9 without repetition.
// Each column must contain the digits 1-9 without repetition.
// Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
// Note:

// A Sudoku board (partially filled) could be valid but is not necessarily solvable.
// Only the filled cells need to be validated according to the mentioned rules.

// Example 1:

// Input: board =
// [["5","3",".",".","7",".",".",".","."]
// ,["6",".",".","1","9","5",".",".","."]
// ,[".","9","8",".",".",".",".","6","."]
// ,["8",".",".",".","6",".",".",".","3"]
// ,["4",".",".","8",".","3",".",".","1"]
// ,["7",".",".",".","2",".",".",".","6"]
// ,[".","6",".",".",".",".","2","8","."]
// ,[".",".",".","4","1","9",".",".","5"]
// ,[".",".",".",".","8",".",".","7","9"]]
// Output: true
// Example 2:

// Input: board =
// [["8","3",".",".","7",".",".",".","."]
// ,["6",".",".","1","9","5",".",".","."]
// ,[".","9","8",".",".",".",".","6","."]
// ,["8",".",".",".","6",".",".",".","3"]
// ,["4",".",".","8",".","3",".",".","1"]
// ,["7",".",".",".","2",".",".",".","6"]
// ,[".","6",".",".",".",".","2","8","."]
// ,[".",".",".","4","1","9",".",".","5"]
// ,[".",".",".",".","8",".",".","7","9"]]
// Output: false
// Explanation: Same as Example 1, except with the 5 in the top left corner being modified to 8. Since there are two 8's in the top left 3x3 sub-box, it is invalid.

// Constraints:

// board.length == 9
// board[i].length == 9
// board[i][j] is a digit 1-9 or '.'.

/**
 * @param {character[][]} board
 * @return {boolean}
 */
// var isValidSudoku = function (board) {
//   function isValueRepeatedInRow(row, value) {
//     return row.filter((item) => item == value).length > 1;
//   }
//   function isValueRepeatedInColumn(col, value) {
//     let count = 0;
//     for (let i = 0; i < 9; i++) {
//       if (board[i][col] == value) {
//         count += 1;
//       }
//       if (count > 1) return true;
//     }
//     return false;
//   }

//   function isValueRepeatedInSubBox(sub_box, value) {
//     let count = 0;
//     for (let i = sub_box[0]; i < sub_box[0] + 3; i++) {
//       for (let j = sub_box[1]; j < sub_box[1] + 3; j++) {
//         if (board[i][j] == value) count += 1;
//         if (count > 1) return true;
//       }
//     }
//     return false;
//   }
//   let sub_box = [0, 0];
//   for (let [i, row] of board.entries()) {
//     if (i % 3 == 0) sub_box[0] = i;
//     for (let [j, value] of row.entries()) {
//       if (j % 3 == 0) sub_box[1] = j;
//       if (value == ".") continue;
//       if (isValueRepeatedInRow(row, value)) return false;
//       if (isValueRepeatedInColumn(j, value)) return false;
//       if (isValueRepeatedInSubBox(sub_box, value)) return false;
//     }
//   }
//   return true;
// };

var isValidSudoku = function(board) {
    let rowMap = new Map();
    for(let [i,row] of board.entries()){
        for(let [j, value] of board.entries()){
            
        }
    }
}

let board1 = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

let board2 = [
  ["8", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

console.log(isValidSudoku(board1));
console.log(isValidSudoku(board2));
