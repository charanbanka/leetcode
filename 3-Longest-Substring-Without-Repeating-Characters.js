//3-Longest-Substring-Without-Repeating-Characters.js
// Given a string s, find the length of the longest
// substring
//  without repeating characters.

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

// Constraints:

// 0 <= s.length <= 5 * 104
// s consists of English letters, digits, symbols and spaces.

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let max = 0;
  let sub_str = new Set(); 
  let left = 0,
    right = 0;
  while (right < s.length) {
    let prev_len = sub_str.size;
    sub_str.add(s[right]);
    let len = sub_str.size;
    if (prev_len < len) {
      max = Math.max(max, right - left + 1);
      right++;
    } else {
      while (s[left] != s[right]) {
        sub_str.delete(s[left]);
        left++;
      }
      sub_str.delete(s[left]);
      left++;
    }
  }
  return max;
};

let testcase1 = "abcabcbb";
let testcase2 = "bbbbbb98^^^099gy67566";
let testcase3 =
  "abcabcbb0987678-----9876567hngtfgfv+76rghbfvretredfgv credsz3ewws3zwedwshg";

// console.log(lengthOfLongestSubstring(testcase1));
// console.log(lengthOfLongestSubstring(testcase2));
console.log(lengthOfLongestSubstring(testcase3));
