// 19. Remove Nth Node From End of List
// Medium
// Topics
// Companies
// Hint
// Given the head of a linked list, remove the nth node from the end of the list and return its head.

const { LinkedListLeet } = require("./Linked-List-LeetCode");

// Example 1:

// Input: head = [1,2,3,4,5], n = 2
// Output: [1,2,3,5]
// Example 2:

// Input: head = [1], n = 1
// Output: []
// Example 3:

// Input: head = [1,2], n = 1
// Output: [1]

// Constraints:

// The number of nodes in the list is sz.
// 1 <= sz <= 30
// 0 <= Node.val <= 100
// 1 <= n <= sz

// Follow up: Could you do this in one pass?

/**
 * Definition for singly-linked list.
 */
function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let currentNode = head;
  let count = 0;
  while (currentNode) {
    count += 1;
    currentNode = currentNode.next;
  }

  let temp = 0;
  let current = head;
  let previousNode = current;
  while (temp < count - n && current) {
    temp += 1;
    previousNode = current;
    current = current.next;
  }
  previousNode.next = current.next;
  if (count == 1 || temp == 0) head = current.next;
  return head;
};

let LinkedListHead = LinkedListLeet.LinkedListHead;
console.log(removeNthFromEnd(LinkedListHead([1,2,3,4,5]), 5));
console.log(removeNthFromEnd(LinkedListHead([1,2]), 1));
console.log(removeNthFromEnd(LinkedListHead([1,2]), 2));
console.log(removeNthFromEnd(LinkedListHead([1]), 1));
