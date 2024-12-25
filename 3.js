/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (s.length <= 1) return s.length;
  let chars = new Map();

  let start = 0;
  let count = 0;
  let res = -Infinity;
  for (let end = 0; end < s.length; end++) {
    let key = s[end];
    if (chars.has(key)) {
      let index = chars.get(key);
      let temp = start;
      while (temp < index) {
        chars.delete(s[temp]);
        temp++;
      }
      if (start < index + 1) start = index + 1;

      chars.set(key,end)
    } else {
      console.log("st", start, end, key, res, chars);
      if (res < end - start + 1) res = end - start + 1;

      chars.set(key, end);
    }
  }

  return res === -Infinity ? 0 : res;
};

console.log(lengthOfLongestSubstring("bbtablud"));
