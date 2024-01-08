// 49. Group Anagrams
// Medium
// Topics
// Companies
// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:

// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
// Example 2:

// Input: strs = [""]
// Output: [[""]]
// Example 3:

// Input: strs = ["a"]
// Output: [["a"]]

// Constraints:

// 1 <= strs.length <= 104
// 0 <= strs[i].length <= 100
// strs[i] consists of lowercase English letters.

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  let map = new Map();

  for (let str of strs) {
    let str_sort = str.split("").sort().join("");
    let arr = map.get(str_sort) || [];
    arr.push(str);
    map.set(str_sort, arr);
  }

  let result = [];
  for (let key of map.keys()) {
    result.push(map.get(key));
  }
  return result;
};

let res = groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]);
console.log(res);

res = groupAnagrams(["a"]);
console.log(res);
