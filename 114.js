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
 * @return {void} Do not return anything, modify root in-place instead.
 */
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
var flatten = function (root) {
  function preorder(node, result = []) {
    if (node) {
      result.push(node);
      if (node.left) preorder(node.left, result);
      if (node.right) preorder(node.right, result);
    }
    return result;
  }

  let list = preorder(root);
  console.log("list", list);
  if (list.length < 2) return root;

  root.left = null;
  let temp = root;
  for (let i = 1; i < list.length; i++) {
    let newnode = list[i];
    newnode.left = null;
    newnode.right = null;
    temp.right = newnode;
    temp = newnode;
  }

  return root;
};

let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(3);
root.right.left = new TreeNode(2);

let res = flatten(root);

console.log("res=>", res);
