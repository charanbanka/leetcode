// 30. Substring with Concatenation of All Words
// Hard
// Topics
// Companies
// You are given a string s and an array of strings words. All the strings of words are of the same length.

// A concatenated substring in s is a substring that contains all the strings of any permutation of words concatenated.

// For example, if words = ["ab","cd","ef"], then "abcdef", "abefcd", "cdabef", "cdefab", "efabcd", and "efcdab" are all concatenated strings. "acdbef" is not a concatenated substring because it is not the concatenation of any permutation of words.
// Return the starting indices of all the concatenated substrings in s. You can return the answer in any order.

// Example 1:

// Input: s = "barfoothefoobarman", words = ["foo","bar"]
// Output: [0,9]
// Explanation: Since words.length == 2 and words[i].length == 3, the concatenated substring has to be of length 6.
// The substring starting at 0 is "barfoo". It is the concatenation of ["bar","foo"] which is a permutation of words.
// The substring starting at 9 is "foobar". It is the concatenation of ["foo","bar"] which is a permutation of words.
// The output order does not matter. Returning [9,0] is fine too.
// Example 2:

// Input: s = "wordgoodgoodgoodbestword", words = ["word","good","best","word"]
// Output: []
// Explanation: Since words.length == 4 and words[i].length == 4, the concatenated substring has to be of length 16.
// There is no substring of length 16 in s that is equal to the concatenation of any permutation of words.
// We return an empty array.
// Example 3:

// Input: s = "barfoofoobarthefoobarman", words = ["bar","foo","the"]
// Output: [6,9,12]
// Explanation: Since words.length == 3 and words[i].length == 3, the concatenated substring has to be of length 9.
// The substring starting at 6 is "foobarthe". It is the concatenation of ["foo","bar","the"] which is a permutation of words.
// The substring starting at 9 is "barthefoo". It is the concatenation of ["bar","the","foo"] which is a permutation of words.
// The substring starting at 12 is "thefoobar". It is the concatenation of ["the","foo","bar"] which is a permutation of words.

// Constraints:

// 1 <= s.length <= 104
// 1 <= words.length <= 5000
// 1 <= words[i].length <= 30
// s and words[i] consist of lowercase English letters.

/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */

var findSubstring = function (s, words) {
  let result = [];
  let wordlen = words[0].length;
  let totalWords = words.length;
  let sub_str_len = wordlen * totalWords;
  let firstMap = new Map();
  for (let word of words) {
    let value = firstMap.get(word);
    value = value ? value + 1 : 1;
    firstMap.set(word, value);
  }

  function compareMaps(one, second) {
    if (one.size != second.size) return false;
    for (let [key, value] of one) {
      if (!second.has(key) || value !== second.get(key)) return false;
    }
    return true;
  }
  for (let i = 0; i < s.length; i++) {
    let sub_str = s.slice(i, sub_str_len + i);
    let secondMap = new Map();
    for (let j = 0; j < sub_str_len; j += wordlen) {
      let word = sub_str.slice(j, wordlen + j);
      let value = firstMap.get(word);
      if (value) {
        let secondValue = secondMap.get(word);
        secondValue = secondValue ? secondValue + 1 : 1;
        secondMap.set(word, secondValue);

        if (compareMaps(firstMap, secondMap)) {
          result.push(i);
          break;
        }
      } else {
        break;
      }
    }
  }

  return result;
};

let s1 = "barfoothefoobarman";
let testcase1 = ["foo", "bar"];
let s2 = "wordgoodgoodgoodbestword";
let testcase2 = ["word", "good", "best", "word"];
let s3 = "barfoofoobarthefoobarman";
let testcase3 = ["bar", "foo", "the"];
let s4 = "wordgoodgoodgoodbestword";
let testcase4 = ["word", "good", "best", "good"];
let s5 = "foobarfoobar";

