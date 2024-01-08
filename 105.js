// 105. Construct Binary Tree from Preorder and Inorder Traversal
// Medium
// Topics
// Companies
// Given two integer arrays preorder and inorder where preorder is the preorder traversal of a binary tree and inorder is the inorder traversal of the same tree, construct and return the binary tree.

// Example 1:

// Input: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
// Output: [3,9,20,null,null,15,7]
// Example 2:

// Input: preorder = [-1], inorder = [-1]
// Output: [-1]

// Constraints:

// 1 <= preorder.length <= 3000
// inorder.length == preorder.length
// -3000 <= preorder[i], inorder[i] <= 3000
// preorder and inorder consist of unique values.
// Each value of inorder also appears in preorder.
// preorder is guaranteed to be the preorder traversal of the tree.
// inorder is guaranteed to be the inorder traversal of the tree.

/**
 * Definition for a binary tree node. */
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  function createTree(inStart, inEnd, preStart) {
    if (inStart >= inEnd) return null;
    let value = preorder[preStart];
    let root = new TreeNode(value);
    let rootIndex = inorder.indexOf(value, inStart);
    let leftSubtree = rootIndex - inStart;
    root.left = createTree(inStart, rootIndex, preStart + 1);
    root.right = createTree(rootIndex + 1, inEnd, preStart + leftSubtree + 1);
    return root;
  }

  let length = inorder.length;
  let res = createTree(0, length, 0);
  console.log("res=>", res);
  return res;
};

let preorder = [3, 9, 20, 15, 7];
let inorder = [9, 3, 15, 20, 7];
buildTree(preorder, inorder);

preorder = [3, 9, 12, 13, 15, 6, 7];
inorder = [12, 9, 13, 3, 6, 15, 7];
buildTree(preorder, inorder);

preorder = [-1];
inorder = [-1];
buildTree(preorder, inorder);

preorder = [1, 2];
inorder = [2, 1];
buildTree(preorder, inorder);

preorder = [1, 2];
inorder = [1, 2];
buildTree(preorder, inorder);

preorder = [3, 2, 1, 4];
inorder = [1, 2, 3, 4];
buildTree(preorder, inorder);
