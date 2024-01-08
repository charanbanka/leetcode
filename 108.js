// 108. Convert Sorted Array to Binary Search Tree
// Easy
// Topics
// Companies
// Given an integer array nums where the elements are sorted in ascending order, convert it to a
// height-balanced
//  binary search tree.

// Example 1:

// Input: nums = [-10,-3,0,5,9]
// Output: [0,-3,9,-10,null,5]
// Explanation: [0,-10,5,null,-3,null,9] is also accepted:

// Example 2:

// Input: nums = [1,3]
// Output: [3,1]
// Explanation: [1,null,3] and [3,1] are both height-balanced BSTs.

// Constraints:

// 1 <= nums.length <= 104
// -104 <= nums[i] <= 104
// nums is sorted in a strictly increasing order.

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
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  function getHeight(node) {
    return node ? Math.max(getHeight(node.left), getHeight(node.right)) + 1 : 0;
  }

  function getBalanceFactor(node) {
    return getHeight(node.left) - getHeight(node.right);
  }
  //rotation left
  function rotateLeft(x) {
    let y = x.left;
    let z = y.right;

    //rotation
    y.right = x;
    x.left = z;

    //update heights
    // updateHeight(x);
    // updateHeight(y);

    return y;
  }

  //rotation right
  function rotateRight(y) {
    let x = y.right;
    let z = x.left;

    //rotation
    x.left = y;
    y.right = z;

    //update heights
    // updateHeight(y);
    // updateHeight(x);

    return x;
  }

  function insertNodesIntoBST(root, val) {
    if (root === null) return new TreeNode(val);

    if (val < root.val) root.left = insertNodesIntoBST(root.left, val);
    else if (val > root.val) root.right = insertNodesIntoBST(root.right, val);
    else root;

    //update height
    // root.height = Math.max(getHeight(root.left), getHeight(root.right))+1

    //get balance factor
    let balance = getBalanceFactor(root);

    //left heavy
    if (balance > 1 && val < root.val) return rotateLeft(root);

    //right heavy
    if (balance < -1 && val > root.val) return rotateRight(root);

    //left right heavy
    if (balance > 1 && val > root.val) {
      root.left = rotateRight(root.left);
      return rotateLeft(root);
    }

    //right left heavy
    if (balance < -1 && val < root.val) {
      root.right = rotateLeft(root.right);
      return rotateRight(root);
    }

    return root;
  }

  let root = null;
  for (let num of nums) {
    root = insertNodesIntoBST(root, num);
  }
  return root;
};

sortedArrayToBST([-10, -3, 0, 5, 9]);
