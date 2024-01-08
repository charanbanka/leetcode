// 106. Construct Binary Tree from Inorder and Postorder Traversal
// Medium
// Topics
// Companies
// Given two integer arrays inorder and postorder where inorder is the inorder traversal of a binary tree and postorder is the postorder traversal of the same tree, construct and return the binary tree.

// Example 1:

// Input: inorder = [9,3,15,20,7], postorder = [9,15,7,20,3]
// Output: [3,9,20,null,null,15,7]
// Example 2:

// Input: inorder = [-1], postorder = [-1]
// Output: [-1]

// Constraints:

// 1 <= inorder.length <= 3000
// postorder.length == inorder.length
// -3000 <= inorder[i], postorder[i] <= 3000
// inorder and postorder consist of unique values.
// Each value of postorder also appears in inorder.
// inorder is guaranteed to be the inorder traversal of the tree.
// postorder is guaranteed to be the postorder traversal of the tree.

/**
 * Definition for a binary tree node.

 */
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
  function createTree(inStart, inEnd, postInd) {
    if (inStart >= inEnd || postInd<0) return null;
    let value = postorder[postInd];
    let root = new TreeNode(value);
    let rootIndex = inorder.indexOf(value);

    root.left = createTree(
      inStart,
      rootIndex,
      postInd - (inEnd - rootIndex -1) - 1
    );
    root.right = createTree(rootIndex + 1, inEnd, postInd - 1);
    return root;
  }
  return createTree(0, inorder.length, inorder.length - 1);
};

let inorder = [9, 3, 15, 20, 7];
let postorder = [9, 15, 7, 20, 3];
console.log(buildTree(inorder, postorder));
