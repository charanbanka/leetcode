// Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.

// Note that the same word in the dictionary may be reused multiple times in the segmentation.

// Example 1:

// Input: s = "leetcode", wordDict = ["leet","code"]
// Output: true
// Explanation: Return true because "leetcode" can be segmented as "leet code".
// Example 2:

// Input: s = "applepenapple", wordDict = ["apple","pen"]
// Output: true
// Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
// Note that you are allowed to reuse a dictionary word.
// Example 3:

// Input: s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]
// Output: false

// Constraints:

// 1 <= s.length <= 300
// 1 <= wordDict.length <= 1000
// 1 <= wordDict[i].length <= 20
// s and wordDict[i] consist of only lowercase English letters.
// All the strings of wordDict are unique

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
// var wordBreak = function (s, wordDict) {
//   if (!s) return false;
//   let map = new Map();

//   for (let word of wordDict) {
//     let len = word.length;
//     let temp_map = map.get(len) || new Map();
//     temp_map.set(word, true);
//     map.set(len, temp_map);
//   }

//   map = new Map([...map.entries()].sort((a,b)=>b[0]-a[0]))
//   console.log("map=>", map);
//   function valid_(str) {
//     let result = false;
//     for (let [key, value] of map) {
//       let new_str = str.slice(0, key);
//       if (value.get(new_str)) {
//         if (str == new_str) return true;
//         else {
//           let res = valid_(str.slice(key));
//           if (res) result = res;
//         }
//       }
//     }
//     return result;
//   }
//   return valid_(s);
// };
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  class TreeNode {
    constructor() {
      this.children = {};
      this.isEndOfWord = false;
    }
  }

  class Trie {
    constructor() {
      this.root = new TreeNode();
    }

    insert(word) {
      let node = this.root;
      for (let char of word) {
        if (!node.children[char]) node.children[char] = new TreeNode();
        node = node.children[char];
      }
      node.isEndOfWord = true;
    }

    searchBigWord(word, str = "", result = []) {
      let node = this.root;
      let len = word.length;
      for (let i = 0; i < len; i++) {
        let char = word[i];
        let res = false;
        if (node) {
          if (node.children[char]) {
            if (str) str = char;
            else str += " " + char;
          }
          if (node.isEndOfWord)
            res = this.searchBigWord(word.slice(i + 1, len));
          if (res) return true;
          node = node.children[char];
        }
      }
      return false;
    }
  }

  const trie = new Trie();
  for (let word of wordDict) trie.insert(word);
  return trie.searchBigWord(s);
};

let s = "leetcode";
let wordDict = ["leet", "code"];
let res = wordBreak(s, wordDict);

console.log(res);
