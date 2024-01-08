// 432. All O`one Data Structure
// Hard
// Topics
// Companies
// Design a data structure to store the strings' count with the ability to return the strings with minimum and maximum counts.

// Implement the AllOne class:

// AllOne() Initializes the object of the data structure.
// inc(String key) Increments the count of the string key by 1. If key does not exist in the data structure, insert it with count 1.
// dec(String key) Decrements the count of the string key by 1. If the count of key is 0 after the decrement, remove it from the data structure. It is guaranteed that key exists in the data structure before the decrement.
// getMaxKey() Returns one of the keys with the maximal count. If no element exists, return an empty string "".
// getMinKey() Returns one of the keys with the minimum count. If no element exists, return an empty string "".
// Note that each function must run in O(1) average time complexity.

// Example 1:

// Input
// ["AllOne", "inc", "inc", "getMaxKey", "getMinKey", "inc", "getMaxKey", "getMinKey"]
// [[], ["hello"], ["hello"], [], [], ["leet"], [], []]
// Output
// [null, null, null, "hello", "hello", null, "hello", "leet"]

// Explanation
// AllOne allOne = new AllOne();
// allOne.inc("hello");
// allOne.inc("hello");
// allOne.getMaxKey(); // return "hello"
// allOne.getMinKey(); // return "hello"
// allOne.inc("leet");
// allOne.getMaxKey(); // return "hello"
// allOne.getMinKey(); // return "leet"

// Constraints:

// 1 <= key.length <= 10
// key consists of lowercase English letters.
// It is guaranteed that for each call to dec, key is existing in the data structure.
// At most 5 * 104 calls will be made to inc, dec, getMaxKey, and getMinKey.

var AllOne = function () {
  this.minCount = 0;
  this.maxCount = 0;

  this.keyFreqMap = new Map();
  this.freqSetMap = new Map();
};

/**
 * @param {string} key
 * @return {void}
 */
AllOne.prototype.inc = function (key) {
  let count = this.keyFreqMap.get(key);
  let newMaxCount = count;
  let newMinCount = this.minCount;
  if (count) {
    let existing_set = this.freqSetMap.get(count);
    existing_set.delete(key);
    if (existing_set.size == 0) {
      this.freqSetMap.delete(count);
    } else {
      this.freqSetMap.set(count, existing_set);
    }
    if (existing_set.size == 0 && this.minCount == count)
      newMinCount = newMinCount + 1;

    let set = this.freqSetMap.get(count + 1) || new Set();
    set.add(key);
    this.freqSetMap.set(count + 1, set);

    this.keyFreqMap.set(key, count + 1);
    newMaxCount = count + 1;
  } else {
    //not exists in map then set new key value pair
    this.keyFreqMap.set(key, 1);
    let existing_set = this.freqSetMap.get(1) || new Set();
    existing_set.add(key);
    this.freqSetMap.set(1, existing_set);
    newMinCount = 1;
    newMaxCount = 1;
  }
  this.minCount = newMinCount;
  this.maxCount = Math.max(this.maxCount, newMaxCount);
  return null;
};

/**
 * @param {string} key
 * @return {void}
 */
AllOne.prototype.dec = function (key) {
  let count = this.keyFreqMap.get(key);
  if (count) {
    let existing_set = this.freqSetMap.get(count);
    existing_set.delete(key);
    if (existing_set.size == 0) {
      this.freqSetMap.delete(count);
    } else {
      this.freqSetMap.set(count, existing_set);
    }

    if (count == 1) {
      this.keyFreqMap.delete(key);
    } else {
      let set = this.freqSetMap.get(count - 1) || new Set();
      set.add(key);
      this.freqSetMap.set(count - 1, set);

      this.keyFreqMap.set(key, count - 1);
    }

    if (existing_set.size == 0 && this.maxCount == count) this.maxCount -= 1;
    if (existing_set.size == 0 && this.minCount == count) {
      let min = this.maxCount;

      for (let key of this.freqSetMap.keys()) {
        min = Math.min(min, key);
      }
      if (this.freqSetMap.size > 0) this.minCount = min;
    }
  }
  return null;
};

/**
 * @return {string}
 */
AllOne.prototype.getMaxKey = function () {
  let set = this.freqSetMap.get(this.maxCount) || new Set();
  let firstElement = "";
  for (let val of set) {
    firstElement = val;
    break;
  }
  return firstElement;
};

/**
 * @return {string}
 */
AllOne.prototype.getMinKey = function () {
  let set = this.freqSetMap.get(this.minCount) || new Set();
  let firstElement = "";

  for (let val of set) {
    firstElement = val;
    break;
  }
  return firstElement;
};

/**
 * Your AllOne object will be instantiated and called as such:
 * var obj = new AllOne()
 * obj.inc(key)
 * obj.dec(key)
 * var param_3 = obj.getMaxKey()
 * var param_4 = obj.getMinKey()
 */

function testcase(arr1, arr2, expected_op) {
  let result = [];
  let obj = null;
  for (let i in arr1) {
    if (arr1[i] == "AllOne") {
      obj = new AllOne();
      result.push(null);
    } else if (arr1[i] == "inc") {
      obj.inc(arr2[i][0]);
      result.push(null);
    } else if (arr1[i] == "dec") {
      obj.dec(arr2[i][0]);
      result.push(null);
    } else if (arr1[i] == "getMaxKey") {
      var param_2 = obj.getMaxKey();
      result.push(param_2);
    } else if (arr1[i] == "getMinKey") {
      var param_2 = obj.getMinKey();
      result.push(param_2);
    }
  }

  console.log(
    "result =>",
    JSON.stringify(result) === JSON.stringify(expected_op),
    result
  );
  return result;
}

let input1 = [
  "AllOne",
  "inc",
  "inc",
  "inc",
  "inc",
  "inc",
  "dec",
  "getMaxKey",
  "getMinKey",
  "inc",
  "inc",
  "inc",
  "getMaxKey",
  "getMinKey",
  "inc",
  "inc",
  "getMinKey",
];
let input2 = [
  [],
  ["hello"],
  ["hello"],
  ["world"],
  ["world"],
  ["hello"],
  ["world"],
  [],
  [],
  ["world"],
  ["world"],
  ["leet"],
  [],
  [],
  ["leet"],
  ["leet"],
  [],
];
let expected_op = [
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  "hello",
  "world",
  null,
  null,
  null,
  "world",
  "leet",
  null,
  null,
  "world",
];

testcase(input1, input2, expected_op);

input1 = [
  "AllOne",
  "inc",
  "inc",
  "inc",
  "inc",
  "inc",
  "dec",
  "dec",
  "getMaxKey",
  "getMinKey",
];
input2 = [[], ["a"], ["b"], ["b"], ["b"], ["b"], ["b"], ["a"], [], []];
expected_op = [null, null, null, null, null, null, null, null, "b", "b"];

testcase(input1, input2, expected_op);

input1 = [
  "AllOne",
  "inc",
  "inc",
  "inc",
  "inc",
  "inc",
  "dec",
  "dec",
  "getMaxKey",
  "getMinKey",
];
input2 = [[], ["a"], ["b"], ["b"], ["b"], ["b"], ["b"], ["b"], [], []];
expected_op = [null, null, null, null, null, null, null, null, "b", "a"];

testcase(input1, input2, expected_op);
