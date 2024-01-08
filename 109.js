// 109. Convert Sorted List to Binary Search Tree
// Medium
// Topics
// Companies
// Given the head of a singly linked list where elements are sorted in ascending order, convert it to a
// height-balanced
//  binary search tree.

const { LinkedListLeet } = require("./Linked-List-LeetCode");

// Example 1:

// Input: head = [-10,-3,0,5,9]
// Output: [0,-3,9,-10,null,5]
// Explanation: One possible answer is [0,-3,9,-10,null,5], which represents the shown height balanced BST.
// Example 2:

// Input: head = []
// Output: []

// Constraints:

// The number of nodes in head is in the range [0, 2 * 104].
// -105 <= Node.val <= 105

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {ListNode} head
 * @return {TreeNode}
 */

// var sortedListToBST = function(head) {
//     if(head === null) return head;

//     function getHeight(node){
//         return node ? Math.max(getHeight(node.left),getHeight(node.right)) +1 : 0;
//     }

//     function getBalanceFactor(node){
//         return getHeight(node.left) - getHeight(node.right)
//     }

//     function rotateLeft(y){
//         let x = y.left;
//         let z = x.right;

//         x.right = y;
//         y.left = z

//         return x;
//     }

//     function rotateRight(x){
//         let y = x.right;
//         let z = y.left;

//         y.left = x
//         x.right = z;

//         return y;
//     }

//     function createAVLTree(root, val){
//         if(root === null) return new TreeNode(val);

//         if(val < root.val) root.left = createAVLTree(root.left, val)
//         else if(val > root.val) root.right = createAVLTree(root.right, val)
//         else return root;

//         let balance = getBalanceFactor(root)

//         //left heavy
//         if(balance >1 && val < root.left.val) return rotateLeft(root)

//         //right heavy
//         if(balance < -1 && val > root.right.val) return rotateRight(root)

//         //left right heavy
//         if(balance > 1 && val > root.left.val) {
//             root.left = rotateRight(root.left);
//             return rotateLeft(root)
//         }

//         //right left heavy
//         if(balance < -1 && val < root.right.val) {
//             root.right = rotateLeft(root.right);
//             return rotateRight(root)
//         }

//         return root;
//     }

//     let root = null;
//     let curNode = head;
//     while(curNode){
//         root = createAVLTree(root, curNode.val)
//         curNode = curNode.next
//     }

//     return root;
// };

var sortedListToBST = function (head) {
  const values = [];
  while (head) {
    values.push(head.val);
    head = head.next;
  }

  function createBST(start, end) {
    if (start > end) return null;

    let mid = Math.floor((start + end) / 2);
    let root = new TreeNode(values[mid]);

    root.left = createBST(start, mid - 1);
    root.right = createBST(mid + 1, end);

    return root;
  }

  return createBST(0, values.length-1)
};

let head = LinkedListLeet.LinkedListHead([-10, -3, 0, 5, 9]);
console.log("head=>", head);
LinkedListLeet.DisplayNodes(head);

console.log(sortedListToBST(head));
