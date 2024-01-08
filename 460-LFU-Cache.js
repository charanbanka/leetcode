// 460. LFU Cache
// Hard
// Topics
// Companies
// Design and implement a data structure for a Least Frequently Used (LFU) cache.

const { new_array1 } = require("./result");
const { new_array2 } = require("./result2");

// Implement the LFUCache class:

// LFUCache(int capacity) Initializes the object with the capacity of the data structure.
// int get(int key) Gets the value of the key if the key exists in the cache. Otherwise, returns -1.
// void put(int key, int value) Update the value of the key if present, or inserts the key if not already present. When the cache reaches its capacity, it should invalidate and remove the least frequently used key before inserting a new item. For this problem, when there is a tie (i.e., two or more keys with the same frequency), the least recently used key would be invalidated.
// To determine the least frequently used key, a use counter is maintained for each key in the cache. The key with the smallest use counter is the least frequently used key.

// When a key is first inserted into the cache, its use counter is set to 1 (due to the put operation). The use counter for a key in the cache is incremented either a get or put operation is called on it.

// The functions get and put must each run in O(1) average time complexity.

// Example 1:

// Input
// ["LFUCache", "put", "put", "get", "put", "get", "get", "put", "get", "get", "get"]
// [[2], [1, 1], [2, 2], [1], [3, 3], [2], [3], [4, 4], [1], [3], [4]]
// Output
// [null, null, null, 1, null, -1, 3, null, -1, 3, 4]

// Explanation
// // cnt(x) = the use counter for key x
// // cache=[] will show the last used order for tiebreakers (leftmost element is  most recent)
// LFUCache lfu = new LFUCache(2);
// lfu.put(1, 1);   // cache=[1,_], cnt(1)=1
// lfu.put(2, 2);   // cache=[2,1], cnt(2)=1, cnt(1)=1
// lfu.get(1);      // return 1
//                  // cache=[1,2], cnt(2)=1, cnt(1)=2
// lfu.put(3, 3);   // 2 is the LFU key because cnt(2)=1 is the smallest, invalidate 2.
//                  // cache=[3,1], cnt(3)=1, cnt(1)=2
// lfu.get(2);      // return -1 (not found)
// lfu.get(3);      // return 3
//                  // cache=[3,1], cnt(3)=2, cnt(1)=2
// lfu.put(4, 4);   // Both 1 and 3 have the same cnt, but 1 is LRU, invalidate 1.
//                  // cache=[4,3], cnt(4)=1, cnt(3)=2
// lfu.get(1);      // return -1 (not found)
// lfu.get(3);      // return 3
//                  // cache=[3,4], cnt(4)=1, cnt(3)=3
// lfu.get(4);      // return 4
//                  // cache=[4,3], cnt(4)=2, cnt(3)=3

// Constraints:

// 1 <= capacity <= 104
// 0 <= key <= 105
// 0 <= value <= 109
// At most 2 * 105 calls will be made to get and put.

/**
 * @param {number} capacity
 */
var LFUCache = function (capacity) {
  this.capacity = capacity;
  this.minFrequency = 0;

  this.keyValueMap = new Map(); // { key: {value,freq}}
  this.freqMap = new Map(); // {freq: Node}
  this.addrMap = new Map(); // {key: Node addr}

  this.Node = function (val) {
    this.val = val == undefined ? null : val;
    this.next = null;
    this.prev = null;
  };

  this.addNode = function (head_tail, newNode) {
    let head = head_tail?.head || null;
    let tail = head_tail?.tail || null;
    if (tail) {
      tail.next = newNode;
      newNode.prev = tail;
      tail = newNode;
    } else {
      head = newNode;
      tail = newNode;
    }

    return { head, tail };
  };

  this.removeNode = function (head_tail, currentNode) {
    let head = head_tail?.head || null;
    let tail = head_tail?.tail || null;
    if (!head || !currentNode || (!currentNode?.next && !currentNode?.prev))
      return { head: null, tail: null };

    if (currentNode?.next && !currentNode?.prev) {
      head = currentNode.next;
      currentNode.next = null;
      head.prev = null;
    } else if (currentNode?.prev && !currentNode?.next) {
      tail = currentNode.prev;
      currentNode.prev = null;
      tail.next = null;
    } else if (currentNode.next && currentNode.prev) {
      currentNode.prev.next = currentNode.next;
      currentNode.next.prev = currentNode.prev;
      currentNode.next = null;
      currentNode.prev = null;
    } else {
      console.log("head tail fail");
    }
    return { head, tail };
  };
};

