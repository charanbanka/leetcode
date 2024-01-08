/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function (s, wordDict) {

  let result = [];
  function solve(s, pos, words = []) {
    if (wordDict.includes(s)) return result.push(s)
    if (pos == s.length) return result.push(words.join(" "));

    for (let i = pos; i < s.length; i++) {
      let substr = s.substring(pos, i + 1);
      if (wordDict.includes(substr)) {
        let res = [...words, substr];

        solve(s, i + 1, res);
      }
    }
    return;
  }

  solve(s, 0, "");
  return result;
};



let s = "pineapplepenapple",
  wordDict = ["apple", "pen", "applepen", "pine", "pineapple"];

console.log(wordBreak("a", ["a"]),[1]);
