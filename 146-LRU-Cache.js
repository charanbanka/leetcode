// 146. LRU Cache
// Medium
// Topics
// Companies
// Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.

// Implement the LRUCache class:

// LRUCache(int capacity) Initialize the LRU cache with positive size capacity.
// int get(int key) Return the value of the key if the key exists, otherwise return -1.
// void put(int key, int value) Update the value of the key if the key exists. Otherwise, add the key-value pair to the cache. If the number of keys exceeds the capacity from this operation, evict the least recently used key.
// The functions get and put must each run in O(1) average time complexity.

// Example 1:

// Input
// ["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
// [[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
// Output
// [null, null, null, 1, null, -1, null, -1, 3, 4]

// Explanation
// LRUCache lRUCache = new LRUCache(2);
// lRUCache.put(1, 1); // cache is {1=1}
// lRUCache.put(2, 2); // cache is {1=1, 2=2}
// lRUCache.get(1);    // return 1
// lRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
// lRUCache.get(2);    // returns -1 (not found)
// lRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
// lRUCache.get(1);    // return -1 (not found)
// lRUCache.get(3);    // return 3
// lRUCache.get(4);    // return 4

// Constraints:

// 1 <= capacity <= 3000
// 0 <= key <= 104
// 0 <= value <= 105
// At most 2 * 105 calls will be made to get and put.

/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.capacity = capacity;
  this.cache = new Map();
  this.head = null;
  this.tail = null;

  this.Node = function (val, next) {
    this.val = val;
    this.next = null;
    this.prev = null;
  };
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  let currentNode = this.cache.get(key);
  let count = this.cache.size;
  if (currentNode) {
    let value = currentNode.val.value;
    if (count == 1) return value;
    if (!currentNode.next) {
      this.tail = currentNode.prev;
      currentNode.prev.next = null;
      currentNode.prev = null;
    } else if (!currentNode.prev) {
      return value;
    } else {
      currentNode.prev.next = currentNode.next;
      currentNode.prev.next.prev = currentNode.prev;

      currentNode.next = null;
      currentNode.prev = null;
    }
    if (count !== 1) {
      currentNode.next = this.head;
      this.head.prev = currentNode;
      this.head = currentNode;
    }
    return value;
  }

  return -1;
};

LRUCache.prototype.getCache = function () {
  console.log("data=>", this.head, this.cache.size);
  return;
  console.log("data=>", this.count, this.cache);
  console.log("node values=>");
  let currentNode = this.head;
  while (currentNode) {
    console.log(currentNode.val);
    currentNode = currentNode.next;
  }
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  let currentNodeByKey = this.cache.get(key);
  let count = this.cache.size;
  let newNode = new this.Node({ key, value });
  if (!currentNodeByKey) {
    if (count == this.capacity) {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
      let tailKey = this.tail.val.key;
      if (this.tail && this.tail.prev) {
        let prevoiusTail = this.tail.prev;
        this.tail.prev = null;
        prevoiusTail.next = null;
        this.tail = prevoiusTail;
      }
      this.cache.delete(tailKey);
    } else {
      if (count == 0) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
      }
    }
  } else {
    if (!currentNodeByKey.next && !currentNodeByKey.prev) {
      this.head = newNode;
      this.tail = newNode;
    } else if (!currentNodeByKey.next) {
      this.tail = currentNodeByKey.prev;
      currentNodeByKey.prev.next = null;
      currentNodeByKey.prev = null;
    } else if (!currentNodeByKey.prev) {
      this.head = currentNodeByKey.next;
      currentNodeByKey.next.prev = null;
      currentNodeByKey.next = null;
    } else {
      currentNodeByKey.prev.next = currentNodeByKey.next;
      currentNodeByKey.prev.next.prev = currentNodeByKey.prev;

      currentNodeByKey.next = null;
      currentNodeByKey.prev = null;
    }
    if (count !== 1) {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
  }
  this.cache.set(key, newNode);
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

function testcase(arr1, arr2) {
  let result = [];
  let obj = null;
  for (let i in arr1) {
    if (arr1[i] == "LRUCache") {
      obj = new LRUCache(arr2[i][0]);
      result.push(null);
    } else if (arr1[i] == "put") {
      obj.put(arr2[i][0], arr2[i][1]);
      result.push(null);
    } else if (arr1[i] == "get") {
      var param_2 = obj.get(arr2[i][0]);
      result.push(param_2);
    }
  }

  console.log("result =>", result);
  return result;
}

let test1_input1 = [
  "LRUCache",
  "put",
  "put",
  "get",
  "put",
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
  [4, 4],
  [1],
  [3],
  [4],
];

testcase(test1_input1, test1_input2);

//practise

function ListNode(val, left, right) {
  this.val = val;
  this.left = left;
  this.right = right;
}

var LRUCache = function (capacity) {
  this.capacity = capacity;
  this.cacheMap = new Map();
  this.head = null;
  this.tail = null;
};

LRUCache.prototype.put = function (key, value) {
  let existNode = this.cacheMap.get(key);
  if (existNode) {
    existNode.val.value = value;
    this.updateList(existNode);
  } else {
    let newNode = new ListNode({ key, value });
    cacheMap.set(key, newNode);
    let size = this.cacheMap.size;

    if (this.capacity === size) {
    } else {
    }
  }
};

LRUCache.prototype.get = function (key) {
  let existNode = this.cacheMap.get(key);
  if (existNode) {
    let value = existNode.val.value;
    this.updateList(existNode);
    return value;
  }
  return -1;
};

// [1,1]->[2,2]->[3,3]

LRUCache.prototype.updateList = function (currentNode) {
  if (currentNode === this.head) return; // no need update

  if (currentNode.left) currentNode.left.right = currentNode.right;
  if (currentNode.right) currentNode.rightleft = currentNode.left;

  if (currentNode === this.tail) this.tail = currentNode.left;

  currentNode.right = this.head;
  currentNode.left = null;
  if (this.head) this.head.left = currentNode;
  this.head = currentNode;
};
