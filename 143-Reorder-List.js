// 143. Reorder List
// Medium
// Topics
// Companies
// You are given the head of a singly linked-list. The list can be represented as:

const { LinkedListLeet } = require("./Linked-List-LeetCode");

// L0 → L1 → … → Ln - 1 → Ln
// Reorder the list to be on the following form:

// L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
// You may not modify the values in the list's nodes. Only nodes themselves may be changed.

// Example 1:

// Input: head = [1,2,3,4]
// Output: [1,4,2,3]
// Example 2:

// Input: head = [1,2,3,4,5]
// Output: [1,5,2,4,3]

// Constraints:

// The number of nodes in the list is in the range [1, 5 * 104].
// 1 <= Node.val <= 1000
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
  if (!head || !head.next || !head.next.next) return head;
  // let curNode = head;
  // let stack = [];
  // while (curNode) {
  //   stack.push(curNode);
  //   curNode = curNode.next;
  // }
  // let len = stack.length;
  // if (len < 3) return head;

  // curNode = null;
  // for (let i = 0, j = len - 1; i <= j; i++, j--) {
  //   let firstNode = stack[i];
  //   let lastNode = stack[j];
  //   if (i == j) {
  //     curNode.next = firstNode;
  //     firstNode.next = null;
  //   } else if (i == 0) {
  //     curNode = firstNode;
  //     firstNode.next = lastNode;
  //     lastNode.next = null;
  //     curNode = lastNode;
  //   } else {
  //     curNode.next = firstNode;
  //     firstNode.next = lastNode;
  //     lastNode.next = null;
  //     curNode = lastNode;
  //   }
  // }

  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let stack = [];
  let cur = slow.next;
  slow.next = null; //remove link
  while (cur) {
    stack.push(cur);
    cur = cur.next;
  }

  cur = head;
  while (stack.length) {
    let nextNode = cur.next;

    let top = stack.pop();
    cur.next = top;
    top.next = nextNode;
    cur = nextNode;
  }
  console.log(head);
  return head;
};

let LinkedListHead = LinkedListLeet.LinkedListHead;

let head = reorderList(LinkedListHead([1, 2, 3, 4, 5]));
LinkedListLeet.DisplayNodes(head);

head = reorderList(LinkedListHead([]));
LinkedListLeet.DisplayNodes(head);
