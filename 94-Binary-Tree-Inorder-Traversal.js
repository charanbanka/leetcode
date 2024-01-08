// 94. Binary Tree Inorder Traversal
// Easy
// Topics
// Companies
// Given the root of a binary tree, return the inorder traversal of its nodes' values.

const { BinaryTree } = require("./binary-search-tree");

// Example 1:

// Input: root = [1,null,2,3]
// Output: [1,3,2]
// Example 2:

// Input: root = []
// Output: []
// Example 3:

// Input: root = [1]
// Output: [1]

// Constraints:

// The number of nodes in the tree is in the range [0, 100].
// -100 <= Node.val <= 100

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  function inOrder(node, result = []) {
    if (node) {
      inOrder(node.left, result);
      result.push(node.val);
      inOrder(node.right, result);
    }
  }

  return inOrder(root, []);
};

let root = BinaryTree.contructBinaryTree([1, 2, 3]);
inorderTraversal(root);
