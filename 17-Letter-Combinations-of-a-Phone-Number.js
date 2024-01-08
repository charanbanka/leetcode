// Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

// A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

// Example 1:

// Input: digits = "23"
// Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
// Example 2:

// Input: digits = ""
// Output: []
// Example 3:

// Input: digits = "2"
// Output: ["a","b","c"]

// Constraints:

// 0 <= digits.length <= 4
// digits[i] is a digit in the range ['2', '9'].

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (digits.length === 0) return [];
  const getLetters = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };

  const res = [];

  function generateCombinations(curIndex, curStr) {
    if (curIndex === digits.length) {
      res.push(curStr);
      return;
    }
    const letters = getLetters[digits[curIndex]];
    for (const letter of letters) {
      generateCombinations(curIndex + 1, curStr + letter);
    }
  }

  generateCombinations(0, "");
  return res;
};

let testcase1 = "23";
let testcase2 = "854";
let testcase3 = "867";
//["tmp","tmq","tmr","tms","tnp","tnq","tnr","tns","top","toq","tor","tos","ump","umq","umr","ums","unp","unq","unr","uns","uop","uoq","uor","uos","vmp","vmq","vmr","vms","vnp","vnq","vnr","vns","vop","voq","vor","vos"]
//
console.log(letterCombinations(testcase1));
console.log(letterCombinations(testcase2));
console.log(letterCombinations(testcase3));
