// 1472. Design Browser History
// Medium
// Topics
// Companies
// Hint
// You have a browser of one tab where you start on the homepage and you can visit another url, get back in the history number of steps or move forward in the history number of steps.

// Implement the BrowserHistory class:

// BrowserHistory(string homepage) Initializes the object with the homepage of the browser.
// void visit(string url) Visits url from the current page. It clears up all the forward history.
// string back(int steps) Move steps back in history. If you can only return x steps in the history and steps > x, you will return only x steps. Return the current url after moving back in history at most steps.
// string forward(int steps) Move steps forward in history. If you can only forward x steps in the history and steps > x, you will forward only x steps. Return the current url after forwarding in history at most steps.

// Example:

// Input:
// ["BrowserHistory","visit","visit","visit","back","back","forward","visit","forward","back","back"]
// [["leetcode.com"],["google.com"],["facebook.com"],["youtube.com"],[1],[1],[1],["linkedin.com"],[2],[2],[7]]
// Output:
// [null,null,null,null,"facebook.com","google.com","facebook.com",null,"linkedin.com","google.com","leetcode.com"]

// Explanation:
// BrowserHistory browserHistory = new BrowserHistory("leetcode.com");
// browserHistory.visit("google.com");       // You are in "leetcode.com". Visit "google.com"
// browserHistory.visit("facebook.com");     // You are in "google.com". Visit "facebook.com"
// browserHistory.visit("youtube.com");      // You are in "facebook.com". Visit "youtube.com"
// browserHistory.back(1);                   // You are in "youtube.com", move back to "facebook.com" return "facebook.com"
// browserHistory.back(1);                   // You are in "facebook.com", move back to "google.com" return "google.com"
// browserHistory.forward(1);                // You are in "google.com", move forward to "facebook.com" return "facebook.com"
// browserHistory.visit("linkedin.com");     // You are in "facebook.com". Visit "linkedin.com"
// browserHistory.forward(2);                // You are in "linkedin.com", you cannot move forward any steps.
// browserHistory.back(2);                   // You are in "linkedin.com", move back two steps to "facebook.com" then to "google.com". return "google.com"
// browserHistory.back(7);                   // You are in "google.com", you can move back only one step to "leetcode.com". return "leetcode.com"

// Constraints:

// 1 <= homepage.length <= 20
// 1 <= url.length <= 20
// 1 <= steps <= 100
// homepage and url consist of  '.' or lower case English letters.
// At most 5000 calls will be made to visit, back, and forward.

/**
 * @param {string} homepage
 */
var BrowserHistory = function (homepage) {
  this.homepage = homepage;
  this.history = [];
  this.top = -1;
  this.stack_len = 0;

  this.Node = function (val, prev, next) {
    this.val = val === undefined ? null : val;
    this.next = next === undefined ? null : next;
    this.prev = prev === undefined ? null : prev;
  };
  let newNode = new this.Node(homepage);
  this.head = newNode;
  this.tail = newNode;
  this.history.push(newNode);
  this.top += 1;
  this.stack_len += 1;
};

/**
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function (url) {
  let newNode = new this.Node(url);

  let currentNode = this.history[this.top];
  if (currentNode.next) {
    currentNode.next.prev = null;
  }
  currentNode.next = newNode;
  newNode.prev = currentNode;
  this.tail = newNode;

  this.top += 1;
  this.history[this.top] = newNode;
  this.stack_len = this.top + 1;

  console.log("len=>", this.stack_len, this.history);
};

/**
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function (steps) {
  let currentTop = Math.max(0, this.top - steps);

  this.top = currentTop;
  let currentNode = this.history[currentTop];
  return currentNode.val;
};

/**
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function (steps) {
  let currentTop = Math.min(this.stack_len - 1, this.top + steps);

  this.top = currentTop;
  let currentNode = this.history[currentTop];
  return currentNode.val;
};

/**
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */

function testcase(arr1, arr2) {
  let result = [];
  let obj = null;
  for (let i in arr1) {
    if (arr1[i] == "BrowserHistory") {
      obj = new BrowserHistory(arr2[i][0]);
      result.push(null);
    } else if (arr1[i] == "visit") {
      obj.visit(arr2[i][0]);
      result.push(null);
    } else if (arr1[i] == "back") {
      var param_2 = obj.back(arr2[i][0]);
      result.push(param_2);
    } else if (arr1[i] == "forward") {
      var param_2 = obj.forward(arr2[i][0]);
      result.push(param_2);
    }
  }

  console.log("result =>", result);
  return result;
}

let input1 = [
  "BrowserHistory",
  "visit",
  "visit",
  "back",
  "visit",
  "forward",
  "visit",
  "visit",
  "forward",
  "visit",
  "back",
  "visit",
  "visit",
  "forward",
];
let input2 = [
  ["esgriv.com"],
  ["cgrt.com"],
  ["tip.com"],
  [9],
  ["kttzxgh.com"],
  [7],
  ["crqje.com"],
  ["iybch.com"],
  [5],
  ["uun.com"],
  [10],
  ["hci.com"],
  ["whula.com"],
  [10],
];

testcase(input1, input2);
// var obj = new BrowserHistory("homepage");
// obj.visit("google");
// obj.visit("facebook");

// var param_2 = obj.back(2);
// console.log(param_2);
// var param_3 = obj.forward(3);
// console.log(param_3);
