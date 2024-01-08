// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let len = s.length;
  if (len % 2 == 1) return false;
  const getClosedParanthesis = (x) => {
    if (x == ")") return "(";
    else if (x == "]") return "[";
    else if (x == "}") return "{";
  };
  let stack = [];
  for (let i = 0; i < len; i++) {
    if (s[i] == ")" || s[i] == "]" || s[i] == "}") {
      if (stack[stack.length - 1] == getClosedParanthesis(s[i])) {
        stack.pop();
      } else return false;
    } else stack.push(s[i]);
  }
  if (stack.length > 0) return false;
  return true;
};

var isValid = function (s) {
  if (s.length % 2 == 1) return false;
  const getClosedParanthesis = (x) => {
    if (x == ")") return "(";
    else if (x == "]") return "[";
    else if (x == "}") return "{";
  };
  let stack = [];
  const isParamsValid = (stack, str, i) => {
    if (str[i] == ")" || str[i] == "]" || str[i] == "}") {
      if (stack[stack.length - 1] == getClosedParanthesis(str[i])) stack.pop();
      else stack.push(str[i]);
    } else stack.push(str[i]);
    if (i == str.length - 1) return;
    isParamsValid(stack, str, i + 1);
  };
  isParamsValid(stack, s, 0);
  return stack.length > 0 ? false : true;
};

let testcase1 = "[";
let testcase2 = "({[]})[]{}";
let testcase3 = "({}[])";
let testcase4 = "([}}])";

console.log(isValid(testcase1));
console.log(isValid(testcase2));
console.log(isValid(testcase3));
console.log(isValid(testcase4));
//if len is odd return false
//stack = [] top
