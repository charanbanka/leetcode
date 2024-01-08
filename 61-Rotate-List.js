// 61. Rotate List
// Medium
// Topics
// Companies
// Given the head of a linked list, rotate the list to the right by k places.

const { buyAndSellArray } = require("./Buy-And-Sell-Test-case");
const { LinkedListLeet } = require("./Linked-List-LeetCode");

// Example 1:

// Input: head = [1,2,3,4,5], k = 2
// Output: [4,5,1,2,3]
// Example 2:

// Input: head = [0,1,2], k = 4
// Output: [2,0,1]

// Constraints:

// The number of nodes in the list is in the range [0, 500].
// -100 <= Node.val <= 100
// 0 <= k <= 2 * 109

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
var rotateRight = function (head, k) {
  if (!head || !head.next  || k == 0) return head;

  let num_of_nodes = 0;
  let currentNode = head;
  let lastNode = head;
  while (currentNode) {
    lastNode = currentNode;
    currentNode = currentNode.next;
    num_of_nodes += 1;
  }

  k = k % num_of_nodes;
  if(k==0) return head;
  let previousNode = null;
  currentNode = head;
  let count = 1;
  while (count <= num_of_nodes - k) {
    previousNode = currentNode;
    currentNode = currentNode.next;
    count += 1;
  }
  lastNode.next = head;
  if (previousNode && previousNode.next) previousNode.next = null;
  head = currentNode;

  return head;
};

let LinkedListHead = LinkedListLeet.LinkedListHead;
let head = rotateRight(LinkedListHead([1, 2, 3, 4, 5]), 2);
LinkedListLeet.DisplayNodes(head);

head = rotateRight(LinkedListHead([1,2]), 2);
LinkedListLeet.DisplayNodes(head);

// head = rotateRight(LinkedListHead(buyAndSellArray));
// LinkedListLeet.DisplayNodes(head);
