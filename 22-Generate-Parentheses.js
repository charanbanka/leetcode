// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.
// Example 1:
// Input: n = 3
// Output: ["((()))","(()())","(())()","()(())","()()()"]
// Example 2:
// Input: n = 1
// Output: ["()"]
// Constraints:

// 1 <= n <= 8

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  let ans = [];
  const param = (ans, n, open, close, curr_str) => {
    if (curr_str.length == n * 2) {
      ans.push(curr_str);
      return;
    }
    if (open < n) param(ans, n, open + 1, close, curr_str + "(");
    if (close < open) param(ans, n, open, close + 1, curr_str + ")");
  };
  param(ans, n, 0, 0, "");
  return ans;
};

let testcase1 = [2, 2, 1];
let testcase2 = [4, 1, 2, 1, 2];
let testcase3 = [1];

console.log(generateParenthesis(3));
console.log(generateParenthesis(2));
console.log(generateParenthesis(1));

// ()(), (())
// ()()(), (())(),((())),()(()),(()())
// ()()()(),(())()(),((()()))

// open < n then add str to "("
// close < open then add str to ")"
// str.len == n*2 then pus str into array;