/**
 * @param {number} key
 * @return {number}
 */
LFUCache.prototype.get = function (key, newValue = null) {
  const key_value = this.keyValueMap.get(key);
  if (key_value) this.incrementKeyFreq(key);
  return key_value ? key_value.value : -1;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LFUCache.prototype.put = function (key, value) {
  const key_value = this.keyValueMap.get(key);
  if (key_value) {
    this.incrementKeyFreq(key, value);
    return null;
  }

  let count = this.keyValueMap.size || 0;
  if (count == this.capacity) this.removeLFU();

  let head_tail = this.freqMap.get(1);
  let newNode = new this.Node(key);
  let new_head_tail = this.addNode(head_tail, newNode);
  //increment freq respective key
  this.freqMap.set(1, new_head_tail);
  this.addrMap.set(key, newNode);
  this.keyValueMap.set(key, { value, freq: 1 });
  this.minFrequency = 1;
};

LFUCache.prototype.removeLFU = function () {
  let head_tail = this.freqMap.get(this.minFrequency);
  let lfu_key = head_tail?.head.val;

  //remove lfu
  let new_head_tail = this.removeNode(head_tail, head_tail.head);
  this.freqMap.set(this.minFrequency, new_head_tail);
  this.addrMap.delete(lfu_key);
  this.keyValueMap.delete(lfu_key);
};

/**
 * @param {number} key
 * @return {void}
 */
LFUCache.prototype.incrementKeyFreq = function (key, newValue = 0) {
  const key_value = this.keyValueMap.get(key);
  const curr_freq = key_value.freq;

  //remove in freqmap
  let head_tail_temp = this.freqMap.get(curr_freq);
  let currentNode = this.addrMap.get(key);
  let new_head_tail_temp = this.removeNode(head_tail_temp, currentNode);
  this.freqMap.set(curr_freq, new_head_tail_temp);
  this.addrMap.delete(key);
  this.keyValueMap.delete(key);
  if (
    this.minFrequency == 0 ||
    (new_head_tail_temp?.head == null && this.minFrequency == curr_freq)
  )
    this.minFrequency += 1;
  let head_tail = this.freqMap.get(curr_freq + 1);
  let newNode = new this.Node(key);
  let new_head_tail = this.addNode(head_tail, newNode);
  //increment freq respective key
  this.freqMap.set(curr_freq + 1, new_head_tail);
  this.addrMap.set(key, newNode);
  this.keyValueMap.set(key, {
    value: newValue ? newValue : key_value.value,
    freq: curr_freq + 1,
  });
};

/**
 * Your LFUCache object will be instantiated and called as such:
 * var obj = new LFUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

function testcase(arr1, arr2, expected_op) {
  let result = [];
  let obj = null;
  for (let i in arr1) {
    if (arr1[i] == "LFUCache") {
      obj = new LFUCache(arr2[i][0]);
      result.push(null);
    } else if (arr1[i] == "put") {
      obj.put(arr2[i][0], arr2[i][1]);
      result.push(null);
    } else if (arr1[i] == "get") {
      var param_2 = obj.get(arr2[i][0]);
      result.push(param_2);
    }
  }
//   console.log(JSON.stringify(array1) === JSON.stringify(array2));
  console.log("result =>", JSON.stringify(result) === JSON.stringify(expected_op), result);
  return result;
}

let test1_input1 = [
  "LFUCache",
  "put",
  "put",
  "get",
  "put",
  "get",
  "get",
  "put",
  "get",
  "get",
  "get",
];
let test1_input2 = [
  [2],
  [1, 1],
  [2, 2],
  [1],
  [3, 3],
  [2],
  [3],
  [4, 4],
  [1],
  [3],
  [4],
];

testcase(test1_input1, test1_input2);

let test2_input1 = [
  "LFUCache",
  "put",
  "put",
  "put",
  "put",
  "put",
  "get",
  "put",
  "get",
  "get",
  "put",
  "get",
  "put",
  "put",
  "put",
  "get",
  "put",
  "get",
  "get",
  "get",
  "get",
  "put",
  "put",
  "get",
  "get",
  "get",
  "put",
  "put",
  "get",
  "put",
  "get",
  "put",
  "get",
  "get",
  "get",
  "put",
  "put",
  "put",
  "get",
  "put",
  "get",
  "get",
  "put",
  "put",
  "get",
  "put",
  "put",
  "put",
  "put",
  "get",
  "put",
  "put",
  "get",
  "put",
  "put",
  "get",
  "put",
  "put",
  "put",
  "put",
  "put",
  "get",
  "put",
  "put",
  "get",
  "put",
  "get",
  "get",
  "get",
  "put",
  "get",
  "get",
  "put",
  "put",
  "put",
  "put",
  "get",
  "put",
  "put",
  "put",
  "put",
  "get",
  "get",
  "get",
  "put",
  "put",
  "put",
  "get",
  "put",
  "put",
  "put",
  "get",
  "put",
  "put",
  "put",
  "get",
  "get",
  "get",
  "put",
  "put",
  "put",
  "put",
  "get",
  "put",
  "put",
  "put",
  "put",
  "put",
  "put",
  "put",
];
let test2_input2 = [
  [10],
  [10, 13],
  [3, 17],
  [6, 11],
  [10, 5],
  [9, 10],
  [13],
  [2, 19],
  [2],
  [3],
  [5, 25],
  [8],
  [9, 22],
  [5, 5],
  [1, 30],
  [11],
  [9, 12],
  [7],
  [5],
  [8],
  [9],
  [4, 30],
  [9, 3],
  [9],
  [10],
  [10],
  [6, 14],
  [3, 1],
  [3],
  [10, 11],
  [8],
  [2, 14],
  [1],
  [5],
  [4],
  [11, 4],
  [12, 24],
  [5, 18],
  [13],
  [7, 23],
  [8],
  [12],
  [3, 27],
  [2, 12],
  [5],
  [2, 9],
  [13, 4],
  [8, 18],
  [1, 7],
  [6],
  [9, 29],
  [8, 21],
  [5],
  [6, 30],
  [1, 12],
  [10],
  [4, 15],
  [7, 22],
  [11, 26],
  [8, 17],
  [9, 29],
  [5],
  [3, 4],
  [11, 30],
  [12],
  [4, 29],
  [3],
  [9],
  [6],
  [3, 4],
  [1],
  [10],
  [3, 29],
  [10, 28],
  [1, 20],
  [11, 13],
  [3],
  [3, 12],
  [3, 8],
  [10, 9],
  [3, 26],
  [8],
  [7],
  [5],
  [13, 17],
  [2, 27],
  [11, 15],
  [12],
  [9, 19],
  [2, 15],
  [3, 16],
  [1],
  [12, 17],
  [9, 1],
  [6, 19],
  [4],
  [5],
  [5],
  [8, 1],
  [11, 7],
  [5, 2],
  [9, 28],
  [1],
  [2, 2],
  [7, 4],
  [4, 22],
  [7, 24],
  [9, 26],
  [13, 28],
  [11, 26],
];

let test2_expected_output = [null,null,null,null,null,null,-1,null,19,17,null,-1,null,null,null,-1,null,-1,5,-1,12,null,null,3,5,5,null,null,1,null,-1,null,30,5,30,null,null,null,-1,null,-1,24,null,null,18,null,null,null,null,14,null,null,18,null,null,11,null,null,null,null,null,18,null,null,-1,null,4,29,30,null,12,11,null,null,null,null,29,null,null,null,null,17,-1,18,null,null,null,-1,null,null,null,20,null,null,null,29,18,18,null,null,null,null,20,null,null,null,null,null,null,null]
//{10, 3, 6,9,2,5,1,4,12, 7}
testcase(test2_input1, test2_input2, test2_expected_output);

let test3_input1 = [
  "LFUCache",
  "put",
  "put",
  "get",
  "put",
  "get",
  "get",
  "put",
  "get",
  "put",
  "get",
  "get",
  "put",
  "get",
  "get",
  "get",
];
let test3_input2 = [
  [2],
  [1, 1],
  [2, 2],
  [1],
  [3, 3],
  [2],
  [3],
  [4, 4],
  [1],
  [4, 7],
  [3],
  [4],
  [3, 7],
  [5],
  [4],
  [3],
];

testcase(test3_input1, test3_input2);

test3_input1 = [
  "LFUCache",
  "put",
  "put",
  "get",
  "put",
  "get",
  "get",
  "put",
  "get",
  "put",
  "get",
  "get",
  "put",
  "get",
  "get",
  "get",
  "put",
  "get",
  "get",
  "get",
  "get",
  "get",
];
test3_input2 = [
  [6],
  [1, 1],
  [2, 2],
  [1],
  [3, 3],
  [2],
  [3],
  [4, 4],
  [1],
  [4, 7],
  [3],
  [4],
  [3, 29],
  [5],
  [4],
  [3],
  [1, 67],
  [1],
  [2],
  [3],
  [4],
  [5],
];
testcase(test3_input1, test3_input2);

// testcase(new_array1, new_array2);
