// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// For example, 2 is written as II in Roman numeral, just two one's added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9.
// X can be placed before L (50) and C (100) to make 40 and 90.
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given an integer, convert it to a roman numeral.

// Example 1:

// Input: num = 3
// Output: "III"
// Explanation: 3 is represented as 3 ones.
// Example 2:

// Input: num = 58
// Output: "LVIII"
// Explanation: L = 50, V = 5, III = 3.
// Example 3:

// Input: num = 1994
// Output: "MCMXCIV"
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

// Constraints:

// 1 <= num <= 3999

/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  let num_str = num.toString();
  let len = num_str.length;
  let getRoman = { 1: "I", 2: "X", 3: "C", 4: "M" };
  let getHalfRoman = { 1: "V", 2: "L", 3: "D" };
  let getNineRoman = { 1: "IX", 2: "XC", 3: "CM" };
  let getFourRoman = { 1: "IV", 2: "XL", 3: "CD" };
  let result = "";
  for (let i = 0; i < len; i++) {
    let value = parseInt(num_str[i]);
    let roman = "";
    if (value >= 5) {
      if (value == 5) {
        roman = getHalfRoman[len - i];
      } else if (value == 9) {
        roman = getNineRoman[len - i];
      } else {
        roman = getHalfRoman[len - i];
        let j = 0;
        while (j < value-5) {
          roman += getRoman[len - i];
          j++;
        }
      }
    } else {
      if (value == 4) {
        roman = getFourRoman[len - i];
      } else {
        let j = 0;
        while (j < value) {
          roman += getRoman[len - i];
          j++;
        }
      }
    }
    result += roman;
  }

  return result;
};

let testcase1 = 3;
let testcase2 = 58;
let testcase3 = 1994;
let testcase4 = 3999;

console.log(intToRoman(testcase1));
console.log(intToRoman(testcase2));
console.log(intToRoman(testcase3));
console.log(intToRoman(testcase4));