console.log(findSubstring(s1, testcase1));
console.log(findSubstring(s2, testcase2));
console.log(findSubstring(s3, testcase3));
console.log(findSubstring(s4, testcase4)); //[8]
console.log(findSubstring(s5, testcase1)); //[0,3,6]
console.log(findSubstring("aaa", ["a","a"])); //[0,3,6]
console.log(findSubstring("aaaaaaaaaaaaaa", ["aa", "aa"]));

let str =
  "pjzkrkevzztxductzzxmxsvwjkxpvukmfjywwetvfnujhweiybwvvsrfequzkhossmootkmyxgjgfordrpapjuunmqnxxdrqrfgkrsjqbszgiqlcfnrpjlcwdrvbumtotzylshdvccdmsqoadfrpsvnwpizlwszrtyclhgilklydbmfhuywotjmktnwrfvizvnmfvvqfiokkdprznnnjycttprkxpuykhmpchiksyucbmtabiqkisgbhxngmhezrrqvayfsxauampdpxtafniiwfvdufhtwajrbkxtjzqjnfocdhekumttuqwovfjrgulhekcpjszyynadxhnttgmnxkduqmmyhzfnjhducesctufqbumxbamalqudeibljgbspeotkgvddcwgxidaiqcvgwykhbysjzlzfbupkqunuqtraxrlptivshhbihtsigtpipguhbhctcvubnhqipncyxfjebdnjyetnlnvmuxhzsdahkrscewabejifmxombiamxvauuitoltyymsarqcuuoezcbqpdaprxmsrickwpgwpsoplhugbikbkotzrtqkscekkgwjycfnvwfgdzogjzjvpcvixnsqsxacfwndzvrwrycwxrcismdhqapoojegggkocyrdtkzmiekhxoppctytvphjynrhtcvxcobxbcjjivtfjiwmduhzjokkbctweqtigwfhzorjlkpuuliaipbtfldinyetoybvugevwvhhhweejogrghllsouipabfafcxnhukcbtmxzshoyyufjhzadhrelweszbfgwpkzlwxkogyogutscvuhcllphshivnoteztpxsaoaacgxyaztuixhunrowzljqfqrahosheukhahhbiaxqzfmmwcjxountkevsvpbzjnilwpoermxrtlfroqoclexxisrdhvfsindffslyekrzwzqkpeocilatftymodgztjgybtyheqgcpwogdcjlnlesefgvimwbxcbzvaibspdjnrpqtyeilkcspknyylbwndvkffmzuriilxagyerjptbgeqgebiaqnvdubrtxibhvakcyotkfonmseszhczapxdlauexehhaireihxsplgdgmxfvaevrbadbwjbdrkfbbjjkgcztkcbwagtcnrtqryuqixtzhaakjlurnumzyovawrcjiwabuwretmdamfkxrgqgcdgbrdbnugzecbgyxxdqmisaqcyjkqrntxqmdrczxbebemcblftxplafnyoxqimkhcykwamvdsxjezkpgdpvopddptdfbprjustquhlazkjfluxrzopqdstulybnqvyknrchbphcarknnhhovweaqawdyxsqsqahkepluypwrzjegqtdoxfgzdkydeoxvrfhxusrujnmjzqrrlxglcmkiykldbiasnhrjbjekystzilrwkzhontwmehrfsrzfaqrbbxncphbzuuxeteshyrveamjsfiaharkcqxefghgceeixkdgkuboupxnwhnfigpkwnqdvzlydpidcljmflbccarbiegsmweklwngvygbqpescpeichmfidgsjmkvkofvkuehsmkkbocgejoiqcnafvuokelwuqsgkyoekaroptuvekfvmtxtqshcwsztkrzwrpabqrrhnlerxjojemcxel";
let words = [
  "dhvf",
  "sind",
  "ffsl",
  "yekr",
  "zwzq",
  "kpeo",
  "cila",
  "tfty",
  "modg",
  "ztjg",
  "ybty",
  "heqg",
  "cpwo",
  "gdcj",
  "lnle",
  "sefg",
  "vimw",
  "bxcb",
];
console.log(findSubstring(str, words));
