// 25. Reverse Nodes in k-Group
// Hard
// Topics
// Companies
// Given the head of a linked list, reverse the nodes of the list k at a time, and return the modified list.

const { buyAndSellArray } = require("./Buy-And-Sell-Test-case");
const { LinkedListLeet } = require("./Linked-List-LeetCode");

// k is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of k then left-out nodes, in the end, should remain as it is.

// You may not alter the values in the list's nodes, only nodes themselves may be changed.

// Example 1:

// Input: head = [1,2,3,4,5], k = 2
// Output: [2,1,4,3,5]
// Example 2:

// Input: head = [1,2,3,4,5], k = 3
// Output: [3,2,1,4,5]

// Constraints:

// The number of nodes in the list is n.
// 1 <= k <= n <= 5000
// 0 <= Node.val <= 1000

// Follow-up: Can you solve the problem in O(1) extra memory space?

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
  if (!head) return head;
  else if (!head.next) return head;

  let curNode = head;
  let temp = [];
  let tempNode = new LinkedListLeet.ListNode();
  let tempHead = tempNode;
  while (curNode) {

    temp.push( new LinkedListLeet.ListNode(curNode.val));
    curNode = curNode.next;
    if (temp.length == k) {
      while (temp.length) {
        tempNode.next = temp.pop();
        tempNode = tempNode.next;
      }
      if (curNode) tempNode.next = curNode;
    }
  }
  return tempHead.next;
};

let LinkedListHead = LinkedListLeet.LinkedListHead;
let head = reverseKGroup(LinkedListHead([1, 2]), 2);
LinkedListLeet.DisplayNodes(head);

head = reverseKGroup(LinkedListHead([1, 2, 3, 4, 5]), 3);
LinkedListLeet.DisplayNodes(head);

head = reverseKGroup(LinkedListHead(buyAndSellArray.slice(0,5000)),10);
console.log("head",head)
// LinkedListLeet.DisplayNodes(head);

let ar = [9,83,1,4,5,6,11,234].sort((a,b)=>a-b)
console.log("ar",ar)
