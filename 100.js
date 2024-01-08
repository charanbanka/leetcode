/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
var isSameTree = function (p, q) {
  if (p && q) {
    if (p.val !== q.val) return false;
    let left = isSameTree(p.left, q.left);
    if (!left) return left;
    let right = isSameTree(p.right, q.right);
    if (!right) return right;
    return true;
  } else if (!p && !q) {
    return true;
  }
  return false;
};

let p = new TreeNode(1);
p.left = new TreeNode(2);
p.right = new TreeNode(3);

let res = isSameTree(p, p);
console.log("res", res);
