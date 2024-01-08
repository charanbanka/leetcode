// 32. Longest Valid Parentheses
// Hard
// Topics
// Companies
// Given a string containing just the characters '(' and ')', return the length of the longest valid (well-formed) parentheses
// substring
// .

// Example 1:

// Input: s = "(()"
// Output: 2
// Explanation: The longest valid parentheses substring is "()".
// Example 2:

// Input: s = ")()())"
// Output: 4
// Explanation: The longest valid parentheses substring is "()()".
// Example 3:

// Input: s = ""
// Output: 0

// Constraints:

// 0 <= s.length <= 3 * 104
// s[i] is '(', or ')'.

/**
 * @param {string} s
 * @return {number}
 */
// var longestValidParentheses = function (s) {
//   let maxCount = 0;

//   function findLongparentheses(curr_str, curr_long_str, open, close, index) {
//     if (close > open || index == s.length) {
//       return curr_long_str?.length || 0;
//     }
//     if (s[index] == "(") {
//       return findLongparentheses(
//         curr_str + "(",
//         curr_long_str,
//         open + 1,
//         close,
//         index + 1
//       );
//     } else {
//       curr_str = curr_str + ")";
//       close = close + 1;
//       if (open == close) {
//         if (curr_str.length > curr_long_str.length) curr_long_str = curr_str;
//       }
//       return findLongparentheses(
//         curr_str,
//         curr_long_str,
//         open,
//         close,
//         index + 1
//       );
//     }
//   }

//   for (let i = 0; i < s.length; i++) {
//     let curr_maxCount = findLongparentheses("", "", 0, 0, i) || "";
//     maxCount = Math.max(maxCount, curr_maxCount);
//   }
//   //   console.log(maxCount);
//   return maxCount;
// };

//using stack

var longestValidParentheses = function (s) {
  let maxCount = 0;

  let indexStack = [-1];
  let charStack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] == "(") {
      indexStack.push(i);
      charStack.push(s[i]);
    } else {
      if (charStack[charStack.length - 1] == "(") {
        indexStack.pop();
        charStack.pop();
        maxCount = Math.max(maxCount, i - indexStack[indexStack.length - 1]);
      } else {
        indexStack.push(i);
      }
    }
  }
  return maxCount;
};

longestValidParentheses(")()())");
longestValidParentheses("");
longestValidParentheses(")(");
longestValidParentheses("(");
