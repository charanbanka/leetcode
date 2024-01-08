// 24. Swap Nodes in Pairs
// Medium
// Topics
// Companies
// Given a linked list, swap every two adjacent nodes and return its head. You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)

const { buyAndSellArray } = require("./Buy-And-Sell-Test-case");
const { LinkedListLeet } = require("./Linked-List-LeetCode");

// Example 1:

// Input: head = [1,2,3,4]
// Output: [2,1,4,3]
// Example 2:

// Input: head = []
// Output: []
// Example 3:

// Input: head = [1]
// Output: [1]

// Constraints:

// The number of nodes in the list is in the range [0, 100].
// 0 <= Node.val <= 100

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// var swapPairs = function (head) {
//   let currentNode = head;
//   let previousNode = head;
//   let secondPreviousNode = head;
//   let count = 1;
//   while (currentNode) {
//     if (count % 2 == 0 && currentNode) {
//       secondPreviousNode.next = previousNode.next;
//       previousNode.next = currentNode.next;
//       currentNode.next = previousNode;

//       if (count == 2) head = currentNode;
//       currentNode = previousNode;
//     }
//     secondPreviousNode = previousNode;
//     previousNode = currentNode;
//     currentNode = currentNode.next;
//     count += 1;
//   }

//   return head;
// };

var swapPairs = function(head) {
    if (!head || !head.next) {
        // Base case: Return the head or null if there's no node or only one node
        return head;
    }

    // Store the next node to process (2nd node in the pair)
    const nextPairHead = head.next.next;

    // Swap the nodes in the pair
    const newHead = head.next;
    head.next.next = head;
    head.next = swapPairs(nextPairHead);  // Recur for the rest of the list

    return newHead;  // Return the new head of the swapped pair
};

let LinkedListHead = LinkedListLeet.LinkedListHead;
let head = swapPairs(LinkedListHead([1, 2, 3, 4, 5]));
LinkedListLeet.DisplayNodes(head);

head = swapPairs(LinkedListHead([3,4,6]));
LinkedListLeet.DisplayNodes(head);

// head = swapPairs(LinkedListHead(buyAndSellArray));
// LinkedListLeet.DisplayNodes(head);
